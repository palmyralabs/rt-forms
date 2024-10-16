import { renderHook } from "@testing-library/react";
import { FieldOptions, IFieldManager, useFieldManager, PalmyraForm, IForm } from "../../../../../../src/palmyra";
import { describe, expect, test } from "vitest";
import { useRef } from "react";

describe('PalmyraForm/useFieldManager- Form Initialization / Value Assignments', () => {

    test("no defaultValue", () => {
        /**         
            formData - {}
            no defaultValue set
            
            expect - fieldValue toBe ''
            expect - formData toBe {<attribute>:''}
            expect - field, form - isValid truthy
         */

        const wrapper = ({ children }) => {
            return <PalmyraForm formData={{}}>{children} </PalmyraForm>
        }
        const options: FieldOptions = { attribute: 'email' }

        const { result } = renderHook(() => useFieldManager('email', options), { wrapper })
        const fieldManager: IFieldManager = result.current;
        expect(fieldManager.getValue()).toBe('');
    });

    test("from formData", () => {
        /**
        formData - {<attribute>:'value'}
        no defaultValue set
        
        expect - fieldValue toBe 'value'
        expect - formData toBe {<attribute>:'value'}
        expect - field, form - isValid truthy
         */
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
        /**
        formData - {}
        defaultValue - 'defValue'
        
        expect - fieldValue toBe 'defValue'
        expect - formData toBe {<attribute>:'defValue'}
        expect - field, form - isValid truthy
         */
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

    test("from formData, and defaultValue set", () => {
        /**
        formData - {<attribute>:'value'}
        defaultValue - 'defValue'
        
        expect - fieldValue toBe 'value'
        expect - formData toBe {<attribute>:'value'}
        expect - field, form - isValid truthy
         */

        const formRefRender = renderHook(() => useRef<IForm>());
        const formRef = formRefRender.result.current;

        const wrapper = ({ children }) => {
            return <PalmyraForm formData={{ email: 'hello@gmail.com' }} ref={formRef}>{children} </PalmyraForm>
        }
        const options: FieldOptions = {
            attribute: 'email', defaultValue: 'hello@gmail.com'
        }
        const { result } = renderHook(() => useFieldManager('email', options), { wrapper })
        const fieldManager: IFieldManager = result.current;
        expect(fieldManager.getValue()).toBe('hello@gmail.com');
        expect(fieldManager.isValid()).toBeTruthy();
        expect(formRef?.current?.isValid()).toBeTruthy();
    });
})