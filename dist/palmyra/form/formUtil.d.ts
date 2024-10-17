import { MutableRefObject } from 'react';
import { IForm } from './types';
declare const getSaveFormHandle: (saveData: any, formRef: MutableRefObject<IForm>, refresh?: any) => {
    saveData: any;
    refresh: any;
    getData(): any;
    setData(d: any): void;
    isValid(): boolean;
};
export { getSaveFormHandle };
