import { forwardRef, MutableRefObject, useImperativeHandle, useRef } from "react";
import { IFieldManager, IForm, IFormOptions } from "./types";
import { FormManagerContext, StoreFactoryContext } from "./formBase";
import { useFormManager } from "./useFormManager";
import { FieldManager } from "./FieldManager";

const PalmyraForm = forwardRef(function PalmyraForm(props: IFormOptions, ref: MutableRefObject<IForm>) {
    const currentRef = ref ? ref : useRef<IForm>(null);

    const defaultFieldMangerRef = useRef<IFieldManager>();

    const data = props.formData;
    const onValidityChange = props.onValidChange;
    const mode = props.mode;

    const formManager = useFormManager(props);

    useImperativeHandle(currentRef, (): IForm => {
        return {
            getData() {
                return formManager.getData();
            },
            isValid() {
                return true;
            }
        };
    }, [data, onValidityChange, mode]);

    return (<>
        <StoreFactoryContext.Provider value={props.storeFactory}>
            <FormManagerContext.Provider value={formManager}>
                <FieldManager name="_default" ref={defaultFieldMangerRef}>
                    {props.children}
                </FieldManager>
            </FormManagerContext.Provider>
        </StoreFactoryContext.Provider>
    </>);
});


export { PalmyraForm }