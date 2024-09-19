import { useRef, useImperativeHandle, forwardRef, MutableRefObject } from 'react';
import { TextField, TextFieldProps } from '@mui/material';

import { getFieldLabel } from './util'
import FieldDecorator from './FieldDecorator';
import { ITextFieldDefinition } from './types';
import { getFieldHandler, IFormFieldError, ITextField, useFieldManager } from '../../../../src/palmyra';

const MuiTextField = forwardRef(function MuiTextField(props: ITextFieldDefinition & TextFieldProps, ref: MutableRefObject<ITextField>) {
    const fieldManager = useFieldManager(props.attribute, props);
    const { getError, getValue, setValue, mutateOptions } = fieldManager;
    const currentRef = ref ? ref : useRef<ITextField>(null);
    const error: IFormFieldError = getError();

    const inputRef: any = useRef(null);
    const variant = props.variant || 'standard';

    useImperativeHandle(currentRef, () => {
        const handler = getFieldHandler(fieldManager)
        return {
            ...handler,
            focus() {
                inputRef.current.focus();
            }
        };
    }, [fieldManager]);


    var options = fieldManager.getFieldProps();

    options.onChange = (event: any) => {
        if (!props.readOnly) {
            setValue(event.target.value);
            if (props.onChange)
                props.onChange(event);
        }
    }

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass}
            colspan={props.colspan} customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <TextField
                label={props.label}
                variant={variant}
                fullWidth={true}
                inputRef={inputRef}
                {...options}
                value={getValue()}
                error={error.status}
                helperText={error.message}
            />
        </FieldDecorator>}
    </>
    );
});

export default MuiTextField;