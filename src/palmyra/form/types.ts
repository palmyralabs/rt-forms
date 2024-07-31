import { StoreFactory } from "@palmyralabs/palmyra-wire";
import { BiConsumer, IConsumer, IFunction, Supplier } from "@palmyralabs/ts-utils";
import { FieldDefinition } from "./typesWidgetOptions";

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
    isValid: () => boolean
}

interface IFieldManager {

}

interface IFormFieldError {
    status: boolean,
    message: string
}

interface IFormManager {
    getData: Supplier<any>,
    isValid: OPredicate
    registerFieldManager: IConsumer<IFormFieldManager>
    setFieldData: BiConsumer<string, any>
    setData: IConsumer<any>
}

interface IFormFieldManager {
    // field specific functions
    registerField: IConsumer<FieldDefinition>

    getName: Supplier<string>

    // form data functions
    getData: Supplier<any>
    setData: IConsumer<any>

    getFieldData: IFunction<string, any>
    setFieldData: BiConsumer<string, any>

    isValid: OPredicate
}

export type { FormMode, IForm, IFieldManager, IFormOptions, IFormFieldError, IFormManager, IFormFieldManager }