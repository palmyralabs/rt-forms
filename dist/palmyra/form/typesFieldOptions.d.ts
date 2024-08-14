import { DefaultQueryParams, IEndPoint, IEndPointOptions } from '@palmyralabs/palmyra-wire';
import { PredicateResponse, validationRule } from '@palmyralabs/ts-predicates';
import { IPredicate } from '@palmyralabs/ts-utils';
import { numbers } from './types';

type InputType = string | number | Date;
interface IMutateOptions {
    required?: boolean;
    readOnly?: boolean;
    visible?: boolean;
    disabled?: boolean;
    mutant?: boolean;
}
interface ILengthValidation {
    length?: {
        min?: number;
        max?: number;
        eq?: number;
        errorMessage?: string | {
            minimum?: string;
            maximum?: string;
            equal?: string;
        };
    } | number;
}
interface IRangeValidation {
    range?: {
        start?: number;
        end?: number;
        errorMessage?: string | {
            start?: string;
            end?: string;
        };
    };
}
type IRegexValidation = RegExp | string | {
    regex: RegExp | string;
    errorMessage?: string;
};
type IRuleValidation = validationRule | {
    rule: validationRule | validationRule[];
    errorMessage?: string | string[];
} | [{
    rule: validationRule | validationRule[];
    errorMessage?: string | string[];
}] | Partial<Record<validationRule, string>>;
type IFunctionValidation = IPredicate<any> | ((v: any) => PredicateResponse) | {
    fn: IPredicate<any>;
    errorMessage: string;
};
interface IFieldValidation extends ILengthValidation, IRangeValidation {
    regExp?: IRegexValidation;
    validRule?: IRuleValidation;
    validFn?: IFunctionValidation;
    missingMessage?: string;
    invalidMessage?: string;
}
interface FieldOptions extends IMutateOptions, IFieldValidation {
    attribute?: string;
    defaultValue?: InputType;
    validator?: (value: any) => PredicateResponse;
}
interface IServerLookupOptions {
    displayAttribute?: string;
    lookupOptions?: {
        idAttribute: string;
        labelAttribute: string;
    };
    storeOptions?: {
        endPoint: IEndPoint;
        queryAttribute?: string;
        labelAttribute?: string;
        idAttribute?: string;
        endPointOptions?: IEndPointOptions;
    };
    fetchDefault?: number;
    pageSize?: numbers;
    defaultParams?: DefaultQueryParams;
}
export type { FieldOptions, IMutateOptions, IFieldValidation, IServerLookupOptions };
