import { act, renderHook } from "@testing-library/react";
import { FieldOptions, IFieldManager, useFieldManager, PalmyraForm } from "../../../../../src/palmyra";

describe('useFieldManager', () => {

    test('useFieldManager', () => {
        const wrapper = ({ children }) => {
            return <PalmyraForm formData={{ email: 'helloworld@gmail.com' }}>{children} </PalmyraForm>
        }
        const options: FieldOptions = {
            attribute: 'email',
            validRule: { rule: 'email', errorMessage: 'Invalid Email Address' }
        }
        const { result } = renderHook(() => useFieldManager('email', options), { wrapper })
        const fieldManager: IFieldManager = result.current;

        expect(result.current.getError().status).toBeFalsy();
        expect(result.current.getError().message).toBe('');
        expect(fieldManager.getValue()).toBe('helloworld@gmail.com');
        expect(result.current.isValid()).toBeTruthy();

        act(() => {
            fieldManager.setValue('hellow@gmail.c', false, true);
        })

        expect(result.current.getError().status).toBeTruthy();
        expect(result.current.getError().showError).toBeTruthy();
        expect(result.current.getError().message).toBe('Invalid Email Address');
        expect(result.current.isValid()).toBeFalsy();
    });

    test('useFieldManager', () => {
        const wrapper = ({ children }) => {
            return <PalmyraForm formData={{ email: 'helloworld@gmail.c' }}>{children} </PalmyraForm>
        }
        const options: FieldOptions = {
            attribute: 'email',
            validRule: { rule: 'email', errorMessage: 'Invalid Email Address' }
        }
        const { result } = renderHook(() => useFieldManager('email', options), { wrapper })
        const fieldManager: IFieldManager = result.current;
        expect(fieldManager.getValue()).toBe('helloworld@gmail.c');

        expect(result.current.getError().status).toBeTruthy();
        expect(result.current.getError().showError).toBeTruthy();
        expect(result.current.getError().message).toBe('Invalid Email Address');
        expect(result.current.isValid()).toBeFalsy();
    })


    test('useFieldManager', () => {
        const wrapper = ({ children }) => {
            return <PalmyraForm formData={{ }}>{children} </PalmyraForm>
        }
        const options: FieldOptions = {
            attribute: 'email',
            validRule: { rule: 'email', errorMessage: 'Invalid Email Address' }
        }
        const { result } = renderHook(() => useFieldManager('email', options), { wrapper })
        const fieldManager: IFieldManager = result.current;
        expect(fieldManager.getValue()).toBe('');
        expect(result.current.getError().status).toBeFalsy();
        expect(result.current.getError().showError).toBeFalsy();
        expect(result.current.getError().message).toBe('');
        expect(result.current.isValid()).toBeTruthy();        
    })
})