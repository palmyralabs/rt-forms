import { Dispatch, SetStateAction, useCallback, useContext, useState } from "react"
import { IFieldCustomizer, IFieldGroupManager, IFieldManager, IFormFieldError } from "../types"
import { FieldGroupManagerContext } from "../formContext";
import { FieldOptions, IMutateOptions } from "../typesFieldOptions";
import { generatePredicate, validate } from "..";
import { BiConsumer, getValueByKey, hasDot, setValueByKey, Supplier } from "@palmyralabs/ts-utils";

interface FieldStatus {
    value: string,
    error?: IFormFieldError
}

/**
 * Functionalities covered in Field Manager
 * 
 * Default Reader and Writer from formData
 * Predicate building for data validation
 * Maintain field Value and validation/error status
 * 
 */

const useFieldManager = (key: string, options: FieldOptions, customizer?: IFieldCustomizer): IFieldManager => {

    const valueAccessor = useCallback(() => getAccessor(key, customizer), [key])();
    const valueWriter = useCallback(() => getWriter(key, customizer), [key])();
    const validator = generatePredicate(options);

    var defaultValue = valueAccessor({});
    var e = undefined;
    const fieldGroupManager: IFieldGroupManager = useContext(FieldGroupManagerContext);
    if (!fieldGroupManager.hasField(options.attribute)) {
        if ((defaultValue == '' || defaultValue == undefined) && options.defaultValue != undefined) {
            defaultValue = customizer?.parse ? customizer.parse(options.defaultValue) : options.defaultValue;
            e = validate(defaultValue, validator, options); 
        }
    }

    const [fieldState, setFieldState] = useState<FieldStatus>({ value: defaultValue, error: e });
    const [mutateOptions, setMutateOptions] = useState<IMutateOptions>({});

    const value = fieldState.value;
    const error = fieldState.error;

    const getValue = () => value;
    const getError = () => error || { status: false, message: '' };

    const getValidator = () => {
        return validator;
    }

    const setValue = (v: Dispatch<SetStateAction<any>>, skipValidation = false, propagate = true) => {
        const d: any = (typeof v == 'function') ? v(value) : v;
        const error = validate(d, validator, options);

        if (d == value && error.status == error.status && error.message == error.message) {
            return;
        }

        setFieldState({ value: d, error });

        if (propagate)
            fieldGroupManager.setFieldData(key, d);

        if (!skipValidation) {
            fieldGroupManager.setFieldValidity(key, !error.status);
        }
    }

    const refreshError = () => {
        const error = validate(value, validator, options);

        if (error.status == error.status && error.message == error.message) {
            return;
        }
        setFieldState((v) => {
            return { ...v, error };
        });
        fieldGroupManager.setFieldValidity(key, !error.status);
    }


    const getFieldProps: Supplier<FieldOptions> = () => {
        const { invalidMessage, missingMessage,
            validator, regExp, validRule, validFn,
            defaultValue,
            ...result } = options;
        return { ...result, ...mutateOptions }
    }

    const isValid = () => {
        return !fieldState.error?.status
    }

    const fieldManager: IFieldManager = {
        getValidator, getValue, setValue, valueAccessor, valueWriter,
        isValid, getError, refreshError, mutateOptions, setMutateOptions, getFieldProps
    }
    fieldGroupManager.registerFieldManager(fieldManager, options);
    return fieldManager;
}

function getAccessor(attribute, customizer?: IFieldCustomizer) {
    const accessor = customizer?.fieldAccessor ? customizer.fieldAccessor :
        hasDot(attribute) ?
            (d: any) => {
                const v = getValueByKey(attribute, d);
                return v ? v : '';
            } : (d: any) => { const v = d?.[attribute]; return v ? v : '' };

    if (customizer?.parse) {
        const parse = customizer.parse;
        return (d: any) => parse(accessor(d));
    }

    return accessor;
}

function getWriter(attribute, customizer?: IFieldCustomizer): BiConsumer<any, any> {
    const format = customizer?.format;

    if (format) {
        if (customizer?.fieldWriter) {
            return (formData: any, v: any) => customizer.fieldWriter(format(v), formData);
        }

        if (hasDot(attribute)) {
            return (formData: any, v: any) => setValueByKey(attribute, formData, format(v));
        } else {
            return (formData: any, v: any) => setValueByKey(attribute, formData, format(v));
        }
    } else {
        if (customizer?.fieldWriter) {
            return (formData: any, v: any) => customizer.fieldWriter(v, formData);
        }

        if (hasDot(attribute)) {
            return (formData: any, v: any) => setValueByKey(attribute, formData, v);
        } else {
            return (formData: any, v: any) => setValueByKey(attribute, formData, v);
        }
    }
}

export { useFieldManager };
