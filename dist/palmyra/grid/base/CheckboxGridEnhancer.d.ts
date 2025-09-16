import { RefObject } from 'react';
import { IReactTanstackTable, ITableOptions } from '.';
import { ColumnDef, RowData } from '@tanstack/react-table';
interface IGridEnhancer {
    getTableOptions: () => ITableOptions;
    getTableRef: () => RefObject<IReactTanstackTable>;
    preProcessColumns: (columnDefs: ColumnDef<RowData, any>[]) => any;
    getSelectedIds: () => any;
}
declare const CheckboxGridEnhancer: () => IGridEnhancer;
export { CheckboxGridEnhancer };
export type { IGridEnhancer };
