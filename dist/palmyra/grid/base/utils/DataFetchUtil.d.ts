import { ColumnDefinition } from '../types';

declare const getDisplayValue: (field: ColumnDefinition, data: FormData) => any;
declare const formatValue: (field: ColumnDefinition, value: any) => any;
export { getDisplayValue, formatValue };
