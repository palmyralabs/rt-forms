import { DefaultQueryParams, AbstractQueryStore, IEndPointOptions } from '@palmyralabs/palmyra-wire';
import { IPageQueryable } from './types';

interface IServerQueryInput {
    store: AbstractQueryStore<any>;
    onDataChange?: (newData: any[], oldData?: any[]) => void;
    pageSize?: number | number[];
    quickSearch?: string;
    endPointOptions?: IEndPointOptions;
    defaultParams?: DefaultQueryParams;
    fetchAll?: boolean;
    filterTopic?: string;
    initialFetch?: boolean;
}
declare const useServerQuery: (props: IServerQueryInput) => IPageQueryable;
export { useServerQuery };
export type { IServerQueryInput };
