
import { IMutateOptions } from "../../../../src/palmyra";
import { MuiInputFieldOptions } from "./types";

const generateOptions = (p: any, o: IMutateOptions) => {
    var result: any = { ...p, ...o };
    return result;
}

const getFieldLabel = (props: MuiInputFieldOptions) => {
    if (props.required && props.title)
        return (
            <>
                <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                    {props.title}
                    <span style={{ color: 'red' }}>*</span>
                </div>
            </>
        );
    else
        return props.title;
}

export { generateOptions, getFieldLabel }