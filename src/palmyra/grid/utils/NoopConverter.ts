import { getValueByKey } from "@palmyralabs/ts-utils";
import { ColumnFieldOptions, Converter } from "../base/types";

class NoopConverter implements Converter<any, any>{
    getFieldData = (data: any, props: ColumnFieldOptions) => {
        return getValueByKey(props.attribute, data);
    };

    getRawdata = (data: any, props: ColumnFieldOptions) => {
        return getValueByKey(props.attribute, data);
    };

    format = (data: any): any => {
        return data
    };

    parse = (text: any): any => {
        return text;
    };

    convert = (text: any): any => {
        return text;
    };

    getDefaultValue = (d: any): any => {
        return d || '';
    }
}

const noopConverter = new NoopConverter();

export { noopConverter }