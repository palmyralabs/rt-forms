import { forwardRef, MutableRefObject, useContext, useImperativeHandle, useRef } from "react";
import { FieldGroupManagerContext, FormManagerContext } from "./formBase";
import { IFieldManager, IFieldGroupManager, IFormManager } from "./types";
import { IFormFieldManagerOptions, useFieldGroupManager } from "./useFieldGroupManager";

interface IFieldManagerOptions extends IFormFieldManagerOptions {
    children?: any
}

const FieldGroup = forwardRef(function FieldGroup(p: IFieldManagerOptions, ref: MutableRefObject<IFieldManager>) {
    const currentRef = ref ? ref : useRef<IFieldManager>(null);

    const formManager: IFormManager = useContext(FormManagerContext);
    const fieldGroupManager: IFieldGroupManager = useFieldGroupManager(p);
    
    formManager.registerFieldGroupManager(fieldGroupManager);

    useImperativeHandle(currentRef, (): IFieldManager => {
        return {

        };
    }, [p.name, fieldGroupManager]);


    return <>
        <FieldGroupManagerContext.Provider value={fieldGroupManager}>
            {p.children}
        </FieldGroupManagerContext.Provider>
    </>;
})

export { FieldGroup }