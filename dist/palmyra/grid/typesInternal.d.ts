import { RowData, ColumnDef } from '@tanstack/react-table';
import { ColumnDefinition, GridCustomizer, IGridPlugin } from './base/types';
import { IServerQueryInput } from '@palmyralabs/rt-forms';
import { IEndPoint } from '@palmyralabs/palmyra-wire';
interface BaseTableOptions {
    'aria-label'?: string;
    showFooter?: boolean;
    className?: string;
    columnDefs: ColumnDef<RowData, any>[];
    rowData: any[];
    onRowClick?: Function;
    onColumnSort?: Function;
    EmptyChild?: React.FC;
    customizer?: GridCustomizer;
}
interface ApiDataTableOptions extends Omit<IServerQueryInput, 'store'>, IGridPlugin {
    endPoint: IEndPoint;
    columns: ColumnDefinition[];
    customizer?: GridCustomizer;
    EmptyChild?: React.FC;
    onRowClick?: Function;
}
interface StaticGridOptions extends Omit<IServerQueryInput, 'store'>, IGridPlugin {
    columns: ColumnDefinition[];
    customizer?: GridCustomizer;
    EmptyChild?: React.FC;
    onRowClick?: Function;
    rowData: any;
    setSortColumns?: any;
}
export type { BaseTableOptions, ApiDataTableOptions, StaticGridOptions };
