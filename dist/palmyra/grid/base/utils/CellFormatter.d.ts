import { ColumnDefinition } from '../types';

declare const formatBIT: (columnDef: any) => (info: any) => any;
declare const formatColumn: (columnDef: ColumnDefinition) => (info: any) => any;
declare const getFormatFn: (columnDef: any) => {
    cell: (info: any) => any;
};
export { getFormatFn, formatBIT, formatColumn };
