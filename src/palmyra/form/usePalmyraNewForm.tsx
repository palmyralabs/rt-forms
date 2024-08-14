
import { useRef, useState } from "react";
import { IPalmyraNewFormInput, IPalmyraNewFormOutput } from "./types";
import { NoopFormListener } from "./Noops";

type IusePalmyraNewForm = (props: IPalmyraNewFormInput) => IPalmyraNewFormOutput;

const usePalmyraNewForm: IusePalmyraNewForm = (props: IPalmyraNewFormInput): IPalmyraNewFormOutput => {
    const storeFactory = props.storeFactory;
    const [_data, setData] = useState<any>(props.initialData == undefined ? null : props.initialData);
    const formRef = props.formRef || useRef<any>(null);
    const formListener = props.formListener || NoopFormListener;

    const getData = () => formRef.current.getData();

    const saveData = (d?: any): Promise<any> => {
        if (d || (formRef && formRef.current)) {
            const idProperty = props.idKey;
            var endPoint = props.endPoint
            const formStore = storeFactory.getFormStore({}, endPoint, idProperty);

            const data = d || getData();
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

    return { getData, saveData, formRef };
}


export { usePalmyraNewForm }