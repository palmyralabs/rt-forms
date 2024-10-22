import { MutableRefObject, forwardRef, useImperativeHandle, useRef } from 'react';
import './CardLayout.css';
import { IPageQueryable, IServerQueryInput, useServerQuery } from '../../wire';
import { CardLayout } from './CardLayout';

interface ServerCardLayoutInput extends IServerQueryInput {
    Child: React.FC,
    childProps?: any,
    listKeyProvider?: (data: any, index: number) => string | number,
    EmptyChild?: React.FC,
    Loading?: React.FC,
    title?: string,
    preProcess?: (data: any) => any
}

const ServerCardLayout = forwardRef(function ServerCardLayout(props: ServerCardLayoutInput, ref: MutableRefObject<any>) {
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
                    dataList={serverQuery.getCurrentData()} childProps={childProps} 
                    EmptyChild={props.EmptyChild} Loading={props.Loading} title={props.title}
                ></CardLayout>
            </div>
        </div>
    )
});

export { ServerCardLayout };
export type { ServerCardLayoutInput }