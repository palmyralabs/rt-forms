import { useRef } from "react";
import { IFieldGroupManager, IFieldGroupOptions, IFieldManager, IFormManager, IFormOptions } from "../types";
import { useValidityTracker } from "./useValidityTracker";
import { BiConsumer, IFunction } from "@palmyralabs/ts-utils";
import { FieldOptions } from "../typesFieldOptions";

const useFormManager = (props: IFormOptions): IFormManager => {
    const dataRef = useRef<any>(props.formData || {});
    const dirtyDataRef = useRef<any>({});
    const validityListener = props.onValidChange || ((v) => { console.log(v) });

    const fieldGroupsRef = useRef<Record<string, IFieldGroupManager>>({})
    const { isValid, setValidity } = useValidityTracker((v: boolean) => { validityListener(v) }, 200);

    const getData = () => {
        return { ...dataRef.current, ...dirtyDataRef.current }
    }

    const getPropsData = () => {
        return dataRef.current;
    }

    const reset = () => {
        const d = getData();
        const fieldGroups = fieldGroupsRef.current;
        for (const key in fieldGroups) {
            const fieldManager = fieldGroups[key];
            fieldManager.setData(d);
        }
    }

    const setData = (d: any) => {
        const fieldGroups = fieldGroupsRef.current;
        for (const key in fieldGroups) {
            const fieldManager = fieldGroups[key];
            fieldManager.setData(d);
        }
        dataRef.current = d;
    }

    const getFieldGroupManager: IFunction<string, IFieldGroupManager> = (fieldGroup: string) => {
        return fieldGroupsRef.current[fieldGroup];
    }

    const registerFieldGroupManager = (p: IFieldGroupOptions) => {
        const fieldGroups = fieldGroupsRef.current;
        const fieldGroup = createFieldGroupManager(p);
        fieldGroups[p.name] = fieldGroup;
        return fieldGroup;
    }

    const createFieldGroupManager = (p: IFieldGroupOptions): IFieldGroupManager => {

        const fieldsRef = useRef<Record<string, { options: FieldOptions, field: IFieldManager }>>({});
        const validTracker = useValidityTracker((v: boolean) => { setValidity(getName(), v) });

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
                fieldManager.valueWriter(dirtyDataRef.current, value);
            }
        }

        const hasField = (attribute: string) => {
            return fieldsRef.current[attribute] != undefined;
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

        const getFieldRawData = (accessor: (d: any) => any) => {
            var v = accessor(dirtyDataRef.current);
            return (undefined == v) ? accessor(dataRef.current) : v;
        }

        const fieldGroupManager: IFieldGroupManager = {
            setData, getName, getFieldGroupData, registerFieldManager, hasField, getFieldRawData,
            setFieldData, setFieldValidity: validTracker.setValidity, isValid: validTracker.isValid
        }

        return fieldGroupManager;
    }

    return {
        getData, getPropsData, isValid, reset,
        setData, registerFieldGroupManager, getFieldGroupManager
    };
}

const assignChildrenData = (fields: Record<string, { options: FieldOptions, field: IFieldManager }>,
    data: any) => {

    Object.keys(fields).every((key: string) => {
        const fieldManager = fields[key].field;
        const accessor = fieldManager.valueAccessor;
        // @ts-ignore
        fieldManager.setValue(accessor(data), false, false, true);
        return true;
    });
}


export { useFormManager }