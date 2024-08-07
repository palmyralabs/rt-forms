import { useContext, useEffect, useRef } from "react";
import { IFieldGroupManager, IFieldGroupOptions, IFieldManager, IFormManager } from "../types";
import { BiConsumer, getValueByKey, IFunction } from "@palmyralabs/ts-utils";
import { FormManagerContext } from "../formContext";
import { FieldOptions } from "../typesFieldOptions";
import { useValidityTracker } from "../useValidityTracker";


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

const assignChildrenData = (fields: Record<string, { options: FieldOptions, field: IFieldManager }>,
    data: any) => {

    Object.keys(fields).every((key: string) => {
        const fieldManager = fields[key].field;
        const accessor = fieldManager.valueAccessor;
        fieldManager.setValue(accessor(data), false, false);
        return true;
    });
}

const createFieldGroupManager = (p: IFieldGroupOptions, formManager: IFormManager): IFieldGroupManager => {

    const fieldsRef = useRef<Record<string, { options: FieldOptions, field: IFieldManager }>>({});
    const initialData = formManager.getPropsData() || {};
    const dataRef = useRef<any>(initialData);

    const data = dataRef.current;

    const { isValid, setValidity } = useValidityTracker((v: boolean) => { formManager.setFieldGroupValid(getName(), v) });

    useEffect(() => {
        assignChildrenData(fieldsRef.current, data);
    }, [data]);

    const getFieldData: IFunction<string, any> = (key: string) => {
        return getValueByKey(key, dataRef.current);
    }

    const getName = () => {
        return p.name;
    }

    const getFieldGroupData = () => {
        var result = {};
        const fields = fieldsRef.current;

        Object.keys(fields).every((key: string) => {
            const fieldManager = fields[key].field;
            fieldManager.valueWriter(result, fieldManager.getValue())
            return true;
        })
        return result;
    }

    const setFieldData: BiConsumer<string, any> = (key: string, value: any) => {
        const fieldManager = fieldsRef.current[key]?.field;
        if (fieldManager) {
            fieldManager.valueWriter(data, value);
        }
    }

    const registerFieldManager = (fieldManager: IFieldManager, options: FieldOptions) => {
        fieldsRef.current[options.attribute] = { field: fieldManager, options }
        const fieldValid = fieldManager.isValid();
        setValidity(options.attribute, fieldValid);
    }

    const setData = (data: any) => {
        dataRef.current = data;
        assignChildrenData(fieldsRef.current, data);
    }

    const fieldGroupManager: IFieldGroupManager = {
        setData, getName, getFieldGroupData, registerFieldManager,
        getFieldData, setFieldData, setFieldValidity: setValidity, isValid
    }

    return fieldGroupManager;
}


export { useFieldGroupManager, registerFieldGroupManager }
export type { IFieldGroupOptions }