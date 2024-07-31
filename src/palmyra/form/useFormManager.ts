import { useRef } from "react";
import { IFormFieldManager, IFormManager, IFormOptions } from "./types"

const useFormManager = (props: IFormOptions): IFormManager => {
    const dataRef = useRef<any>(props.formData || {});
    const fieldManagersRef = useRef<Record<string, IFormFieldManager>>({})

    const getData = () => {
        var result = dataRef.current || {};
        Object.values(fieldManagersRef.current).every((fm:IFormFieldManager) => {
            result = {...result, ...fm.getData()}
            return true;
        })
        return result;
    }

    const setFieldData = (key: string, v: any) => {

    }

    const setData = (d: any) => {
        dataRef.current = d;
    }

    const isValid = () => {
        return true;
    }

    const hasField = (key: string) => {
        return true;
    }

    const registerFieldManager = (fm: IFormFieldManager) => {
        const fieldManagers = fieldManagersRef.current;
        fieldManagers[fm.getName()] = fm;
    }

    return { getData, isValid, setFieldData, setData, registerFieldManager };
}

export { useFormManager }