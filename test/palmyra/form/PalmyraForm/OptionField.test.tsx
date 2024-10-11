import { render, renderHook } from "@testing-library/react";
import { act, useRef } from "react";
import { IForm, IInputField, PalmyraForm } from "../../../../src/palmyra";
import InputField from "../../../field/InputField";
import { expect, test } from "vitest";

test('form ref - initial data', () => {
    const formRef: any = renderHook(() => useRef<IForm>()).result.current;
    const Wrapper = () => {
        return (<>
            <PalmyraForm formData={{ option: 1 }} ref={formRef}>
                <InputField attribute="option" title="Option" />

            </PalmyraForm>
        </>);
    };
    render(<Wrapper />);
    expect(formRef.current.getData().option).toBe(1);
    act(() => {
        formRef.current.setData({ option: 0 });
    })
    expect(formRef.current.getData().option).toBe(0);
});

test('form ref - initial data 0', () => {
    const formRef: any = renderHook(() => useRef<IForm>()).result.current;
    const Wrapper = () => {
        return (<>
            <PalmyraForm formData={{}} ref={formRef}>
                <InputField attribute="option" title="Option" />
            </PalmyraForm>
        </>);
    };

    render(<Wrapper />);
    act(() => {
        formRef.current.setData({ option: 0 });
    })
    expect(formRef.current.getData().option).toBe(0);
});

test('field ref - initial data', () => {
    const fieldRef: any = renderHook(() => useRef<IInputField>()).result.current;
    const Wrapper = () => {
        return (<>
            <PalmyraForm formData={{ option: 1 }}>
                <InputField attribute="option" title="Option" ref={fieldRef} />
            </PalmyraForm>
        </>);
    };
    render(<Wrapper />);
    expect(fieldRef.current.getValue()).toBe(1);
    act(() => {
        fieldRef.current.setValue(0);
    })
    expect(fieldRef.current.getValue()).toBe(0);
});

test('field ref - initial data 0', () => {
    const fieldRef: any = renderHook(() => useRef<IForm>()).result.current;
    const Wrapper = () => {
        return (<>
            <PalmyraForm formData={{}} >
                <InputField attribute="option" title="Option" ref={fieldRef} />
            </PalmyraForm>
        </>);
    };
    render(<Wrapper />);
    act(() => {
        fieldRef.current.setValue(0);
    })
    expect(fieldRef.current.getValue()).toBe(0);
});