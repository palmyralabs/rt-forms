import { MutableRefObject, forwardRef, useImperativeHandle, useRef } from 'react';
import './CardLayout.css';

import CardLayout from './CardLayout';
import { IPageQueryable } from '../../wire/types';
import useServerQuery, { IServerQueryInput } from '../../wire/ServerQueryManager';

interface ServerCardLayoutInput extends IServerQueryInput {
    Child: React.FC,
    childProps?: any,
    listKeyProvider?: (data: any, index: number) => string | number,
    EmptyChild?: React.FC,    
    customButton?: React.ReactNode[],
    preProcess?: (data: any) => any
}

const ServerCardLayout = forwardRef(function MuiSelect(props: ServerCardLayoutInput, ref: MutableRefObject<any>) {
    const { Child, childProps, pageSize } = props;
    const currentRef: MutableRefObject<IPageQueryable> = ref ? ref : useRef(null);

    const { setQueryFilter, refreshData, setSortColumns, setEndPointOptions,
        setQuickSearch, gotoPage, setPageSize, setQueryLimit, getQueryLimit,
        data, totalRecords, queryLimit } = useServerQuery(props);


    const listKeyProvider = props.listKeyProvider || ((data, index) => index);

    useImperativeHandle(currentRef, () => {
        return {
            setFilter: (d: any) => {
                setQueryFilter(d);
            },
            refresh: () => {
                refreshData();
            },
            resetFilter() {
                setQueryFilter({});
            },
            setEndPointOptions,
            addFilter: (key: string, v: any) => {
                setQueryFilter((f: any) => {
                    f[key] = v;
                    return { ...f }
                })
            },
            setQueryLimit,
            getQueryLimit,
            getCurrentData: () => {
                return data;
            },
            setSortOptions(d) {
                setSortColumns(d);
            }
        };
    }, [setQueryFilter]);


    // const nextPage = (event, newPage) => {
    //     gotoPage(newPage - 1);
    // };

    // const handleFilter = (event) => {
    //     const val = event.target.value;
    //     setQuickSearch(val);
    // };

    // const handleRowsPerPageChange = (event) => {
    //     const limit = parseInt(event.target.value, 10);
    //     setPageSize(limit);
    // }

    // const width = 200;
    // const visiblePagination = !!pageSize;
    // const totalPages = Math.ceil(totalRecords / queryLimit.limit);

    return (
        <div>
            <div className="card-page-container" >
                <CardLayout Child={Child} childKeyProvider={listKeyProvider} preProcess={props.preProcess}
                    dataList={data} childProps={childProps} EmptyChild={props.EmptyChild}
                ></CardLayout>
            </div>
        </div>
    )
});

export default ServerCardLayout;
export type { ServerCardLayoutInput }