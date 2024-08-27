import { DefaultQueryParams, AbstractQueryStore, IEndPointOptions, IEndPoint, ExportRequest } from '@palmyralabs/palmyra-wire';
import { IPageQueryable } from './types';

type ExportStore = {
    export?(request: ExportRequest): void;
};
interface IServerQueryInput {
    store?: AbstractQueryStore<any> & ExportStore;
    fields?: string[];
    endPoint?: IEndPoint;
    endPointOptions?: IEndPointOptions;
    fetchAll?: boolean;
    defaultParams?: DefaultQueryParams;
    onDataChange?: (newData: any[], oldData?: any[]) => void;
    pageSize?: number | number[];
    quickSearch?: string;
    filterTopic?: string;
    initialFetch?: boolean;
}
declare const useServerQuery: (props: IServerQueryInput) => IPageQueryable;
export { useServerQuery };
export type { IServerQueryInput };
