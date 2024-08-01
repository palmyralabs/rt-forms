
import { FieldOptions } from "../../../../src/palmyra";

interface ILayoutOptions {
    customContainerClass?: string,
    customLabelClass?: string,
    customFieldClass?: string,
    colspan?: number
}

interface MuiInputFieldOptions extends FieldOptions {
    title?: string,
    attribute:string
}

interface ISelectDefinition extends MuiInputFieldOptions, ILayoutOptions{
    options?: Record<any, any> | Record<string, any>
}

interface ITextFieldDefinition extends MuiInputFieldOptions, ILayoutOptions {

}


export type { ITextFieldDefinition, ISelectDefinition }

export type { MuiInputFieldOptions }