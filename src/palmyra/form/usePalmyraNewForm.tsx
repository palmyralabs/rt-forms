
import { IEndPoint, StoreFactory } from "@palmyralabs/palmyra-wire";
import { MutableRefObject, useRef, useState } from "react";
import { IFormListener } from "./types";
import { NoopFormListener } from "./Noops";

interface IPalmyraNewFormInput {
    storeFactory: StoreFactory<any>,
    endPoint: IEndPoint,
    idKey?: string,
    initialData?: any,
    formListener?: IFormListener
}

interface IPalmyraNewFormOutput {
    data: FormData,
    saveData: (data?: any) => Promise<any>,
    formRef: MutableRefObject<any>
}

type IusePalmyraNewForm = (props: IPalmyraNewFormInput) => IPalmyraNewFormOutput;

const usePalmyraNewForm: IusePalmyraNewForm = (props: IPalmyraNewFormInput): IPalmyraNewFormOutput => {
    const storeFactory = props.storeFactory;
    const [data, setData] = useState<any>(props.initialData == undefined ? null : props.initialData);
    const formRef = useRef<any>(null);
    const formListener = props.formListener || NoopFormListener;

    const saveData = (d?: any): Promise<any> => {
        if (d || (formRef && formRef.current)) {
            const idProperty = props.idKey;
            var endPoint = props.endPoint
            const formStore = storeFactory.getFormStore({}, endPoint, idProperty);
            
            const data = d || formRef.current.getData();
            const processedData = formListener.preProcessSaveData ?
                formListener.preProcessSaveData(data) : data;

            return formStore.post(processedData).then((d) => {
                setData(d);
                if (formListener.onSaveSuccess)
                    formListener.onSaveSuccess(d);
                return Promise.resolve(d);
            }).catch(e => {
                if (formListener.onSaveFailure)
                    formListener.onSaveFailure(e);
                return Promise.reject(e);
            });
        } else
            return Promise.reject('invalid data');
    }

    return { data, saveData, formRef };
}


export { usePalmyraNewForm }
export type { IPalmyraNewFormInput, IPalmyraNewFormOutput }