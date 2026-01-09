import { ErrorHandler, IEndPoint, IEndPointOptions, StoreFactory, StoreOptions } from '@palmyralabs/palmyra-wire';
import { RefObject } from 'react';
import { IForm } from '../types';
import { AxiosInstance } from 'axios';
interface IStoreProps<T extends StoreOptions> {
    storeFactory?: StoreFactory<any, T>;
    storeOptions?: T;
}
interface IuseFormOptions<T extends StoreOptions> extends IStoreProps<T> {
    endPoint: IEndPoint;
    endPointOptions?: IEndPointOptions;
    formRef?: RefObject<IForm>;
    axiosCustomizer?: (axios: AxiosInstance) => void;
}
interface IFormSaveEventHandler {
    onSaveSuccess?: (data: any) => void;
    onSaveFailure?: (e: any) => void;
    preSave?: (data: any) => any;
}
interface IFormQueryEventHandler {
    onQueryData?: (data: any) => any;
}
interface IPalmyraNewFormInput extends IuseFormOptions<StoreOptions>, IFormQueryEventHandler, IFormSaveEventHandler {
    initialData?: any;
    refreshOnSaveResponse?: boolean;
}
interface IPalmyraViewFormInput extends IuseFormOptions<StoreOptions>, IFormQueryEventHandler {
    id: string;
    idKey?: string;
    fields?: string[];
    onQueryFailure?: ErrorHandler;
}
interface IPalmyraEditFormInput extends IPalmyraViewFormInput, IFormSaveEventHandler {
    mode?: 'edit' | 'save';
    refreshOnSaveResponse?: boolean;
}
interface IPalmyraSaveFormOutput extends IPalmyraEditFormOutput {
}
interface IFormRefresh {
    refresh?: () => void;
}
interface IPalmyraFormOutput {
    getData: () => any;
    formRef: RefObject<IForm>;
}
interface IPalmyraViewFormOutput extends IFormRefresh, IPalmyraFormOutput {
}
interface IPalmyraEditFormOutput extends IPalmyraFormOutput, IFormRefresh {
    saveData: (data?: any) => Promise<any>;
    fetchData: () => Promise<any>;
}
interface IPalmyraSaveFormInput extends IPalmyraEditFormInput {
}
interface IPalmyraNewFormOutput extends IPalmyraFormOutput, IFormRefresh {
    saveData: (data?: any) => Promise<any>;
}
export type { IFormSaveEventHandler, IStoreProps, IPalmyraNewFormInput, IPalmyraNewFormOutput, IPalmyraSaveFormInput, IPalmyraSaveFormOutput, IPalmyraViewFormInput, IPalmyraViewFormOutput, IPalmyraEditFormInput, IPalmyraEditFormOutput };
