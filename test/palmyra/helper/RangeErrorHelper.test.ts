import { expect, test } from 'vitest';
import { getErrorMessage } from "../../../src/palmyra/form/validator/errorMessageHelper";


test('range start-success', () => {
    const actual = getErrorMessage({ valid: false, reason: "range.start", value: 4 },
        {
            attribute: 'at', range: {
                start: 5, errorMessage: {
                    start: "Range start 5"
                }
            }
        });
    const expected = "Range start 5";
    expect(actual).toEqual(expected);
})


test('range start-success', () => {
    const actual = getErrorMessage({ valid: false, reason: "range.start", value: 4 },
        {
            attribute: 'at', range: {
                start: 5, errorMessage: "Range start 5"
            }
        });
    const expected = "Range start 5";
    expect(actual).toEqual(expected);
})


test('range start-success', () => {
    const actual = getErrorMessage({ valid: false, reason: "range.start", value: 4 },
        {
            attribute: 'at', range: {
                start: 5
            },
            invalidMessage: "Range start 5"

        });
    const expected = "Range start 5";
    expect(actual).toEqual(expected);
})

test('range end-success', () => {
    const actual = getErrorMessage({ valid: false, reason: "range.end", value: 6 },
        {
            attribute: 'at', range: {
                end: 5, errorMessage: {
                    end: "Range end 5"
                }
            }
        });
    const expected = "Range end 5";
    expect(actual).toEqual(expected);
})

test('range end-success', () => {
    const actual = getErrorMessage({ valid: false, reason: "range.start", value: 6 },
        {
            attribute: 'at', range: {
                end: 5, errorMessage: "Range end 5"
            }
        });
    const expected = "Range end 5";
    expect(actual).toEqual(expected);
})

test('range end-success', () => {
    const actual = getErrorMessage({ valid: false, reason: "range.end", value: 6 },
        {
            attribute: 'at', range: {
                end: 5
            },
            invalidMessage: "Range end 5"

        });
    const expected = "Range end 5";
    expect(actual).toEqual(expected);
})