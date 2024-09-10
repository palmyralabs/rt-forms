import { BaseTableOptions } from '../typesInternal';

declare const useBaseGridManager: (o: BaseTableOptions) => {
    onColumnSort: (column: any, sortOrder: any) => void;
    onRowClick: Function;
    options: {
        data: any;
        manualSorting: boolean;
        manualFiltering: boolean;
        manualPagination: boolean;
        columns: import('@tanstack/react-table').ColumnDef<unknown, any>[];
        getCoreRowModel: (table: import('@tanstack/react-table').Table<unknown>) => () => import('@tanstack/react-table').RowModel<unknown>;
    };
    EmptyChild: import('react').FC<{}> | (() => import("react/jsx-runtime").JSX.Element);
};
export { useBaseGridManager };
