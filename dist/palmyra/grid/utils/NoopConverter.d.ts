import { ColumnFieldOptions, Converter } from '../base/types';
declare class NoopConverter implements Converter<any, any> {
    getFieldData: (data: any, props: ColumnFieldOptions) => string | number | Date;
    getRawdata: (data: any, props: ColumnFieldOptions) => string | number | Date;
    format: (data: any) => any;
    parse: (text: any) => any;
    convert: (text: any) => any;
    getDefaultValue: (d: any) => any;
}
declare const noopConverter: NoopConverter;
export { noopConverter };
