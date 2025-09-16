import { RefObject } from 'react';
import { ColumnFieldOptions, Converter } from '../base/types';
declare const getFormatConverter: (props: ColumnFieldOptions, formDataRef?: RefObject<any>) => Converter<any, any>;
export { getFormatConverter };
