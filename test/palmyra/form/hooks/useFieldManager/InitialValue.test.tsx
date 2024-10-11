import { renderHook } from "@testing-library/react";
import { FieldOptions, IFieldManager, useFieldManager, PalmyraForm } from "../../../../../src/palmyra";
import { describe, expect, test } from "vitest";

describe('PalmyraForm/useFieldManager- Value Assignments', () => {

    test("from formData", () => {
        const wrapper = ({ children }) => {
            return <PalmyraForm formData={{ email: 'helloworld@gmail.com' }}>{children} </PalmyraForm>
        }
        const options: FieldOptions = {
            attribute: 'email', defaultValue: 'hello@gmail.com'
        }
        const { result } = renderHook(() => useFieldManager('email', options), { wrapper })
        const fieldManager: IFieldManager = result.current;
        expect(fieldManager.getValue()).toBe('helloworld@gmail.com');
    });


    test("from defaultValue", () => {
        const wrapper = ({ children }) => {
            return <PalmyraForm formData={{}}>{children} </PalmyraForm>
        }
        const options: FieldOptions = {
            attribute: 'email', defaultValue: 'hello@gmail.com'
        }
        const { result } = renderHook(() => useFieldManager('email', options), { wrapper })
        const fieldManager: IFieldManager = result.current;
        expect(fieldManager.getValue()).toBe('hello@gmail.com');
    });

    test("no defaultValue", () => {
        const wrapper = ({ children }) => {
            return <PalmyraForm formData={{}}>{children} </PalmyraForm>
        }
        const options: FieldOptions = {
            attribute: 'email'
        }
        const { result } = renderHook(() => useFieldManager('email', options), { wrapper })
        const fieldManager: IFieldManager = result.current;
        expect(fieldManager.getValue()).toBe('');
    });
})