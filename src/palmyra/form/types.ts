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
    storeFactory?: StoreFactory<any>
}

interface IForm {
    getData: () => any,
    setData: IConsumer<any>
    isValid: () => boolean
}

interface IFieldGroup {

}

interface IFieldManager {
    getValue: Supplier<any>,
    setValue: IConsumer<any>,
    getError: Supplier<IFormFieldError>,
    setError: IConsumer<IFormFieldError>,
    mutateOptions: IMutateOptions,
    setMutateOptions: Dispatch<SetStateAction<IMutateOptions>>
    getFieldProps: Supplier<any>,
    getValidator: Supplier<(v: any) => PredicateResponse>
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
    setFieldData: BiConsumer<string, any>
    setData: IConsumer<any>
}

interface IFieldGroupManager {
    // field specific functions
    registerField: IFunction<FieldOptions, IFieldManager>

    getName: Supplier<string>

    // form data functions
    getData: Supplier<any>
    setData: IConsumer<any>

    getFieldData: IFunction<string, any>
    setFieldData: BiConsumer<string, any>

    getFieldError: IFunction<string, any>
    setFieldError: BiConsumer<string, any>

    isValid: OPredicate
}

export type { FormMode, IForm, IFieldManager, IFieldGroup, IFormOptions, IFormFieldError, IFormManager, IFieldGroupManager }