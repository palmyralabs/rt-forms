
import { GetRequest, IEndPoint } from "@palmyralabs/palmyra-wire";
import { useContext, useEffect, useRef } from "react";
import { IPalmyraViewFormInput, IPalmyraViewFormOutput } from "./types";
import { StoreFactoryContext } from "../formContext";



type IusePalmyraViewForm = (props: IPalmyraViewFormInput) => IPalmyraViewFormOutput;

const usePalmyraViewForm: IusePalmyraViewForm = (props: IPalmyraViewFormInput): IPalmyraViewFormOutput => {
    const storeFactory = props.storeFactory || useContext(StoreFactoryContext);
    const formRef = props.formRef || useRef<any>(null);
    const dataRef = useRef<any>(null);
    const idKey = props.idKey || 'id';
    const endPointVars = props.endPointOptions || {};

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
            options: {
                ...endPointVars,
                [idProperty]: id
            },
            errorHandler: props.onQueryFailure
        };
        return formStore.get(request).then(d => {
            const onQueryData = props.onQueryData;
            const result = onQueryData ? onQueryData(d) : d;
            if (formRef.current)
                formRef.current.setData(result)
            dataRef.current = result
            return Promise.resolve(result);
        });
    }

    const refresh = () => {
        fetchData();
    }

    useEffect(() => {
        fetchData();
    }, [props.id])

    const getData = () => {
        return dataRef.current;
    }

    return { getData, formRef, refresh };
}


export { usePalmyraViewForm }