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
    // const init = useRef<string>();
    const fieldGroupManager: IFieldGroupManager = useContext(FieldGroupManagerContext);
    if (!fieldGroupManager)
        throw Error('useFieldManager must be called within the scope of <PalmyraForm>')

    const [mutateOptions, setMutateOptions] = useState<IMutateOptions>({});
    const options = { ...fieldOptions, ...mutateOptions };

    const rawValueAccessor = getRawValueAccessor(key);
    const valueFormatter = getValueFormatter(customizer);
    const valueAccessor = (d: any) => valueFormatter(rawValueAccessor(d));
    const valueWriter = useCallback(() => getWriter(key, customizer), [key])();
    const validator = generatePredicate(options);

    const providedValue = fieldGroupManager.getFieldRawData(rawValueAccessor);

    const defState = getDefaultState(providedValue, options,
        customizer, validator, valueAccessor, valueFormatter);

    const [fieldState, setFieldState] = useState<FieldStatus>(defState);

    useEffect(() => {
        if (providedValue != undefined)
            refreshError();
    }, [mutateOptions]);

    // useEffect(() => {
    //     init.current = 'done';
    //     return () => { init.current = null }
    // }, []);

    const value = fieldState.value;
    const error = fieldState.error;

    const getValue = () => value;
    const getError = () => {
        if (undefined != error && error.showError)
            return error;
        return { status: false, message: '' }
    };

    const getValidator = () => {
        return validator;
    }

    const setValue = (v: Dispatch<SetStateAction<any>>, propagate = true, showError = true) => {
        const d: any = (typeof v == 'function') ? v(value) : v;

        if (propagate && d !== value)
            fieldGroupManager.setFieldData(key, d);

        const newError = validate(d, validator, options);

        if (d === value && error && newError.status == error.status && newError.message == error.message) {
            return;
        }
        fieldGroupManager.setFieldValidity(key, !newError.status);
        newError.showError = showError;
        setFieldState({ value: d, error: newError });
    }

    const refreshError = () => {
        const e = validate(value, validator, options);
        if (error && error.showError && e.status == error.status && e.message == error.message) {
            return;
        }
        e.showError = true;
        setFieldState((v) => {
            return { ...v, error: e };
        });

    }

    useEffect(() => {
        const { error, value } = fieldState;
        fieldGroupManager.setFieldData(key, value);
        fieldGroupManager.setFieldValidity(key, !error.status);
    }, [fieldState])

    const getFieldProps: Supplier<FieldOptions> = () => {
        const { invalidMessage, missingMessage,
            validator, regExp, validRule, validFn,
            defaultValue,
            ...result } = options;
        return { ...result, ...mutateOptions }
    }

    const isValid = () => {
        if (undefined == fieldState.error) {
            const e = validate(value, validator, options);
            return !e.status;
        }
        return !fieldState.error?.status
    }

    const fieldManager: IFieldManager = {
        getValidator, getValue, setValue, valueAccessor, valueWriter, rawValueAccessor,
        isValid, getError, refreshError, mutateOptions, setMutateOptions, getFieldProps
    }

    fieldGroupManager.registerFieldManager(fieldManager, options);
    if (undefined == providedValue) {
        if (fieldOptions.defaultValue) {
            fieldGroupManager.setFieldData(key, fieldState.value);
        }
    }
    if (fieldState.error?.status)
        fieldGroupManager.setFieldValidity(key, fieldState.error?.status)
    return fieldManager;
}

export { useFieldManager };




function getRawValueAccessor(attribute: string, customizer?: IFieldCustomizer) {

    const rawAccessor = customizer?.fieldAccessor ? customizer.fieldAccessor :
        hasDot(attribute) ?
            (d: any) => {
                return getValueByKey(attribute, d);
            } : (d: any) => {
                return d?.[attribute];
            };

    return rawAccessor;
}

function getValueFormatter(customizer?: IFieldCustomizer) {
    if (customizer?.parse) {
        const parse = customizer.parse;
        return (rawValue: any) => parse(rawValue);
    }
    return (rawValue: any) => {
        return rawValue != undefined ? rawValue : '';
    }
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


const getDefaultState = (providedValue, options,
    customizer, validator, valueAccessor, valueFormatter) => {
    var defaultValue = null;
    var e: IFormFieldError = undefined;
    if (providedValue == undefined) {
        if (options.defaultValue != undefined) {
            defaultValue = customizer?.parse ? customizer.parse(options.defaultValue) : options.defaultValue;
        } else {
            defaultValue = valueAccessor({});
        }
    } else {
        defaultValue = valueFormatter(providedValue);
    }
    e = validate(defaultValue, validator, options);
    if (e.status)
        e.showError = providedValue != undefined || options.defaultValue != undefined;

    return { value: defaultValue, error: e };
}
