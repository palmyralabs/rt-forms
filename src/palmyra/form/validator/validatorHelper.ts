import { getPredicate, IValidatorOptions, PredicateResponse } from "@palmyralabs/ts-predicates";
import { FieldOptions } from "../typesFieldOptions";
import { getErrorMessage } from "./errorMessageHelper";


const generatePredicate = (o: FieldOptions) => {
    return getPredicate(getPredicateOptions(o));
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
        if (typeof regExp == 'string' || typeof regExp['test'] == 'function') {
            //@ts-ignore
            result.regExp = regExp;
        } else if (regExp['regex']) {
            //@ts-ignore
            const regex = regExp.regex;
            if (regex)
                result.regExp = regex;
        }
    }

    if (o.validRule) {
        const validRule: any = o.validRule;

        if (typeof (validRule) == "string") {
            //@ts-ignore
            result.rules = [validRule];
        }
        else if (Array.isArray(validRule)) {
            result.rules = validRule.map((v) => v.rule);
        }
        else if (typeof validRule == "object") {
            if (!validRule.rule) {
                let entries = Object.entries(validRule)
                entries.map(([key, val]) => {
                    //@ts-ignore
                    result.rules = [key]
                })
            } else
                result.rules = [validRule.rule];
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

const validate = (v: any, validator: Function, field: FieldOptions) => {
    const validity: PredicateResponse = validator(v);
    if (validity.valid) {
        return { status: false, message: '' };
    } else {
        const errorMessage: string = getErrorMessage(validity, field);
        return { status: true, message: errorMessage };
    }
}

export { generatePredicate, validate }