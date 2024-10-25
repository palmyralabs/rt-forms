import { useContext, useEffect, useRef, useState } from "react"
import { StoreFactoryContext } from "../formContext";
import { FieldOptions, IServerQueryOptions } from "../typesFieldOptions";
import { useFieldManager } from ".";
import { LookupStore } from "@palmyralabs/palmyra-wire";
import { mergeDeep } from "../../utils";
import { IServerQueryFieldCustomizer, IServerQueryFieldManager, IServerQueryInput, useServerQuery } from "../..";

/**
 * Maintains searchText and  lookup-datalist(options) 
 * onChange of SearchText invoke serverQuery to fetch data 
 * 
 */
const useServerQueryFieldManager = (key: string, o: FieldOptions & IServerQueryOptions,
    customOptions: IServerQueryFieldCustomizer): IServerQueryFieldManager => {

    const total = useRef<number>(0);
    const searchText = useRef<string>('');
    const [options, setOptions] = useState<Array<any>>([]);

    const preProcessSearchText = customOptions?.preProcessSearchText || ((d) => '*' + d + '*');
    const fieldManager = useFieldManager(key, o, customOptions);
    const store: LookupStore<any> = getLookupStore(o);

    const getFieldProps = () => {
        const { lookupOptions, storeOptions, queryOptions, displayAttribute, fetchDefault,
            defaultParams, ...result } = fieldManager.getFieldProps();
        return result;
    }

    const queryAttribute = o.queryOptions?.queryAttribute || o.queryOptions?.labelAttribute || "name";

    const serverQueryOptions: IServerQueryInput = {
        store, storeOptions: o.queryOptions?.storeOptions, fetchAll: true,
        pageSize: o.pageSize || 15, quickSearch: queryAttribute, initialFetch: false,
        defaultParams: o.defaultParams
    };

    const serverQuery = useServerQuery(serverQueryOptions);

    const { setQuickSearch, refresh, getCurrentData, getTotalRecords } = serverQuery

    const data = getCurrentData();
    const totalRecords = getTotalRecords();

    useEffect(() => {
        const result = data ? [...data] : [];

        setOptions(result);

        if (total.current < totalRecords)
            total.current = totalRecords;

    }, [data, totalRecords])

    const setSearchText = (text: string) => {
        searchText.current = text || '';
        refreshOptions();
    }

    function refreshOptions() {
        const txt = searchText.current;
        if (txt.length > 0) {
            setQuickSearch(preProcessSearchText(txt));
        } else {
            if (data) {
                setQuickSearch(null);
            }
            else {
                refresh();
            }
        }
    }

    return {
        ...fieldManager, setSearchText, refreshOptions, options, setOptions, getFieldProps
    }
}

function getLookupStore(o: IServerQueryOptions): LookupStore<any> {
    const storeFactory = useContext(StoreFactoryContext);
    const queryAttribute = o.queryOptions?.queryAttribute || "name";
    var options: any = {};
    mergeDeep(options, o.queryOptions);
    return storeFactory.getLookupStore(options, o.queryOptions.endPoint, queryAttribute);
}

export { useServerQueryFieldManager };
