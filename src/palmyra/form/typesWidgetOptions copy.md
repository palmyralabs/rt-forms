
interface IMutateOptions {
    required?: boolean
    readonly?: boolean
    visible?: boolean
    disableFuture?: boolean
}

type InputType = string | number | Date;

type FieldType = "string" | "number" | "date" | "radio" | "select" | "iosswitch"
    | "datetime" | "textarea" | "checkbox" | "serverlookup" | "switch" | "autoComplete"
    | "password" | "multiSelect" | "dateRange" | "float" | "numbersOnly" | "integer"
    | "slider" | "sliderRange" | "rating";

type inbuiltValidators = "email" | "password" | 'string' | 'alphabets' | 'number' | 'mobilePhone' | 'port' |
    'ip' | 'fqdn' | 'folder' | 'portrange' | 'password' | 'oneLowerCase' | 'oneUpperCase' | 'oneSpecialChar'
    | 'float' | 'lowercase' | 'uppercase'

interface AttributeDefinition {
    attribute: string,
    displayAttribute?: string, // To be used for links etc
    type?: FieldType,
    options?: any
}

interface IDecoration {
    customContainerClass?: string,
    customFieldClass?: string,
    customLabelClass?: string,
    className?: string,
    colspan?: number,
    label?: string,
    labelMode?: 'header' | 'title'
    hideLabel?: boolean
}

interface ILengthValidation {
    length?: {
        min?: number,
        max?: number,
        eq?: number,
        errorMessage?: string | {}
    }
}

// interface IRangeValidation {
//     range?: {
//         start?: number,
//         end?: number
//         errorMessage?: string
//     }
// }

interface IValidationMessage {
    type?: FieldType,
    errorMessage?: string | Record<string, string>
}

interface IRuleValidation extends IValidationMessage {
    validRule?: inbuiltValidators | string[]
}

interface IRegexValidation extends IValidationMessage {
    regExp?: RegExp
}

interface IFunctionValidation extends IValidationMessage {
    validFn?: (data: any) => boolean
}

interface DisplayDefinition {
    width?: string
}

interface IRequiredValidation {
    required?: boolean,
    missingMessage?: string,
    invalidMessage?: string,
}


interface FieldDefinition {
    attribute: string,
    name?: string,
    defaultValue?: InputType,
    value?: InputType,
    disabled?: boolean,
    readonly?: boolean,
    visible?: boolean,
    mutant?: boolean,
    placeHolder?: string
}

interface IAbstractField extends FieldDefinition,
    AttributeDefinition, DisplayDefinition, IRequiredValidation {
    autoFocus?: boolean,
    onChange?: (key: string, value: any, valid?: boolean) => void
    onBlur?: (key: string, value: any, valid?: boolean) => void
    onFocus?: (key: string, value: any) => void
}

interface ITextFieldDefinition extends IAbstractField, IDecoration,
    ILengthValidation, IFunctionValidation, IRuleValidation, IRegexValidation {

}


// export type { ITextFieldDefinition, IAbstractField, IMutateOptions, FieldDefinition }