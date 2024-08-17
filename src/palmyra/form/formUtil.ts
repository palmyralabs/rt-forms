import { MutableRefObject } from "react";
import { IForm, ISaveForm } from "./types";

const getSaveFormHandle = (saveData: any, formRef: MutableRefObject<IForm>): ISaveForm => {
    return {
        saveData,
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