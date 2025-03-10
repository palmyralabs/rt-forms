import { useContext, useEffect, useRef, useState } from 'react';
import { DefaultQueryParams, AbstractQueryStore, IPagination, QueryRequest, IEndPoint, GridStore, ExportRequest, StoreOptions, strings } from '@palmyralabs/palmyra-wire';
import { useKeyValue } from '../utils';
import { IPageQueryable } from './types';
import { StoreFactoryContext } from '../form';

const SERVER_QUERY_MIN_DELAY_MS = 120;

type ExportStore = {
  export?(request: ExportRequest): void;
}

interface IServerQueryInput {
  store?: AbstractQueryStore<any> & ExportStore,
  fields?: string[]
  endPoint?: IEndPoint,
  storeOptions?: StoreOptions,
  fetchAll?: boolean,
  defaultParams?: DefaultQueryParams,
  onDataChange?: (newData: any[], oldData?: any[]) => void,
  pageSize?: number | number[],
  quickSearch?: string,
  filterTopic?: string,
  initialFetch?: boolean,
  initParams?: {
    filter?: Record<any, any>,
    sort?: strings,
    limit?: number,
    offset?: number
  }
}

function getGridStore(o: IServerQueryInput): GridStore<any> {
  if (o.endPoint) {
    const storeFactory = useContext(StoreFactoryContext);
    if (!storeFactory) {
      throw new Error("@palmyralabs/rt-forms - StoreFactoryContext is not available");
    }
    return storeFactory.getGridStore(o.storeOptions, o.endPoint);
  } else {
    throw new Error("Either store or endPoint must be provided");
  }
}

interface Result {
  total: number | null | undefined,
  data: any,
  isLoading: boolean
}

const useServerQuery = (props: IServerQueryInput): IPageQueryable => {
  const { quickSearch, initialFetch = true } = props;
  const queryTimeRef = useRef<Date>(null);
  const store = props.store || getGridStore(props);
  const fetchAll = props.fetchAll != false;
  const defaultFilter = props.defaultParams?.filter || {};
  const defaultSort = props.defaultParams?.sort || {};
  const pageSize = props.pageSize ? props.pageSize : 15;
  var defaultPageSize = pageSize instanceof Array ? pageSize[0] : pageSize;

  const f = props.initParams?.filter || {};
  const limit = props.initParams?.limit || defaultPageSize;
  const offset = props.initParams?.offset || 0;
  const sort = props.initParams?.sort || {};
  const initialFilter = { ...f, ...defaultFilter };

  const [filter, _setFilter] = props.filterTopic ? useKeyValue(props.filterTopic, initialFilter)
    : useState<any>(initialFilter);

  const [endPointVars, setEndPointOptions] = useState(props.storeOptions?.endPointOptions);
  const [sortOrder, setSortOrder] = useState(sort);
  const [queryLimit, setQueryLimit] = useState<IPagination>({ limit, offset, total: true });
  const [serverResult, setServerResult] = useState<Result>({ total: null, isLoading: false, data: null });

  const gotoPage = (pageNo: number) => {
    setQueryLimit((q) => {
      return { limit: q.limit, total: q.total, offset: (pageNo * q.limit) }
    });
  };

  const setPageSize = (pageSize: number) => {
    const limit: number = (pageSize > 0 || pageSize == -1) ? pageSize : 15;
    setQueryLimit((q) => {
      const offset: number = Math.floor(q.offset / limit) * limit;
      return { limit, total: q.total, offset: offset }
    });
  }

  const isEmptyFilter = () => {
    if (filter) {
      return 0 == Object.keys(filter).length;
    }
    return false;
  }

  const setResult = (result: any, total: any) => {
    setServerResult((old: Result) => {
      setTimeout(() => {
        if (props.onDataChange) {
          props.onDataChange(result, old.data);
        }
      }, 100)
      return { data: result, total: total, isLoading: false };
    })
  }

  const setEmptyData = () => setResult([], 0);
  const setNoData = () => setResult(undefined, null);
  const resetFilter = () => setFilter({})
  const getPageNo = () => Math.round(queryLimit.offset / queryLimit.limit);
  const getQueryLimit = () => queryLimit;

  const setLoading = () => {
    setServerResult((d: Result) => {
      return { ...d, isLoading: true }
    })
  }

  useEffect(() => {
    if (fetchAll || !isEmptyFilter())
      refresh();
  }, [queryLimit, sortOrder, endPointVars])

  const getQueryRequest = (): QueryRequest => {
    const _sort = sortOrder && Object.keys(sortOrder).length > 0 ? sortOrder : defaultSort;
    const params: QueryRequest = {
      sortOrder: _sort, total: true, endPointVars,
      ...queryLimit, filter: { ...filter, ...defaultFilter }
    };
    return params;
  }

  const refresh = () => {
    const params: QueryRequest = getQueryRequest();

    if (null != queryTimeRef.current) {
      const curDate = new Date();
      const prevDate = queryTimeRef.current;
      const diff = curDate.getTime() - prevDate.getTime();
      if (diff < SERVER_QUERY_MIN_DELAY_MS) {
        if (!serverResult.isLoading) {
          console.warn('ServerQueryManager: refresh called within short interval'
            + diff);
        }
        return;
      }
    } else if (!initialFetch) {
      queryTimeRef.current = new Date(new Date().getTime() - 60000);
      return;
    }

    if (store) {
      try {
        queryTimeRef.current = new Date();
        setLoading();
        store.query(params).then((d) => {
          setResult(d.result, d.total);
        }).catch((e) => {
          var r = e.response ? e.response : e;
          console.error("error while fetching", r);
          setNoData();
        });
      } catch (e) {
        console.error(e);
        setEmptyData();
      }
    } else {
      console.error("Store is not provided for the Grid");
      setEmptyData();
    }
  }

  const setQuickSearch = (val: any) => {
    const key = quickSearch;
    if (val)
      _setFilter((f: any) => {
        f[key] = val;
        return { ...f }
      });
    else {
      _setFilter((f: any) => {
        delete f[key];
        return { ...f };
      });
    }
    gotoPage(0);
  };

  const setFilter = (filter) => {
    if (typeof filter == 'function' || filter && Object.keys(filter).length > 0)
      _setFilter(filter);
    else {
      _setFilter({});
    }
    gotoPage(0);
  };

  const addFilter = (key: string, v: any) => {
    _setFilter((f: any) => {
      f[key] = v;
      return { ...f }
    })
    gotoPage(0);
  }

  const setSortColumns = (sortOrder: any) => {
    setSortOrder(sortOrder);
  }

  const nextPage = (): number => {
    const pageNo = getPageNo();
    if (pageNo < getTotalPages()) {
      const nextPage:number = pageNo + 1
      gotoPage(nextPage);
      return nextPage;
    }
    return -1;
  }

  const getTotalPages = (): number => {
    return Math.ceil(serverResult?.total / (queryLimit.limit || 25));
  }

  const prevPage = (): number => {
    const pageNo = getPageNo();
    if (pageNo > 0) {
      const prevPage:number = pageNo - 1
      gotoPage(prevPage);
      return prevPage;
    }
    return -1;
  }

  const exportResult = (request: ExportRequest) => {
    if (store.export)
      store.export(request);
    else
      console.warn('Store does not implement export method');
  }

  return {
    addFilter, resetFilter, setFilter, setQuickSearch,
    setSortColumns, setEndPointOptions, getTotalPages,
    refresh, setPageSize, getPageNo, getQueryLimit, setQueryLimit,
    gotoPage, nextPage, prevPage, export: exportResult,
    getQueryRequest, 
    getCurrentFilter: () => filter, getTotalRecords: () => serverResult?.total,
    getCurrentData: () => serverResult?.data, isLoading: serverResult.isLoading
  }
};

export { useServerQuery };
export type { IServerQueryInput };