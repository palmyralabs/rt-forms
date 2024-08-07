import { expect, test } from 'vitest';
import { getErrorMessage } from "../../../src/palmyra/form/validator/errorMessageHelper";

// Length

test('length min-success', () => {
    const actual = getErrorMessage({ valid: false, reason: "length.min", value: "samp" },
        {
            attribute: 'at', length: {
                min: 5, errorMessage: {
                    minimum: "Minimum length 5"
                }
            }
        });
    const expected = "Minimum length 5";
    expect(actual).toEqual(expected);
})

test('length equal-success', () => {
    const actual = getErrorMessage({ valid: false, reason: "length.eq", value: "samp" },
        {
            attribute: 'at', length: {
                eq: 5, errorMessage: {
                    equal: "Length 5"
                }
            }
        });
    const expected = "Length 5";
    expect(actual).toEqual(expected);
})

test('length maximum-success', () => {
    const actual = getErrorMessage({ valid: false, reason: "length.max", value: "sample" },
        {
            attribute: 'at', length: {
                max: 5, errorMessage: {
                    maximum: "Maximum length 5"
                }
            }
        });
    const expected = "Maximum length 5";
    expect(actual).toEqual(expected);
})


test('length min-success', () => {
    const actual = getErrorMessage({ valid: false, reason: "length.min", value: "samp" },
        {
            attribute: 'at', length: {
                min: 5, errorMessage: "Minimum length 5"
            }
        });
    const expected = "Minimum length 5";
    expect(actual).toEqual(expected);
})

test('length equal-success', () => {
    const actual = getErrorMessage({ valid: false, reason: "length.eq", value: "samp" },
        {
            attribute: 'at', length: {
                eq: 5, errorMessage: "Length 5"
            }
        });
    const expected = "Length 5";
    expect(actual).toEqual(expected);
})

test('length maximum-success', () => {
    const actual = getErrorMessage({ valid: false, reason: "length.max", value: "sample" },
        {
            attribute: 'at', length: {
                max: 5, errorMessage: "Maximum length 5"
            }
        });
    const expected = "Maximum length 5";
    expect(actual).toEqual(expected);
})



test('length min-success', () => {
    const actual = getErrorMessage({ valid: false, reason: "length.min", value: "samp" },
        {
            attribute: 'at', length: {
                min: 5
            },
            invalidMessage: "Minimum length 5"

        });
    const expected = "Minimum length 5";
    expect(actual).toEqual(expected);
})

test('length equal-success', () => {
    const actual = getErrorMessage({ valid: false, reason: "length.eq", value: "samp" },
        {
            attribute: 'at', length: {
                eq: 5
            },
            invalidMessage: "Length 5"

        });
    const expected = "Length 5";
    expect(actual).toEqual(expected);
})

test('length maximum-success', () => {
    const actual = getErrorMessage({ valid: false, reason: "length.max", value: "sample" },
        {
            attribute: 'at', length: {
                max: 5
            },
            invalidMessage: "Maximum length 5"
        });
    const expected = "Maximum length 5";
    expect(actual).toEqual(expected);
})