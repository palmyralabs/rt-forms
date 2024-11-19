import { IMutateOptions } from './typesFieldOptions';
interface IBaseField {
    getValue: () => any;
    setValue: (v: any, doValidate?: boolean) => void;
    isValid: () => void;
}
interface IInputField extends IBaseField {
    focus: () => void;
    clear: () => void;
    refreshError: () => void;
    setRequired: (required: boolean) => void;
    setDisabled: (disabled: boolean) => void;
    setReadOnly: (readOnly: boolean) => void;
    setVisible: (visible: boolean) => void;
    setAttribute: (options: IMutateOptions) => void;
}
interface IOptionsField {
    setOptions: (d: any) => void;
    getOptions: () => any;
}
interface ITextField extends IInputField {
}
interface IRatingField extends IInputField {
}
interface IDateField extends IInputField {
    setCurrent: () => void;
}
interface ITimeField extends IInputField {
    setCurrent: () => void;
}
interface IDateTimeField extends IInputField {
    setCurrent: () => void;
}
interface ISelectField extends IInputField, IOptionsField {
}
interface IServerLookupField extends IInputField {
}
interface IRadioGroupField extends IInputField, IOptionsField {
}
interface ICheckBoxField extends IInputField, IOptionsField {
}
interface ISwitchField extends IInputField, IOptionsField {
}
interface ISliderField extends IInputField {
}
export type { IBaseField, IInputField, ITextField, ICheckBoxField, IDateField, IDateTimeField, IRadioGroupField, ISelectField, ITimeField, ISwitchField, ISliderField, IRatingField, IServerLookupField };
