import { ColumnDefinition, FieldType } from "../base/types";

const convertToField = (columns: ColumnDefinition[]): ColumnDefinition[] => {
    var result: ColumnDefinition[] = [];

    columns.filter((c) => c.searchable).map((column, index) => {
        result.push(_convertField(column))
    })
    return result;
}

const _convertField = (column: ColumnDefinition): ColumnDefinition => {
    var result: ColumnDefinition = {
        name: column.name,
        attribute: column.attribute,
        label: column.label,
        required: false,
        type: _getType(column.type)
    }

    if (column.displayPattern) {
        result.displayPattern = column.displayPattern
    }
    if (column.serverPattern) {
        result.serverPattern = column.serverPattern
    }
    if (column.options) {
        result.options = column.options
    }

    return result;
}

const _getType = (type: FieldType): FieldType => {
    switch (type) {
        case 'select':
            return 'multiSelect';
        case 'radio':
            return 'checkbox';
        case 'date':
            return 'dateRange';
        case 'number':
            return 'string';
        default:
            return type;
    }
}

export { convertToField };