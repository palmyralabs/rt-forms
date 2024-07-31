import { forwardRef, MutableRefObject, useContext, useImperativeHandle, useRef } from "react";
import { FormFieldManagerContext, FormManagerContext } from "./formBase";
import { IFieldManager, IFormFieldManager, IFormManager } from "./types";
import { IFormFieldManagerOptions, useFormFieldManager } from "./useFormFieldManager";

interface IFieldManagerOptions extends IFormFieldManagerOptions {
    children?: any
}

const FieldManager = forwardRef(function FieldManager(p: IFieldManagerOptions, ref: MutableRefObject<IFieldManager>) {
    const currentRef = ref ? ref : useRef<IFieldManager>(null);

    const formManager: IFormManager = useContext(FormManagerContext);
    const fieldManager: IFormFieldManager = useFormFieldManager(p);

    formManager.registerFieldManager(fieldManager);

    useImperativeHandle(currentRef, (): IFieldManager => {
        return {

        };
    }, [p.name, fieldManager]);


    return <>
        <FormFieldManagerContext.Provider value={fieldManager}>
            {p.children}
        </FormFieldManagerContext.Provider>
    </>;
})

export { FieldManager }