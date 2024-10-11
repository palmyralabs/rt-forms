import { act, renderHook } from "@testing-library/react";
import { FieldOptions, IFieldManager, useFieldManager, PalmyraForm, IMutateOptions } from "../../../../../src/palmyra";
import { describe, expect, test } from "vitest";

describe('useFieldManager', () => {

    test('useFieldManager', () => {
        const wrapper = ({ children }) => {
            return <PalmyraForm formData={{}}>{children} </PalmyraForm>
        }
        const options: FieldOptions = {
            attribute: 'email',
            required: true,
            validRule: { rule: 'email', errorMessage: 'Invalid Email Address' }
        }
        const { result } = renderHook(() => useFieldManager('email', options), { wrapper })
        const fieldManager: IFieldManager = result.current;

        expect(fieldManager.getValue()).toBe('');
        expect(result.current.getError().status).toBeFalsy();
        expect(result.current.getError().message).toBe('');        
        expect(result.current.isValid()).toBeFalsy();

        act(() => {
            fieldManager.setMutateOptions((t: IMutateOptions) => { return { ...t, required: false } });
        });

        expect(fieldManager.getValue()).toBe('');
        expect(result.current.getError().status).toBeFalsy();
        expect(result.current.getError().message).toBe('');
        expect(result.current.isValid()).toBeTruthy();

        act(() => {
            fieldManager.setMutateOptions((t: IMutateOptions) => { return { ...t, required: true } });
        });

        expect(fieldManager.getValue()).toBe('');
        expect(result.current.getError().status).toBeTruthy();
        expect(result.current.getError().message).toBe('required');
        expect(result.current.isValid()).toBeFalsy();
    })
})