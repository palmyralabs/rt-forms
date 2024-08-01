import { IFormListener } from "./types";

const NoopFormListener: IFormListener = {
    onSaveSuccess: function (data: any): void {

    },
    onSaveFailure: function (e: any): void {
        console.error('Error while saving', e);
    },
    preProcessSaveData: (d: any) => {
        return d;
    },
    postProcessQueryData: (d: any) => {
        return d;
    }
};

export { NoopFormListener }