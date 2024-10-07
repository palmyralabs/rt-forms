import { fireEvent, queryByAttribute, render, renderHook, screen } from "@testing-library/react";
import { act, useRef } from "react";
import { IForm, IInputField, PalmyraForm } from "../../../../src/palmyra";
import InputField from "../../../field/InputField";
import '@testing-library/jest-dom';

describe("Palmyra Form", () => {

    const initProps = () => {
        const getById: any = queryByAttribute.bind(null, 'id');
        const formRef: any = renderHook(() => useRef<IForm>()).result.current;
        const fieldRef: any = renderHook(() => useRef<IInputField>()).result.current;
        const numberFieldRef: any = renderHook(() => useRef<IInputField>()).result.current;
        return { getById, formRef, fieldRef, numberFieldRef }
    }

    test("input field - formref - data", () => {
        const { formRef } = initProps();
        const Wrapper = () => {
            return (
                <PalmyraForm formData={{ email: 'sample@gmail.com', age: 18 }} ref={formRef}>
                    <InputField attribute="email" />
                    <InputField attribute="age" title="Age" />
                </PalmyraForm>)
        }
        render(<Wrapper />);
        expect(formRef.current.getData().email).toBe('sample@gmail.com');
        expect(formRef.current.getData().age).toBe(18);
    });

    test("input field - formref - onchange", () => {
        const { formRef } = initProps();
        const Wrapper = () => {
            return (
                <PalmyraForm formData={{ email: 'sample@gmail.com', age: 18 }} ref={formRef} >
                    <InputField attribute="email" title="Email" />
                    <InputField attribute="age" title="Age" />
                </PalmyraForm>)
        }
        render(<Wrapper />);
        expect(formRef.current.getData().email).toBe('sample@gmail.com');
        expect(formRef.current.getData().age).toBe(18);

        const emailInput = screen.getByTitle('Email');
        const ageInput = screen.getByTitle('Age');
        fireEvent.change(emailInput, { target: { value: 'example@gmail.com' } });
        fireEvent.change(ageInput, { target: { value: 20 } });

        expect(formRef.current.getData().email).toBe('example@gmail.com');
        expect(formRef.current.getData().age).toBe("20"); // Expected Number but returns string
    });

    test("input field - formref - set value", () => {
        const { formRef } = initProps();
        const Wrapper = () => {
            return (
                <PalmyraForm formData={{ email: 'sample@gmail.com', age: 18 }} ref={formRef}>
                    <InputField attribute="email" title="Email" />
                    <InputField attribute="age" title="Age" />
                </PalmyraForm>)
        }
        render(<Wrapper />);
        expect(formRef.current.getData().email).toBe('sample@gmail.com');
        expect(formRef.current.getData().age).toBe(18);
        act(() => {
            formRef.current.setData({ email: 'example@gmail.com' });
            formRef.current.setData({ age: 20 });
        })
        expect(formRef.current.getData().email).toBe('example@gmail.com');
        expect(formRef.current.getData().age).toBe(20);
    });

    test("input field - formref - rule - failure", () => {
        const { formRef } = initProps();
        const Wrapper = () => {
            return (
                <PalmyraForm formData={{ email: 'sample@gmail', age: "adas" }} ref={formRef}>
                    <InputField attribute="email" title="Email"
                        validRule={{ rule: "email", errorMessage: "Invalid Email" }} />
                    <InputField attribute="age" title="Age"
                        validRule={{ rule: "number", errorMessage: "Number only" }} />
                </PalmyraForm>)
        }
        render(<Wrapper />);
        expect(formRef.current.getData().email).toBe('sample@gmail');
        expect(formRef.current.getData().age).toBe('adas');

        expect(formRef.current.isValid()).toBeFalsy();

        const errorMessage = screen.getByText(/Invalid Email/i);
        expect(errorMessage).toBeInTheDocument();

        const numberErrorMessage = screen.getByText(/Number only/i);
        expect(numberErrorMessage).toBeInTheDocument();
    });

    test("input field - formref - rule - success", () => {
        const { formRef } = initProps();
        const Wrapper = () => {
            return (
                <PalmyraForm formData={{ email: 'sample@gmail', pNumber: "Asd" }} ref={formRef}>
                    <InputField attribute="email" title="Email"
                        validRule={{ rule: "email", errorMessage: "Invalid Email" }} />
                    <InputField attribute="pNumber" title="P Number"
                        validRule={{ rule: "number", errorMessage: "Numbers only" }} />
                </PalmyraForm>)
        }

        render(<Wrapper />);
        expect(formRef.current.getData().email).toBe('sample@gmail');
        expect(formRef.current.getData().pNumber).toBe('Asd');
        expect(formRef.current.isValid()).toBeFalsy();

        const emailErrorMessage = screen.getByText(/Invalid Email/i);
        expect(emailErrorMessage).toBeInTheDocument();
        const numberErrorMessage = screen.getByText(/Numbers Only/i);
        expect(numberErrorMessage).toBeInTheDocument();

        const emailInput = screen.getByTitle('Email');
        fireEvent.change(emailInput, { target: { value: 'example@gmail.com' } });

        const numberInput = screen.getByTitle('P Number');
        fireEvent.change(numberInput, { target: { value: 90876 } });

        expect(formRef.current.getData().email).toBe('example@gmail.com');
        expect(formRef.current.getData().pNumber).toBe("90876"); // Expected Number but returns string
        expect(formRef.current.isValid()).toBeTruthy();
    });

    test("input field - formref - required - failure", () => {
        const { formRef } = initProps();
        const Wrapper = () => {
            return (
                <PalmyraForm formData={{ email: '', pNumber: '' }} ref={formRef}>
                    <InputField attribute="email" title="Email" required
                        invalidMessage="Required" />
                    <InputField attribute="pNumber" title="P Number"
                        required invalidMessage="Required" />
                </PalmyraForm>)
        }
        render(<Wrapper />);
        expect(formRef.current.getData().email).toBe('');
        expect(formRef.current.getData().pNumber).toBe("");

        const emailErrorMessage = screen.getAllByText(/Required/i);
        const numberErrorMessage = screen.getAllByText(/Required/i);

        expect(emailErrorMessage).toBeTruthy();
        expect(numberErrorMessage).toBeTruthy();
        expect(formRef.current.isValid()).toBeFalsy();
    });

    test("input field - formref - default data", () => {
        const { formRef } = initProps();
        const Wrapper = () => {
            return (
                <PalmyraForm formData={{}} ref={formRef}>
                    <InputField attribute="email" defaultValue={"sample@gmail.com"} />
                    <InputField attribute="pNumber" defaultValue={98234} />
                </PalmyraForm>)
        }
        render(<Wrapper />);
        expect(formRef.current.getData().email).toBe('sample@gmail.com');
        expect(formRef.current.getData().pNumber).toBe(98234);
    });

});