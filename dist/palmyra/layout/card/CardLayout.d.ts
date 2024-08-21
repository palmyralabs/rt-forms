import { ReactNode } from 'react';

interface CardLayoutInput {
    children?: ReactNode;
    dataList: any[];
    Child: React.FC;
    EmptyChild?: React.FC;
    Loading?: React.FC;
    childProps: any;
    childKeyProvider: (data: any, index: number) => string | number;
    preProcess?: (data: any) => any;
}
declare const CardLayout: (props: CardLayoutInput) => import("react/jsx-runtime").JSX.Element;
export { CardLayout };
export type { CardLayoutInput };
