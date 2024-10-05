import { MutableRefObject } from "react";
import { IForm } from "./types";

const getSaveFormHandle = (saveData: any, formRef: MutableRefObject<IForm>, refresh?: any) => {
    return {
        saveData,
        refresh(){
            if (formRef.current)
                return formRef.current.getData();
        },
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