
import { GetRequest, IEndPoint } from "@palmyralabs/palmyra-wire";
import { useEffect, useState } from "react";
import { IPalmyraViewFormInput, IPalmyraViewFormOutput } from "./types";



type IusePalmyraViewForm = (props: IPalmyraViewFormInput) => IPalmyraViewFormOutput;

const usePalmyraViewForm: IusePalmyraViewForm = (props: IPalmyraViewFormInput): IPalmyraViewFormOutput => {
    const storeFactory = props.storeFactory;
    const [data, setData] = useState<any>({});
    const idKey = props.idKey || 'id';

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
            options: {
                [idProperty]: id
            }
        };
        formStore.get(request).then(d => { setData(d) });
    }, [props.id])

    const getData = () => data;

    return { getData };
}


export { usePalmyraViewForm }