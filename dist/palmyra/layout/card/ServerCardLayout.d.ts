import { IServerQueryInput } from '../../wire';

interface ServerCardLayoutInput extends IServerQueryInput {
    Child: React.FC;
    childProps?: any;
    listKeyProvider?: (data: any, index: number) => string | number;
    EmptyChild?: React.FC;
    Loading?: React.FC;
    title?: string;
    preProcess?: (data: any) => any;
}
declare const ServerCardLayout: import('react').ForwardRefExoticComponent<ServerCardLayoutInput & import('react').RefAttributes<any>>;
export { ServerCardLayout };
export type { ServerCardLayoutInput };
