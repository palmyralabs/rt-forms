import { ReactNode } from 'react';
import '../card/CardLayout.css';
import { EmptyChildCard, NoopEmptyChildCard } from './EmptyChildCard';

interface CardLayoutInput {
    children?: ReactNode,
    dataList: any[],
    Child: React.FC,
    EmptyChild?: React.FC
    Loading?: React.FC
    childProps: any,
    childKeyProvider: (data: any, index: number) => string | number,
    preProcess?: (data: any) => any
}

const CardLayout = (props: CardLayoutInput) => {
    const { children, dataList, Child, childProps } = props;
    if (!dataList) {
        const Loading = props.Loading || NoopEmptyChildCard;
        return <Loading />
    }

    const childKeyProvider = props.childKeyProvider || ((data: any, index: number) => index);
    const preProcess = props.preProcess || ((d: any) => d);
    const EmptyChild = props.EmptyChild || EmptyChildCard;

    return (
        <div>{dataList.length == 0 ? (
            <EmptyChild />
        ) : (
            <div className="card-container" >
                {children}
                <div className="card-wrapper" >
                    {dataList.map((rawData: any, index: number) => {
                        const data = preProcess(rawData);
                        return <Child key={childKeyProvider(data, index)}
                            {...childProps} data={data}></Child>
                    })}
                </div>
            </div>)}

        </div>
    )
}
export { CardLayout };
export type { CardLayoutInput }