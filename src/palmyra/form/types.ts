import { StoreFactory } from "@palmyralabs/palmyra-wire";
import { BiConsumer, IConsumer, IFunction, Supplier } from "@palmyralabs/ts-utils";
import { FieldOptions, IMutateOptions } from "./typesFieldOptions";
import { Dispatch, SetStateAction } from "react";
import { PredicateResponse } from "@palmyralabs/ts-predicates";
import { IPalmyraEditFormInput, IPalmyraNewFormInput, IPalmyraSaveFormInput, IPalmyraViewFormInput } from "./useHelpers/types";

type FormMode = 'view' | 'new' | 'edit' | 'save';

type OPredicate = () => boolean;
type numbers = number | number[];

interface IFormOptions {
    children?: any,
    formData?: any,
    onValidChange?: Function,
    storeFactory?: StoreFactory<any>
}

interface IForm {
    getData: () => any,
    setData: IConsumer<any>
    isValid: () => boolean
}

interface IFieldGroup {

}

interface IFieldGroupOptions {
    name: string
}

interface IFieldManager {
    getValue: Supplier<any>,
    setValue: (v: any, skipValidation?: Boolean, propagate?: boolean) => void,
    isValid: OPredicate,
    getError: Supplier<IFormFieldError>,
    refreshError: (force?: boolean) => void,
    mutateOptions: IMutateOptions,
    setMutateOptions: Dispatch<SetStateAction<IMutateOptions>>
    getFieldProps: Supplier<any>,
    getValidator: Supplier<(v: any) => PredicateResponse>,
    valueAccessor: IFunction<any, any>,
    valueWriter: (formData: any, value: any) => void
}

interface IFormFieldError {
    status: boolean,
    message: string
}

interface IFormManager {
    getData: Supplier<any>,
    getPropsData: Supplier<any>,
    isValid: OPredicate,
    setFieldGroupValid: BiConsumer<string, boolean>
    getFieldGroupManager: IFunction<string, IFieldGroupManager>
    registerFieldGroupManager: IConsumer<IFieldGroupManager>
    setData: IConsumer<any>
}

interface IFieldCustomizer extends IFieldConverter, IFieldAccessor {

}

interface IFieldConverter {
    format?: (d: any) => any,
    parse?: (s: any) => any
}

interface IFieldAccessor {
    fieldAccessor?: (formData: any) => any
    fieldWriter?: (fieldValue: any, formData: any) => void
}

interface IFieldGroupManager {
    // field specific functions
    //registerField: (o: FieldOptions, accessor?: IFieldCustomizer) => IFieldManager

    registerFieldManager: (fieldManager: IFieldManager, options: FieldOptions) => void

    getName: Supplier<string>

    setData: Dispatch<SetStateAction<any>>

    getFieldGroupData: Supplier<any>

    getFieldData: IFunction<string, any>
    setFieldData: BiConsumer<string, any>

    setFieldValidity: BiConsumer<string, boolean>

    isValid: OPredicate
}

interface IEditFormOptions extends IPalmyraEditFormInput {
    children?: any,
    onValidChange?: Function
}

interface ISaveFormOptions extends IPalmyraSaveFormInput {
    children?: any,
    onValidChange?: Function
}

interface INewFormOptions extends IPalmyraNewFormInput {
    children?: any,
    onValidChange?: Function
}

interface IViewFormOptions extends IPalmyraViewFormInput {
    children?: any
}

interface ISaveForm extends IForm {
    saveData: (data?: any) => Promise<any>
}

export type {
    numbers, IFieldConverter, IFieldAccessor,
    FormMode, IForm, IFieldManager, IFieldGroup, IFieldCustomizer, IFieldGroupOptions,
    IFormOptions, IFormFieldError, IFormManager, IFieldGroupManager,
    IEditFormOptions, ISaveForm, ISaveFormOptions, INewFormOptions, IViewFormOptions
}