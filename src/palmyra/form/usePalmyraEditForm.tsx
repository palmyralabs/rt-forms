
import { GetRequest, IEndPoint, PutRequest } from "@palmyralabs/palmyra-wire";
import { useEffect, useRef } from "react";
import { IPalmyraEditFormInput, IPalmyraEditFormOutput } from "./types";
import { NoopFormListener } from "./Noops";



type IusePalmyraEditForm = (props: IPalmyraEditFormInput) => IPalmyraEditFormOutput;

const usePalmyraEditForm: IusePalmyraEditForm = (props: IPalmyraEditFormInput): IPalmyraEditFormOutput => {
    const storeFactory = props.storeFactory;
    const formRef = props.formRef || useRef<any>(null);
    const idKey = props.idKey || 'id';
    const formListener = props.formListener || NoopFormListener;
    const endPointVars = props.endPointOptions || {};

    const getEndPoint = (endPoint: IEndPoint, idProperty: string): IEndPoint => {
        if (typeof endPoint == 'string') {
            return endPoint + '/{' + idProperty + '}';
        } else {
            return endPoint;
        }
    }

    useEffect(() => {
        const id = props.id;
        const idProperty = idKey;
        var endPoint = getEndPoint(props.endPoint, idProperty);
        const formStore = storeFactory.getFormStore({}, endPoint, idProperty);
        var request: GetRequest = {
            endPointVars: {
                ...endPointVars,
                [idProperty]: id
            }
        };
        formStore.get(request).then(d => { formRef.current.setData(d) });
    }, [props.id])


    const getData = () => {
        return formRef.current.getData();
    }

    const saveData = (d?: any): Promise<any> => {
        if (d || formRef && formRef.current) {
            const idProperty = props.idKey || 'id';
            var endPoint = getEndPoint(props.endPoint, idProperty);
            const formStore = storeFactory.getFormStore({}, endPoint, idProperty);
            const id = props.id;
            const data = d || formRef.current.getData(idProperty);
            const processedData = formListener.preProcessSaveData ?
                formListener.preProcessSaveData(data) : data;

            var request: PutRequest = {
                endPointVars: {
                    ...endPointVars,
                    [idProperty]: id
                }
            };

            return formStore.put(processedData, request).then((d) => {
                formRef.current.setData(d);
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


export { usePalmyraEditForm }