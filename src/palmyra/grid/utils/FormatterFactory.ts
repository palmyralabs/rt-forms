import customParseFormat from 'dayjs/plugin/customParseFormat';
import { RefObject } from "react";
import { ColumnFieldOptions, Converter, FieldType } from "../base/types";
import { DateTimeConverter } from "./DateConverter";
import { DateRangeConverter } from "./DateRangeConverter";
import { noopConverter } from "./NoopConverter";
import dayjs from 'dayjs'

dayjs.extend(customParseFormat);

const getFormatConverter = (props: ColumnFieldOptions, formDataRef?: RefObject<any>): Converter<any, any> => {

    const type: FieldType = props.type;

    switch (type) {
        case 'date':
            return new DateTimeConverter(props, 'YYYY-MM-DD');
        case 'datetime':
            return new DateTimeConverter(props, 'YYYY-MM-DDTHH:mm:ss');
        case 'dateRange':
            return new DateRangeConverter(props, 'YYYY-MM-DD');
        case 'sliderRange':
            //@ts-ignore
            return new SliderRangeConverter(props);
        default:
            return noopConverter;
    }
}

export { getFormatConverter };