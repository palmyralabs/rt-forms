
import { useRef } from "react";
import { getHandlers } from "./utils";
import { IPalmyraNewFormInput, IPalmyraNewFormOutput } from "./types";

type IusePalmyraNewForm = (props: IPalmyraNewFormInput) => IPalmyraNewFormOutput;

const usePalmyraNewForm: IusePalmyraNewForm = (props: IPalmyraNewFormInput): IPalmyraNewFormOutput => {
    const storeFactory = props.storeFactory;
    const formRef = props.formRef || useRef<any>(null);
    const endPointVars = props.endPointOptions || {};
    const { onSaveFailure, onSaveSuccess, preSave } = getHandlers(props);

    const getData = () => {
        if (formRef.current)
            return formRef.current.getData();
        else
            return props.initialData;
    };

    const setData = (d: any) => {
        if (formRef.current)
            formRef.current.setData(d);
    }

    const saveData = (d?: any): Promise<any> => {
        if (d || (formRef && formRef.current)) {
            const idProperty = 'id';
            var endPoint = props.endPoint
            const formStore = storeFactory.getFormStore({}, endPoint, idProperty);

            const data = d || getData();
            const processedData = preSave(data);

            return formStore.post(processedData, { endPointVars }).then((d) => {
                if (props.refreshOnSaveResponse != false)
                    setData(d);
                onSaveSuccess(d);
                return Promise.resolve(d);
            }).catch(e => {
                onSaveFailure(e);
                return Promise.reject(e);
            });
        } else
            return Promise.reject('invalid data');
    }

    return { getData, saveData, formRef };
}


export { usePalmyraNewForm }