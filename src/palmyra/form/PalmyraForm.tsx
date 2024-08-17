import { forwardRef, MutableRefObject, useEffect, useImperativeHandle, useRef } from "react";
import { IFieldManager, IForm, IFormOptions } from "./types";
import { FormManagerContext, StoreFactoryContext } from "./formContext";
import { FieldGroup } from "./FieldGroup";
import { useFormManager } from "./useHelpers/useFormManager";


const PalmyraForm = forwardRef(function PalmyraForm(props: IFormOptions, ref: MutableRefObject<IForm>) {
    const currentRef = ref ? ref : useRef<IForm>(null);

    const defaultFieldMangerRef = useRef<IFieldManager>();
    const data = props.formData;
    const onValidityChange = props.onValidChange;

    const formManager = useFormManager(props);

    useImperativeHandle(currentRef, (): IForm => {
        return {
            getData() {
                return formManager.getData();
            },
            isValid() {
                return formManager.isValid();
            },
            setData(d: any) {
                formManager.setData(d)
            }
        };
    }, [data, onValidityChange]);

    useEffect(() => {
        if (formManager.isValid()) {
            if (props.onValidChange)
                props.onValidChange(true);
        }
    }, [data])

    return (<>
        <StoreFactoryContext.Provider value={props.storeFactory}>
            <FormManagerContext.Provider value={formManager}>
                <FieldGroup name="_default" ref={defaultFieldMangerRef}>
                    {props.children}
                </FieldGroup>
            </FormManagerContext.Provider>
        </StoreFactoryContext.Provider>
    </>);
});


export { PalmyraForm }
