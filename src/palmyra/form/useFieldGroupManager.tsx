import { useContext, useEffect, useRef, useState } from "react";
import { IFieldCustomizer, IFieldGroupManager, IFieldManager, IFormFieldError, IFormManager } from "./types";
import { BiConsumer, getValueByKey, hasDot, IFunction, setValueByKey } from "@palmyralabs/ts-utils";
import { FormManagerContext } from "./formContext";
import { FieldOptions } from "./typesFieldOptions";
import { createFieldManager } from "./createFieldManager";

interface IFormFieldManagerOptions {
    name: string
}

const useFieldGroupManager = (p: IFormFieldManagerOptions): IFieldGroupManager => {
    const formManager: IFormManager = useContext(FormManagerContext);
    return registerFieldGroupManager(p, formManager);
}

const registerFieldGroupManager = (p: IFormFieldManagerOptions, formManager: IFormManager): IFieldGroupManager => {
    const name = p.name || '_default';
    const fieldGroupManager: IFieldGroupManager = createFieldGroupManager({ name }, formManager);
    formManager.registerFieldGroupManager(fieldGroupManager);
    return fieldGroupManager;
}

const createFieldGroupManager = (p: IFormFieldManagerOptions, formManager: IFormManager): IFieldGroupManager => {

    const fieldsRef = useRef<Record<string, { options: FieldOptions, field: IFieldManager }>>({});
    const initialData = formManager.getData() || {};
    const [data, setData] = useState<any>(initialData);

    const getError = () => {
        const error = {};
        for (const attribute in fieldsRef.current) {
            const fieldManager = fieldsRef.current[attribute].field;
            const validator = fieldManager.getValidator();
            if (validator) {
                error[attribute] = validator(getFieldData(attribute));
            }
        }
        return error;
    }

    const getFieldData: IFunction<string, any> = (key: string) => {
        return getValueByKey(key, data);
    }

    const errorRef = useRef<any>(getError());

    const getName = () => {
        return p.name;
    }

    useEffect(() => {
        refreshError();
    }, [data]);

    const refreshError = () => {
        errorRef.current = getError();
    }

    const getFieldGroupData = () => {
        var result = {};
        Object.keys(fieldsRef.current).every((key: string) => {
            if (hasDot(key)) {
                setValueByKey(key, result, getValueByKey(key, data));
            } else {
                setValueByKey(key, result, getValueByKey(key, data));
            }
            return true;
        })
        return result;
    }

    const getFieldError: IFunction<string, IFormFieldError> = (key: string) => {
        const e = errorRef.current[key];
        if (e)
            return e;
        else
            return { message: '', status: false };
    }

    const setFieldError = (key: string, v: IFormFieldError) => {
        errorRef.current[key] = v;
    }

    const setFieldData: BiConsumer<string, any> = (key: string, value: any) => {
        if (hasDot(key)) {
            setData((d: any) => {
                setValueByKey(key, d, value);
                return { ...d }
            });
        } else {
            setData((d) => {
                return { ...d, [key]: value }
            });
        }
    }

    const isValid = () => {
        return true;
    }

    const fieldGroupManager: any = {
        data, setData, getName, getFieldGroupData,
        getFieldData, setFieldData, getFieldError, setFieldError, isValid
    }

    const registerField: IFunction<FieldOptions, IFieldManager> = (p: FieldOptions, customizer?: IFieldCustomizer) => {
        const fieldManager = createFieldManager(fieldGroupManager, p, customizer);
        fieldsRef.current[p.attribute] = { field: fieldManager, options: p }
        return fieldManager
    }

    fieldGroupManager.registerField = registerField;

    return fieldGroupManager;

}


export { useFieldGroupManager, registerFieldGroupManager }
export type { IFormFieldManagerOptions }