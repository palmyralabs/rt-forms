
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

interface ITextFieldDefinition extends MuiInputFieldOptions, ILayoutOptions {

}


export type { ITextFieldDefinition }

export type { MuiInputFieldOptions }