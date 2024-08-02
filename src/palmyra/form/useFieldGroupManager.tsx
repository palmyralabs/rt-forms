import { useContext, useEffect, useRef } from "react";
import { IFieldGroupManager, IFieldGroupOptions, IFieldManager, IFormManager } from "./types";
import { BiConsumer, getValueByKey, hasDot, IFunction, setValueByKey } from "@palmyralabs/ts-utils";
import { FormManagerContext } from "./formContext";
import { FieldOptions } from "./typesFieldOptions";

const useFieldGroupManager = (p: IFieldGroupOptions): IFieldGroupManager => {
    const formManager: IFormManager = useContext(FormManagerContext);
    return registerFieldGroupManager(p, formManager);
}

const registerFieldGroupManager = (p: IFieldGroupOptions, formManager: IFormManager): IFieldGroupManager => {
    const name = p.name || '_default';
    const fieldGroupManager: IFieldGroupManager = createFieldGroupManager({ name }, formManager);
    formManager.registerFieldGroupManager(fieldGroupManager);
    return fieldGroupManager;
}

const createFieldGroupManager = (p: IFieldGroupOptions, formManager: IFormManager): IFieldGroupManager => {

    const fieldsRef = useRef<Record<string, { options: FieldOptions, field: IFieldManager }>>({});
    const initialData = formManager.getData() || {};
    const dataRef = useRef<any>(initialData);

    const data = dataRef.current;
    const errorRef = useRef<Record<string, Boolean>>({});

    const getFieldData: IFunction<string, any> = (key: string) => {
        return getValueByKey(key, dataRef.current);
    }

    const getName = () => {
        return p.name;
    }

    useEffect(() => {
        const fields = fieldsRef.current || {};

        Object.keys(fields).every((key: string) => {
            const fieldManager = fields[key].field;
            const accessor = fieldManager.valueAccessor;
            fieldManager.setValue(accessor(data));
            return true;
        })

    }, [data]);

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

    const setFieldValidity = (key: string, v: boolean) => {
        errorRef.current[key] = v;
    }

    const setFieldData: BiConsumer<string, any> = (key: string, value: any) => {
        if (hasDot(key)) {
            setValueByKey(key, data, value);
        } else {
            data[key] = value;
        }
    }

    const isValid = () => {
        return true;
    }

    const registerFieldManager = (fieldManager: IFieldManager, options: FieldOptions) => {
        fieldsRef.current[options.attribute] = { field: fieldManager, options }
    }

    const setData = (data: any) => {
        dataRef.current = data;

        const fields = fieldsRef.current || {};

        Object.keys(fields).every((key: string) => {
            const fieldManager = fields[key].field;
            const accessor = fieldManager.valueAccessor;
            fieldManager.setValue(accessor(data));
            return true;
        })
    }

    const fieldGroupManager: IFieldGroupManager = {
        data, setData, getName, getFieldGroupData, registerFieldManager,
        getFieldData, setFieldData, setFieldValidity, isValid
    }

    return fieldGroupManager;
}


export { useFieldGroupManager, registerFieldGroupManager }
export type { IFieldGroupOptions }