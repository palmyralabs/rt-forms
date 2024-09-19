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

    const mappings: string[] = keyMapping[reason];

    for (const idx in mappings) {
        const key = mappings[idx];
        const v: any = getValueByKey(key, o);

        if (v && typeof v == 'string')
            return v;
    }

    if (o.invalidMessage)
        return o.invalidMessage;

    if (o.validRule) {
        
        //@ts-ignore
        let errorMessage: any = o.validRule.errorMessage
        if (errorMessage) {
            return errorMessage;
        }
        else {
            let entries = Object.entries(o.validRule)
            entries.map(([key, val]) => {
                v.reason = val;
            })
            return reason;
        }
    }

    return reason;
}

export { getErrorMessage }