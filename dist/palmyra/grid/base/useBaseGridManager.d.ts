import { BaseTableOptions } from '../typesInternal';
declare const useBaseGridManager: (o: BaseTableOptions) => {
    onColumnSort: (column: any, sortOrder: any) => void;
    onRowClick: Function;
    options: {
        data: any;
        manualSorting: boolean;
        manualFiltering: boolean;
        manualPagination: boolean;
        columns: import('@tanstack/table-core').ColumnDef<unknown, any>[];
        getCoreRowModel: (table: import('@tanstack/table-core').Table<unknown>) => () => import('@tanstack/table-core').RowModel<unknown>;
    };
    EmptyChildren: import('react').FC<{}> | (() => import("react/jsx-runtime").JSX.Element);
};
export { useBaseGridManager };
