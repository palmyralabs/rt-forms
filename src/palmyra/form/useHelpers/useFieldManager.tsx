import { Dispatch, SetStateAction, useCallback, useContext, useEffect, useState } from "react"
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

const useFieldManager = (key: string, fieldOptions: FieldOptions, customizer?: IFieldCustomizer): IFieldManager => {
    const fieldGroupManager: IFieldGroupManager = useContext(FieldGroupManagerContext);
    if (!fieldGroupManager)
        throw Error('useFieldManager must be called within the scope of <PalmyraForm>')


    const [mutateOptions, setMutateOptions] = useState<IMutateOptions>({});
    const options = { ...fieldOptions, ...mutateOptions }

    useEffect(() => {
        refreshError();
    }, [mutateOptions])

    const valueAccessor = useCallback(() => getAccessor(key, customizer), [key])();
    const valueWriter = useCallback(() => getWriter(key, customizer), [key])();
    const validator = generatePredicate(options);

    var defaultValue = valueAccessor({});
    var e = undefined;
    if (!fieldGroupManager.hasField(options.attribute)) {
        if ((defaultValue == '' || defaultValue == undefined) && options.defaultValue != undefined) {
            defaultValue = customizer?.parse ? customizer.parse(options.defaultValue) : options.defaultValue;
            e = validate(defaultValue, validator, options);
        }
    }

    const [fieldState, setFieldState] = useState<FieldStatus>({ value: defaultValue, error: e });

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
        const e = validate(value, validator, options);
        if (error && e.status == error.status && e.message == error.message) {
            return;
        }
        setFieldState((v) => {
            return { ...v, error: e };
        });
        fieldGroupManager.setFieldValidity(key, !e.status);
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

function getAccessor(attribute, defaultValue = null, customizer?: IFieldCustomizer) {
    const defValue = defaultValue || '';

    const accessor = customizer?.fieldAccessor ? customizer.fieldAccessor :
        hasDot(attribute) ?
            (d: any, returnDefault?: boolean) => {
                const v = getValueByKey(attribute, d);
                return v ? v : returnDefault ? defValue : '';
            } : (d: any, returnDefault?: boolean) => {
                const v = d?.[attribute];
                return v ? v : returnDefault ? defValue : '';
            };

    if (customizer?.parse) {
        const parse = customizer.parse;
        return (d: any, returnDefault?: boolean) => parse(accessor(d, returnDefault));
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
