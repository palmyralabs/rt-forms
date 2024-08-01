import { useRef, useImperativeHandle, forwardRef, MutableRefObject, useContext } from 'react';
import { FieldGroupManagerContext, IFieldGroupManager, IMutateOptions, ITextField, ITextFieldDefinition } from '../form';


const SimpleTextField = forwardRef(function SimpleTextField(o: ITextFieldDefinition, ref: MutableRefObject<ITextField>) {
    console.log('re-rendering textfield', o.attribute)
    const fieldGroupManager: IFieldGroupManager = useContext(FieldGroupManagerContext);
    const fieldManager = fieldGroupManager.registerField(o);

    const { getError, getValue, setValue, mutateOptions, setMutateOptions } = fieldManager;

    const currentRef = ref ? ref : useRef<ITextField>(null);
    const inputRef = useRef<HTMLInputElement>();
    const error = getError();

    const p = { ...o, ...mutateOptions };

    const register = (o: ITextFieldDefinition) => {
        var result: any = {
            name: o.attribute,
            value: getValue(),
            onChange: (e: any) => (setValue(e.target.value))
        };

        if (o.onBlur) result.onblur = o.onBlur;
        if (o.onFocus) result.onfocus = o.onFocus;

        if (o.disabled)
            result.disabled = true;

        if (o.readonly)
            result.readOnly = true;

        return result;
    }

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
            setDisabled(disabled: boolean) {
                setMutateOptions((d: IMutateOptions) => ({ ...d, disabled }));
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
        <div>{o.label}</div> : <input type='text'
            {...register(p)}
        ></input>
        {error.status && <div>{error.message}</div>}
    </>
    );
});

export { SimpleTextField };