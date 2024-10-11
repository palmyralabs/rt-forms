import { fireEvent, queryByAttribute, render, renderHook, screen } from "@testing-library/react";
import { act, useRef } from "react";
import { IForm, IInputField, PalmyraForm } from "../../../../src/palmyra";
import InputField from "../../../field/InputField";
import { Button } from "@mui/material";
import { describe, expect, test } from 'vitest';

describe("Palmyra Form", () => {

    const initProps = () => {
        const getById: any = queryByAttribute.bind(null, 'id');
        const formRef: any = renderHook(() => useRef<IForm>()).result.current;
        const fieldRef: any = renderHook(() => useRef<IInputField>()).result.current;
        const numberFieldRef: any = renderHook(() => useRef<IInputField>()).result.current;
        return { getById, formRef, fieldRef, numberFieldRef }
    }

    test("input field - fieldref - data", () => {
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

    test("input field - fieldref - onchange", () => {
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

    test("input field - fieldref - rule - failure", () => {
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

    test("input field - fieldref - rule - success", () => {
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
        expect(numberFieldRef.current.getValue()).toBe("90876"); // Expected Number but returns string
        expect(numberFieldRef.current.isValid()).toBeTruthy();
    });

    test("input field - fieldref - required - failure", () => {
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

    test("input field - fieldref - default data", () => {
        const { fieldRef, numberFieldRef } = initProps();
        const Wrapper = () => {
            return (
                <PalmyraForm formData={{}} >
                    <InputField attribute="email" ref={fieldRef} defaultValue={"sample@gmail.com"} />
                    <InputField attribute="pNumber" ref={numberFieldRef} defaultValue={98234} />
                </PalmyraForm>)
        }
        render(<Wrapper />);
        expect(fieldRef.current.getValue()).toBe('sample@gmail.com');
        expect(numberFieldRef.current.getValue()).toBe(98234);
    });

    test("input field - fieldref - set value", () => {
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

    test("input field - fieldref - set required", () => {
        const { fieldRef, numberFieldRef } = initProps();
        const Wrapper = () => {
            return (<>
                <PalmyraForm formData={{ email: '', age: '' }} >
                    <InputField attribute="email" ref={fieldRef} />
                    <InputField attribute="age" ref={numberFieldRef} title="Age" />
                </PalmyraForm>
                <Button onClick={() => { console.log("button") }} disabled>Submit</Button></>)
        }

        render(<Wrapper />);
        act(() => {
            fieldRef.current.setRequired(true);
            numberFieldRef.current.setRequired(true);
        })
        expect(fieldRef.current.getValue()).toBe('');
        expect(numberFieldRef.current.getValue()).toBe('');

        const button = screen.getByRole('button', { name: /submit/i });
        fireEvent.click(button);
        expect(button).toBeDisabled();
    });


    test("input field - fieldref - get required error", () => {
        const { fieldRef, numberFieldRef } = initProps();
        const Wrapper = () => {
            return (<>
                <PalmyraForm formData={{ email: '', age: '' }} >
                    <InputField attribute="email" ref={fieldRef} />
                    <InputField attribute="age" ref={numberFieldRef} title="Age" />
                </PalmyraForm>
                <Button onClick={() => { console.log("button") }} disabled>Submit</Button></>)
        }

        render(<Wrapper />);
        act(() => {
            fieldRef.current.setRequired(true);
            numberFieldRef.current.setRequired(true);
        })
        expect(fieldRef.current.getValue()).toBe('');
        expect(numberFieldRef.current.getValue()).toBe('');

        const button = screen.getByRole('button', { name: /submit/i });
        fireEvent.click(button);
        expect(button).toBeDisabled();

        // expect(fieldRef.current.getError()).toBe('required');

        // error get onblur
        // const errorMessage = screen.getByText(/required/i);
        // expect(errorMessage).toBeInTheDocument();

        // const numberErrorMessage = screen.getByText(/required/i);
        // expect(numberErrorMessage).toBeInTheDocument();

        // expect(fieldRef.current.getError().status).toBeTruthy();
        // expect(fieldRef.current.getError().showError).toBeTruthy();
        // expect(fieldRef.current.getError().message).toBe('required');
    });

    test("input field - fieldref - set disabled", () => {
        const { fieldRef, numberFieldRef } = initProps();
        const Wrapper = () => {
            return (<>
                <PalmyraForm formData={{ email: 'em@gmail.com', age: '12' }} >
                    <InputField attribute="email" ref={fieldRef} />
                    <InputField attribute="age" ref={numberFieldRef} title="Age" />
                </PalmyraForm></>)
        }

        render(<Wrapper />);
        act(() => {
            fieldRef.current.setDisabled(true);
            numberFieldRef.current.setDisabled(true);
        })
        expect(fieldRef.current.getValue()).toBe('em@gmail.com');
        expect(numberFieldRef.current.getValue()).toBe('12');
    });

    test("input field - fieldref - set readonly", () => {
        const { fieldRef, numberFieldRef } = initProps();
        const Wrapper = () => {
            return (<>
                <PalmyraForm formData={{ email: 'em@gmail.com', age: '12' }} >
                    <InputField attribute="email" ref={fieldRef} />
                    <InputField attribute="age" ref={numberFieldRef} title="Age" />
                </PalmyraForm></>)
        }

        render(<Wrapper />);
        act(() => {
            fieldRef.current.setReadOnly(true);
            numberFieldRef.current.setReadOnly(true);
        })
        expect(fieldRef.current.getValue()).toBe('em@gmail.com');
        expect(numberFieldRef.current.getValue()).toBe('12');
    });

    test("input field - fieldref - set visible", () => {
        const { fieldRef, numberFieldRef } = initProps();
        const Wrapper = () => {
            return (<>
                <PalmyraForm formData={{ email: 'em@gmail.com', age: '12' }} >
                    <InputField attribute="email" ref={fieldRef} />
                    <InputField attribute="age" ref={numberFieldRef} title="Age" />
                </PalmyraForm></>)
        }

        render(<Wrapper />);
        act(() => {
            fieldRef.current.setVisible(true);
            numberFieldRef.current.setVisible(false);
        })
        expect(fieldRef.current.getValue()).toBe('em@gmail.com');
        expect(numberFieldRef.current.getValue()).toBe('12');
    });

});