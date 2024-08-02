import { IPagination } from "@palmyralabs/palmyra-wire"

interface IQueryable {
    setFilter: (d: any) => void
    resetFilter: () => void,
    refresh: () => void,
    setEndPointOptions: (d: any) => void,
    addFilter: (key: string, v: any) => void,
    setSortOptions: (d: any) => void
    getCurrentData: () => Array<any>
}

interface IPageQueryable extends IQueryable {
    setQueryLimit: (d: IPagination) => void
    getQueryLimit: () => IPagination
}

export type { IQueryable, IPageQueryable }