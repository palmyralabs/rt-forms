import { expect, test } from 'vitest';
import { getErrorMessage } from "../../../src/palmyra/form/validator/errorMessageHelper";


test('rule alphabet object', () => {
    const actual = getErrorMessage({ valid: false, reason: "rule", value: 4 },
        {
            attribute: 'at', validRule: {
                rule: "alphabets", errorMessage: "Alphabets only"
            }
        });
    const expected = "Alphabets only";
    expect(actual).toEqual(expected);
})

test('rule generic InvalidMessage', () => {
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

// @TODO -- The functionality needs to be implemented
// test('rule Array Error Message', () => {
//     const actual = getErrorMessage({ valid: false, reason: "rule.alphabets", value: 4 },
//         {
//             attribute: 'at',
//             validRule: [{ rule: "alphabets", errorMessage: "Alphabets only" }]
//         });
//     const expected = "Alphabets only";
//     expect(actual).toEqual(expected);
// })