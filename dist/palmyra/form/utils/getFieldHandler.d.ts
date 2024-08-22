import { IFieldManager } from '../types';
import { IMutateOptions } from '../typesFieldOptions';

declare const getFieldHandler: (fieldManager: IFieldManager) => {
    isValid(): boolean;
    setValue: (v: any, skipValidation?: Boolean, propagate?: boolean) => void;
    getValue: import('@palmyralabs/ts-utils').Supplier<any>;
    clear(): void;
    refreshError(): void;
    setVisible(visible: boolean): void;
    setRequired(required: boolean): void;
    setReadOnly(readonly: boolean): void;
    setDisabled(disabled: boolean): void;
    setAttribute(options: IMutateOptions): void;
};
export { getFieldHandler };
