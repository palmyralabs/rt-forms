import { useRef, useImperativeHandle, forwardRef, MutableRefObject } from 'react';
import { TextField, TextFieldProps } from '@mui/material';

import { IFormFieldError, IMutateOptions, ITextField, useFieldManager } from '../../../../src/palmyra';
import { generateOptions, getFieldLabel } from './util';
import FieldDecorator from './FieldDecorator';
import { ITextFieldDefinition } from './types';


const MuiTextField = forwardRef(function MuiTextField(props: TextFieldProps & ITextFieldDefinition, ref: MutableRefObject<ITextField>) {
    // const fieldGroupManager: IFieldGroupManager = useContext(FieldGroupManagerContext);

    const fieldManager = useFieldManager(props.attribute, props);
    const { getError, getValue, setValue, mutateOptions, setMutateOptions, refreshError } = fieldManager;
    const currentRef = ref ? ref : useRef<ITextField>(null);
    const error: IFormFieldError = getError();

    const inputRef: any = useRef(null);
    const variant = props.variant || 'standard';

    useImperativeHandle(currentRef, () => {
        return {
            focus() {
                inputRef.current.focus();
            },
            isValid() {
                return !error.status;
            },
            refreshError,
            setValue,
            getValue,
            clear() {
                setValue('');
            },
            setVisible(visible: boolean) {
                setMutateOptions((d: IMutateOptions) => ({ ...d, visible }));
            },
            setRequired(required: boolean) {
                setMutateOptions((d: IMutateOptions) => ({ ...d, required }));
            },
            setReadOnly(readonly: boolean) {
                setMutateOptions((d: IMutateOptions) => ({ ...d, readonly }));
            },
            setDisabled(disabled: boolean) {
                setMutateOptions((d: IMutateOptions) => ({ ...d, disabled }));
            },
            setAttribute(options: IMutateOptions) {
                setMutateOptions((d: IMutateOptions) => ({ ...d, ...options }));
            }
        };
    }, [fieldManager]);

    var options = fieldManager.getFieldProps();

    options.onChange = (d: any) => { if (!props.readOnly) setValue(d.target.value); }

    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(options)} customContainerClass={props.customContainerClass}
            colspan={props.colspan} customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <TextField 
                variant={variant}
                fullWidth={true}
                inputRef={inputRef}
                {...options}
                value = {getValue()}
                error={error.status}
                helperText={error.message}
            />
        </FieldDecorator>}
    </>
    );
});

export default MuiTextField;