
import { GetRequest, IEndPoint, StoreFactory } from "@palmyralabs/palmyra-wire";
import { useEffect, useState } from "react";

interface IPalmyraViewFormInput {
    storeFactory: StoreFactory<any>,
    id: string,
    endPoint: IEndPoint,
    idKey?: string
}

interface IPalmyraViewFormOutput {
    data: FormData
}

type IusePalmyraViewForm = (props: IPalmyraViewFormInput) => IPalmyraViewFormOutput;

const usePalmyraViewForm: IusePalmyraViewForm = (props: IPalmyraViewFormInput): IPalmyraViewFormOutput => {
    const storeFactory = props.storeFactory;
    const [data, setData] = useState<any>(null);
    const idKey = props.idKey || 'id';

    const getEndPoint = (endPoint: IEndPoint, idProperty: string): IEndPoint => {
        if (typeof endPoint == 'string' && props.idKey != null) {
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

    return { data };
}


export { usePalmyraViewForm }
export type { IPalmyraViewFormInput, IPalmyraViewFormOutput }