import { describe, expect, test } from 'vitest';
import { DateRangeConverter, IPattern } from '../../../../dist/palmyra';
import { IRange } from '@palmyralabs/ts-utils';

describe("DateRangeConverter", () => {

    test('ServerPattern Error', () => {
        const props: IPattern = {};
        const converter = new DateRangeConverter(props, "DD-MM-YYYY");

        const dateRange: IRange<any> = {}

        expect(() => converter.format(dateRange)).toBeUndefined;
    });

    test('DateRangePicker Convert', () => {
        const props: IPattern = { serverPattern: 'MM-DD-YYYY' };
        const converter = new DateRangeConverter(props, "DD-MM-YYYY");

        const dateRange: IRange<any> = {
            from: '01-10-2024',
            to: '05-10-2024'
        };

        const expected = '01-10-2024...05-10-2024';
        const actual = converter.format(dateRange);
        expect(actual).toEqual(expected);
    });

    test('DateRangePicker Convert FromDate', () => {
        const props: IPattern = { serverPattern: 'MM-DD-YYYY' };
        const converter = new DateRangeConverter(props, "DD-MM-YYYY");

        const dateRange: IRange<any> = {
            from: '01-10-2024',
        };

        const expected = '>01-10-2024';
        const actual = converter.format(dateRange);
        expect(actual).toEqual(expected);
    });

    test('DateRangePicker Convert ToDate', () => {
        const props: IPattern = { serverPattern: 'MM-DD-YYYY' };
        const converter = new DateRangeConverter(props, "DD-MM-YYYY");

        const dateRange: IRange<any> = {
            to: '01-10-2024',
        };

        const expected = '<01-10-2024';
        const actual = converter.format(dateRange);
        expect(actual).toEqual(expected);
    });
})
