
import { GetRequest, IEndPoint, PutRequest } from "@palmyralabs/palmyra-wire";
import { useContext, useRef } from "react";
import { IPalmyraEditFormInput, IPalmyraEditFormOutput } from "./types";
import { getHandlers } from "./utils";
import { StoreFactoryContext } from "../formContext";

type IusePalmyraEditForm = (props: IPalmyraEditFormInput) => IPalmyraEditFormOutput;


const usePalmyraEditForm: IusePalmyraEditForm = (props: IPalmyraEditFormInput): IPalmyraEditFormOutput => {
    const storeFactory = props.storeFactory || useContext(StoreFactoryContext);
    const formRef = props.formRef || useRef<any>(null);
    const idKey = props.idKey || 'id';
    const operation = props.mode != 'save' ? 'put' : 'save';
    const endPointVars = props.endPointOptions || {};
    const { onSaveFailure, onSaveSuccess, preSave } = getHandlers(props);
    const onQueryData = props.onQueryData || ((d: any) => d);
    const getEndPoint = (endPoint: IEndPoint, idProperty: string): IEndPoint => {
        if (typeof endPoint == 'string') {
            return endPoint + '/{' + idProperty + '}';
        } else {
            return endPoint;
        }
    }

    const fetchData = () => {
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
        formStore.get(request).then(d => {
            if (formRef.current)
                formRef.current.setData(onQueryData(d))
        });
    }

    const getData = () => {
        if (formRef.current)
            return formRef.current.getData();
        else
            return {};
    }

    const setData = (d: any) => {
        if (formRef.current)
            formRef.current.setData(d);
    }

    const saveData = (d?: any): Promise<any> => {
        if (d || formRef && formRef.current) {
            const idProperty = props.idKey || 'id';
            var endPoint = getEndPoint(props.endPoint, idProperty);
            const formStore = storeFactory.getFormStore({}, endPoint, idProperty);
            const id = props.id;
            const data = d || formRef.current.getData(idProperty);
            const processedData = preSave(data);

            var request: PutRequest = {
                endPointVars: {
                    ...endPointVars,
                    [idProperty]: id
                }
            };

            return formStore[operation](processedData, request).then((d) => {
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

    const refresh = () => {
        fetchData()
    }

    return { getData, saveData, fetchData, formRef, refresh };
}


export { usePalmyraEditForm }