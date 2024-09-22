import { describe, expect, test } from 'vitest';
import { DateTimeConverter, IPattern } from '../../../../src/palmyra';

describe("DateConverter", () => {

    test('default Convert', () => {
        const props: IPattern = {}
        const converter = new DateTimeConverter(props, "DD-MM-YYYY");
        const expected = '02-10-2021';
        const actual = converter.convert('02-10-2021');
        expect(actual).toEqual(expected);
    });


    test('default Convert', () => {
        const props: IPattern = {}
        const converter = new DateTimeConverter(props, "DD-MM-YYYY");
        const expected = '15-10-2021';
        const actual = converter.convert('15-10-2021');
        expect(actual).toEqual(expected);
    });

    test('default Convert', () => {
        const props: IPattern = { serverPattern: 'MM-DD-YYYY' }
        const converter = new DateTimeConverter(props, "DD-MM-YYYY");
        const expected = '10-11-2021';
        const actual = converter.convert('11-10-2021');
        expect(actual).toEqual(expected);
    });
})
