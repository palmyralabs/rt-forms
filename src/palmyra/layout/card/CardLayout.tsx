import { ReactNode } from 'react';
import '../card/CardLayout.css';
import { EmptyChildCard, NoopEmptyChildCard } from './EmptyChildCard';

interface CardLayoutInput {
    children?: ReactNode,
    dataList: any[],
    Child: React.FC,
    EmptyChild?: React.FC
    Loading?: React.FC
    childProps?: any,
    title?: string,
    childKeyProvider?: (data: any, index: number) => string | number,
    preProcess?: (data: any, index: number) => any
}

const CardLayout = (props: CardLayoutInput) => {
    const { children, dataList, Child } = props;
    if (!dataList) {
        const Loading = props.Loading || NoopEmptyChildCard;
        return <Loading />
    }

    const childProps = props.childProps || {};
    const childKeyProvider = props.childKeyProvider || ((data: any, index: number) => index);
    const preProcess = props.preProcess || ((d: any, index?: number) => d);
    const EmptyChild = props.EmptyChild || EmptyChildCard;

    return (
        <div>{dataList.length == 0 ? (
            <EmptyChild />
        ) : (
            <div className="card-container">
                {props.title && <div className='card-header'>{props.title}</div>}
                {children}
                <div className="card-wrapper">
                    {dataList.map((rawData: any, index: number) => {
                        const data = preProcess(rawData, index);
                        return <Child key={childKeyProvider(data, index)}
                            {...childProps} data={data} index={index} elementCount={dataList.length}></Child>
                    })}
                </div>
            </div>)}

        </div>
    )
}
export { CardLayout };
export type { CardLayoutInput }