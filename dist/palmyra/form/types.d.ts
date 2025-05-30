import { StoreOptions } from '@palmyralabs/palmyra-wire';
import { BiConsumer, IConsumer, IFunction, Supplier } from '@palmyralabs/ts-utils';
import { FieldOptions, IMutateOptions } from './typesFieldOptions';
import { Dispatch, SetStateAction } from 'react';
import { PredicateResponse } from '@palmyralabs/ts-predicates';
import { IPalmyraEditFormInput, IPalmyraNewFormInput, IPalmyraSaveFormInput, IPalmyraViewFormInput, IStoreProps } from './useHelpers/types';
type FormMode = 'view' | 'new' | 'edit' | 'save';
type OPredicate = () => boolean;
type numbers = number | number[];
interface IFormOptions extends IStoreProps<StoreOptions & any> {
    children?: any;
    formData?: any;
    onValidChange?: Function;
}
interface IForm {
    getData: () => any;
    setData: IConsumer<any>;
    isValid: () => boolean;
}
interface IFieldGroup {
}
interface IFieldGroupOptions {
    name: string;
}
interface IFieldManager {
    getValue: Supplier<any>;
    setValue: (v: any) => void;
    isValid: OPredicate;
    getError: Supplier<IFormFieldError>;
    refreshError: (force?: boolean) => void;
    mutateOptions: IMutateOptions;
    setMutateOptions: Dispatch<SetStateAction<IMutateOptions>>;
    getFieldProps: Supplier<any>;
    getValidator: Supplier<(v: any) => PredicateResponse>;
    rawValueAccessor: (d: any) => any;
    valueAccessor: (d: any) => any;
    valueWriter: (formData: any, value: any) => void;
    setError: (errorMsg: string, showError?: boolean) => void;
}
interface IServerQueryFieldManager extends IFieldManager {
    setSearchText: (text: string) => void;
    refreshOptions: () => void;
    options: any[];
    setOptions: Dispatch<SetStateAction<any[]>>;
}
interface IFormFieldError {
    status: boolean;
    message: string;
    hasFocus?: boolean;
    showError?: boolean;
}
interface IFormManager {
    getData: Supplier<any>;
    getPropsData: Supplier<any>;
    reset: () => void;
    isValid: OPredicate;
    getFieldGroupManager: IFunction<string, IFieldGroupManager>;
    registerFieldGroupManager: IFunction<IFieldGroupOptions, IFieldGroupManager>;
    setData: IConsumer<any>;
}
interface IFieldCustomizer extends IFieldConverter, IFieldAccessor {
}
interface IServerQueryFieldCustomizer extends IFieldCustomizer {
    preProcessSearchText?: (d: string) => string;
    fieldAccessor: (formData: any) => any;
    fieldWriter: (fieldValue: any, formData: any) => void;
    optionIdAccessor: (d: any) => any;
}
interface IFieldConverter {
    format?: (d: any) => any;
    parse?: (s: any) => any;
}
interface IFieldAccessor {
    fieldAccessor?: (formData: any) => any;
    fieldWriter?: (fieldValue: any, formData: any) => void;
}
interface IFieldGroupManager {
    registerFieldManager: (fieldManager: IFieldManager, options: FieldOptions) => void;
    hasField: (string: string) => boolean;
    getName: Supplier<string>;
    setData: Dispatch<SetStateAction<any>>;
    getFieldGroupData: Supplier<any>;
    setFieldData: BiConsumer<string, any>;
    getFieldRawData: (accessor: (d: any) => any) => any;
    setFieldValidity: BiConsumer<string, boolean>;
    isValid: OPredicate;
}
interface IEditFormOptions extends IPalmyraEditFormInput {
    children?: any;
    onValidChange?: Function;
}
interface ISaveFormOptions extends IPalmyraSaveFormInput {
    children?: any;
    onValidChange?: Function;
}
interface INewFormOptions extends IPalmyraNewFormInput {
    children?: any;
    onValidChange?: Function;
}
interface IViewFormOptions extends IPalmyraViewFormInput {
    children?: any;
}
interface ISaveForm extends IForm {
    saveData: (data?: any) => Promise<any>;
    refresh: () => void;
}
interface IViewForm extends IForm {
    refresh: () => void;
}
export type { numbers, IFieldConverter, IFieldAccessor, FormMode, IForm, IFieldManager, IFieldGroup, IFieldCustomizer, IFieldGroupOptions, IFormOptions, IFormFieldError, IFormManager, IFieldGroupManager, IViewForm, IEditFormOptions, ISaveForm, ISaveFormOptions, INewFormOptions, IViewFormOptions, IServerQueryFieldCustomizer, IServerQueryFieldManager };
