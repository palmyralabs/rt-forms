import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import { FieldOptions, IFieldManager, PalmyraForm, useFieldManager } from "../../../../src/palmyra";
import { act } from "react";
import { Button } from "@mui/material";
import '@testing-library/jest-dom';
import MuiTextField from "../../../../demo/palmyra/mui/form/MuiTextField";

describe("Edit Form", () => {
    const wrapper = ({ children }) => {
        return <><PalmyraForm formData={{ email: 'helloworld@gmail.com' }}>{children}
            <Button onClick={() => { console.log("button") }}>Sumbit</Button>
        </PalmyraForm></>
    }

    test("initial value", () => {

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

    // test('renders the Button', () => {
    //     const options: FieldOptions = {
    //         attribute: 'email',
    //         validRule: { rule: 'email', errorMessage: 'Invalid Email Address' }
    //     }
    //     const { result } = renderHook(() => useFieldManager('email', options), { wrapper })

    //     expect(result.current.getError().status).toBeFalsy();
    //     const button = screen.getByText('Submit');
    //     expect(button).toBeInTheDocument();
    //     expect(button).toBeDisabled();
    // });

    // test('renders the Button and checks its initial state', () => {
    //     const options = {
    //         attribute: 'email',
    //     };
    //     const { result } = renderHook(() => useFieldManager('email', options), { wrapper });

    //     expect(result.current.getError().status).toBeFalsy();

    //     // render(<Wrapper />);

    //     const button = screen.getByText('Submit');
    //     expect(button).toBeInTheDocument();
    //     expect(button).toBeDisabled();
    // });

    // test('enables button when input is valid', () => {
    //     // render(<Wrapper />);

    //     const input = screen.getByDisplayValue('helloworld@gmail.com');
    //     const button = screen.getByText('Submit');

    //     fireEvent.change(input, { target: { value: 'newemail@gmail.com' } });
          
    //     expect(button).toBeEnabled();
    // });

    test('required validation', () => {
        const Wrapper = () => {
            return (
                <PalmyraForm formData={{ email: '' }}>
                    <MuiTextField attribute="email" invalidMessage="Email is required" required />
                    <Button onClick={() => { console.log("button") }}>Submit</Button>
                </PalmyraForm>
            );
        };

        render(<Wrapper />);

        const button = screen.getByRole('button', { name: /submit/i });
        fireEvent.click(button);

        const errorMessage = screen.getByText(/Email is required/i);
        expect(errorMessage).toBeInTheDocument();
    });

    test('rule validation', () => {
        const Wrapper = () => {
            return (
                <PalmyraForm formData={{ email: 'helloworld@gmail.com' }}>
                    <MuiTextField attribute="email" validRule={{ rule: 'email' }} invalidMessage="Email is invalid" label="email" />
                    <Button onClick={() => { console.log("button") }}>Submit</Button>
                </PalmyraForm>
            );
        };

        render(<Wrapper />);

        const button = screen.getByRole('button', { name: /submit/i });
        const emailInput = screen.getByLabelText('email');

        fireEvent.change(emailInput, { target: { value: 'example' } });
        fireEvent.click(button);

        const errorMessage = screen.getByText(/Email is invalid/i);
        // expect(button).toBeDisabled();
        expect(errorMessage).toBeInTheDocument();
    });

    test('rule validation', () => {
        const Wrapper = () => {
            return (
                <PalmyraForm formData={{ email: 'helloworld@gmail.com' }}>
                    <MuiTextField attribute="email" validRule={{ rule: 'email' }} invalidMessage="Email is invalid" label="email" />
                    <Button onClick={() => { console.log("button") }}>Submit</Button>
                </PalmyraForm>
            );
        };

        render(<Wrapper />);

        const button = screen.getByRole('button', { name: /submit/i });
        const emailInput = screen.getByLabelText('email');

        fireEvent.change(emailInput, { target: { value: 'example@gmail.com' } });
        fireEvent.click(button);

        expect(button).toBeEnabled();
    });

    test('length validation', () => {
        const Wrapper = () => {
            return (
                <PalmyraForm formData={{ email: 'helloworld@gmail.com' }}>
                    <MuiTextField attribute="email" length={{ max: 10, errorMessage: "Maximum 10" }} label="email" />
                    <Button onClick={() => { console.log("button") }} disabled={true}>Submit</Button>
                </PalmyraForm>
            );
        };

        render(<Wrapper />);

        const button = screen.getByRole('button', { name: /submit/i });
        const emailInput = screen.getByLabelText('email');

        fireEvent.change(emailInput, { target: { value: 'example@gmail.com' } });
        fireEvent.click(button);

        const errorMessage = screen.getByText(/Maximum 10/i);
        expect(button).toBeDisabled();
        expect(errorMessage).toBeInTheDocument();
    });

    test('length validation', () => {
        const Wrapper = () => {
            return (
                <PalmyraForm formData={{ email: 'helloworld@gmail.com' }}>
                    <MuiTextField attribute="email" length={{ max: 15, errorMessage: "Maximum 10" }} label="email" />
                    <Button onClick={() => { console.log("button") }} >Submit</Button>
                </PalmyraForm>
            );
        };

        render(<Wrapper />);

        const button = screen.getByRole('button', { name: /submit/i });
        const emailInput = screen.getByLabelText('email');

        fireEvent.change(emailInput, { target: { value: 'exam@gmail.com' } });
        fireEvent.click(button);

        expect(button).toBeEnabled();
    });

    test('range validation', () => {
        const Wrapper = () => {
            return (
                <PalmyraForm formData={{ email: 'helloworld@gmail.com' }}>
                    <MuiTextField attribute="number" range={{ end: 15, errorMessage: "range 15" }} label="Number" />
                    <Button onClick={() => { console.log("button") }} >Submit</Button>
                </PalmyraForm>
            );
        };

        render(<Wrapper />);

        const button = screen.getByRole('button', { name: /submit/i });
        const emailInput = screen.getByLabelText('Number');

        fireEvent.change(emailInput, { target: { value: '14' } });
        fireEvent.click(button);

        expect(button).toBeEnabled();
    });

    test('range validation', () => {
        const Wrapper = () => {
            return (
                <PalmyraForm formData={{ email: 'helloworld@gmail.com' }}>
                    <MuiTextField attribute="number" range={{ end: 5, errorMessage: "range 5" }} label="Number" />
                    <Button onClick={() => { console.log("button") }} disabled={true}>Submit</Button>
                </PalmyraForm>
            );
        };

        render(<Wrapper />);

        const button = screen.getByRole('button', { name: /submit/i });
        const input = screen.getByLabelText('Number');

        fireEvent.change(input, { target: { value: '14' } });
        fireEvent.click(button);

        // const errorMessage = screen.getByText(/range 5/i);
        // expect(button).toBeDisabled();
        // expect(errorMessage).toBeInTheDocument();
    });

    test('range validation', () => {
        const Wrapper = () => {
            return (
                <PalmyraForm formData={{ email: 'helloworld@gmail.com' }}>
                    <MuiTextField attribute="number" range={{ end: 5 }} invalidMessage="range 5" label="Number" />
                    <Button onClick={() => { console.log("button") }} disabled={true}>Submit</Button>
                </PalmyraForm>
            );
        };

        render(<Wrapper />);

        const button = screen.getByRole('button', { name: /submit/i });
        const input = screen.getByLabelText('Number');

        fireEvent.change(input, { target: { value: '14' } });
        fireEvent.click(button);

        const errorMessage = screen.getByText(/range 5/i);
        expect(button).toBeDisabled();
        expect(errorMessage).toBeInTheDocument();
    });
})