import { useEffect, useState } from "react";
import { EmptyChildTable } from './EmptyChildTable';
import { getCoreRowModel } from "@tanstack/react-table";
import { BaseTableOptions } from "./types";

const useBaseGridManager = (o: BaseTableOptions) => {

    const { columnDefs, rowData, customizer } = o;

    const onColumnSort = o.onColumnSort || (() => undefined);
    const EmptyChildren = o.EmptyChild || EmptyChildTable;
    const onRowClick = o.onRowClick || (() => undefined);

    const preProcessData = customizer?.preProcessData || ((d: any) => d);
    const tableOptions = customizer?.getTableOptions ? customizer.getTableOptions() : {};
    const [sortColumn, setSortColumn] = useState(o.initParams?.sort || {});

    if (customizer?.preProcessColumns) {
        customizer?.preProcessColumns(columnDefs);
    }

    const options = {
        data: preProcessData(rowData),
        manualSorting: true,
        manualFiltering: true,
        manualPagination: true,
        columns: columnDefs,
        getCoreRowModel: getCoreRowModel(),
        ...tableOptions
    }

    useEffect(() => {
        onColumnSort(sortColumn);
    }, [sortColumn])

    const onSortChange = (column, sortOrder) => {
        var sort = { ...sortColumn };

        if (sortOrder == '') {
            delete sort[column];
        } else {
            sort[column] = sortOrder;
        }
        setSortColumn(sort);
    }
    const onSort = o.onColumnSort ? onSortChange : () => undefined;

    return { onColumnSort: onSort, onRowClick, options, EmptyChildren }
}

export { useBaseGridManager }