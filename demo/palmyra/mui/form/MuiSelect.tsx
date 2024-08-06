import { useRef, useImperativeHandle, forwardRef, MutableRefObject } from 'react';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectProps } from '@mui/material';
import FieldDecorator from './FieldDecorator';
import { IFormFieldError, IMutateOptions, ISelectField, ITextField, useFieldManager } from '../../../../src/palmyra';
import { generateOptions, getFieldLabel } from './util';
import { ISelectDefinition } from './types';


const MuiSelect = forwardRef(function MuiSelect(props: SelectProps & ISelectDefinition, ref: MutableRefObject<ISelectField>) {
    const fieldManager = useFieldManager(props.attribute, props);
    const { getError, getValue, setValue, mutateOptions, setMutateOptions } = fieldManager;
    const currentRef = ref ? ref : useRef<ITextField>(null);
    const error: IFormFieldError = getError();

    const inputRef: any = useRef(null);
    const variant = props.variant || 'standard';

    useImperativeHandle(currentRef, () => {
        return {
            focus() {
                if (inputRef)
                    inputRef.current.focus();
            },
            isValid() {
                return !error.status;
            },
            getValue,
            clear() {
                setValue('');
            },
            setValue(d: any, doValidate: boolean = false) {
                setValue(d);
            },
            setDisabled(disabled: boolean) {
                setMutateOptions((d: IMutateOptions) => ({ ...d, disabled }));
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
            setAttribute(options: IMutateOptions) {
                setMutateOptions((d: IMutateOptions) => ({ ...d, ...options }));
            },
            setOptions(d: any) {
            },
            getOptions() {
            }
        };
    }, [fieldManager]);

    const options = props.options;

    var inputProps = generateOptions(props, mutateOptions, getValue());

    if (props.readOnly) {
        inputProps.inputProps = { readOnly: true };
    }

    inputProps.onChange = (d: any) => { if (!props.readOnly) setValue(d.target.value); }

    const fieldMargin: any = 0; //props?.fieldProps?.size == 'small' ? 1 : 0;
    return (<>{!mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <FormControl variant={variant} fullWidth error={error.status}>
                {props.label ?
                    <InputLabel required={inputProps.required}>{props.label}</InputLabel> : <></>}
                <Select sx={{
                    m: fieldMargin
                }} {...inputProps} inputRef={(i) => { inputRef.current = i; }} >
                    {options
                        ? Object.keys(options).map((key, index) => (
                            <MenuItem key={index} value={key}>{options[key]}</MenuItem>
                        )
                        )
                        : props.children
                            ? props.children : <div>No options provided</div>}

                </Select>
                <FormHelperText className='form-error-text'>{error.message}</FormHelperText>
            </FormControl>
        </FieldDecorator>}
    </>
    );
});

export default MuiSelect;