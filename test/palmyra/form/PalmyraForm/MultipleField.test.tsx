import { fireEvent, queryByAttribute, render, renderHook, screen } from "@testing-library/react";
import { act, useRef } from "react";
import { IForm, IInputField, PalmyraForm } from "../../../../src/palmyra";
import InputField from "../../../field/InputField";
import { describe, expect, test } from 'vitest';
import { Button } from "@mui/material";

describe("Palmyra Form", () => {

    const initProps = () => {
        const getById: any = queryByAttribute.bind(null, 'id');
        const formRef: any = renderHook(() => useRef<IForm>()).result.current;
        const fieldRef: any = renderHook(() => useRef<IInputField>()).result.current;
        const numberFieldRef: any = renderHook(() => useRef<IInputField>()).result.current;
        return { getById, formRef, fieldRef, numberFieldRef }
    }

    test("input field - data", () => {
        const { fieldRef, numberFieldRef } = initProps();
        const Wrapper = () => {
            return (
                <PalmyraForm formData={{ email: 'sample@gmail.com', age: 18 }} >
                    <InputField attribute="email" ref={fieldRef} />
                    <InputField attribute="age" ref={numberFieldRef} title="Age" />
                </PalmyraForm>)
        }

        render(<Wrapper />);

        expect(fieldRef.current.getValue()).toBe('sample@gmail.com');
        expect(numberFieldRef.current.getValue()).toBe(18);
    });

    test("input field - onchange", () => {
        const { fieldRef, numberFieldRef } = initProps();
        const Wrapper = () => {
            return (
                <PalmyraForm formData={{ email: 'sample@gmail.com', age: 18 }} >
                    <InputField attribute="email" ref={fieldRef} title="Email" />
                    <InputField attribute="age" ref={numberFieldRef} title="Age" />
                </PalmyraForm>)
        }

        render(<Wrapper />);

        expect(fieldRef.current.getValue()).toBe('sample@gmail.com');
        expect(numberFieldRef.current.getValue()).toBe(18);

        const emailInput = screen.getByTitle('Email');
        const ageInput = screen.getByTitle('Age');

        fireEvent.change(emailInput, { target: { value: 'example@gmail.com' } });
        fireEvent.change(ageInput, { target: { value: 20 } });

        expect(fieldRef.current.getValue()).toBe('example@gmail.com');
        expect(numberFieldRef.current.getValue()).toBe("20");   // Number returns string
    });


    test("input field - set value", () => {
        const { fieldRef, numberFieldRef } = initProps();
        const Wrapper = () => {
            return (
                <PalmyraForm formData={{ email: 'sample@gmail.com', age: 18 }} >
                    <InputField attribute="email" ref={fieldRef} title="Email" />
                    <InputField attribute="age" ref={numberFieldRef} title="Age" />
                </PalmyraForm>)
        }
        render(<Wrapper />);

        expect(fieldRef.current.getValue()).toBe('sample@gmail.com');
        expect(numberFieldRef.current.getValue()).toBe(18);

        act(() => {
            fieldRef.current.setValue('example@gmail.com', false, true);
            numberFieldRef.current.setValue(20, false, true);
        })
        expect(fieldRef.current.getValue()).toBe('example@gmail.com');
        expect(numberFieldRef.current.getValue()).toBe(20);
    });

    test("input field - rule - failure", () => {
        const { fieldRef, numberFieldRef } = initProps();
        const Wrapper = () => {
            return (
                <PalmyraForm formData={{ email: 'sample@gmail', age: "adas" }} >
                    <InputField attribute="email" ref={fieldRef} title="Email"
                        validRule={{ rule: "email", errorMessage: "Invalid Email" }} />
                    <InputField attribute="age" ref={numberFieldRef} title="Age"
                        validRule={{ rule: "number", errorMessage: "Number only" }} />
                </PalmyraForm>)
        }

        render(<Wrapper />);

        expect(fieldRef.current.getValue()).toBe('sample@gmail');
        expect(numberFieldRef?.current.getValue()).toBe('adas');

        expect(fieldRef.current.isValid()).toBeFalsy();
        expect(numberFieldRef.current.isValid()).toBeFalsy();

        const errorMessage = screen.getByText(/Invalid Email/i);
        expect(errorMessage).toBeInTheDocument();

        const numberErrorMessage = screen.getByText(/Number only/i);
        expect(numberErrorMessage).toBeInTheDocument();
    });

    test("input field - rule - success", () => {
        const { fieldRef, numberFieldRef } = initProps();
        const Wrapper = () => {
            return (
                <PalmyraForm formData={{ email: 'sample@gmail', pNumber: "Asd" }} >
                    <InputField attribute="email" ref={fieldRef} title="Email"
                        validRule={{ rule: "email", errorMessage: "Invalid Email" }} />
                    <InputField attribute="pNumber" ref={numberFieldRef} title="P Number"
                        validRule={{ rule: "number", errorMessage: "Numbers only" }} />
                </PalmyraForm>)
        }

        render(<Wrapper />);

        expect(fieldRef.current.getValue()).toBe('sample@gmail');
        expect(fieldRef.current.isValid()).toBeFalsy();
        expect(numberFieldRef.current.getValue()).toBe('Asd');
        expect(numberFieldRef.current.isValid()).toBeFalsy();

        const emailErrorMessage = screen.getByText(/Invalid Email/i);
        expect(emailErrorMessage).toBeInTheDocument();
        const numberErrorMessage = screen.getByText(/Numbers Only/i);
        expect(numberErrorMessage).toBeInTheDocument();

        const emailInput = screen.getByTitle('Email');
        fireEvent.change(emailInput, { target: { value: 'example@gmail.com' } });

        const numberInput = screen.getByTitle('P Number');
        fireEvent.change(numberInput, { target: { value: 90876 } });

        expect(fieldRef.current.getValue()).toBe('example@gmail.com');
        expect(fieldRef.current.isValid()).toBeTruthy();
        expect(numberFieldRef.current.getValue()).toBe("90876"); // Number returns string
        expect(numberFieldRef.current.isValid()).toBeTruthy();
    });

    test("input field - required - failure", () => {
        const { fieldRef, numberFieldRef } = initProps();
        const Wrapper = () => {
            return (
                <PalmyraForm formData={{ email: '', pNumber: '' }} >
                    <InputField attribute="email" ref={fieldRef} title="Email" required
                        invalidMessage="Required" />
                    <InputField attribute="pNumber" ref={numberFieldRef} title="P Number"
                        required invalidMessage="Required" />
                </PalmyraForm>)
        }
        render(<Wrapper />);

        expect(fieldRef.current.getValue()).toBe('');
        expect(numberFieldRef.current.getValue()).toBe("");

        const emailErrorMessage = screen.getAllByText(/Required/i);
        const numberErrorMessage = screen.getAllByText(/Required/i);

        expect(emailErrorMessage).toBeTruthy();
        expect(numberErrorMessage).toBeTruthy();
        expect(fieldRef.current.isValid()).toBeFalsy();
        expect(numberFieldRef.current.isValid()).toBeFalsy();
    });

    test('button - disable', () => {
        const { fieldRef, numberFieldRef, formRef } = initProps();
        const Wrapper = () => {
            return (<>
                <PalmyraForm formData={{ email: '', pNumber: '' }} ref={formRef}>
                    <InputField attribute="email" ref={fieldRef} title="Email" required
                        invalidMessage="Email is Required" />
                    <InputField attribute="pNumber" ref={numberFieldRef} title="P Number"
                        required invalidMessage="Number is Required" />
                </PalmyraForm>
                <Button onClick={() => { console.log("button") }} disabled>Submit</Button>
            </>);
        };

        render(<Wrapper />);

        const button = screen.getByRole('button', { name: /submit/i });
        fireEvent.click(button);

        expect(fieldRef.current.getValue()).toBe('');
        expect(numberFieldRef.current.getValue()).toBe("");

        const emailErrorMessage = screen.getByText(/Email is Required/i);
        const numberErrorMessage = screen.getByText(/Number is Required/i);

        expect(emailErrorMessage).toBeInTheDocument();
        expect(numberErrorMessage).toBeInTheDocument();
        expect(button).toBeDisabled();

        expect(formRef.current.getData().email).toBe('');
        expect(formRef.current.getData().pNumber).toBe('');
        expect(formRef.current.isValid()).toBeFalsy
    });

    // test('button - enable', () => {
    //     const { fieldRef, numberFieldRef, formRef } = initProps();
    //     const Wrapper = () => {
    //         return (<>
    //             <PalmyraForm formData={{ email: '', pNumber: '' }} ref={formRef}>
    //                 <InputField attribute="email" ref={fieldRef} title="Email" required
    //                     invalidMessage="Email is Required" />
    //                 <InputField attribute="pNumber" ref={numberFieldRef} title="P Number"
    //                     required invalidMessage="Number is Required" />
    //             </PalmyraForm>
    //             <Button onClick={() => { console.log("button") }} disabled>Submit</Button>
    //         </>);
    //     };

    //     render(<Wrapper />);

    //     const button = screen.getByRole('button', { name: /submit/i });
    //     fireEvent.click(button);

    //     expect(fieldRef.current.getValue()).toBe('');
    //     expect(numberFieldRef.current.getValue()).toBe("");

    //     const emailErrorMessage = screen.getByText(/Email is Required/i);
    //     const numberErrorMessage = screen.getByText(/Number is Required/i);

    //     expect(emailErrorMessage).toBeInTheDocument();
    //     expect(numberErrorMessage).toBeInTheDocument();
    //     expect(button).toBeDisabled();

    //     expect(formRef.current.getData().email).toBe('');
    //     expect(formRef.current.getData().pNumber).toBe('');
    //     expect(formRef.current.isValid()).toBeFalsy

    //     act(() => {
    //         // fieldRef.current.setValue('example@gmail.com', false, true);
    //         // numberFieldRef.current.setValue(20, false, true);

    //         formRef.current.setData({ email: 'example@gmail.com' })
    //         // formRef.current.setData({ pNumber: 20 })

    //         // fieldRef.current.setDisabled(false);
    //         // numberFieldRef.current.setDisabled(false);
    //     })

    //     expect(fieldRef.current.getValue()).toBe('example@gmail.com');
    //     expect(numberFieldRef.current.getValue()).toBe(20);
    //     console.log(formRef.current.getData())

    //     expect(formRef.current.getData().email).toBe('example@gmail.com');
    //     expect(formRef.current.getData().pNumber).toBe(20);
    //     // expect(formRef.current.isValid()).toBeTruthy;
    // });

});