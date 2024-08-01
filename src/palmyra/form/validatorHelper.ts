import { getPredicate, IValidatorOptions, PredicateResponse } from "@palmyralabs/ts-predicates";
import { FieldOptions } from "./typesFieldOptions";


const generatePredicate = (o: FieldOptions) => {
    return getPredicate(getPredicateOptions(o));
}

const getErrorMessage = (v: PredicateResponse, o: FieldOptions) => {

    return v.reason;
}

const getPredicateOptions = (o: FieldOptions): IValidatorOptions => {
    var result: IValidatorOptions = {};

    result.required = o.required == true;

    if (o.range) {
        const range = o.range;
        result.range = { negate: false };
        assignNumber(range, result.range, 'start');
        assignNumber(range, result.range, 'end');
    }

    if (o.length) {
        const length = o.length;
        if (typeof length == 'number') {
            result.length = { is: length }
        } else {
            result.length = {};
            if (isNumber(length.eq)) {
                result.length.is = length.eq;
            } else {
                assignNumber(length, result.length, 'min');
                assignNumber(length, result.length, 'max');
            }
        }
    }

    if (o.regExp) {
        const regExp = o.regExp;
        if (typeof regExp == 'string') {
            result.regExp = regExp;
        } else {
            const regex = regExp.regex;
            if (regex)
                result.regExp = regex;
        }
    }

    if (o.validRule) {
        const validRule = o.validRule;
        if (typeof validRule == 'string') {
            result.rules = validRule.split(',');
        } else {
            if (validRule.rule)
                result.rules = validRule.rule.split(',');
        }
    }

    return result;
}

const isNumber = (v: any) => {
    return !isNaN(v);
}

const assignNumber = (src: any, tgt: any, srcKey: string, tgtKey?: string) => {
    const key = tgtKey || srcKey;
    const v = src[srcKey];
    if (isNumber(src[srcKey])) {
        tgt[key] = v;
    }
}

export { generatePredicate, getErrorMessage }