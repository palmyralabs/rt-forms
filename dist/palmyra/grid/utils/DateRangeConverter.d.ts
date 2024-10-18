import { ColumnFieldOptions, Converter, IPattern, IRange } from '../base/types';
declare class DateRangeConverter implements Converter<any, IRange<Date>> {
    serverPattern: string;
    constructor(props: IPattern, defaultFormat: string);
    getFieldData: (data: any, props: ColumnFieldOptions) => string | number | Date;
    getRawdata: (data: any, props: ColumnFieldOptions) => string | number | Date;
    format(data: IRange<Date>): any;
    _formatDate(d: Date): string;
    parse(text: any): IRange<Date>;
    _parseDate(t: string): Date;
    convert(t: string): string;
    getDefaultValue: (d: any) => any;
}
export { DateRangeConverter };
