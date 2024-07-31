import { IFieldGroupManager, IFormManager } from "./types"
import { forwardRef, MutableRefObject, useImperativeHandle, useRef } from "react";
import { IFieldManager, IForm, IFormOptions } from "./types";
import { FormManagerContext, StoreFactoryContext } from "./formBase";
import { FieldGroup } from "./FieldGroup";
import { IFunction } from "@palmyralabs/ts-utils";


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
                <FieldGroup name="_default" ref={defaultFieldMangerRef}>
                    {props.children}
                </FieldGroup>
            </FormManagerContext.Provider>
        </StoreFactoryContext.Provider>
    </>);
});


export { PalmyraForm }



const useFormManager = (props: IFormOptions): IFormManager => {

    const dataRef = useRef<any>(props.formData || {});
    const fieldManagersRef = useRef<Record<string, IFieldGroupManager>>({})

    const getData = () => {
        var result = dataRef.current || {};
        Object.values(fieldManagersRef.current).every((fm: IFieldGroupManager) => {
            result = { ...result, ...fm.getData() }
            return true;
        })
        return result;
    }

    const setFieldData = (key: string, v: any) => {

    }

    const setData = (d: any) => {
        dataRef.current = d;
    }

    const isValid = () => {
        return true;
    }

    const getFieldGroupManager:IFunction<string, IFieldGroupManager> = (fieldGroup: string) => {
        return fieldManagersRef.current[fieldGroup];
    }

    const registerFieldGroupManager = (fm: IFieldGroupManager) => {
        const fieldManagers = fieldManagersRef.current;
        fieldManagers[fm.getName()] = fm;
    }

    return { getData, isValid, setFieldData, setData, registerFieldGroupManager, getFieldGroupManager };
}


export { useFormManager }