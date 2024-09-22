import dayjs from "dayjs";
import { Converter, IPattern } from "../base";

class DateTimeConverter implements Converter<any, Date> {
    serverPattern: string;
    displayPattern: string;

    constructor(props: IPattern, defaultFormat: string) {
        this.serverPattern = props.serverPattern || props.displayPattern || defaultFormat;
        this.displayPattern = props.displayPattern || defaultFormat;
    }

    format(data: Date): any {
        if (data) {
            return dayjs(data, this.serverPattern)
                .format(this.displayPattern)
        }
        return data;
    };

    parse(text: any): Date {
        if (text) {
            if (text instanceof Date)
                return text;    
            const timestamp = Number(text);
            if (!isNaN(timestamp) && timestamp.toString() === text.toString()) {
                return new Date(timestamp);
            }
            return dayjs(text, this.serverPattern)
                .toDate()
        }
        return text;
    };

    convert(text: any): any {
        const d: Date = this.parse(text);
        if (d && d instanceof Date && this.displayPattern) {
            return dayjs(d)
                .format(this.displayPattern)
        }
        return text;
    }

    getDefaultValue = (d: any): any => {
        return d || '';
    }
}

export { DateTimeConverter }
