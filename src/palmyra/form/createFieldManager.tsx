import { useCallback, useState } from "react";
import { IFieldCustomizer, IFieldGroupManager, IFieldManager, IFormFieldError } from "./types";
import { Supplier } from "@palmyralabs/ts-utils";
import { FieldOptions, IMutateOptions } from "./typesFieldOptions";
import { generatePredicate, validate } from ".";

const createFieldManager = (fieldGroupManager: IFieldGroupManager, field: FieldOptions, customizer?: IFieldCustomizer): IFieldManager => {

    const [mutateOptions, setMutateOptions] = useState<IMutateOptions>({});
    const { data } = fieldGroupManager;
    const attribute = field.attribute;
    const validator = useCallback(() => generatePredicate(field), [field])();

    const getValue = customizer?.fieldAccessor ? (() => customizer?.fieldAccessor(data))
        : () => fieldGroupManager.getFieldData(field.attribute);

    const getValidator = () => {
        return validator;
    }

    const getError = () => {
        return fieldGroupManager.getFieldError(attribute);
    }

    const setError = (error: IFormFieldError) => {
        return fieldGroupManager.setFieldError(attribute, error);
    }

    const getFieldProps: Supplier<FieldOptions> = () => {
        return { ...field, ...mutateOptions }
    }

    const setValue = (v: any) => {
        const status = validate(v, validator, field) ;
        const error = getError();

        if(error.message != status.message){
            setError(status);
        }

        fieldGroupManager.setFieldData(attribute, v);
    }

    // const validate = (v: any) => {
    //     const validity: PredicateResponse = validator(v);
    //     const error = getError();

    //     if (validity.valid) {
    //         setError({ status: false, message: '' });
    //     } else {
    //         const errorMessage: string = getErrorMessage(validity, field);
    //         if (error.message != errorMessage) {
    //             setError({ status: true, message: errorMessage })
    //         }
    //     }
    // }

    return { getValidator, getValue, setValue, getError, setError, mutateOptions, setMutateOptions, getFieldProps }
}


export { createFieldManager }