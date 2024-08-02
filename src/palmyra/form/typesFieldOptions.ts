import { PredicateResponse } from "@palmyralabs/ts-predicates"
import { IPredicate } from "@palmyralabs/ts-utils"

type InputType = string | number | Date;

type validatorRules = "email" | "password" | 'string' | 'alphabets' | 'number' | 'mobilePhone' | 'port' |
    'ip' | 'fqdn' | 'folder' | 'portrange' | 'password' | 'oneLowerCase' | 'oneUpperCase' | 'oneSpecialChar'
    | 'float' | 'lowercase' | 'uppercase'


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

type IRuleValidation = validatorRules | { rule: validatorRules, errorMessage: string }

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