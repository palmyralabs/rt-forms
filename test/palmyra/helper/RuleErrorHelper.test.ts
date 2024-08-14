import { expect, test } from 'vitest';
import { getErrorMessage } from "../../../src/palmyra/form/validator/errorMessageHelper";


test('rule success', () => {
    const actual = getErrorMessage({ valid: false, reason: "rule", value: 4 },
        {
            attribute: 'at', validRule: {
                rule: "alphabets", errorMessage: "Alphabets only"
            }
        });
    const expected = "Alphabets only";
    expect(actual).toEqual(expected);
})

test('rule success', () => {
    const actual = getErrorMessage({ valid: false, reason: "rule", value: 4 },
        {
            attribute: 'at', validRule: {
                rule: "alphabets"
            },
            invalidMessage: "Alphabets only"
        });
    const expected = "Alphabets only";
    expect(actual).toEqual(expected);
})

// test('rule success', () => {
//     const actual = getErrorMessage({ valid: false, reason: "rule", value: 4 },
//         {
//             attribute: 'at', validRule: [{
//                 rule: "alphabets", errorMessage: "Alphabets only"
//             }]
//         });
//     const expected = "Alphabets only";
//     expect(actual).toEqual(expected);
// })

// test('rule success', () => {
//     const actual = getErrorMessage({ valid: false, reason: "rule", value: 4 },
//         {
//             attribute: 'at', validRule: [{
//                 rule: "alphabets"
//             }],
//             invalidMessage: "Alphabets only"
//         });
//     const expected = "Alphabets only";
//     expect(actual).toEqual(expected);
// })


test('rule success', () => {
    const actual = getErrorMessage({ valid: false, reason: "rule", value: 4 },
        {
            attribute: 'at',
            validRule: {
                rule: "alphabets",
                errorMessage: "Alphabets only"
            }
        });
    const expected = "Alphabets only";
    expect(actual).toEqual(expected);
})

test('rule success', () => {
    const actual = getErrorMessage({ valid: false, reason: "rule", value: 4 },
        {
            attribute: 'at',
            validRule: {
                rule: "alphabets"
            },
            invalidMessage: "Alphabets only"
        });
    const expected = "Alphabets only";
    expect(actual).toEqual(expected);
})

test('rule success', () => {
    const actual = getErrorMessage({ valid: false, reason: "rule", value: 4 },
        {
            attribute: 'at',
            validRule: {
                "alphabets": "Alphabets only"
            }
        });
    const expected = "Alphabets only";
    expect(actual).toEqual(expected);
})