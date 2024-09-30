import { useRef, useImperativeHandle, forwardRef, MutableRefObject } from 'react';
import { FieldDecorator, IFormFieldError, ITextField, ITextFieldDefinition, getFieldHandler, useFieldManager } from '../../src/palmyra';
import { getFieldLabel } from '../../demo/palmyra/mui/form/util';
import { TextFieldProps } from '@mui/material';

const InputField = forwardRef(function InputField(props: ITextFieldDefinition & TextFieldProps, ref: MutableRefObject<ITextField>) {
    const fieldManager = useFieldManager(props.attribute, props);
    const { getError, getValue, setValue, mutateOptions } = fieldManager;
    const currentRef = ref ? ref : useRef<ITextField>(null);
    const error: IFormFieldError = getError();

    const inputRef: any = useRef(null);

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

    console.log("inputField", getValue())

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} colspan={props.colspan} >
            <input
                type='text'
                label={props.label}
                {...options}
                value={getValue()}
                // error={error.status}
            />
            <div>{error.message}</div>
        </FieldDecorator>}
    </>
    );
});

export default InputField;