import { useCallback, useState } from "react";
import { IFieldGroupManager, IFieldManager, IFormFieldError } from "./types";
import { Supplier } from "@palmyralabs/ts-utils";
import { FieldOptions, IMutateOptions } from "./typesFieldOptions";
import { PredicateResponse } from "@palmyralabs/ts-predicates";
import { generatePredicate, getErrorMessage } from ".";

const createFieldManager = (fieldGroupManager: IFieldGroupManager, field: FieldOptions): IFieldManager => {

    const [mutateOptions, setMutateOptions] = useState<IMutateOptions>({});

    const attribute = field.attribute;    
    const validator = useCallback(() => generatePredicate(field), [field])();

    const getValue = () => {
        return fieldGroupManager.getFieldData(attribute);
    }

    const getValidator = () => {
        return validator;
    }

    const getError = () => {
        return fieldGroupManager.getFieldError(attribute);
    }

    const setError = (error:IFormFieldError) => {
        return fieldGroupManager.setFieldError(attribute, error);
    }

    const getFieldProps: Supplier<FieldOptions> = () => {
        return { ...field, ...mutateOptions }
    }

    const setValue = (v: any) => {
        validate(v);
        fieldGroupManager.setFieldData(attribute, v);
    }

    const validate = (v: any) => {
        const validity: PredicateResponse = validator(v);
        const error = getError();

        if (validity.valid) {
            setError({ status: false, message: '' });
        } else {
            const errorMessage: string = getErrorMessage(validity, field);
            if (error.message != errorMessage) {
                setError({ status: true, message: errorMessage })
            }
        }
    }

    return { getValidator, getValue, setValue, getError, setError, mutateOptions, setMutateOptions, getFieldProps }
}


export { createFieldManager }