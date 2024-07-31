import { useContext, useState } from "react";
import { IAbstractField, IMutateOptions } from "./typesWidgetOptions";
import { IFieldGroupManager, IFormFieldError } from "./types";
import { Supplier } from "@palmyralabs/ts-utils";
import { FieldGroupManagerContext } from "./formBase";

const useFieldManager = (field: IAbstractField)  => {

    const fieldGroupManager: IFieldGroupManager = useContext(FieldGroupManagerContext);

    if(null == fieldGroupManager){
        console.error('fieldGroupManager not found in the context, field ' + field.attribute + " will not be registerd");
        return;
    }

    return registerField(fieldGroupManager, field);

    // const attribute = field.attribute;

    // fieldGroupManager.registerField(field);

    // const [error, setError] = useState<IFormFieldError>({ message: 'error', status: false })    
    // const [mutateOptions, setMutateOptions] = useState<IMutateOptions>({});

    // const getFieldProps: Supplier<IAbstractField> = () => {
    //     return { ...field, ...mutateOptions }
    // }

    // const setValue = (v:any) => {
    //     fieldGroupManager.setFieldData(attribute, v);
    // }

    // const getValue = () => {
    //     return fieldGroupManager.getFieldData(attribute);
    // }

    // return { getValue, setValue, error, setError, mutateOptions, setMutateOptions, getFieldProps }
}

const registerField = (fieldGroupManager:IFieldGroupManager,  field: IAbstractField)  => {


    const attribute = field.attribute;

    fieldGroupManager.registerField(field);

    const [error, setError] = useState<IFormFieldError>({ message: 'error', status: false })    
    const [mutateOptions, setMutateOptions] = useState<IMutateOptions>({});

    const getFieldProps: Supplier<IAbstractField> = () => {
        return { ...field, ...mutateOptions }
    }

    const setValue = (v:any) => {
        fieldGroupManager.setFieldData(attribute, v);
    }

    const getValue = () => {
        return fieldGroupManager.getFieldData(attribute);
    }

    return { getValue, setValue, error, setError, mutateOptions, setMutateOptions, getFieldProps }
}


export { useFieldManager, registerField }