import { getValueByKey } from "@palmyralabs/ts-utils";
import { ColumnFieldOptions, Converter, IRange } from "../base/types";

type ISliderRange = [number, number];

class SliderRangeConverter implements Converter<any, ISliderRange> {
    min = 0;
    max = 100

    constructor(props: IRange) {
        this.min = props.min || this.min;
        this.max = props.max || this.max;
    }

    getFieldData = (data: any, props: ColumnFieldOptions) => {
        return getValueByKey(props.attribute, data);
    };

    getRawdata = (data: any, props: ColumnFieldOptions) => {
        return getValueByKey(props.attribute, data);
    };

    format(data: ISliderRange): any {
        if (data) {
            return data[0] + '...' + data[1];
        }
    };

    parse(text: any): ISliderRange {
        var from: number, to: number;
        if (text && typeof text == 'string') {
            const dts = text.split('...');
            from = this._parseNumber(dts[0]);
            to = this._parseNumber(dts[1]);
        }
        return [from, to];
    };

    _parseNumber(t: string): number {
        if (t)
            return Number.parseInt(t);
    }

    convert(t: string): string {
        return t;
    }

    getDefaultValue = (d: any): any => {
        return d || this.min + '...' + this.max;
    }
}

export { SliderRangeConverter }