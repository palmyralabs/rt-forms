import { FieldOptions, IForm, PalmyraForm, useFieldManager } from "../../../../../../src/palmyra";
import { describe, expect, test } from "vitest";
import { renderHook } from "@testing-library/react";
import { act, useRef } from "react";
import dayjs from "dayjs";

const serverPattern = "YYYY-MM-DD";

const parse = (rawData: string) => {
    if (rawData) {
        const date = dayjs(rawData, serverPattern);
        return date.isValid() ? date.toDate() : undefined;
    }
};

const format = (v: Date) => {
    if (v instanceof Date) {
        return dayjs(v).format(serverPattern);
    }
    return '';
};

describe('useFieldManager - DateField', () => {

    test('Initial form data', () => {

        const formRefRender = renderHook(() => useRef<IForm>(null));
        const formRef = formRefRender.result.current;

        const wrapper = ({ children }) => {
            return <PalmyraForm formData={{ date: '2023-11-12' }} ref={formRef}>{children} </PalmyraForm>
        }
        const options: FieldOptions = { attribute: 'date' }
        const { result } = renderHook(() => useFieldManager('date', options, { format, parse }), { wrapper });

        const formData = formRef.current.getData();
        const v = result.current.getValue();

        expect(format(v)).toBe('2023-11-12');
        expect(formData.date).toBe('2023-11-12');
    });


    test('Default Value in field', () => {
        const formRefRender = renderHook(() => useRef<IForm>(null));
        const formRef = formRefRender.result.current;

        const wrapper = ({ children }) => {
            return <PalmyraForm formData={{}} ref={formRef}>{children} </PalmyraForm>
        }
        const options: FieldOptions = { attribute: 'date', defaultValue: '2023-11-12' }
        const { result } = renderHook(() => useFieldManager('date', options, { format, parse }), { wrapper });

        const formData = formRef.current.getData();
        const v = result.current.getValue();

        expect(format(v)).toBe('2023-11-12');
        expect(formData.date).toBe('2023-11-12');
    });


    test('set form data - no default value', () => {
        const formRefRender = renderHook(() => useRef<IForm>(null));
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

        expect(format(v)).toBe('2023-11-12');
        expect(formData.date).toBe('2023-11-12');
    });

    test('set form data - with default value', () => {
        const formRefRender = renderHook(() => useRef<IForm>(null));
        const formRef = formRefRender.result.current;
        const wrapper = ({ children }) => {
            return <PalmyraForm formData={{}} ref={formRef}>{children} </PalmyraForm>
        }
        const options: FieldOptions = { attribute: 'date', defaultValue: '2023-01-12' }
        const { result } = renderHook(() => useFieldManager('date', options, { format, parse }), { wrapper });

        const formData = formRef.current.getData();
        const v = result.current.getValue();

        expect(format(v)).toBe('2023-01-12');
        expect(formData.date).toBe('2023-01-12');

        act(() => {
            formRef.current.setData({ date: '2023-11-12' })
        });
        expect(format(result.current.getValue())).toBe('2023-11-12');
        expect(formRef.current.getData().date).toBe('2023-11-12');
    });

    test('set form data - without date value', () => {
        const formRefRender = renderHook(() => useRef<IForm>(null));
        const formRef = formRefRender.result.current;

        const wrapper = ({ children }) => {
            return <PalmyraForm formData={{}} ref={formRef}>{children} </PalmyraForm>
        }
        const options: FieldOptions = { attribute: 'date', defaultValue: '2023-01-12' }
        const { result } = renderHook(() => useFieldManager('date', options, { format, parse }), { wrapper });

        const formData = formRef.current.getData();
        const v = result.current.getValue();

        expect(format(v)).toBe('2023-01-12');
        expect(formData.date).toBe('2023-01-12');

        act(() => {
            formRef.current.setData({})
        });

        expect(result.current.getValue()).toBeUndefined();
        expect(formRef.current.getData().date).toBe("");
    });

    test('set field data', () => {
        const formRefRender = renderHook(() => useRef<IForm>(null));
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

    test('set required', () => {
        const formRefRender = renderHook(() => useRef<IForm>(null));
        const formRef = formRefRender.result.current;

        const wrapper = ({ children }) => {
            return <PalmyraForm formData={{}} ref={formRef}>{children} </PalmyraForm>
        }
        const options: FieldOptions = { attribute: 'date', required: true, invalidMessage: "Required" }
        const { result } = renderHook(() => useFieldManager('date', options, { format, parse }), { wrapper });

        var formData = formRef.current.getData();

        expect(result.current.getValue()).toBeUndefined();
        expect(formData.date).toBe("");
        expect(result.current.isValid()).toBeFalsy();
        expect(formRef.current.isValid()).toBeFalsy();
    });


    test('set required - with data', () => {
        const formRefRender = renderHook(() => useRef<IForm>(null));
        const formRef = formRefRender.result.current;

        const wrapper = ({ children }) => {
            return <PalmyraForm formData={{}} ref={formRef}>{children} </PalmyraForm>
        }
        const options: FieldOptions = { attribute: 'date', required: true, invalidMessage: "Required" }
        const { result } = renderHook(() => useFieldManager('date', options, { format, parse }), { wrapper });

        var formData = formRef.current.getData();

        expect(result.current.getValue()).toBeUndefined();
        expect(formData.date).toBe("");
        expect(result.current.isValid()).toBeFalsy();
        expect(formRef.current.isValid()).toBeFalsy();

        act(() => {
            result.current.setValue(parse('2024-11-21'))
        });

        expect(format(result.current.getValue())).toBe('2024-11-21');
        expect(formRef.current.getData().date).toBe("2024-11-21");
    });
});