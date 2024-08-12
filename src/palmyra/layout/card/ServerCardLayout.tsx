import { MutableRefObject, forwardRef, useImperativeHandle, useRef } from 'react';
import './CardLayout.css';

import CardLayout from './CardLayout';
import { IPageQueryable, IServerQueryInput, useServerQuery } from '../../wire';

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

    const serverQuery = useServerQuery(props);


    const listKeyProvider = props.listKeyProvider || ((data, index) => index);

    useImperativeHandle(currentRef, () => {
        return {
            ...serverQuery
        };
    }, [serverQuery]);

    return (
        <div>
            <div className="card-page-container" >
                <CardLayout Child={Child} childKeyProvider={listKeyProvider} preProcess={props.preProcess}
                    dataList={serverQuery.getCurrentData()} childProps={childProps} EmptyChild={props.EmptyChild}
                ></CardLayout>
            </div>
        </div>
    )
});

export { ServerCardLayout };
export type { ServerCardLayoutInput }