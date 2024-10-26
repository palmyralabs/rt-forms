import dayjs from "dayjs";
import { FieldOptions, IForm, PalmyraForm, useFieldManager } from "../../../../../../src/palmyra";
import { describe, expect, test } from "vitest";
import { renderHook } from "@testing-library/react";
import { act, useRef } from "react";


const serverPattern = "YYYY-MM-DD";

const parse = (rawData: any) => {
    if (rawData) {
        return dayjs(rawData, serverPattern)
    }
    else {
        return undefined;
    }
};
const format = (v: any) => {
    if (v && v.isValid && v.isValid())
        return v.format(serverPattern);
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

        expect(v.format(serverPattern)).toBe('2023-11-12');
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

        expect(v.format(serverPattern)).toBe('2023-11-12');
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

        expect(v.format(serverPattern)).toBe('2023-11-12');
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

        const initialData = formRef.current.getData();
        const va = result.current.getValue();

        expect(va.format(serverPattern)).toBe('2023-01-12');
        expect(initialData.date).toBe('2023-01-12');

        act(() => {
            formRef.current.setData({ date: '2023-11-12' })
        });

        const formData = formRef.current.getData();
        const v = result.current.getValue();

        expect(v.format(serverPattern)).toBe('2023-11-12');
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

        const initialData = formRef.current.getData();
        const va = result.current.getValue();

        expect(va.format(serverPattern)).toBe('2023-01-12');
        expect(initialData.date).toBe('2023-01-12');

        act(() => {
            formRef.current.setData({})
        });

        const formData = formRef.current.getData();
        const v = result.current.getValue();

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
        
        var formData = formRef.current.getData();

        expect(result.current.getValue()).toBeUndefined();
        expect(formData.date).toBe("");

        act(() => {
            result.current.setValue(parse('2023-01-11'))
        });

        expect(format(result.current.getValue())).toBe("2023-01-11");
        formData = formRef.current.getData();
        expect(formData.date).toBe("2023-01-11");
    });
});