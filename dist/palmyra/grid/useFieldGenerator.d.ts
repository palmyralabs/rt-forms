import { ColumnFieldOptions } from './base/types';
interface FieldRequest {
    fieldDef: ColumnFieldOptions;
    title?: string;
}
declare const useFieldGenrator: () => {
    getInvalidField: (props: FieldRequest) => import("react/jsx-runtime").JSX.Element;
    getReactField: (props: FieldRequest, Input: React.FC) => import("react/jsx-runtime").JSX.Element;
};
export { useFieldGenrator };
export type { FieldRequest };
