import { ReactNode } from 'react';
import '../card/CardLayout.css';
import { EmptyChildCard } from './EmptyChildCard';

interface CardLayoutInput {
    children?: ReactNode,
    dataList: any[],
    Child: React.FC,
    EmptyChild?: React.FC
    childProps: any,
    childKeyProvider: (data: any, index: number) => string | number,
    preProcess?: (data: any) => any
}

const CardLayout = (props: CardLayoutInput) => {
    const { children, dataList, Child, childProps } = props;
    const childKeyProvider = props.childKeyProvider || ((data: any, index: number) => index);
    const preProcess = props.preProcess || ((d: any) => d);
    const EmptyChild = props.EmptyChild ? props.EmptyChild : EmptyChildCard;

    return (
        <div>{!dataList || dataList.length == 0 ? (
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
export default CardLayout;
export type { CardLayoutInput }