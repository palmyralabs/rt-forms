import { describe, expect, test } from "vitest";
import { FieldOptions, IFieldManager, IForm, PalmyraForm, useFieldManager } from "../../../../../../src/palmyra";
import { renderHook } from "@testing-library/react";
import { useRef } from "react";

describe('PalmyraForm/useFieldManager- Form Initialization - required', () => {

    const formRefRender = renderHook(() => useRef<IForm>(null));
    const formRef = formRefRender.result.current;

    test("no defaultValue", () => {

        /* formData {}
        no defaultValue set
        required - set to true
    	
        expect - fieldValue toBe ''
        expect - formData toBe {<attribute>:''}
        expect - field, form - isValid Falsy */

        const wrapper = ({ children }) => {
            return <PalmyraForm formData={{}} ref={formRef}>{children} </PalmyraForm>
        }
        const options: FieldOptions = {
            attribute: 'email',
            required: true
        }
        const { result } = renderHook(() => useFieldManager('email', options), { wrapper })
        const fieldManager: IFieldManager = result.current;
        const formData = formRef?.current?.getData();

        expect(fieldManager.getValue()).toBe('');
        expect(formData).toStrictEqual({ email: '' });
        expect(fieldManager.isValid()).toBeFalsy();
        expect(formRef?.current?.isValid()).toBeFalsy();
    });

    test("no form data - set defaultValue", () => {

        /* formData - {}
        defaultValue - 'defValue'
        required - set to true
	
        expect - fieldValue toBe 'defValue'
        expect - formData toBe {<attribute>:'defValue'}
        expect - field, form - isValid truthy*/

        const wrapper = ({ children }) => {
            return <PalmyraForm formData={{}} ref={formRef}>{children} </PalmyraForm>
        }
        const options: FieldOptions = {
            attribute: 'email',
            required: true,
            defaultValue: 'example@gmail.com'
        }
        const { result } = renderHook(() => useFieldManager('email', options), { wrapper })
        const fieldManager: IFieldManager = result.current;
        const formData = formRef?.current?.getData();

        expect(fieldManager.getValue()).toBe('example@gmail.com');
        expect(formData).toStrictEqual({ email: 'example@gmail.com' });
        expect(fieldManager.isValid()).toBeTruthy();
        expect(formRef?.current?.isValid()).toBeTruthy();
    });

    test("formData provided", () => {

        /* formData provided
        formData - {<attribute>:'value'}
        no defaultValue set
        required - set to true
	
        expect - fieldValue toBe 'value'
        expect - formData toBe {<attribute>:'value'}
        expect - field, form - isValid truthy*/

        const wrapper = ({ children }) => {
            return <PalmyraForm formData={{ email: 'example@gmail.com' }} ref={formRef}>{children} </PalmyraForm>
        }
        const options: FieldOptions = {
            attribute: 'email',
            required: true
        }
        const { result } = renderHook(() => useFieldManager('email', options), { wrapper })
        const fieldManager: IFieldManager = result.current;
        const formData = formRef?.current?.getData();

        expect(fieldManager.getValue()).toBe('example@gmail.com');
        expect(formData).toStrictEqual({ email: 'example@gmail.com' });
        expect(fieldManager.isValid()).toBeTruthy();
        expect(formRef?.current?.isValid()).toBeTruthy();
    });

    test("no formData provided, defaultValue set", () => {

        /* no formData, defaultValue set
        formData - {}
        defaultValue - 'defValue'
        required - set to true
	
        expect - fieldValue toBe 'defValue'
        expect - formData toBe {<attribute>:'defValue'}
        expect - field, form - isValid truthy
	*/

        const wrapper = ({ children }) => {
            return <PalmyraForm formData={{ }} ref={formRef}>{children} </PalmyraForm>
        }
        const options: FieldOptions = {
            attribute: 'email',
            required: true,
            defaultValue: 'example@gmail.com'
        }
        const { result } = renderHook(() => useFieldManager('email', options), { wrapper })
        const fieldManager: IFieldManager = result.current;
        const formData = formRef?.current?.getData();

        expect(fieldManager.getValue()).toBe('example@gmail.com');
        expect(formData).toStrictEqual({ email: 'example@gmail.com' });
        expect(fieldManager.isValid()).toBeTruthy();
        expect(formRef?.current?.isValid()).toBeTruthy();
    });

    test("formData provided, defaultValue set", () => {

        /* formData provided, defaultValue set
        formData - {<attribute>:'value'}
        defaultValue - 'defValue'
        required - set to true
	
        expect - fieldValue toBe 'value'
        expect - formData toBe {<attribute>:'value'}
        expect - field, form - isValid truthy
	*/

        const wrapper = ({ children }) => {
            return <PalmyraForm formData={{ email: 'sample@gmail.com' }} ref={formRef}>{children} </PalmyraForm>
        }
        const options: FieldOptions = {
            attribute: 'email',
            required: true,
            defaultValue: 'example@gmail.com'
        }
        const { result } = renderHook(() => useFieldManager('email', options), { wrapper })
        const fieldManager: IFieldManager = result.current;
        const formData = formRef?.current?.getData();

        expect(fieldManager.getValue()).toBe('sample@gmail.com');
        expect(formData).toStrictEqual({ email: 'sample@gmail.com' });
        expect(fieldManager.isValid()).toBeTruthy();
        expect(formRef?.current?.isValid()).toBeTruthy();
    });

});