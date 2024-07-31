import { useRef, useImperativeHandle, forwardRef, MutableRefObject } from 'react';
import { IMutateOptions, ITextField, ITextFieldDefinition, useFieldManager } from '../form';



const SimpleTextField = forwardRef(function SimpleTextField(o: ITextFieldDefinition, ref: MutableRefObject<ITextField>) {
    const fieldManager = useFieldManager(o);
    const { error, getValue, setValue, setMutateOptions } = fieldManager;
    const props = fieldManager.getFieldProps();

    const currentRef = ref ? ref : useRef<ITextField>(null);
    const inputRef = useRef<HTMLInputElement>();

    console.log('re-rendering', o.attribute);

    useImperativeHandle(currentRef, () => {
        return {
            focus() {
                inputRef.current.focus();
            },
            isValid() {
                return !error.status;
            },
            getValue() {
                return getValue();
            },
            clear() {
                setValue('');
            },
            setValue(d: any, doValidate: boolean = false) {
                setValue(d);
            },
            setVisible(visible: boolean) {
                setMutateOptions((d: IMutateOptions) => ({ ...d, visible }));
            },
            setRequired(required: boolean) {
                setMutateOptions((d: IMutateOptions) => ({ ...d, required }));
            },
            setReadOnly(readonly: boolean) {
                setMutateOptions((d: IMutateOptions) => ({ ...d, readonly }));
            },
            setAttribute(options: IMutateOptions) {
                setMutateOptions((d: IMutateOptions) => ({ ...d, ...options }));
            }
        };
    }, [fieldManager, getValue]);


    return (<>
        <div>{props.name}</div> : <input type='text' value={getValue()} onChange={e => setValue(e.target.value)} ></input>
        {error.status && <div>{error.message}</div>}
    </>
    );
});

export { SimpleTextField };