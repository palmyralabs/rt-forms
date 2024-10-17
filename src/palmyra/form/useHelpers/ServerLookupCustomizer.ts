import { getValueAccessor, getValueSetter, setValueByKey } from "@palmyralabs/ts-utils";
import { FieldOptions, IServerLookupOptions } from "../typesFieldOptions";

interface LookupOptions {
    displayAttribute?: string,
    idAttribute?: string,
    labelAttribute?: string
}

type options = {
    lookupOptions: LookupOptions;
}

type ModdedServerLookupOptions = Omit<IServerLookupOptions, 'lookupOptions'> & options

const getOptionIdKey = (o: FieldOptions & ModdedServerLookupOptions) => {
    return o.queryOptions?.idAttribute || o.lookupOptions?.idAttribute || 'id';
}

const getOptionValueKey = (o: FieldOptions & ModdedServerLookupOptions) => {
    return o.queryOptions?.labelAttribute || o.lookupOptions?.labelAttribute || 'id';
}

const getLookupIdKey = (o: FieldOptions & ModdedServerLookupOptions) => {
    return o.lookupOptions?.idAttribute || o.queryOptions?.idAttribute || 'id';
}

const getLookupValueKey = (o: FieldOptions & ModdedServerLookupOptions) => {
    return o.lookupOptions?.labelAttribute || o.queryOptions?.labelAttribute || 'id';
}


/**
 * convert the selected Option to value in formData
 */

const generateFieldWriter = (o: FieldOptions & ModdedServerLookupOptions,
    { getOptionKey, getOptionValue }
) => {
    const { attribute, lookupOptions } = o;

    const valueSetter = getValueSetter(attribute);

    if (lookupOptions?.displayAttribute) {
        return (v: any, data: any) => {
            const key = getOptionKey(v);
            const value = getOptionValue(v);
            setValueByKey(lookupOptions.displayAttribute, data, value);
            valueSetter(data, key)
        }
    } else if (lookupOptions?.idAttribute) {
        return (v: any, data: any) => {
            if (typeof v != 'object') {
                valueSetter(data, '');
            } else {
                const key = getOptionKey(v);
                const value = getOptionValue(v);
                const idKey = lookupOptions.idAttribute;
                const valueKey = lookupOptions.labelAttribute;
                const r = { [idKey]: key, [valueKey]: value };
                valueSetter(data, r);
            }
        }
    } else {
        throw new Error('lookupOptions must be provided in the field options')
    }
}

/**
 * reads value data from formData and convert to Option format
 * 
 */
const generateFieldAccessor = (o: FieldOptions & IServerLookupOptions) => {

    const { attribute } = o;
    const lookupOptions: LookupOptions = o.lookupOptions;
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

    if (lookupOptions?.displayAttribute) {
        const displayAccessor = getValueAccessor(lookupOptions.displayAttribute);
        return (formData: any) => {
            const id = valueAccessor(formData);
            if (id) {
                const value = displayAccessor(formData);
                return formatValue(id, value)
            } else
                return null;
        }
    } else if (lookupOptions?.idAttribute) {
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
                return null;
        }
    } else {
        throw new Error('lookupOptions must be provided in the field options')
    }
}

export {
    generateFieldWriter, generateFieldAccessor,
    getOptionIdKey, getOptionValueKey, getLookupIdKey, getLookupValueKey
}