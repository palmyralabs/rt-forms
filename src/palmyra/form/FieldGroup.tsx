import { forwardRef, MutableRefObject,  useImperativeHandle, useRef } from "react";
import { FieldGroupManagerContext} from "./formContext";
import { IFieldManager, IFieldGroupManager, IFieldGroup} from "./types";
import { IFormFieldManagerOptions, useFieldGroupManager } from "./useFieldGroupManager";

interface IFieldManagerOptions extends IFormFieldManagerOptions {
    children?: any
}

const FieldGroup = forwardRef(function FieldGroup(p: IFieldManagerOptions, ref: MutableRefObject<IFieldGroup>) {
    const currentRef = ref ? ref : useRef<IFieldManager>(null);    
    const fieldGroupManager: IFieldGroupManager = useFieldGroupManager(p);
    
    useImperativeHandle(currentRef, (): IFieldGroup => {
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