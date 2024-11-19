import { useRef, useImperativeHandle, forwardRef, MutableRefObject } from 'react';

import { IBaseField, ITextField } from './typesWidgets';
import { useFieldManager } from './useHelpers';
import { IHiddenFieldDefinition } from './typesFieldOptions';

const HiddenField = forwardRef(function HiddenField(props: IHiddenFieldDefinition, ref: MutableRefObject<IBaseField>) {
    const fieldManager = useFieldManager(props.attribute, props);
    const currentRef = ref ? ref : useRef<ITextField>(null);

    const { getValue, setValue, isValid } = fieldManager

    useImperativeHandle(currentRef, () => {
        return {
            getValue, setValue, isValid
        };
    }, [fieldManager]);


    return (<></>);
});

export { HiddenField };
export type {IHiddenFieldDefinition}