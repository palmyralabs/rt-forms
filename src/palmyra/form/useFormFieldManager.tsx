import { useContext, useRef, useState } from "react";
import { FieldDefinition } from "./typesWidgetOptions";
import { IFormFieldManager, IFormManager } from "./types";
import { BiConsumer, getValueByKey, hasDot, IConsumer, IFunction, setValueByKey } from "@palmyralabs/ts-utils";
import { FormManagerContext } from "./formBase";

interface IFormFieldManagerOptions {
    name: string
}

const useFormFieldManager = (p: IFormFieldManagerOptions): IFormFieldManager => {

    const fieldsRef = useRef<Record<string, FieldDefinition>>({})

    const formManager: IFormManager = useContext(FormManagerContext);

    const initialData = formManager.getData() || {};

    const [data, setData] = useState<any>(initialData);

    const registerField: IConsumer<FieldDefinition> = (p: FieldDefinition) => {
        fieldsRef.current[p.attribute] = p;
    }

    const getName = () => {
        return p.name;
    }

    const getField = () => {

    }

    const getData = () => {
        return data;
    }

    const getFieldData: IFunction<string, any> = (key: string) => {
        return getValueByKey(key, data);
    }

    const setFieldData: BiConsumer<string, any> = (key: string, value: any) => {
        if (hasDot(key)) {

        } else {
            setData((d) => {
                return {...d, [key]:value}
            });
        }
    }

    const isValid = () => {
        return true;
    }

    return { registerField, getData, setData, getName, getFieldData, setFieldData, isValid }
}

export { useFormFieldManager }
export type { IFormFieldManagerOptions }