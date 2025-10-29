import { AbstractHandler, DefaultQueryParams, IEndPoint, StoreOptions, strings } from "@palmyralabs/palmyra-wire";
import { PredicateResponse, validationRule } from "@palmyralabs/ts-predicates"
import { IPredicate } from "@palmyralabs/ts-utils"
import { numbers } from "./types";

type InputType = string | number | Date;

interface IMutateOptions {
    required?: boolean
    readOnly?: boolean
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

type IRegexValidation = RegExp | string | { regex: RegExp | string, errorMessage?: string };

type IRuleValidation = validationRule
    | { rule: validationRule, errorMessage?: string }
    | [{ rule: validationRule, errorMessage?: string }]
    | Partial<Record<validationRule, string>>

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

interface FlatLookup {
    displayAttribute: string,
    idAttribute?: never,
    labelAttribute?: never
}

interface ObjectLookup {
    idAttribute: string,
    labelAttribute: string,
    displayAttribute?: never
}

type LookupOptions = FlatLookup | ObjectLookup;

interface IServerLookupOptions extends IServerQueryOptions {
    lookupOptions: LookupOptions
}

interface IServerQueryOptions extends AbstractHandler {
    queryOptions: {
        endPoint: IEndPoint,
        queryAttribute?: string,
        labelAttribute?: string,
        idAttribute?: string,
        storeOptions?: StoreOptions
    },
    fetchDefault?: number,
    pageSize?: numbers,
    defaultParams?: DefaultQueryParams,
    initParams?: {
        filter?: Record<any, any>;
        sort?: strings;
        limit?: number;
        offset?: number;
    }
}


type IHiddenFieldDefinition = Pick<FieldOptions, "attribute">;

export type { FieldOptions, IMutateOptions, IFieldValidation, IServerLookupOptions, IServerQueryOptions }
export type { IHiddenFieldDefinition }