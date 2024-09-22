import { Converter, IPattern } from '../base';

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
