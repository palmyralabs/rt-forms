import { StoreFactory } from "@palmyralabs/palmyra-wire";
import { BiConsumer, IConsumer, IFunction, Supplier } from "@palmyralabs/ts-utils";
import { FieldOptions, IMutateOptions } from "./typesFieldOptions";
import { Dispatch, SetStateAction } from "react";
import { PredicateResponse } from "@palmyralabs/ts-predicates";

type FormMode = 'view' | 'new' | 'edit';

type OPredicate = () => Boolean;

interface IFormOptions {
    children?: any,
    formData: any,
    onValidChange?: Function,
    mode: FormMode,
    storeFactory?: StoreFactory<any>,
    formListener?: IFormListener
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
    setValue: IConsumer<any>,
    isValid: OPredicate,
    getError: Supplier<IFormFieldError>,
    refreshError: (force?: boolean) => void,
    mutateOptions: IMutateOptions,
    setMutateOptions: Dispatch<SetStateAction<IMutateOptions>>
    getFieldProps: Supplier<any>,
    getValidator: Supplier<(v: any) => PredicateResponse>,
    valueAccessor: IFunction<any, any>
}

interface IFormFieldError {
    status: boolean,
    message: string
}

interface IFormManager {
    getData: Supplier<any>,
    isValid: OPredicate
    getFieldGroupManager: IFunction<string, IFieldGroupManager>
    registerFieldGroupManager: IConsumer<IFieldGroupManager>
    setData: IConsumer<any>
}

interface IFieldCustomizer {
    fieldAccessor?: (d: any) => any
    fieldWriter?: (v: any, d: any) => void
}


interface IFieldGroupManager {
    // field specific functions
    //registerField: (o: FieldOptions, accessor?: IFieldCustomizer) => IFieldManager

    registerFieldManager: (fieldManager: IFieldManager, options: FieldOptions) => void

    getName: Supplier<string>

    // form data functions
    data: Supplier<any>
    setData: Dispatch<SetStateAction<any>>

    getFieldGroupData: Supplier<any>

    getFieldData: IFunction<string, any>
    setFieldData: BiConsumer<string, any>

    setFieldValidity: BiConsumer<string, boolean>

    isValid: OPredicate
}


interface IFormListener {
    onSaveSuccess?: (data: any) => void,
    onSaveFailure?: (e: any) => void,
    preProcessSaveData?: (data: FormData) => FormData
    postProcessQueryData?: (data: FormData) => FormData
}

export type {
    FormMode, IForm, IFieldManager, IFieldGroup, IFieldCustomizer, IFieldGroupOptions,
    IFormOptions, IFormFieldError, IFormManager, IFieldGroupManager, IFormListener
}