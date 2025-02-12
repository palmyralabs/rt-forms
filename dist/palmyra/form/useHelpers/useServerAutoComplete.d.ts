import { FieldOptions, IServerQueryOptions } from '../typesFieldOptions';
import { IFieldConverter } from '../types';
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
declare const useServerAutoComplete: (key: string, o: FieldOptions & IServerQueryOptions, customOptions?: ICustomOptions) => {
    hasValueInOptions: (option: any, value: any) => boolean;
    getOptionValue: (option: any) => any;
    getOptionByKey: (options: any, id: any) => any;
    getFieldProps: () => any;
    setSearchText: (text: string) => void;
    refreshOptions: () => void;
    options: any[];
    setOptions: import('react').Dispatch<import('react').SetStateAction<any[]>>;
    getValue: import('@palmyralabs/ts-utils').Supplier<any>;
    setValue: (v: any) => void;
    isValid: () => boolean;
    getError: import('@palmyralabs/ts-utils').Supplier<import('..').IFormFieldError>;
    refreshError: (force?: boolean) => void;
    mutateOptions: import('..').IMutateOptions;
    setMutateOptions: import('react').Dispatch<import('react').SetStateAction<import('..').IMutateOptions>>;
    getValidator: import('@palmyralabs/ts-utils').Supplier<(v: any) => import('@palmyralabs/ts-predicates').PredicateResponse>;
    rawValueAccessor: (d: any) => any;
    valueAccessor: (d: any) => any;
    valueWriter: (formData: any, value: any) => void;
    setError: (errorMsg: string, showError?: boolean) => void;
};
export { useServerAutoComplete };
