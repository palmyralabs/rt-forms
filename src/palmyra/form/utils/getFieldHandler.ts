import { IFieldManager } from "../types";
import { IMutateOptions } from "../typesFieldOptions";

const getFieldHandler = (fieldManager: IFieldManager) => {
    const { getError, getValue, setValue, setMutateOptions } = fieldManager;
    return {
        isValid() {
            const error = getError();
            return !error.status;
        },
        setValue,
        getValue,
        clear() {
            setValue('');
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
        setDisabled(disabled: boolean) {
            setMutateOptions((d: IMutateOptions) => ({ ...d, disabled }));
        },
        setAttribute(options: IMutateOptions) {
            setMutateOptions((d: IMutateOptions) => ({ ...d, ...options }));
        }
    };
}

export { getFieldHandler }