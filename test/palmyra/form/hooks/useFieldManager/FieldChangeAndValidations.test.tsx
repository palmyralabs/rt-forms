import { act, renderHook } from "@testing-library/react";
import { FieldOptions, IFieldManager, useFieldManager, PalmyraForm } from "../../../../../src/palmyra";

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
    expect(fieldManager.getValue()).toBe('helloworld@gmail.com');

    act(() => {
        fieldManager.setValue('hellow@gmail.c', false, true);
    })
    expect(result.current.getError().message).toBe('Invalid Email Address');
    expect(result.current.isValid()).toBeFalsy();
    console.log(result.current.getFieldProps());
})