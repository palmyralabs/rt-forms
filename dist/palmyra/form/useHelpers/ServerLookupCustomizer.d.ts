import { FieldOptions, IServerLookupOptions } from '../typesFieldOptions';
interface LookupOptions {
    displayAttribute?: string;
    idAttribute?: string;
    labelAttribute?: string;
}
type options = {
    lookupOptions: LookupOptions;
};
type ModdedServerLookupOptions = Omit<IServerLookupOptions, 'lookupOptions'> & options;
declare const getOptionIdKey: (o: FieldOptions & ModdedServerLookupOptions) => string;
declare const getOptionValueKey: (o: FieldOptions & ModdedServerLookupOptions) => string;
declare const getLookupIdKey: (o: FieldOptions & ModdedServerLookupOptions) => string;
declare const getLookupValueKey: (o: FieldOptions & ModdedServerLookupOptions) => string;
/**
 * convert the selected Option to value in formData
 */
declare const generateFieldWriter: (o: FieldOptions & ModdedServerLookupOptions, { getOptionKey, getOptionValue }: {
    getOptionKey: any;
    getOptionValue: any;
}) => (v: any, data: any) => void;
/**
 * reads value data from formData and convert to Option format
 *
 */
declare const generateFieldAccessor: (o: FieldOptions & IServerLookupOptions) => (formData: any) => {};
export { generateFieldWriter, generateFieldAccessor, getOptionIdKey, getOptionValueKey, getLookupIdKey, getLookupValueKey };
