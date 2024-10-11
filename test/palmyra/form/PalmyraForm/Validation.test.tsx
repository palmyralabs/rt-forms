import { fireEvent, queryByAttribute, render, renderHook, screen } from "@testing-library/react";
import { useRef } from "react";
import { IForm, IInputField, PalmyraForm } from "../../../../src/palmyra";
import InputField from "../../../field/InputField";
import { describe, expect, test } from 'vitest';

describe("Palmyra Form", () => {

    const initProps = () => {
        const getById: any = queryByAttribute.bind(null, 'id');
        const formRef: any = renderHook(() => useRef<IForm>()).result.current;
        const fieldRef: any = renderHook(() => useRef<IInputField>()).result.current;
        return { getById, formRef, fieldRef }
    }

    test("input field - rule - failure", () => {
        const { fieldRef } = initProps();
        const Wrapper = () => {
            return (
                <PalmyraForm formData={{ email: 'sample@gmail' }} >
                    <InputField attribute="email" ref={fieldRef} title="Email"
                        validRule={{ rule: "email", errorMessage: "Invalid Email" }} />
                </PalmyraForm>)
        }

        render(<Wrapper />);

        expect(fieldRef.current.getValue()).toBe('sample@gmail');

        expect(fieldRef.current.isValid()).toBeFalsy();

        const errorMessage = screen.getByText(/Invalid Email/i);
        expect(errorMessage).toBeTruthy();
        // expect(errorMessage).toBe(<div>Invalid Email</div>);
    });

    test("input field - rule - success", () => {
        const { fieldRef } = initProps();
        const Wrapper = () => {
            return (
                <PalmyraForm formData={{ email: 'sample@gmail' }} >
                    <InputField attribute="email" ref={fieldRef} title="Email"
                        validRule={{ rule: "email", errorMessage: "Invalid Email" }} />
                </PalmyraForm>)
        }

        render(<Wrapper />);

        expect(fieldRef.current.getValue()).toBe('sample@gmail');
        expect(fieldRef.current.isValid()).toBeFalsy();
        const errorMessage = screen.getByText(/Invalid Email/i);
        expect(errorMessage).toBeTruthy();
        const emailInput = screen.getByTitle('Email');
        fireEvent.change(emailInput, { target: { value: 'example@gmail.com' } });
        expect(fieldRef.current.getValue()).toBe('example@gmail.com');
        expect(fieldRef.current.isValid()).toBeTruthy();
    });

    test("input field - required - failure", () => {
        const { fieldRef } = initProps();
        const Wrapper = () => {
            return (
                <PalmyraForm formData={{ email: '' }} >
                    <InputField attribute="email" ref={fieldRef} title="Email" required
                        invalidMessage="Required" />
                </PalmyraForm>)
        }
        render(<Wrapper />);

        expect(fieldRef.current.getValue()).toBe('');
        const errorMessage = screen.getByText(/Required/i);
        // expect(errorMessage).toBe('Required');
        expect(errorMessage).toBeTruthy();
        expect(fieldRef.current.isValid()).toBeFalsy();
    });

    test("input field - required - success", () => {
        const { fieldRef } = initProps();
        const Wrapper = () => {
            return (
                <PalmyraForm formData={{ email: 'example@gmail.com' }} >
                    <InputField attribute="email" ref={fieldRef} title="Email" required
                        invalidMessage="Required" />
                </PalmyraForm>)
        }

        render(<Wrapper />);

        expect(fieldRef.current.getValue()).toBe('example@gmail.com');
        expect(fieldRef.current.isValid()).toBeTruthy();
    });

    test("input field - length - failure", () => {
        const { fieldRef } = initProps();
        const Wrapper = () => {
            return (
                <PalmyraForm formData={{ email: 'example@gmail.com' }} >
                    <InputField attribute="email" ref={fieldRef} title="Email"
                        length={{ eq: 15, errorMessage: "Length is 15" }} />
                </PalmyraForm>)
        }
        render(<Wrapper />);

        expect(fieldRef.current.getValue()).toBe('example@gmail.com');
        const errorMessage = screen.getByText(/Length is 15/i);
        // expect(errorMessage).toBe(<div>Length is 15</div>);
        expect(errorMessage).toBeTruthy();
        expect(fieldRef.current.isValid()).toBeFalsy();
    });

    test("input field - length - success", () => {
        const { fieldRef } = initProps();
        const Wrapper = () => {
            return (
                <PalmyraForm formData={{ email: 'examp@gmail.com' }} >
                    <InputField attribute="email" ref={fieldRef} title="Email"
                        length={{ eq: 15, errorMessage: "Length is 15" }} />
                </PalmyraForm>)
        }

        render(<Wrapper />);

        expect(fieldRef.current.getValue()).toBe('examp@gmail.com');
        expect(fieldRef.current.isValid()).toBeTruthy();
    });

    test("input field - range - failure", () => {
        const { fieldRef } = initProps();
        const Wrapper = () => {
            return (
                <PalmyraForm formData={{ age: 123 }} >
                    <InputField attribute="age" ref={fieldRef} title="Age"
                        range={{ end: 15, errorMessage: { end: "Range 15" } }} />
                </PalmyraForm>) // range error msg 
        }
        render(<Wrapper />);

        expect(fieldRef.current.getValue()).toBe(123);
        const errorMessage = screen.getByText(/Range 15/i);
        expect(errorMessage).toBeTruthy();
        expect(fieldRef.current.isValid()).toBeFalsy();
    });

    test("input field - range - success", () => {
        const { fieldRef } = initProps();
        const Wrapper = () => {
            return (
                <PalmyraForm formData={{ age: 15 }} >
                    <InputField attribute="age" ref={fieldRef} title="Age"
                        range={{ end: 15, errorMessage: "Range 15" }} />
                </PalmyraForm>)
        }

        render(<Wrapper />);

        expect(fieldRef.current.getValue()).toBe(15);
        expect(fieldRef.current.isValid()).toBeTruthy();
    });

});