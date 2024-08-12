import { IEndPoint, StoreFactory } from '@palmyralabs/palmyra-wire';
import { MutableRefObject } from 'react';
import { IFormListener } from './types';

interface IPalmyraNewFormInput {
    storeFactory: StoreFactory<any>;
    endPoint: IEndPoint;
    idKey?: string;
    initialData?: any;
    formListener?: IFormListener;
}
interface IPalmyraNewFormOutput {
    data: FormData;
    saveData: (data?: any) => Promise<any>;
    formRef: MutableRefObject<any>;
}
type IusePalmyraNewForm = (props: IPalmyraNewFormInput) => IPalmyraNewFormOutput;
declare const usePalmyraNewForm: IusePalmyraNewForm;
export { usePalmyraNewForm };
export type { IPalmyraNewFormInput, IPalmyraNewFormOutput };
