
import { GetRequest, IEndPoint } from "@palmyralabs/palmyra-wire";
import { useContext, useEffect, useRef } from "react";
import { IPalmyraViewFormInput, IPalmyraViewFormOutput } from "./types";
import { StoreFactoryContext } from "../formContext";

type IusePalmyraViewForm = (props: IPalmyraViewFormInput) => IPalmyraViewFormOutput;

const usePalmyraViewForm: IusePalmyraViewForm = (props: IPalmyraViewFormInput): IPalmyraViewFormOutput => {
    const storeFactory = props.storeFactory || useContext(StoreFactoryContext);
    const formRef = props.formRef || useRef<any>(null);
    const dataRef = useRef<any>();
    const idKey = props.idKey || 'id';
    const endPointVars = props.endPointOptions || {};
    const onQueryData = props.onQueryData || ((d: any) => d);

    const getEndPoint = (endPoint: IEndPoint, idProperty: string): IEndPoint => {
        if (typeof endPoint == 'string') {
            return endPoint + '/{' + idProperty + '}';
        } else {
            return endPoint;
        }
    }

    const fetch = () => {
        const id = props.id;
        const idProperty = idKey;
        var endPoint = getEndPoint(props.endPoint, idProperty);
        const formStore = storeFactory.getFormStore({}, endPoint, idProperty);
        var request: GetRequest = {
            options: {
                ...endPointVars,
                [idProperty]: id
            }
        };
        formStore.get(request).then(d => {
            const data = onQueryData(d);
            if (formRef.current)
                formRef.current.setData(data)
            dataRef.current = data
        });
    }

    useEffect(() => {
        fetch()
        if (props.refresh()) {
            fetch();
        }
    }, [props.id])

    const getData = () => {
        return dataRef.current;
    }

    return { getData, formRef };
}


export { usePalmyraViewForm }