import { IEndPoint, StoreFactory } from '@palmyralabs/palmyra-wire';
import { MutableRefObject } from 'react';
import { IFormListener } from './types';

interface IPalmyraEditFormInput {
    storeFactory: StoreFactory<any>;
    id: string;
    endPoint: IEndPoint;
    idKey?: string;
    formListener?: IFormListener;
}
interface IPalmyraEditFormOutput {
    getData(): FormData;
    saveData: (data?: any) => Promise<any>;
    formRef: MutableRefObject<any>;
}
type IusePalmyraEditForm = (props: IPalmyraEditFormInput) => IPalmyraEditFormOutput;
declare const usePalmyraEditForm: IusePalmyraEditForm;
export { usePalmyraEditForm };
export type { IPalmyraEditFormInput, IPalmyraEditFormOutput };
