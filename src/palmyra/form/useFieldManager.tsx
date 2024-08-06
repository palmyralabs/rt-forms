import { Dispatch, SetStateAction, useCallback, useContext, useState } from "react"
import { IFieldCustomizer, IFieldGroupManager, IFieldManager, IFormFieldError } from "./types"
import { FieldGroupManagerContext, StoreFactoryContext } from "./formContext";
import { FieldOptions, IMutateOptions, IServerLookupOptions } from "./typesFieldOptions";
import { generatePredicate, validate } from "./";
import { BiConsumer, getValueAccessor, getValueByKey, hasDot, setValueByKey, Supplier } from "@palmyralabs/ts-utils";
import { LookupStore } from "@palmyralabs/palmyra-wire";
import { mergeDeep } from "../utils";
import { IServerQueryInput, useServerQuery } from "../wire/ServerQueryManager";

interface FieldStatus {
    value: string,
    error?: IFormFieldError
}


const useFieldManager = (key: string, options: FieldOptions, customizer?: IFieldCustomizer): IFieldManager => {
    const valueAccessor = useCallback(() => getAccessor(key, customizer), [key])();
    const valueWriter = useCallback(() => getWriter(key, customizer), [key])();
    const validator = generatePredicate(options);

    const [fieldState, setFieldState] = useState<FieldStatus>({ value: valueAccessor({}) });
    const fieldGroupManager: IFieldGroupManager = useContext(FieldGroupManagerContext);
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
        return { ...options, ...mutateOptions }
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


    return customizer?.fieldAccessor ? customizer.fieldAccessor :
        hasDot(attribute) ?
            (d: any) => {
                const v = getValueByKey(attribute, d);
                return v ? v : '';
            } : (d: any) => { const v = d?.[attribute]; return v ? v : '' }
}

function getWriter(attribute, customizer?: IFieldCustomizer): BiConsumer<any, any> {
    if (customizer?.fieldWriter) {
        return (formData: any, v: any) => customizer.fieldWriter(v, formData);
    }

    if (hasDot(attribute)) {
        return (formData: any, v: any) => setValueByKey(attribute, formData, v);
    } else {
        return (formData: any, v: any) => setValueByKey(attribute, formData, v);
    }
}

const useServerFieldManager = (key: string,
    options: FieldOptions & IServerLookupOptions,
    customizer?: IFieldCustomizer) => {
    const queryAttribute = options.storeOptions.queryAttribute || options.storeOptions.labelAttribute || "name";
    const fieldManager = useFieldManager(key, options, customizer);
    const store: LookupStore<any> = getLookupStore(options);
    const defaultParams = options.defaultParams

    const serverQueryOptions: IServerQueryInput = {
        store, endPointOptions: options.storeOptions.endPointOptions, fetchAll: true,
        pageSize: options.pageSize || 15, quickSearch: queryAttribute, initialFetch: false,
        defaultParams
    };

    const serverQuery = useServerQuery(serverQueryOptions);

    const idKey = options.storeOptions.idAttribute || options.lookupOptions?.idAttribute || 'id';
    const labelKey = options.storeOptions.labelAttribute || options.lookupOptions?.labelAttribute || 'name';

    const idAccessor = getValueAccessor(idKey);
    const labelAccessor = getValueAccessor(labelKey);

    const hasValueInOptions = (options: any, value: any) => {
        if (options instanceof Array) {
            return options.some((o) => idAccessor(o) == idAccessor(value));
        }
        else return idAccessor(options) == idAccessor(value)
    }

    const getOptionKey = (option: any) => {
        if (typeof option == 'object')
            return idAccessor(option);
        else {
            console.log(option);
        }
        return '';
    }

    const getOptionValue = (option: any) => {
        if (typeof option == 'object')
            return labelAccessor(option);
        else {
            console.log(option);
        }
        return '';
    }

    function getOptionByKey(options: any, id: any): any {
        return options.find((r: any) => {
            if (idAccessor(r) == id) {
                return r;
            }
        })
    }

    return {
        ...fieldManager,
        hasValueInOptions, getOptionValue, getOptionByKey,
        getOptionKey,
        store, searchKey: queryAttribute, defaultParams, serverQuery
    }
}

function getLookupStore(o: IServerLookupOptions): LookupStore<any> {
    const storeFactory = useContext(StoreFactoryContext);
    const queryAttribute = o.storeOptions.queryAttribute || "name";
    var options: any = {};
    mergeDeep(options, o.storeOptions);
    return storeFactory.getLookupStore(options, o.storeOptions.endPoint, queryAttribute);
}

export { useFieldManager, useServerFieldManager };
