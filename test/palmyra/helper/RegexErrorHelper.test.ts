import { expect, test } from 'vitest';
import { getErrorMessage } from "../../../src/palmyra/form/validator/errorMessageHelper";


test('regex success', () => {
    const actual = getErrorMessage({ valid: false, reason: "regex", value: "sample" },
        {
            attribute: 'at',
            regExp: "/^([1-5])$/",
            invalidMessage: "Numbers only"
        });
    const expected = "Numbers only";
    expect(actual).toEqual(expected);
})

test('regex success', () => {
    const actual = getErrorMessage({ valid: false, reason: "regex", value: "sample" },
        {
            attribute: 'at',
            regExp: /^([1-5])$/,
            invalidMessage: "Numbers only"
        });
    const expected = "Numbers only";
    expect(actual).toEqual(expected);
})

test('regex success', () => {
    const actual = getErrorMessage({ valid: false, reason: "regex", value: "sample" },
        {
            attribute: 'at',
            regExp:  { regex: "/^([1-5])$/", errorMessage: "Numbers only" }
        });
    const expected = "Numbers only";
    expect(actual).toEqual(expected);
})

test('regex success', () => {
    const actual = getErrorMessage({ valid: false, reason: "regex", value: "sample" },
        {
            attribute: 'at',
            regExp: { regex: /^([1-5])$/, errorMessage: "Numbers only" }
        });
    const expected = "Numbers only";
    expect(actual).toEqual(expected);
})