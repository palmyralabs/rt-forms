import { IFieldConverter } from '../types';
import { FieldOptions, IServerLookupOptions } from '../typesFieldOptions';

interface ICustomOptions extends IFieldConverter {
    preProcessSearchText?: (d: string) => string;
}
/**
 * Maintains searchText and  lookup-datalist(options)
 * onChange of SearchText invoke serverQuery to fetch data
 * DataConversion between options and formData
 * The lookup (options) will be maintained as returned from the serverQuery.
 *
 */
declare const useServerLookupFieldManager: (key: string, o: FieldOptions & IServerLookupOptions, customOptions?: ICustomOptions) => {
    searchText: string;
    setSearchText: import('react').Dispatch<import('react').SetStateAction<string>>;
    refreshOptions: () => void;
    options: any[];
    hasValueInOptions: (option: any, value: any) => boolean;
    getOptionValue: (option: any) => any;
    getOptionByKey: (options: any, id: any) => any;
    getOptionKey: (option: any) => any;
    getFieldProps: () => any;
    getValue: import('@palmyralabs/ts-utils').Supplier<any>;
    setValue: (v: any, skipValidation?: Boolean, propagate?: boolean) => void;
    isValid: () => boolean;
    getError: import('@palmyralabs/ts-utils').Supplier<import('../types').IFormFieldError>;
    refreshError: (force?: boolean) => void;
    mutateOptions: import('../typesFieldOptions').IMutateOptions;
    setMutateOptions: import('react').Dispatch<import('react').SetStateAction<import('../typesFieldOptions').IMutateOptions>>;
    getValidator: import('@palmyralabs/ts-utils').Supplier<(v: any) => import('@palmyralabs/ts-predicates').PredicateResponse>;
    valueAccessor: import('@palmyralabs/ts-utils').IFunction<any, any>;
    valueWriter: (formData: any, value: any) => void;
};
export { useServerLookupFieldManager };
