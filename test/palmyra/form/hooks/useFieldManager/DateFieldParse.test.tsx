import dayjs from "dayjs";
import { FieldOptions, PalmyraForm, useFieldManager } from "../../../../../src/palmyra";
import { describe, expect } from "vitest";
import test from "node:test";
import { renderHook } from "@testing-library/react";
import { act } from "react";


describe('useFieldManager', () => {

    const parse = (rawData: any) => {
        if (rawData) {
            console.log("raw", rawData, dayjs(rawData, "YYYY-MM-DD"))
            return dayjs(rawData, "YYYY-MM-DD")
        }
        else {
            return undefined;
        }
    };
    const format = (v: any) => {
        if (v && v.isValid && v.isValid())
            return v.format("YYYY-MM-DD")
    };

    // test('get default value', () => {

    //     // const wrapper = ({ children }) => {
    //     //     return <PalmyraForm formData={{ date: '2023-01-02' }}>{children} </PalmyraForm>
    //     // }
    //     const options: FieldOptions = {
    //         attribute: 'date',
    //         defaultValue: 2023-1-2,
    //     }
    //     const { result } = renderHook(() => useFieldManager('date', options, { format, parse }));
    //     console.log("get", result.current.getValue())

    //     expect(result.current.getValue()).toBe('2023-01-02');
    // });

    test('get value', () => {

        const wrapper = ({ children }) => {
            return <PalmyraForm formData={{ date: '2023-11-12' }}>{children} </PalmyraForm>
        }
        const options: FieldOptions = {
            attribute: 'date',
        }
        const { result } = renderHook(() => useFieldManager('date', options, { format, parse }), { wrapper });
        console.log("get", result.current.getValue())
        expect(dayjs(result.current.getValue())).toBe('2023-11-12');

    });


    test('Set value', () => {

        const wrapper = ({ children }) => {
            return <PalmyraForm formData={{ date: '2023-11-12' }}>{children} </PalmyraForm>
        }
        const options: FieldOptions = {
            attribute: 'date',
        }
        const { result } = renderHook(() => useFieldManager('date', options, { format, parse }), { wrapper });
        console.log("get", result.current.getValue())
        expect(dayjs(result.current.getValue())).toBe('2023-11-12');

        act(() => {
            result.current.setValue('2023-10-22')
        });
        console.log("set", result.current.getValue())

    });
});