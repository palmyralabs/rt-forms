import { PredicateResponse } from "@palmyralabs/ts-predicates";
import { FieldOptions } from "../typesFieldOptions";
import { getValueByKey } from "@palmyralabs/ts-utils";

const keyMapping: Record<string, string[]> = {
    "length.eq": ["length.errorMessage.equal", "length.errorMessage", "invalidMessage"],
    "length.min": ["length.errorMessage.minimum", "length.errorMessage", "invalidMessage"],
    "length.max": ["length.errorMessage.maximum", "length.errorMessage", "invalidMessage"],
    "range.start": ["range.errorMessage.start", "range.errorMessage", "invalidMessage"],
    "range.end": ["range.errorMessage.end", "length.errorMessage", "invalidMessage"],
    "rule": ["validRule.errorMessage", "invalidMessage"],
    "regex": ["regExp.errorMessage", "invalidMessage"],
    "required": ["missingMessage"]
}

const getErrorMessage = (v: PredicateResponse, o: FieldOptions): string => {
    const reason = v.reason;
    if (!reason)
        return '';

    switch (reason) {
        case 'rule':
            return getRuleErrorMessage(v.reason, o);
        case 'regex':
            return getRegexErrorMessage(v, o);
        default:
            break;
    }

    const ruleError = getRuleErrorMessage(v.reason, o);
    if (ruleError) return ruleError;

    const errorMessage = getMessageByMapping(reason, o);
    if (errorMessage)
        return errorMessage;

    if (o.invalidMessage)
        return o.invalidMessage;

    return reason;
}

const getMessageByMapping = (reason: string, o: FieldOptions) => {
    const mappings: string[] = keyMapping[reason];

    for (const idx in mappings) {
        const key = mappings[idx];
        const v: any = getValueByKey(key, o);
        if (v && typeof v == 'string')
            return v;
    }
}

const getRuleErrorMessage = (reason: string, o: FieldOptions): string => {
    const ruleType = typeof o.validRule;
    if (Array.isArray(o.validRule)) {
        const match = o.validRule.find((r) => r.rule == reason);
        if (match && match.errorMessage)
            return match.errorMessage;
    } else if (ruleType == 'object') {
        //@ts-ignore
        let { rule, errorMessage } = o.validRule;
        if (errorMessage && (reason == 'rule' || reason == rule)) {
            return errorMessage;
        }
    }
    return getMessageByMapping(reason, o);
}

const getRegexErrorMessage = (v: PredicateResponse, o: FieldOptions): string => {
    return getMessageByMapping(v.reason, o);
}

export { getErrorMessage }