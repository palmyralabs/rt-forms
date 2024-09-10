import { ColumnFieldOptions } from "./base/types";

interface FieldRequest {
    fieldDef: ColumnFieldOptions,
    title?: string
}

const useFieldGenrator = () => {

    const getInvalidField = (props: FieldRequest) => {
        const { fieldDef } = props;
        return <div>{"invalid type " + fieldDef.type} </div>
    }

    const getReactField = (props: FieldRequest, Input: React.FC) => {
        const fieldDef: any = props.fieldDef;

        return <Input key={fieldDef.title + fieldDef.attribute}
            {...fieldDef}
            label={props.title}
        />;
    }
    return { getInvalidField, getReactField }
}

export { useFieldGenrator }
export type { FieldRequest }