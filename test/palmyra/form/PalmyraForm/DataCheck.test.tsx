import { fireEvent, queryByAttribute, render, renderHook, screen } from "@testing-library/react";
import { useRef } from "react";
import { IForm, IInputField, PalmyraForm } from "../../../../src/palmyra";
import InputField from "../../../field/InputField";

describe("Palmyra Form", () => {

    const initProps = () => {
        const getById: any = queryByAttribute.bind(null, 'id');
        const formRef: any = renderHook(() => useRef<IForm>()).result.current;
        const fieldRef: any = renderHook(() => useRef<IInputField>()).result.current;
        return { getById, formRef, fieldRef }
    }

    test("input field - data", () => {
        const { fieldRef } = initProps();
        const Wrapper = () => {
            return (
                <PalmyraForm formData={{ email: 'sample@gmail.com' }} >
                    <InputField attribute="email" ref={fieldRef} />
                </PalmyraForm>)
        }

        render(<Wrapper />);

        expect(fieldRef.current.getValue()).toBe('sample@gmail.com');
    });

    test("input field - onchange", () => {
        const { fieldRef } = initProps();
        const Wrapper = () => {
            return (
                <PalmyraForm formData={{ email: 'sample@gmail.com' }} >
                    <InputField attribute="email" ref={fieldRef} title="Email" />
                </PalmyraForm>)
        }

        render(<Wrapper />);

        expect(fieldRef.current.getValue()).toBe('sample@gmail.com');
        const emailInput = screen.getByTitle('Email');

        fireEvent.change(emailInput, { target: { value: 'example@gmail.com' } });

        expect(fieldRef.current.getValue()).toBe('example@gmail.com');
    });


})