
import { GetRequest, IEndPoint, PutRequest } from "@palmyralabs/palmyra-wire";
import { useEffect, useRef } from "react";
import { IForm, IFormListener, IPalmyraSaveFormInput, IPalmyraSaveFormOutput } from "./types";
import { NoopFormListener } from "./Noops";



type IusePalmyraSaveForm = (props: IPalmyraSaveFormInput) => IPalmyraSaveFormOutput;

const usePalmyraSaveForm: IusePalmyraSaveForm = (props: IPalmyraSaveFormInput): IPalmyraSaveFormOutput => {
    const storeFactory = props.storeFactory;
    const formRef = props.formRef || useRef<IForm>(null);
    const idKey = props.idKey || 'id';
    const endPointVars = props.endPointOptions || {};
    const formListener: IFormListener = { ...NoopFormListener, ...props.formListener };

    const getEndPoint = (endPoint: IEndPoint, idProperty: string): IEndPoint => {
        if (typeof endPoint == 'string' && props.id) {
            return endPoint + '/{' + idProperty + '}';
        } else {
            return endPoint;
        }
    }

    const getData = () => formRef.current.getData();
    const setData = (d: any) => formRef.current.setData(d);

    useEffect(() => {
        const id = props.id;
        if (id) {
            const idProperty = idKey;
            var endPoint = getEndPoint(props.endPoint, idProperty);
            const formStore = storeFactory.getFormStore({}, endPoint, idProperty);
            var request: GetRequest = {
                options: {
                    [idProperty]: id
                },
                endPointVars
            };
            formStore.get(request).then(d => { setData(d) });
        }
    }, [props.id])

    const saveData = (d?: any): Promise<any> => {
        if (d || formRef && formRef.current) {
            const idProperty = props.idKey || 'id';
            var endPoint = getEndPoint(props.endPoint, idProperty);
            const formStore = storeFactory.getFormStore({}, endPoint, idProperty);

            const data = d || getData();
            const processedData = formListener.preProcessSaveData ?
                formListener.preProcessSaveData(data) : data;
            const id = props.id;
            var request: PutRequest = id ? {
                endPointVars: {
                    ...endPointVars,
                    [idProperty]: id
                }
            } : {};

            return formStore.save(processedData, request).then((d) => {
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


export { usePalmyraSaveForm }