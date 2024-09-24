import { describe, expect, test } from 'vitest';
import DateFormat from '../../../../src/palmyra/utils/DateFormatUtil';

describe("DateFormat", () => {
  
    test('format date', () => {
        const converter = DateFormat({ serverPattern: "YYYY-MM-DD", displayPattern: "DD-MM-YYYY" });
        const inputDate = '2023-09-24';
        const expected = '24-09-2023';
        const actual = converter(inputDate);
        expect(actual).toBe(expected);
    });

    test('format date', () => {
        const converter = DateFormat({ serverPattern: "YYYY-MM-DD", displayPattern: "DD/MMM/YYYY" });
        const inputDate = '2023-02-15';
        const expected = '15/Feb/2023';
        const actual = converter(inputDate);
        expect(actual).toBe(expected);
    });

    test('invalid date', () => {
        const converter = DateFormat({ serverPattern: "YYYY-MM-DD", displayPattern: "DD/MMM/YYYY" });
        const inputDate = '2023-02-30';
        const expected = '02/Mar/2023';
        const actual = converter(inputDate);
        expect(actual).toBe(expected);
    });

    test('date format', () => {
        const converter = DateFormat({ serverPattern: "YYYY-MM-DD", displayPattern: "DD/MM/YY" });
        const inputDate = '2023-07-29';
        const expected = '29/07/23';
        const actual = converter(inputDate);
        expect(actual).toBe(expected);
    });

    test('invalid month', () => {
        const converter = DateFormat({ serverPattern: "YYYY-MM-DD", displayPattern: "DD.MM.YYYY" });
        const inputDate = '2023-17-29';
        const expected = '29.05.2024';
        const actual = converter(inputDate);
        expect(actual).toBe(expected);
    });

    test('single digit - invalid', () => {
        const converter = DateFormat({ serverPattern: "YYYY-MM-DD", displayPattern: "DD.MM.YY" });
        const inputDate = '2023-7-9';
        const expected = 'Invalid Date';
        const actual = converter(inputDate);
        expect(actual).toBe(expected);
    });
});