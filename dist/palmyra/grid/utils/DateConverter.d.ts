import { IPattern, Converter } from '../base/types';

declare class DateTimeConverter implements Converter<any, Date> {
    serverPattern: string;
    displayPattern: string;
    constructor(props: IPattern, defaultFormat: string);
    format(data: Date): any;
    parse(text: any): Date;
    convert(text: any): any;
    getDefaultValue: (d: any) => any;
}
export { DateTimeConverter };
