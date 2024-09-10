import { getValueByKey } from "@palmyralabs/ts-utils";import { ColumnDefinition } from "../types";

const getDisplayValue = (field: ColumnDefinition, data: FormData) => {
    const value: any = getValueByKey(field.attribute, data);
    return formatValue(field, value);
}

const formatValue = (field: ColumnDefinition, value: any) => {
    const type = field.type || 'string';
    switch (type) {
        case 'date':
            return getDateValue(value, field);
        case 'radio':
        case 'select':
        case 'checkbox':
            return getOptionsValue(value, field);
        case 'switch':
            return getOptionsValue(value, field);
        case 'datetime':
            return getDateTimeValue(value, field);
        case 'serverlookup':
            return getServerLookUp(value, field);
        case 'textarea':
            return getTextArea(value, field);
        case 'password':
            return getPassword(value, field);
        case 'numbersOnly':
            return getNumberValue(value, field);
        case 'integer':
            return getIntegerValue(value, field);
        case 'autoComplete':
            return getAutoCompleteValue(value, field);
        default:
            return getTextValue(value, field);
    }
}

const getDateValue = (value: any, field: ColumnDefinition) => {
    //TODO : value to be converted
    return value;
}

const getDateTimeValue = (value: any, field: ColumnDefinition) => {
    //TODO : value to be converted
    return value;
}

const getTextValue = (value: any, field: ColumnDefinition) => {
    if (value instanceof Object)
        return JSON.stringify(value);
    return value;
}

const getTextArea = (value: any, field: ColumnDefinition) => {
    return value;
}

const getNumberValue = (value: any, field: ColumnDefinition) => {
    return value;
}

const getIntegerValue = (value: any, field: ColumnDefinition) => {
    return value;
}

const getAutoCompleteValue = (value: any, field: ColumnDefinition) => {
    return value;
}

const getPassword = (value: any, field: ColumnDefinition) => {
    return value;
}

const getOptionsValue = (value: string, field: ColumnDefinition ) => {
    var options = field.options;
    return options[value];
}

const getServerLookUp = (value: string, field: ColumnDefinition) => {
    return value;
}

export { getDisplayValue, formatValue };