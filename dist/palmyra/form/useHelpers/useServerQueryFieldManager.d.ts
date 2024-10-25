import { FieldOptions, IServerQueryOptions } from '../typesFieldOptions';
import { IServerQueryFieldCustomizer, IServerQueryFieldManager } from '../..';
/**
 * Maintains searchText and  lookup-datalist(options)
 * onChange of SearchText invoke serverQuery to fetch data
 *
 */
declare const useServerQueryFieldManager: (key: string, o: FieldOptions & IServerQueryOptions, customOptions: IServerQueryFieldCustomizer) => IServerQueryFieldManager;
export { useServerQueryFieldManager };
