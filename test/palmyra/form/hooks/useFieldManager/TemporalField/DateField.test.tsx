import { FieldOptions, IForm, PalmyraForm, useFieldManager } from "../../../../../../src/palmyra";
import { describe, expect, test } from "vitest";
import { renderHook } from "@testing-library/react";
import { act, useRef } from "react";

// const serverPattern = "YYYY-MM-DD";

const parse = (rawData: any) => {
    if (rawData) {
        const date = new Date(rawData);
        console.log(rawData, date, format(date))
        return isNaN(date.getTime()) ? undefined : format(date);
    }
    else {
        return undefined;
    }
};

const format = (v) => {
    if (v instanceof Date) {
        return `${v.getFullYear()}-${v.getMonth() + 1}-${v.getDate()}`;
    }
    return '';
};

describe('useFieldManager - DateField', () => {

    test('Initial form data', () => {
        const formRefRender = renderHook(() => useRef<IForm>());
        const formRef = formRefRender.result.current;

        const wrapper = ({ children }) => {
            return <PalmyraForm formData={{ date: '2023-11-12' }} ref={formRef}>{children} </PalmyraForm>
        }
        const options: FieldOptions = { attribute: 'date' }
        const { result } = renderHook(() => useFieldManager('date', options, { format, parse }), { wrapper });

        const formData = formRef.current.getData();
        const v = result.current.getValue();
        
        console.log("formData", formData)

        expect(v).toBe('2023-11-12');
        expect(formData.date).toBe('2023-11-12');
    });


    test('Default Value in field', () => {
        const formRefRender = renderHook(() => useRef<IForm>());
        const formRef = formRefRender.result.current;

        const wrapper = ({ children }) => {
            return <PalmyraForm formData={{}} ref={formRef}>{children} </PalmyraForm>
        }
        const options: FieldOptions = { attribute: 'date', defaultValue: '2023-11-12' }
        const { result } = renderHook(() => useFieldManager('date', options, { format, parse }), { wrapper });

        const formData = formRef.current.getData();
        const v = result.current.getValue();

        expect(v).toBe('2023-11-12');
        expect(formData.date).toBe('2023-11-12');
    });


    test('set form data - no default value', () => {
        const formRefRender = renderHook(() => useRef<IForm>());
        const formRef = formRefRender.result.current;

        const wrapper = ({ children }) => {
            return <PalmyraForm formData={{}} ref={formRef}>{children} </PalmyraForm>
        }
        const options: FieldOptions = { attribute: 'date' }
        const { result } = renderHook(() => useFieldManager('date', options, { format, parse }), { wrapper });

        act(() => {
            formRef.current.setData({ date: '2023-11-12' })
        });

        const formData = formRef.current.getData();
        const v = result.current.getValue();

        expect(v).toBe('2023-11-12');
        expect(formData.date).toBe('2023-11-12');
    });

    test('set form data - with default value', () => {
        const formRefRender = renderHook(() => useRef<IForm>());
        const formRef = formRefRender.result.current;
        const wrapper = ({ children }) => {
            return <PalmyraForm formData={{}} ref={formRef}>{children} </PalmyraForm>
        }
        const options: FieldOptions = { attribute: 'date', defaultValue: '2023-01-12' }
        const { result } = renderHook(() => useFieldManager('date', options, { format, parse }), { wrapper });

        const formData = formRef.current.getData();
        const v = result.current.getValue();

        expect(v).toBe('2023-01-12');
        expect(formData.date).toBe('2023-01-12');
        act(() => {
            formRef.current.setData({ date: '2023-11-12' })
        });
        expect(v).toBe('2023-11-12');
        expect(formData.date).toBe('2023-11-12');
    });

    test('set form data - without date value', () => {
        const formRefRender = renderHook(() => useRef<IForm>());
        const formRef = formRefRender.result.current;

        const wrapper = ({ children }) => {
            return <PalmyraForm formData={{}} ref={formRef}>{children} </PalmyraForm>
        }
        const options: FieldOptions = { attribute: 'date', defaultValue: '2023-01-12' }
        const { result } = renderHook(() => useFieldManager('date', options, { format, parse }), { wrapper });

        const formData = formRef.current.getData();
        const v = result.current.getValue();

        expect(v).toBe('2023-01-12');
        expect(formData.date).toBe('2023-01-12');

        act(() => {
            formRef.current.setData({})
        });

        expect(v).toBeUndefined();
        expect(formData.date).toBe('');
    });


    test('set field data', () => {
        const formRefRender = renderHook(() => useRef<IForm>());
        const formRef = formRefRender.result.current;

        const wrapper = ({ children }) => {
            return <PalmyraForm formData={{}} ref={formRef}>{children} </PalmyraForm>
        }
        const options: FieldOptions = { attribute: 'date' }
        const { result } = renderHook(() => useFieldManager('date', options, { format, parse }), { wrapper });

        const formData = formRef.current.getData();

        expect(result.current.getValue()).toBeUndefined();
        expect(formData.date).toBe("");

        act(() => {
            result.current.setValue('2023-01-11')
        });

        expect(result.current.getValue()).toBe("2023-1-11");
        expect(formData.date).toBe("2023-01-11");
    });
});