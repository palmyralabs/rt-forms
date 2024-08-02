import { Dispatch, SetStateAction, useContext, useState } from "react"
import { IFieldCustomizer, IFieldGroupManager, IFieldManager, IFormFieldError } from "./types"
import { FieldGroupManagerContext } from "./formContext";
import { FieldOptions, IMutateOptions } from "./typesFieldOptions";
import { generatePredicate, validate } from "./validatorHelper";
import { getValueByKey, hasDot, Supplier } from "@palmyralabs/ts-utils";

interface FieldStatus {
    value: string,
    error?: IFormFieldError
}

const useFieldManager = (key: string, options: FieldOptions, customizer?: IFieldCustomizer): IFieldManager => {
    const [fieldState, setFieldState] = useState<FieldStatus>({ value: '' });
    const fieldGroupManager: IFieldGroupManager = useContext(FieldGroupManagerContext);

    const [mutateOptions, setMutateOptions] = useState<IMutateOptions>({});

    const validator = generatePredicate(options);

    const value = fieldState.value;
    const error = fieldState.error;

    const getValue = () => value;
    const getError = () => error || { status: false, message: '' };

    const getValidator = () => {
        return validator;
    }

    const fieldDataWriter = customizer?.fieldWriter
        ? ((v: any) => customizer?.fieldWriter(v, fieldGroupManager.data))
        : ((v: any) => fieldGroupManager.setFieldData(key, v));

    const setValue = (v: Dispatch<SetStateAction<any>>) => {
        const d: any = (typeof v == 'function') ? v(value) : v;
        const error = validate(d, validator, options);

        if (d == value && error.status == error.status && error.message == error.message) {
            return;
        }
        setFieldState({ value: d, error });
        fieldDataWriter(v);
        //fieldGroupManager.setFieldData(key, d);
    }

    const refreshError = () => {
        const error = validate(value, validator, options);

        if (error.status == error.status && error.message == error.message) {
            return;
        }
        setFieldState((v) => {
            return { ...v, error };
        });
    }


    const getFieldProps: Supplier<FieldOptions> = () => {
        return { ...options, ...mutateOptions }
    }

    const isValid = () => !fieldState.error?.status

    const valueAccessor = customizer?.fieldAccessor ? customizer?.fieldAccessor :
        hasDot(key) ? (d) => getValueByKey(key, d) : (d) => d[key];


    const fieldManager: IFieldManager = {
        getValidator, getValue, setValue, valueAccessor,
        isValid, getError, refreshError, mutateOptions, setMutateOptions, getFieldProps
    }
    fieldGroupManager.registerFieldManager(fieldManager, options);
    return fieldManager;
}

export { useFieldManager };