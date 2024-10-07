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

    test("input field - fieldref - data", () => {
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

    test("input field - formref - data", () => {
        const { formRef } = initProps();
        const Wrapper = () => {
            return (
                <PalmyraForm formData={{ email: 'sample@gmail.com' }} ref={formRef} >
                    <InputField attribute="email" />
                </PalmyraForm>)
        }
        render(<Wrapper />);
        expect(formRef.current.getData().email).toBe('sample@gmail.com');
    });

    test("input field - fieldref - onchange", () => {
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

    test("input field - formref - onchange", () => {
        const { formRef } = initProps();
        const Wrapper = () => {
            return (
                <PalmyraForm formData={{ email: 'sample@gmail.com' }} ref={formRef}>
                    <InputField attribute="email" title="Email" />
                </PalmyraForm>)
        }
        render(<Wrapper />);

        expect(formRef.current.getData().email).toBe('sample@gmail.com');
        const emailInput = screen.getByTitle('Email');
        fireEvent.change(emailInput, { target: { value: 'example@gmail.com' } });
        expect(formRef.current.getData().email).toBe('example@gmail.com');
    });

    test("input field - fieldref - default data", () => {
        const { fieldRef } = initProps();
        const Wrapper = () => {
            return (
                <PalmyraForm formData={{}} >
                    <InputField attribute="email" ref={fieldRef} defaultValue={"sample@gmail.com"} />
                </PalmyraForm>)
        }
        render(<Wrapper />);
        expect(fieldRef.current.getValue()).toBe('sample@gmail.com');
    });

    test("input field - formref - default data", () => {
        const { formRef } = initProps();
        const Wrapper = () => {
            return (
                <PalmyraForm formData={{}} ref={formRef}>
                    <InputField attribute="email" defaultValue={"sample@gmail.com"} />
                </PalmyraForm>)
        }

        render(<Wrapper />);
        expect(formRef.current.getData().email).toBe('sample@gmail.com');
    });
})