import { getValueAccessor, getValueSetter, setValueByKey } from "@palmyralabs/ts-utils";
import { FieldOptions, IServerLookupOptions } from "../typesFieldOptions";

const getOptionIdKey = (o: FieldOptions & IServerLookupOptions) => {
    return o.storeOptions?.idAttribute || o.lookupOptions?.idAttribute || 'id';
}

const getOptionValueKey = (o: FieldOptions & IServerLookupOptions) => {
    return o.storeOptions?.labelAttribute || o.lookupOptions?.labelAttribute || 'id';
}

const getLookupIdKey = (o: FieldOptions & IServerLookupOptions) => {
    return o.lookupOptions?.idAttribute || o.storeOptions?.idAttribute || 'id';
}

const getLookupValueKey = (o: FieldOptions & IServerLookupOptions) => {
    return o.lookupOptions?.labelAttribute || o.storeOptions?.labelAttribute || 'id';
}

const generateFieldWriter = (o: FieldOptions & IServerLookupOptions,
    { getOptionKey, getOptionValue }
) => {
    const { attribute, displayAttribute, lookupOptions } = o;

    const valueSetter = getValueSetter(attribute);

    if (displayAttribute) {
        return (v: any, data: any) => {
            const key = getOptionKey(v);
            const value = getOptionValue(v);
            setValueByKey(displayAttribute, data, value);
            valueSetter(data, key)
        }
    } else if (lookupOptions) {
        return (v: any, data: any) => {
            const key = getOptionKey(v);
            const value = getOptionValue(v);
            const idKey = lookupOptions.idAttribute;
            const valueKey = lookupOptions.labelAttribute;
            const r = { [idKey]: key, [valueKey]: value };
            valueSetter(data, r);
        }
    } else {
        return (v: any, data: any) => {
            const key = getOptionKey(v);
            valueSetter(data, key)
        }
    }
}


const generateFieldAccessor = (o: FieldOptions & IServerLookupOptions) => {

    const { attribute, displayAttribute, lookupOptions } = o;
    const optionIdKey = getOptionIdKey(o);
    const optionValueKey = getOptionValueKey(o);

    const valueAccessor = getValueAccessor(attribute);
    const optionIdSetter = getValueSetter(optionIdKey);
    const optionValueSetter = getValueSetter(optionValueKey);

    const formatValue = (id: any, value: any) => {
        var result = {};
        optionIdSetter(result, id);
        optionValueSetter(result, value);
        return result;
    }

    if (displayAttribute) {
        const displayAccessor = getValueAccessor(displayAttribute);
        return (formData: any) => {
            const id = valueAccessor(formData);
            if (id) {
                const value = displayAccessor(formData);
                return formatValue(id, value)
            } else
                return ''
        }
    } else if (lookupOptions) {
        const lookupIdKey = getLookupIdKey(o);
        const lookupValueKey = getLookupValueKey(o);

        const idKeyAccessor = getValueAccessor(lookupIdKey);
        const valueKeyAccessor = getValueAccessor(lookupValueKey);

        return (formData: any) => {
            const data = valueAccessor(formData);
            if (data) {
                const key = idKeyAccessor(data);
                const value = valueKeyAccessor(data);
                return formatValue(key, value);
            } else
                return ''
        }
    } else {
        return (formData: any) => {
            return valueAccessor(formData);
        }
    }
}

export {
    generateFieldWriter, generateFieldAccessor,
    getOptionIdKey, getOptionValueKey, getLookupIdKey, getLookupValueKey
}