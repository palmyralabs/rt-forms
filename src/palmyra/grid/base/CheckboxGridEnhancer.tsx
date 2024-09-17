import { HTMLProps, MutableRefObject, useEffect, useRef, useState } from "react";
import { IReactTanstackTable, ITableOptions } from ".";
import { ColumnDef, RowData, getFilteredRowModel } from "@tanstack/react-table";


interface IGridEnhancer {
    getTableOptions: () => ITableOptions,
    getTableRef: () => MutableRefObject<IReactTanstackTable>,
    preProcessColumns: (columnDefs: ColumnDef<RowData, any>[]) => any,
    getSelectedIds: () => any
}

const CheckboxGridEnhancer = (): IGridEnhancer => {
    const [rowSelection, setRowSelection] = useState({})
    const idSelected = useRef({});
    const tableRef = useRef<IReactTanstackTable>();

    const getTableOptions = (): ITableOptions => {
        return {
            state: {
                rowSelection,
            },
            enableRowSelection: true,
            onRowSelectionChange: setRowSelection,
            getFilteredRowModel: getFilteredRowModel(),
            debug: true
        };
    }

    const getTableRef = () => {
        return tableRef;
    }

    const preProcessColumns = (columnDefs: ColumnDef<RowData, any>[]) => {

        const checkBoxColumn =
        {
            id: 'select',
            header: ({ table }) => {
                const getAllChecked = () => {
                    try {
                        return table.getIsAllRowsSelected();
                    } catch (ds) {
                        return false;
                    }
                }

                return (
                    <IndeterminateCheckbox
                        {...{
                            checked: getAllChecked(),
                            indeterminate: table.getIsSomeRowsSelected(),
                            onChange: table.getToggleAllRowsSelectedHandler(),
                        }}
                    />
                )
            },
            cell: ({ row }) => {

                const onChangeHandler = (v) => {
                    const data = row.original;
                    const key = data.id;
                    if (!row.getIsSelected()) {
                        idSelected.current[key] = true;
                    } else {
                        delete idSelected.current[key];
                    }
                    row.getToggleSelectedHandler()(v);
                }

                return (
                    <div className="px-1">
                        <IndeterminateCheckbox
                            {...{
                                checked: row.getIsSelected(),
                                disabled: !row.getCanSelect(),
                                indeterminate: row.getIsSomeSelected(),
                                onChange: onChangeHandler,
                            }}
                        />
                    </div>
                )
            },
        };
        columnDefs.push(checkBoxColumn);
    }

    const getSelectedIds = () => {
        return idSelected.current;
    }

    return { getTableOptions, preProcessColumns, getTableRef, getSelectedIds }
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


export { CheckboxGridEnhancer }

export type { IGridEnhancer }