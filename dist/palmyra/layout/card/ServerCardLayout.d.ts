import { IServerQueryInput } from '../../wire/ServerQueryManager';

interface ServerCardLayoutInput extends IServerQueryInput {
    Child: React.FC;
    childProps?: any;
    listKeyProvider?: (data: any, index: number) => string | number;
    EmptyChild?: React.FC;
    customButton?: React.ReactNode[];
    preProcess?: (data: any) => any;
}
declare const ServerCardLayout: import('react').ForwardRefExoticComponent<ServerCardLayoutInput & import('react').RefAttributes<any>>;
export { ServerCardLayout };
export type { ServerCardLayoutInput };
