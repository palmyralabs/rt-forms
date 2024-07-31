import { useContext, useRef, useState } from "react";
import { FieldDefinition } from "./typesWidgetOptions";
import { IFieldGroupManager, IFormManager } from "./types";
import { BiConsumer, getValueByKey, hasDot, IConsumer, IFunction, setValueByKey } from "@palmyralabs/ts-utils";
import { FormManagerContext } from "./formBase";

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
    
    const fieldsRef = useRef<Record<string, FieldDefinition>>({});
    const initialData = formManager.getData() || {};
    const [data, setData] = useState<any>(initialData);

    const registerField: IConsumer<FieldDefinition> = (p: FieldDefinition) => {
        fieldsRef.current[p.attribute] = p;
    }

    const getName = () => {
        return p.name;
    }

    const getData = () => {
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

    const getFieldData: IFunction<string, any> = (key: string) => {
        return getValueByKey(key, data);
    }

    const setFieldData: BiConsumer<string, any> = (key: string, value: any) => {
        if (hasDot(key)) {
            setData((d) => {
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

    return { registerField, getData, setData, getName, getFieldData, setFieldData, isValid }
}


export { useFieldGroupManager, registerFieldGroupManager }
export type { IFormFieldManagerOptions }