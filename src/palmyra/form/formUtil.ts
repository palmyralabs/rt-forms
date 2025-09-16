import { RefObject } from "react";
import { IForm } from "./types";

const getSaveFormHandle = (saveData: any, formRef: RefObject<IForm>, refresh?: any) => {
    return {
        saveData,
        refresh,
        getData() {
            if (formRef.current)
                return formRef.current.getData();
        },
        setData(d: any) {
            if (formRef.current)
                return formRef.current.setData(d);
            else
                throw new Error('formRef.current is null');
        },
        isValid() {
            if (formRef.current)
                return formRef.current.isValid();
            else
                throw new Error('formRef.current is null');
        }
    }
};

export { getSaveFormHandle }