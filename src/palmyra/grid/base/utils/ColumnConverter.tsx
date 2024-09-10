import { AccessorFn, RowData, createColumnHelper } from '@tanstack/react-table'
import { formatColumn } from './CellFormatter';
import { getValueByKey, hasDot } from '@palmyralabs/ts-utils';
import { ColumnDefinition, GridCustomizer } from '../types';
import { NoopGridCustomizer } from '../NoopGridCustomizer';
import { getFormatConverter } from '../../utils/FormatterFactory';

const columnHelper = createColumnHelper();

function generateColumns(columnDefs: ColumnDefinition[], customizer?: GridCustomizer) {
    const gridCustomizer = customizer || NoopGridCustomizer;
    if(columnDefs.every((def) => def.columnGroup == undefined))
        return columnDefs.map(def => convert(def, gridCustomizer));
    else
        return convertGroupedColumns(columnDefs, gridCustomizer);
}

function convertGroupedColumns(columnDefs: ColumnDefinition[], customizer: GridCustomizer) {
    const result: any[] = new Array();
    var groupedColumn:any = undefined;

    columnDefs.map(def => {
        const column = convert(def, customizer);
        if(def.columnGroup){
            if(!groupedColumn || groupedColumn.header != def.columnGroup){
                groupedColumn = {};
                groupedColumn.header = def.columnGroup;
                groupedColumn.columns = [];
                result.push(groupedColumn)
            }
            groupedColumn.columns.push(column);
        }else{
            result.push(column);
        }
    })
    return result;
}

function convert(columnDef: ColumnDefinition, customizer: GridCustomizer) {
    const enableSorting = columnDef.sortable;
    const enableColumnFilter = columnDef.searchable;

    var renderer = columnDef.cellRenderer;
    const header = customizer.formatHeader(columnDef,  getHeader(columnDef));
    const footer = customizer.formatFooter(columnDef,  getFooter(columnDef));

    if (renderer) {
        return columnHelper.display({
            id: getColumnId(columnDef),
            meta: {
                attribute: columnDef.attribute,
                columnDef
            },
            enableSorting,
            enableColumnFilter,
            header, footer,
            cell: renderer
        });
    }

    let cell: any = customizer.formatCell(columnDef, formatColumn(columnDef));

    return columnHelper.accessor(getAccessor(columnDef), {        
        id: getColumnId(columnDef),
        meta: {
            attribute: columnDef.attribute,
            columnDef
        },
        enableSorting,
        enableColumnFilter,
        header, footer,
        cell
    });
}

function getAccessor(columnDef: ColumnDefinition): AccessorFn<RowData> {
    var key = columnDef.attribute ? columnDef.attribute : columnDef.name;
    const formatter = getFormatConverter(columnDef);

    if (hasDot(key)) {
        return (row: RowData) => formatter.convert(getValueByKey(key, row));
    }
    else
        return (row: RowData) => formatter.convert(row[key]);
}

function getColumnId(columnDef: ColumnDefinition) {
    return columnDef.name ? columnDef.name : columnDef.attribute;
}

function getHeader(columnDef: ColumnDefinition) {
    return () => <span>{columnDef.label}</span>
}

function getFooter(columnDef: ColumnDefinition) {
    return (info: any, arg:any) => {return undefined};
}

export { generateColumns }