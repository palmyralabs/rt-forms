import { useContext, useState } from "react";
import { IAbstractField, IMutateOptions } from "./typesWidgetOptions";
import { IFormFieldError, IFormFieldManager } from "./types";
import { Supplier } from "@palmyralabs/ts-utils";
import { FormFieldManagerContext } from "./formBase";

const useFieldManager = (field: IAbstractField)  => {

    const fieldManager: IFormFieldManager = useContext(FormFieldManagerContext);    

    const attribute = field.attribute;

    fieldManager.registerField(field);

    const [error, setError] = useState<IFormFieldError>({ message: 'error', status: false })    
    const [mutateOptions, setMutateOptions] = useState<IMutateOptions>({});

    const getFieldProps: Supplier<IAbstractField> = () => {
        return { ...field, ...mutateOptions }
    }

    const setValue = (v:any) => {
        fieldManager.setFieldData(attribute, v);
    }

    const getValue = () => {
        return fieldManager.getFieldData(attribute);
    }

    return { getValue, setValue, error, setError, mutateOptions, setMutateOptions, getFieldProps }
}

export { useFieldManager }