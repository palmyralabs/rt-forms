import { PredicateResponse, validationRule } from "@palmyralabs/ts-predicates"
import { IPredicate } from "@palmyralabs/ts-utils"

type InputType = string | number | Date;


interface IMutateOptions {
    required?: boolean
    readonly?: boolean
    visible?: boolean
    disabled?: boolean
    mutant?: boolean
}

interface ILengthValidation {
    length?: {
        min?: number,
        max?: number,
        eq?: number,
        errorMessage?: string | { minimum?: string, maximum?: string, equal?: string }
    } | number
}

interface IRangeValidation {
    range?: {
        start?: number,
        end?: number
        errorMessage?: string | { start?: string, end?: string }
    }
}

type IRegexValidation = string | { regex: string, errorMessage: string };

type IRuleValidation = validationRule
    | { rule: validationRule, errorMessage?: string }
    | [{ rule: validationRule, errorMessage?: string }]

type IFunctionValidation = IPredicate<any> | ((v: any) => PredicateResponse) | { fn: IPredicate<any>, errorMessage: string };


interface IFieldValidation extends ILengthValidation, IRangeValidation {
    regExp?: IRegexValidation
    validRule?: IRuleValidation
    validFn?: IFunctionValidation,
    missingMessage?: string,
    invalidMessage?: string,
}


interface FieldOptions extends IMutateOptions, IFieldValidation {
    attribute?: string,
    defaultValue?: InputType,
    validator?: (value: any) => PredicateResponse
}


export type { FieldOptions, IMutateOptions, IFieldValidation }