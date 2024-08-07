import { expect, test } from 'vitest';
import { getErrorMessage } from "../../../src/palmyra/form/validator/errorMessageHelper";

// required

test('required success', () => {
    const actual = getErrorMessage({ valid: false, reason: "required", value: "sample" },
        {
            attribute: 'at',
            required: true,
            missingMessage: "This is Required"

        });
    const expected = "This is Required";
    expect(actual).toEqual(expected);
})
