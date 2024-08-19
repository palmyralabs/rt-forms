import { IEndPoint, IEndPointOptions, StoreFactory } from '@palmyralabs/palmyra-wire';
import { MutableRefObject } from 'react';
import { IForm } from '../types';

interface IuseFormOptions {
    storeFactory?: StoreFactory<any>;
    endPoint: IEndPoint;
    endPointOptions?: IEndPointOptions;
    formRef?: MutableRefObject<any>;
}
interface IFormSaveEventHandler {
    onSaveSuccess?: (data: any) => void;
    onSaveFailure?: (e: any) => void;
    preSave?: (data: any) => any;
}
interface IFormQueryEventHandler {
    onQueryData?: (data: any) => any;
}
interface IPalmyraNewFormInput extends IuseFormOptions, IFormQueryEventHandler, IFormSaveEventHandler {
    initialData?: any;
    refreshOnSaveResponse?: boolean;
}
interface IPalmyraViewFormInput extends IuseFormOptions, IFormQueryEventHandler {
    id: string;
    idKey?: string;
}
interface IPalmyraEditFormInput extends IPalmyraViewFormInput, IFormSaveEventHandler {
    mode?: 'edit' | 'save';
    refreshOnSaveResponse?: boolean;
}
interface IPalmyraSaveFormOutput extends IPalmyraEditFormOutput {
}
interface IPalmyraViewFormOutput {
    getData(): any;
    formRef: MutableRefObject<IForm>;
}
interface IPalmyraEditFormOutput extends IPalmyraViewFormOutput {
    saveData: (data?: any) => Promise<any>;
    fetchData: () => void;
}
interface IPalmyraSaveFormInput extends IPalmyraEditFormInput {
}
interface IPalmyraNewFormOutput extends IPalmyraViewFormOutput {
    saveData: (data?: any) => Promise<any>;
}
export type { IFormSaveEventHandler, IPalmyraNewFormInput, IPalmyraNewFormOutput, IPalmyraSaveFormInput, IPalmyraSaveFormOutput, IPalmyraViewFormInput, IPalmyraViewFormOutput, IPalmyraEditFormInput, IPalmyraEditFormOutput };
