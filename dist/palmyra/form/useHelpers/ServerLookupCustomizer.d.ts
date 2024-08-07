import { FieldOptions, IServerLookupOptions } from '../typesFieldOptions';

declare const getOptionIdKey: (o: FieldOptions & IServerLookupOptions) => string;
declare const getOptionValueKey: (o: FieldOptions & IServerLookupOptions) => string;
declare const getLookupIdKey: (o: FieldOptions & IServerLookupOptions) => string;
declare const getLookupValueKey: (o: FieldOptions & IServerLookupOptions) => string;
/**
 * convert the selected Option to value in formData
 */
declare const generateFieldWriter: (o: FieldOptions & IServerLookupOptions, { getOptionKey, getOptionValue }: {
    getOptionKey: any;
    getOptionValue: any;
}) => (v: any, data: any) => void;
/**
 * reads value data from formData and convert to Option format
 *
 */
declare const generateFieldAccessor: (o: FieldOptions & IServerLookupOptions) => (formData: any) => any;
export { generateFieldWriter, generateFieldAccessor, getOptionIdKey, getOptionValueKey, getLookupIdKey, getLookupValueKey };
