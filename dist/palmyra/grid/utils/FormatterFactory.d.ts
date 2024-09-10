import { MutableRefObject } from 'react';
import { ColumnFieldOptions, Converter } from '../base/types';

declare const getFormatConverter: (props: ColumnFieldOptions, formDataRef?: MutableRefObject<any>) => Converter<any, any>;
export { getFormatConverter };
