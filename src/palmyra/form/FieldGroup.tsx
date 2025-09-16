import { forwardRef, RefObject,  useContext,  useImperativeHandle, useRef } from "react";
import { FieldGroupManagerContext, FormManagerContext} from "./formContext";
import { IFieldManager, IFieldGroupManager, IFieldGroup, IFormManager, IFieldGroupOptions} from "./types";

interface IFieldGroupCOptions extends IFieldGroupOptions {
    children?: any
}

const FieldGroup = forwardRef(function FieldGroup(p: IFieldGroupCOptions, ref: RefObject<IFieldGroup>) {
    const currentRef = ref ? ref : useRef<IFieldManager>(null); 
    const formManager: IFormManager = useContext(FormManagerContext);   
    const fieldGroupManager:IFieldGroupManager = formManager.registerFieldGroupManager(p);
    
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