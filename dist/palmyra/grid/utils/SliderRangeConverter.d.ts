import { ColumnFieldOptions, Converter, IRange } from '../base/types';
type ISliderRange = [number, number];
declare class SliderRangeConverter implements Converter<any, ISliderRange> {
    min: number;
    max: number;
    constructor(props: IRange);
    getFieldData: (data: any, props: ColumnFieldOptions) => string | number | Date;
    getRawdata: (data: any, props: ColumnFieldOptions) => string | number | Date;
    format(data: ISliderRange): any;
    parse(text: any): ISliderRange;
    _parseNumber(t: string): number;
    convert(t: string): string;
    getDefaultValue: (d: any) => any;
}
export { SliderRangeConverter };
