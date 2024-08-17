import { IFormSaveEventHandler } from "./types";

const getHandlers = (props: IFormSaveEventHandler) => {
    const onSaveFailure = props.onSaveFailure || (() => { });
    const onSaveSuccess = props.onSaveSuccess || (() => { });
    const preSave = props.preSave || ((d: any) => d);

    return { onSaveFailure, onSaveSuccess, preSave };
}


export { getHandlers }