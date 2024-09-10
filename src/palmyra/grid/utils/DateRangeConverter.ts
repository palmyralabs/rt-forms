import dayjs from "dayjs";
import { getValueByKey, IRange } from "@palmyralabs/ts-utils";
import { ColumnFieldOptions, Converter, IPattern } from "../base/types";

function _isValid(d: Date) {
    if (d)
        return dayjs(d).isValid();
    return false;
}

class DateRangeConverter implements Converter<any, IRange<Date>> {
    serverPattern: string;

    constructor(props: IPattern, defaultFormat: string) {
        this.serverPattern = props.serverPattern || props.displayPattern || defaultFormat;
    }

    getFieldData = (data: any, props: ColumnFieldOptions) => {
        return getValueByKey(props.attribute, data);
    };

    getRawdata = (data: any, props: ColumnFieldOptions) => {
        return getValueByKey(props.attribute, data);
    };

    format(data: IRange<Date>): any {
        if (data) {
            if (_isValid(data.from)) {
                if (_isValid(data.to)) {
                    return this._formatDate(data.from) + '...' + this._formatDate(data.to);
                } else {
                    return '>' + this._formatDate(data.from);
                }
            } else {
                if (_isValid(data.to)) {
                    return '<' + this._formatDate(data.to);
                } else {
                    return undefined;
                }
            }
        }
    };

    _formatDate(d: Date): string {
        return dayjs(d).format(this.serverPattern);
    }

    parse(text: any): IRange<Date> {
        var from: Date, to: Date;
        if (text && typeof text == 'string') {
            const fc = text.charAt(0);
            if (fc == '>')
                from = this._parseDate(text.slice(1));
            else if (fc == '<')
                to = this._parseDate(text.slice(1));
            else {
                const dts = text.split('...');
                from = this._parseDate(dts[0]);
                if (dts[1])
                    to = this._parseDate(dts[1]);
            }
        }
        return { from, to };
    };

    _parseDate(t: string): Date {
        if (t)
            return dayjs(t, this.serverPattern).toDate()
    }

    convert(t: string): string {
        return t;
    }

    getDefaultValue = (d: any): any => {
        return d || '';
    }
}

export { DateRangeConverter }