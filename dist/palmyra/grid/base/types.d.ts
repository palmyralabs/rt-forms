import { CellContext, ColumnDef, OnChangeFn, Row, RowData, RowModel, RowSelectionState, Table } from '@tanstack/react-table';
import { MutableRefObject, ReactNode } from 'react';
import { IPageQueryable, IServerQueryInput, FieldOptions } from '@palmyralabs/rt-forms';
import { IEndPoint } from '@palmyralabs/palmyra-wire';

type IReactTanstackTable = import('@tanstack/table-core').Table<RowData>;
type IExportOptions = PartialRecord<'csv' | 'excel' | 'pdf' | 'docx', string>;
interface ApiDataTableOptions extends Omit<IServerQueryInput, 'store'>, IGridPlugin {
    endPoint: IEndPoint;
    columns: ColumnDefinition[];
    customizer?: GridCustomizer;
    EmptyChild?: React.FC;
    onRowClick?: Function;
}
interface IDecoratedTitle {
    title: string;
    toolTip?: string;
}
type widgetFn = () => ReactNode;
type ITitle = string | IDecoratedTitle | widgetFn;
interface IPattern {
    serverPattern?: string;
    displayPattern?: string;
}
interface IRange {
    min?: number;
    max?: number;
}
type FieldType = "string" | "number" | "date" | "radio" | "select" | "iosswitch" | "datetime" | "textarea" | "checkbox" | "serverlookup" | "switch" | "autoComplete" | "password" | "multiSelect" | "dateRange" | "float" | "numbersOnly" | "integer" | "slider" | "sliderRange" | "rating";
interface ColumnFieldOptions extends FieldOptions, IPattern, IRange {
    type: FieldType;
}
interface Converter<TEXT, DATA> {
    /**
     * Format and Parse functions will be used in  grid data entry
     */
    format: (data: DATA) => TEXT;
    parse: (text: TEXT) => DATA;
    convert: (text: TEXT) => TEXT;
}
interface ColumnDefinition extends ColumnFieldOptions {
    attribute: string;
    label: string;
    name?: string;
    options?: Record<string, any>;
    width?: string;
    hideTitle?: boolean;
    hideColumn?: boolean;
    searchable?: boolean;
    sortable?: boolean;
    quickSearch?: boolean;
    cellRenderer?: React.FC;
    columnGroup?: string;
}
type CellGetter = ((props: CellContext<RowData, any>) => any);
type PartialRecord<K extends keyof any, T> = {
    [P in K]?: T;
};
interface GridCustomizer {
    formatCell: (column: ColumnDefinition, cellValueGetter: CellGetter) => CellGetter;
    formatHeader: (column: ColumnDefinition, header: Function) => any;
    formatFooter: (column: ColumnDefinition, footer: Function) => any;
    preProcessColumns?: (columnDefs: ColumnDef<RowData, any>[]) => any;
    preProcessData?: (data: any) => any;
    getTableOptions?: () => ITableOptions;
    getTableRef?: () => MutableRefObject<IReactTanstackTable>;
}
interface ITableOptions {
    state?: any;
    enableRowSelection?: boolean | ((row: Row<unknown>) => boolean);
    onRowSelectionChange?: OnChangeFn<RowSelectionState>;
    getFilteredRowModel?: (table: Table<any>) => () => RowModel<any>;
    getCoreRowModel?: (table: Table<any>) => () => RowModel<any>;
    debug: boolean;
}
interface IGridPlugin {
    onDataChange?: (newData: any[], oldData?: any[]) => void;
}
interface DataGridOptions extends ApiDataTableOptions {
    onNewClick?: Function;
    topic?: string;
}
interface DataGridPluginOptions {
    topic: string;
    getPluginOptions?: () => any;
    quickSearch?: string;
    queryRef: MutableRefObject<IPageQueryable>;
    pageSize?: number | number[];
    columns: ColumnDefinition[];
}
interface GridXOptions<ControlPropsType> extends DataGridOptions {
    title?: ITitle;
    getPluginOptions?: any;
    DataGridControlProps?: ControlPropsType;
    DataGridControls?: (props: DataGridPluginOptions & ControlPropsType) => JSX.Element;
    DataGridPagination?: (props: DataGridPluginOptions) => JSX.Element;
}
interface PalmyraGridOptions<T> extends GridXOptions<T> {
}
interface IPalmyraGrid extends IPageQueryable {
}
export type { ColumnDefinition, GridCustomizer, CellGetter, IExportOptions, IReactTanstackTable, ITableOptions, IGridPlugin, DataGridOptions, DataGridPluginOptions, GridXOptions, PalmyraGridOptions, IPalmyraGrid };
export type { ITitle, IPattern, Converter, ColumnFieldOptions, FieldType, IRange };
