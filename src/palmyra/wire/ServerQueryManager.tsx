import { useEffect, useRef, useState } from 'react';
import { DefaultQueryParams, AbstractQueryStore, IPagination, QueryRequest, IEndPointOptions } from '@palmyralabs/palmyra-wire';
import { useKeyValue } from '../utils';

interface IServerQueryInput {
  store: AbstractQueryStore<any>,
  onDataChange?: (newData: any[], oldData?: any[]) => void,
  pageSize?: number | number[],
  quickSearch?: string,
  endPointOptions?: IEndPointOptions,
  defaultParams?: DefaultQueryParams,
  fetchAll?: boolean,
  filterTopic?: string,
  initialFetch?: boolean
}

const useServerQuery = (props: IServerQueryInput) => {
  const { store, quickSearch, } = props;
  const fetchAll = props.fetchAll != false;
  const [endPointVars, setEndPointOptions] = useState(props.endPointOptions);
  const [totalRecords, setTotalRecords] = useState(null);

  const defaultFilter = props.defaultParams?.filter || {};
  const defaultSort = props.defaultParams?.sort || {};

  const [filter, setFilter] = props.filterTopic
    ? useKeyValue(props.filterTopic, defaultFilter)
    : useState<any>(defaultFilter);

  const [sortOrder, setSortOrder] = useState({});

  const firstRun = useRef<Boolean>(props.initialFetch == false);

  const pageSize = props.pageSize ? props.pageSize : 15;

  var pageSizeOptions = pageSize instanceof Array ? pageSize : [pageSize];
  var defaultPageSize = pageSize instanceof Array ? pageSize[0] : pageSize;

  const [queryLimit, setQueryLimit] = useState<IPagination>({ limit: defaultPageSize, offset: 0, total: true });
  const [data, setData] = useState(null);

  const getPageNo = () => {
    return Math.round(queryLimit.offset / queryLimit.limit);
  }

  const getQueryLimit = () => {
    return queryLimit;
  }

  const gotoPage = (pageNo: number) => {
    setQueryLimit((q) => {
      return { limit: q.limit, total: q.total, offset: (pageNo * q.limit) }
    });
  };

  const setPageSize = (pageSize: number) => {
    const limit: number = (pageSize > 10 || pageSize == -1) ? pageSize : 15;

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

  const setResult = (result: any) => {
    setData((old: any) => {
      setTimeout(() => {
        if (props.onDataChange) {
          props.onDataChange(result, old);
        }
      }, 300)
      return result;
    })
  }

  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }

    if (fetchAll || !isEmptyFilter())
      refreshData();

  }, [queryLimit, sortOrder, endPointVars])

  const getQueryRequest = (): QueryRequest => {
    const _sort = sortOrder && Object.keys(sortOrder).length > 0 ? sortOrder : defaultSort;

    const params: QueryRequest = {
      sortOrder: _sort, total: true, endPointVars,
      ...queryLimit, filter: { ...filter, ...defaultFilter }
    };

    return params;
  }

  const refreshData = () => {
    const params: QueryRequest = getQueryRequest();

    if (store) {
      try {
        store.query(params).then((d) => {
          setResult(d.result);
          setTotalRecords(d.total);
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

  const setEmptyData = () => {
    setResult([]);
    setTotalRecords(0);
  }

  const setNoData = () => {
    setResult(undefined);
    setTotalRecords(null);
  }

  const setQuickSearch = (val: any) => {
    const key = quickSearch;
    if (val)
      setFilter((f: any) => {
        f[key] = val;
        return { ...f }
      });
    else {
      setFilter((f: any) => {
        delete f[key];
        return { ...f };
      });
    }
    gotoPage(0);
  };

  const setQueryFilter = (filter) => {
    if (typeof filter == 'function' || filter && Object.keys(filter).length > 0)
      setFilter(filter);
    else {
      setFilter({});
    }
    gotoPage(0);
  };

  const setSortColumns = (sortOrder) => {
    setSortOrder(sortOrder);
  }

  return {
    setQueryFilter, setQuickSearch, setSortColumns, setEndPointOptions,
    refreshData, gotoPage, setPageSize, getPageNo, getQueryLimit, setQueryLimit,
    getQueryRequest, filter, queryLimit, data, totalRecords, pageSizeOptions
  }

};


const usePageableServerQuery = (props: IServerQueryInput) => {
  const query = useServerQuery(props);

  const { getPageNo, gotoPage } = query;

  const nextPage = (): boolean => {
    const pageNo = getPageNo();
    if (pageNo < getTotalPages()) {
      gotoPage(getPageNo() + 1);
      return true;
    }
    return false;
  }

  const getTotalPages = (): number => {
    return Math.ceil(query.totalRecords / query.queryLimit.limit);
  }

  const prevPage = (): boolean => {
    const pageNo = getPageNo();
    if (pageNo > 0) {
      gotoPage(pageNo - 1);
      return true;
    }
    return false;
  }

  return { ...query, nextPage, prevPage, getTotalPages }
}

export { useServerQuery, usePageableServerQuery, };
export type { IServerQueryInput };