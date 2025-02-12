import { IFieldManager } from '../types';
import { IMutateOptions } from '../typesFieldOptions';
declare const getFieldHandler: (fieldManager: IFieldManager) => {
    isValid(): boolean;
    setValue: (v: any) => void;
    getValue: import('@palmyralabs/ts-utils').Supplier<any>;
    clear(): void;
    refreshError(): void;
    setError: (errorMsg: string, showError?: boolean) => void;
    setVisible(visible: boolean): void;
    setRequired(required: boolean): void;
    setReadOnly(readOnly: boolean): void;
    setDisabled(disabled: boolean): void;
    setAttribute(options: IMutateOptions): void;
};
export { getFieldHandler };
