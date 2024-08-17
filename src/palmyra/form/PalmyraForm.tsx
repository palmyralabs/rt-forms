import { IFieldGroupManager, IFormManager } from "./types"
import { forwardRef, MutableRefObject, useImperativeHandle, useRef } from "react";
import { IFieldManager, IForm, IFormOptions } from "./types";
import { FormManagerContext, StoreFactoryContext } from "./formContext";
import { FieldGroup } from "./FieldGroup";
import { IFunction } from "@palmyralabs/ts-utils";
import { useValidityTracker } from "./useHelpers/useValidityTracker";


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
    const validityListener = props.onValidChange || ((v) => { console.log(v) });

    const fieldManagersRef = useRef<Record<string, IFieldGroupManager>>({})
    const { isValid, setValidity } = useValidityTracker((v: boolean) => { validityListener(v) }, 200);

    const getData = () => {
        var result = dataRef.current || {};
        Object.values(fieldManagersRef.current).every((fm: IFieldGroupManager) => {
            result = { ...result, ...fm.getFieldGroupData() }
            return true;
        })
        return result;
    }

    const getPropsData = () => {
        return dataRef.current;
    }

    const setData = (d: any) => {
        const fieldManagers = fieldManagersRef.current;
        for (const key in fieldManagers) {
            const fieldManager = fieldManagers[key];
            fieldManager.setData(d);
        }
        dataRef.current = d;
    }

    const getFieldGroupManager: IFunction<string, IFieldGroupManager> = (fieldGroup: string) => {
        return fieldManagersRef.current[fieldGroup];
    }

    const registerFieldGroupManager = (fm: IFieldGroupManager) => {
        const fieldManagers = fieldManagersRef.current;
        fieldManagers[fm.getName()] = fm;
    }

    return {
        getData, getPropsData, isValid,
        setFieldGroupValid: setValidity, setData, registerFieldGroupManager, getFieldGroupManager
    };
}


export { useFormManager }