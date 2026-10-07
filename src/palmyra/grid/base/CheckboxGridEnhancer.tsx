import { IReactTanstackTable, ITableOptions } from "@palmyralabs/rt-forms";
import { ColumnDef, RowData, getFilteredRowModel } from "@tanstack/react-table";
import { HTMLProps, MutableRefObject, useEffect, useRef, useState } from "react";


interface IGridEnhancer {
    getTableOptions: () => ITableOptions,
    getTableRef: () => MutableRefObject<IReactTanstackTable>,
    preProcessColumns: (columnDefs: ColumnDef<RowData, any>[]) => any,
    getSelectedIds: () => any,
    getSelectedRows: () => any[],
    isSelectAllPages: () => boolean,
    resetSelectAll: () => void,
}

const CheckboxGridEnhancer = (): IGridEnhancer => {
    const [rowSelection, setRowSelection] = useState({})
    const [, setSelectAllPagesState] = useState(false);

    // Ref used inside column-def closures so they always read the latest value
    const selectAllPagesRef = useRef(false);

    const idSelected = useRef<Record<string, boolean>>({});
    const rowDataMap  = useRef<Record<string, any>>({});
    const tableRef    = useRef<IReactTanstackTable | null>(null);

    const setSelectAllPages = (val: boolean) => {
        selectAllPagesRef.current = val;
        setSelectAllPagesState(val);
    };

    const getTableOptions = (): ITableOptions => {
        return {
            state: { rowSelection },
            enableRowSelection: true,
            onRowSelectionChange: setRowSelection,
            getFilteredRowModel: getFilteredRowModel(),
            getRowId: (row: any) => String(row.id),
            debug: true
        } as ITableOptions;
    }

    const getTableRef: any = () => tableRef;

    const preProcessColumns = (columnDefs: ColumnDef<RowData, any>[]) => {

        const checkBoxColumn = {
            id: 'select',
            header: ({ table }: any) => {
                const getAllChecked = () => {
                    try { return table.getIsAllRowsSelected(); }
                    catch { return false; }
                }

                return (
                    <IndeterminateCheckbox
                        checked={selectAllPagesRef.current || getAllChecked()}
                        indeterminate={!selectAllPagesRef.current && table.getIsSomeRowsSelected()}
                        onChange={(e: any) => {
                            e?.stopPropagation?.();
                            const checked = e.target?.checked;
                            const rows = table.getFilteredRowModel().rows;

                            if (checked) {
                                rows.forEach((row: any) => {
                                    const key = row.original.id;
                                    idSelected.current[key] = true;
                                    rowDataMap.current[key] = row.original;
                                });
                            } else {
                                setSelectAllPages(false);
                                rows.forEach((row: any) => {
                                    const key = row.original.id;
                                    delete idSelected.current[key];
                                    delete rowDataMap.current[key];
                                });
                            }

                            table.getToggleAllRowsSelectedHandler()(e);
                        }}
                    />
                )
            },
            cell: ({ row }: any) => {
                const onChangeHandler = (v: any) => {
                    v?.stopPropagation?.();
                    const data = row.original;
                    const key  = data.id;

                    if (!row.getIsSelected()) {
                        idSelected.current[key] = true;
                        rowDataMap.current[key]  = data;
                    } else {
                        delete idSelected.current[key];
                        delete rowDataMap.current[key];
                    }
                    row.getToggleSelectedHandler()(v);
                }

                return (
                    <div className="px-1" onClick={(e) => e.stopPropagation()}>
                        <IndeterminateCheckbox
                            checked={row.getIsSelected()}
                            disabled={!row.getCanSelect()}
                            indeterminate={row.getIsSomeSelected()}
                            onChange={onChangeHandler}
                        />
                    </div>
                )
            },
        };

        columnDefs.push(checkBoxColumn);
    }

    const getSelectedIds  = () => idSelected.current;
    const getSelectedRows = () => Object.keys(rowDataMap.current).map(k => rowDataMap.current[k]);
    const isSelectAllPages = () => selectAllPagesRef.current;

    const resetSelectAll = () => {
        selectAllPagesRef.current = false;
        setSelectAllPagesState(false);
        idSelected.current  = {};
        rowDataMap.current  = {};
        setRowSelection({});
    };

    return { getTableOptions, preProcessColumns, getTableRef, getSelectedIds, getSelectedRows, isSelectAllPages, resetSelectAll }
}


function IndeterminateCheckbox({
    indeterminate,
    className = '',
    ...rest
}: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) {
    const ref = useRef<HTMLInputElement>(null!)

    useEffect(() => {
        if (typeof indeterminate === 'boolean') {
            ref.current.indeterminate = !rest.checked && indeterminate
        }
    }, [ref, indeterminate])

    return (
        <input
            type="checkbox"
            ref={ref}
            className={className + ' cursor-pointer'}
            {...rest}
        />
    )
}


export { CheckboxGridEnhancer };

export type { IGridEnhancer };