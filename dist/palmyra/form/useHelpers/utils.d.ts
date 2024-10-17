import { IFormSaveEventHandler } from './types';
declare const getHandlers: (props: IFormSaveEventHandler) => {
    onSaveFailure: (e: any) => void;
    onSaveSuccess: (data: any) => void;
    preSave: (data: any) => any;
};
export { getHandlers };
