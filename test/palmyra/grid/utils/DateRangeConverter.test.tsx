import { describe, expect, test } from 'vitest';
import { DateRangeConverter, IPattern } from '../../../../dist/palmyra';
import { IRange } from '@palmyralabs/ts-utils';

describe("DateRangeConverter", () => {

    test('ServerPattern Error', () => {
        const props: IPattern = {};
        const converter = new DateRangeConverter(props, "DD-MM-YYYY");

        const dateRange: IRange<any> = {
            from: '',
            to: ''
        }

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

    test('DateRangePicker Convert with Pattern Mismatch', () => {
        const props: IPattern = { serverPattern: 'MM-DD-YYYY' };
        const converter = new DateRangeConverter(props, "DD-MM-YYYY");

        const dateRange: IRange<any> = {
            from: '10-01-2024',
            to: '10-05-2024'
        };

        expect(() => converter.format(dateRange)).toBeUndefined;
    });

    test('DateRangePicker Convert with Invalid Date Format', () => {
        const props: IPattern = { serverPattern: 'MM-DD-YYYY' };
        const converter = new DateRangeConverter(props, "YYYY-MM-DD");

        const dateRange: IRange<any> = {
            from: '2024-01-10',
            to: '2024-05-10'
        };

        expect(() => converter.format(dateRange)).toBeUndefined;
    });

    test('DateRangePicker Convert with Reversed from and to Dates', () => {
        const props: IPattern = { serverPattern: 'MM-DD-YYYY' };
        const converter = new DateRangeConverter(props, "MM-DD-YYYY");

        const dateRange: IRange<any> = {
            from: '05-10-2024',
            to: '01-10-2024' 
        };

        const expected = '05-10-2024...01-10-2024';
        const actual = converter.format(dateRange);
        expect(actual).toEqual(expected);
    });

    test('DateRangePicker Convert with Partially Invalid Date Range', () => {
        const props: IPattern = { serverPattern: 'MM-DD-YYYY' };
        const converter = new DateRangeConverter(props, "MM-DD-YYYY");

        const dateRange: IRange<any> = {
            from: '01-10-2024',
            to: '10-2024'
        };

        expect(() => converter.format(dateRange)).toBeUndefined;
    });

    test('DateRangePicker Convert with Same from and to Date', () => {
        const props: IPattern = { serverPattern: 'MM-DD-YYYY' };
        const converter = new DateRangeConverter(props, "MM-DD-YYYY");

        const dateRange: IRange<any> = {
            from: '01-10-2024',
            to: '01-10-2024'
        };

        const formattedRange = converter.format(dateRange);
        const expected = '01-10-2024...01-10-2024';
        expect(formattedRange).toEqual(expected);
    });

    test('DateRangePicker Convert with Invalid Date Components', () => {
        const props: IPattern = { serverPattern: 'MM-DD-YYYY' };
        const converter = new DateRangeConverter(props, "MM-DD-YYYY");

        const dateRange: IRange<any> = {
            from: '13-32-2024',
            to: '02-30-2024'
        };

        expect(() => converter.format(dateRange)).toBeUndefined;
    });

    test('DateRangePicker Convert with Null or Undefined Dates', () => {
        const props: IPattern = { serverPattern: 'MM-DD-YYYY' };
        const converter = new DateRangeConverter(props, "MM-DD-YYYY");
    
        const dateRangeWithNull: IRange<any> = {
            from: null,
            to: '01-10-2024'
        };
    
        const dateRangeWithUndefined: IRange<any> = {
            from: '01-10-2024',
            to: undefined
        };
    
        const fromExpected = '>01-10-2024';
        const fromActual = converter.format(dateRangeWithUndefined);

        const toExpected = '<01-10-2024';
        const toActual = converter.format(dateRangeWithNull);

        expect(fromActual).toEqual(fromExpected);
        expect(toActual).toEqual(toExpected);
    });

    test('DateRangePicker Convert with Time Included in Date', () => {
        const props: IPattern = { serverPattern: 'MM-DD-YYYY' };
        const converter = new DateRangeConverter(props, "MM-DD-YYYY");
    
        const dateRange: IRange<any> = {
            from: '01-10-2024 10:30 AM',  
            to: '05-10-2024 5:00 PM'
        };
    
        const formattedRange = converter.format(dateRange);
    
        const expected = '01-10-2024...05-10-2024';
        expect(formattedRange).toEqual(expected);
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
