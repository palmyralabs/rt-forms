import { ExportRequest, IPagination, QueryRequest } from "@palmyralabs/palmyra-wire"

interface IQueryable {
    setQuickSearch: (v: any) => void
    setFilter: (d: any) => void
    resetFilter: () => void,
    refresh: () => void,
    setEndPointOptions: (d: any) => void,
    addFilter: (key: string, v: any) => void,
    getCurrentData: () => Array<any>,
    setSortColumns: (sortOrder: any) => void,
    export: (request: ExportRequest) => void
    isLoading: boolean
}

interface IPageQueryable extends IQueryable {
    setQueryLimit: (d: IPagination) => void
    getQueryLimit: () => IPagination
    gotoPage: (page: number) => void,
    nextPage: () => number,
    prevPage: () => number,
    setPageSize: (recordsPerPage: number) => void
    getPageNo: () => number,
    getQueryRequest: () => QueryRequest,
    getCurrentFilter: () => any,
    getTotalPages: () => number,
    getTotalRecords: () => number
}

export type { IQueryable, IPageQueryable }