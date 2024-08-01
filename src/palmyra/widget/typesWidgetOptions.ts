import { FieldOptions } from "../form/typesFieldOptions"


interface IAbstractField extends FieldOptions, IDecoration {
    autoFocus?: boolean,
    onChange?: (key: string, value: any, valid?: boolean) => void
    onBlur?: (key: string, value: any, valid?: boolean) => void
    onFocus?: (key: string, value: any) => void
}

interface IKeyInputField {
    placeHolder?: string
}

interface IDecoration {
    className?: string,
    colspan?: number,
    label?: string,
    labelMode?: 'header' | 'title'
    hideLabel?: boolean
}

interface ITextFieldDefinition extends
    IAbstractField, IKeyInputField {

}

export type { ITextFieldDefinition, IAbstractField }