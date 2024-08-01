
import { GetRequest, IEndPoint, PutRequest, StoreFactory } from "@palmyralabs/palmyra-wire";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { IFormListener } from "./types";
import { NoopFormListener } from "./Noops";

interface IPalmyraEditFormInput {
    storeFactory: StoreFactory<any>,
    id: string,
    endPoint: IEndPoint,
    idKey?: string,
    formListener?: IFormListener
}

interface IPalmyraEditFormOutput {
    data: FormData,
    saveData: (data?: any) => Promise<any>,
    formRef: MutableRefObject<any>
}

type IusePalmyraEditForm = (props: IPalmyraEditFormInput) => IPalmyraEditFormOutput;

const usePalmyraEditForm: IusePalmyraEditForm = (props: IPalmyraEditFormInput): IPalmyraEditFormOutput => {
    const storeFactory = props.storeFactory;
    const [data, setData] = useState<any>(null);
    const formRef = useRef<any>(null);
    const idKey = props.idKey || 'id';
    const formListener = props.formListener || NoopFormListener;

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
                [idProperty]: id
            }
        };
        formStore.get(request).then(d => { setData(d) });
    }, [props.id])

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
                    [idProperty]: id
                }
            };

            return formStore.put(processedData, request).then((d) => {
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


export { usePalmyraEditForm }
export type { IPalmyraEditFormInput, IPalmyraEditFormOutput }