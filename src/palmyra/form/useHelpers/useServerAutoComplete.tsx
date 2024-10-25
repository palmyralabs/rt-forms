import { useEffect } from "react"
import { getValueAccessor } from "@palmyralabs/ts-utils";
import { FieldOptions, IServerQueryOptions } from "../typesFieldOptions";
import { IFieldConverter, IFieldCustomizer, IServerQueryFieldCustomizer } from "../types";
import { useServerQueryFieldManager } from "./useServerQueryFieldManager";

interface ICustomOptions extends IFieldConverter {
    preProcessSearchText?: (d: string) => string
}

const getCustomizer = (o: FieldOptions & IServerQueryOptions,
    customOptions?: ICustomOptions) => {

    const optionKey = o.queryOptions.queryAttribute || o.queryOptions.labelAttribute || 'code';

    const optionValueAccessor = getValueAccessor(optionKey);

    const getOptionValue = (option: any) => {
        if (typeof option == 'object')
            return optionValueAccessor(option);
        else
            return option;
    }

    var customizer: IFieldCustomizer = {}

    if (customOptions) {
        if (customOptions.format)
            customizer.format = customOptions.format;
        if (customOptions.parse)
            customizer.parse = customOptions.parse;
    }

    return { customizer, optionValueAccessor, getOptionValue, optionKey }
}


/**
 * Maintains searchText and  lookup-datalist(options) 
 * onChange of SearchText invoke serverQuery to fetch data
 * DataConversion between options and formData
 * The lookup (options) will be maintained as returned from the serverQuery. 
 * 
 */
const useServerAutoComplete = (key: string, o: FieldOptions & IServerQueryOptions,
    customOptions?: ICustomOptions) => {
    const { customizer, optionValueAccessor, getOptionValue, optionKey } = getCustomizer(o, customOptions);

    const serverQueryOptions: IServerQueryFieldCustomizer = {
        fieldAccessor: customizer.fieldAccessor, fieldWriter: customizer.fieldWriter,
        optionIdAccessor: optionValueAccessor, parse: customizer.parse, format: customizer.format
    };

    const fieldManager = useServerQueryFieldManager(key, o, serverQueryOptions);

    const getFieldProps = () => {
        const { lookupOptions, storeOptions, queryOptions, displayAttribute, fetchDefault,
            defaultParams, ...result } = fieldManager.getFieldProps();
        return result;
    }

    const hasValueInOptions = (option: any, value: any) => {
        return optionValueAccessor(option) == optionValueAccessor(value)
    }

    function getOptionByKey(options: any, id: any): any {
        return options.find((r: any) => {
            if (optionValueAccessor(r) == id) {
                return r;
            }
        })
    }

    const value = fieldManager.getValue();

    useEffect(() => {
        if (value) {
            fieldManager.setOptions([{[optionKey]: value}]);
        }
    }, [value]);


    return {
        ...fieldManager, hasValueInOptions, getOptionValue, getOptionByKey, getFieldProps
    }
}

export { useServerAutoComplete };
