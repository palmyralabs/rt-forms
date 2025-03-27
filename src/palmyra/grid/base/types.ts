import { CellContext, ColumnDef, OnChangeFn, Row, RowData, RowModel, RowSelectionState, Table } from "@tanstack/react-table";
import { MutableRefObject } from "react";

type IReactTanstackTable = import("@tanstack/table-core").Table<RowData>;

type IExportOptions = PartialRecord<'csv' | 'excel' | 'pdf' | 'docx', string>

import { ReactNode } from "react";
import { IEndPoint, strings } from "@palmyralabs/palmyra-wire";
import { IPageQueryable, IServerQueryInput } from "../../wire";
import { FieldOptions } from "../../form";


interface IDecoratedTitle {
    title: string;
    toolTip?: string
}

type widgetFn = () => ReactNode;

type ITitle = string | IDecoratedTitle | widgetFn;

interface IPattern {
    serverPattern?: string;
    displayPattern?: string,
}

interface IConstraints {
    min?: number,
    max?: number
}

interface IRange<T> {
    from?: T,
    to?: T
}

type FieldType = "string" | "number" | "date" | "radio" | "select" | "iosswitch"
    | "datetime" | "textarea" | "checkbox" | "serverlookup" | "switch" | "autoComplete"
    | "password" | "multiSelect" | "dateRange" | "float" | "numbersOnly" | "integer"
    | "slider" | "sliderRange" | "rating";

interface ColumnFieldOptions extends FieldOptions, IPattern, IConstraints {
    type: FieldType
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
    attribute: string,
    label: string,
    name?: string,
    options?: Record<string, any>,
    width?: string,
    hideTitle?: boolean,
    hideColumn?: boolean,
    searchable?: boolean,
    sortable?: boolean,
    quickSearch?: boolean,
    cellRenderer?: React.FC,
    columnGroup?: string
}

type CellGetter = ((props: CellContext<RowData, any>) => any);

type PartialRecord<K extends keyof any, T> = {
    [P in K]?: T;
};

interface GridCustomizer {
    formatCell: (column: ColumnDefinition, cellValueGetter: CellGetter) => CellGetter,
    formatHeader: (column: ColumnDefinition, header: Function) => any,
    formatFooter: (column: ColumnDefinition, footer: Function) => any,
    preProcessColumns?: (columnDefs: ColumnDef<RowData, any>[]) => any,
    preProcessData?: (data: any) => any,
    getTableOptions?: () => ITableOptions,
    getTableRef?: () => MutableRefObject<IReactTanstackTable>
}

interface ITableOptions {
    state?: any,
    enableRowSelection?: boolean | ((row: Row<unknown>) => boolean),
    onRowSelectionChange?: OnChangeFn<RowSelectionState>,
    getFilteredRowModel?: (table: Table<any>) => () => RowModel<any>,
    getCoreRowModel?: (table: Table<any>) => () => RowModel<any>,
    debug: boolean
}

interface IGridPlugin {
    onDataChange?: (newData: any[], oldData?: any[]) => void
}

interface DataGridOptions extends ApiDataTableOptions {
    onNewClick?: Function,
    topic?: string
}


interface DataGridPluginOptions extends PaginationOptions {
    topic: string,
    getPluginOptions?: () => any
    quickSearch?: string
    queryRef: MutableRefObject<IPageQueryable>,
    columns: ColumnDefinition[]
}

interface PaginationOptions {
    pageSize?: number | number[],
    ignoreSinglePage?: boolean
}

interface GridXOptions<ControlPropsType> extends DataGridOptions {
    title?: ITitle,
    pagination?: {
        ignoreSinglePage?: boolean
    }
    getPluginOptions?: any,
    DataGridControlProps?: ControlPropsType
    DataGridControls?: (props: DataGridPluginOptions & ControlPropsType) => JSX.Element
    DataGridPagination?: (props: DataGridPluginOptions) => JSX.Element
}

interface PalmyraGridOptions<T> extends GridXOptions<T> {

}

interface IPalmyraGrid extends IPageQueryable {

}


interface ApiDataTableOptions extends Omit<IServerQueryInput, 'store'>, IGridPlugin {
    endPoint: IEndPoint;
    lsKey?: string;
    columns: ColumnDefinition[];
    customizer?: GridCustomizer;
    EmptyChild?: React.FC;
    onRowClick?: Function
}

interface BaseTableOptions {
    'aria-label'?: string,
    showFooter?: boolean,
    className?: string,
    columnDefs: ColumnDef<RowData, any>[],
    rowData: any[],
    onRowClick?: Function,
    onColumnSort?: Function,
    EmptyChild?: React.FC,
    customizer?: GridCustomizer,
    initParams?: {
        sort?: strings
    }
}

interface StaticGridOptions extends Omit<IServerQueryInput, 'store'>, IGridPlugin {
    columns: ColumnDefinition[],
    customizer?: GridCustomizer,
    EmptyChild?: React.FC,
    onRowClick?: Function,
    rowData: any
    setSortColumns?: any
}

export type {
    ColumnDefinition, GridCustomizer, CellGetter, IExportOptions, IReactTanstackTable, ITableOptions,
    IGridPlugin, DataGridOptions, DataGridPluginOptions, GridXOptions, PalmyraGridOptions, IPalmyraGrid,
    PaginationOptions
};

export type {
    ITitle, IPattern, Converter, ColumnFieldOptions, FieldType, IConstraints, IRange
}

export type { BaseTableOptions, StaticGridOptions }