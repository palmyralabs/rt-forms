
import { GetRequest, IEndPoint, PutRequest, StoreFactory } from "@palmyralabs/palmyra-wire";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { IFormListener } from "./types";
import { NoopFormListener } from "./Noops";


interface IPalmyraSaveFormInput {
    storeFactory: StoreFactory<any>,
    id: string,
    endPoint: IEndPoint,
    idKey?: string,
    formListener?: IFormListener
}

interface IPalmyraSaveFormOutput {
    data: FormData,
    saveData: (data?: any) => Promise<any>,
    formRef: MutableRefObject<any>
}

type IusePalmyraSaveForm = (props: IPalmyraSaveFormInput) => IPalmyraSaveFormOutput;

const usePalmyraSaveForm: IusePalmyraSaveForm = (props: IPalmyraSaveFormInput): IPalmyraSaveFormOutput => {
    const storeFactory = props.storeFactory;
    const [data, setData] = useState<any>(null);
    const formRef = useRef<any>(null);
    const idKey = props.idKey || 'id';
    const formListener: IFormListener = { ...NoopFormListener, ...props.formListener };

    const getEndPoint = (endPoint: IEndPoint, idProperty: string): IEndPoint => {
        if (typeof endPoint == 'string' && props.id) {
            return endPoint + '/{' + idProperty + '}';
        } else {
            return endPoint;
        }
    }

    useEffect(() => {
        const id = props.id;
        if (id) {
            const idProperty = idKey;
            var endPoint = getEndPoint(props.endPoint, idProperty);
            const formStore = storeFactory.getFormStore({}, endPoint, idProperty);
            var request: GetRequest = {
                options: {
                    [idProperty]: id
                }
            };
            formStore.get(request).then(d => { setData(d) });
        }
    }, [props.id])

    const saveData = (d?: any): Promise<any> => {
        if (d || formRef && formRef.current) {
            const idProperty = props.idKey || 'id';
            var endPoint = getEndPoint(props.endPoint, idProperty);
            const formStore = storeFactory.getFormStore({}, endPoint, idProperty);

            const data = d || formRef.current.getData(idProperty);
            const processedData = formListener.preProcessSaveData ?
                formListener.preProcessSaveData(data) : data;
            const id = props.id;
            var request: PutRequest = id ? {
                endPointVars: {
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

    return { data, saveData, formRef };
}


export { usePalmyraSaveForm }
export type { IPalmyraSaveFormInput, IPalmyraSaveFormOutput }