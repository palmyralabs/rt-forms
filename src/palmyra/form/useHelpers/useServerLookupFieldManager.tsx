import { useContext, useEffect, useRef, useState } from "react"
import { IFieldConverter, IFieldCustomizer } from "../types"
import { StoreFactoryContext } from "../formContext";
import { FieldOptions, IServerLookupOptions } from "../typesFieldOptions";
import { useFieldManager } from "./";
import { getValueAccessor } from "@palmyralabs/ts-utils";
import { LookupStore } from "@palmyralabs/palmyra-wire";
import { mergeDeep } from "../../utils";
import { IServerQueryInput, useServerQuery } from "../../";
import { generateFieldAccessor, generateFieldWriter, getOptionIdKey, getOptionValueKey } from "./ServerLookupCustomizer";


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
            console.log(option);
        }
        return '';
    }

    const getOptionValue = (option: any) => {
        if (typeof option == 'object')
            return optionLabelAccessor(option);
        else if (option != '') {
            console.log(option);
        }
        return '';
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

    const total = useRef<number>(0);
    const [searchText, setSearchText] = useState<string>('');
    const [options, setOptions] = useState<Array<any>>([]);

    const preProcessSearchText = customOptions?.preProcessSearchText || ((d) => '*' + d + '*');

    const { customizer, optionIdAccessor, getOptionKey, getOptionValue } = getCustomizer(o, customOptions);

    const fieldManager = useFieldManager(key, o, customizer);
    const store: LookupStore<any> = getLookupStore(o);

    const getFieldProps = () => {
        const { lookupOptions, storeOptions, displayAttribute, ...result } = fieldManager.getFieldProps();
        return result;
    }

    const queryAttribute = o.storeOptions.queryAttribute || o.storeOptions.labelAttribute || "name";

    const serverQueryOptions: IServerQueryInput = {
        store, endPointOptions: o.storeOptions.endPointOptions, fetchAll: true,
        pageSize: o.pageSize || 15, quickSearch: queryAttribute, initialFetch: false,
        defaultParams: o.defaultParams
    };

    const serverQuery = useServerQuery(serverQueryOptions);


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

    const { setQuickSearch, refreshData, data, totalRecords } = serverQuery

    useEffect(() => {
        const result = data ? [...data] : [];

        setOptions(result);

        if (total.current < totalRecords)
            total.current = totalRecords;

    }, [data, totalRecords])

    const value = fieldManager.getValue();

    useEffect(() => {
        if (value && typeof value == 'object') {
            setOptions([value]);
        }
    }, [value]);

    useEffect(() => {
        refreshOptions();
    }, [searchText]);

    function refreshOptions() {
        if (searchText.length > 0) { //&& searchText != labelAccessor(getValue())) {
            setQuickSearch(preProcessSearchText(searchText));
        } else {
            if (data) {
                setQuickSearch(null);
            }
            else {
                refreshData();
            }
        }
    }

    return {
        ...fieldManager, searchText, setSearchText, refreshOptions, options,
        hasValueInOptions, getOptionValue, getOptionByKey, getOptionKey, getFieldProps
    }
}

function getLookupStore(o: IServerLookupOptions): LookupStore<any> {
    const storeFactory = useContext(StoreFactoryContext);
    const queryAttribute = o.storeOptions.queryAttribute || "name";
    var options: any = {};
    mergeDeep(options, o.storeOptions);
    return storeFactory.getLookupStore(options, o.storeOptions.endPoint, queryAttribute);
}

export { useServerLookupFieldManager };
