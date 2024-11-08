import { useEffect } from "react"
import { IFieldConverter, IFieldCustomizer, IServerQueryFieldCustomizer } from "../types"
import { FieldOptions, IServerLookupOptions } from "../typesFieldOptions";
import { getValueAccessor } from "@palmyralabs/ts-utils";
import { generateFieldAccessor, generateFieldWriter, getOptionIdKey, getOptionValueKey } from "./ServerLookupCustomizer";
import { useServerQueryFieldManager } from "./useServerQueryFieldManager";

interface ICustomOptions extends IFieldConverter {
    preProcessSearchText?: (d: string) => string
}

const getCustomizer = (o: FieldOptions & IServerLookupOptions,
    customOptions?: ICustomOptions) => {
    const optionIdAccessor = getValueAccessor(getOptionIdKey(o));
    const optionLabelAccessor = getValueAccessor(getOptionValueKey(o));

    const getOptionKey = (option: any) => {
        if (typeof option == 'object')
            return optionIdAccessor(option);
        else {
            if (option != '')
                console.warn('getOptionKey', option)
            return option;
        }
    }

    const getOptionValue = (option: any) => {
        if (typeof option == 'object')
            return optionLabelAccessor(option);
        else {
            if (option != '')
                console.warn('getOptionValue', option)
            return option;
        }
    }

    const fieldAccessor = generateFieldAccessor(o);
    const fieldWriter = generateFieldWriter(o, { getOptionKey, getOptionValue });

    var customizer: IFieldCustomizer = {
        fieldAccessor, fieldWriter
    }

    if (customOptions) {
        if (customOptions.format)
            customizer.format = customOptions.format;
        if (customOptions.parse)
            customizer.parse = customOptions.parse;
    }

    return { customizer, optionIdAccessor, getOptionKey, getOptionValue }
}


/**
 * Maintains searchText and  lookup-datalist(options) 
 * onChange of SearchText invoke serverQuery to fetch data
 * DataConversion between options and formData
 * The lookup (options) will be maintained as returned from the serverQuery. 
 * 
 */
const useServerLookupFieldManager = (key: string, o: FieldOptions & IServerLookupOptions,
    customOptions?: ICustomOptions) => {
    const { customizer, optionIdAccessor, getOptionKey, getOptionValue } = getCustomizer(o, customOptions);

    const serverQueryOptions: IServerQueryFieldCustomizer = {
        fieldAccessor: customizer.fieldAccessor, fieldWriter: customizer.fieldWriter, optionIdAccessor,
        parse: customizer.parse, format: customizer.format
    };

    const fieldManager = useServerQueryFieldManager(key, o, serverQueryOptions);

    const getFieldProps = () => {
        const { lookupOptions, storeOptions, queryOptions, displayAttribute, fetchDefault,
            defaultParams, ...result } = fieldManager.getFieldProps();
        return result;
    }

    const hasValueInOptions = (option: any, value: any) => {
        return optionIdAccessor(option) == optionIdAccessor(value)
    }

    function getOptionByKey(options: any, id: any): any {
        return options.find((r: any) => {
            if (optionIdAccessor(r) == id) {
                return r;
            }
        })
    }

    const value = fieldManager.getValue();

    useEffect(() => {
        if (value && typeof value == 'object') {
            fieldManager.setOptions([value]);
        }
    }, [value]);


    return {
        ...fieldManager, hasValueInOptions, getOptionValue, getOptionByKey, getOptionKey, getFieldProps
    }
}

export { useServerLookupFieldManager };
