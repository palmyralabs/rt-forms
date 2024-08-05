import { MutableRefObject, forwardRef, useImperativeHandle, useRef } from 'react';
import './CardLayout.css';

import CardLayout from './CardLayout';
import { IPageQueryable } from '../../wire/types';
import { IServerQueryInput, useServerQuery } from '../../wire/ServerQueryManager';

interface ServerCardLayoutInput extends IServerQueryInput {
    Child: React.FC,
    childProps?: any,
    listKeyProvider?: (data: any, index: number) => string | number,
    EmptyChild?: React.FC,
    customButton?: React.ReactNode[],
    preProcess?: (data: any) => any
}

const ServerCardLayout = forwardRef(function MuiSelect(props: ServerCardLayoutInput, ref: MutableRefObject<any>) {
    const { Child, childProps } = props;
    const currentRef: MutableRefObject<IPageQueryable> = ref ? ref : useRef(null);

    const { setQueryFilter, refreshData, setSortColumns, setEndPointOptions,
        setQueryLimit, getQueryLimit, data } = useServerQuery(props);


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
            nextPage() {

            },
            prevPage() {

            },
            setSortOptions(d) {
                setSortColumns(d);
            }
        };
    }, [setQueryFilter]);

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

export { ServerCardLayout };
export type { ServerCardLayoutInput }