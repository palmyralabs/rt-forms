import { CellGetter, ColumnDefinition, GridCustomizer } from "./types";

const useGridColumnCustomizer = (config: Record<string, ((d: CellGetter) => CellGetter)>,
    factory?: { header?: Record<string, Function>, footer?: Record<string, Function> }
): GridCustomizer => {

    const formatCell = (column: ColumnDefinition, cellValueGetter: CellGetter): CellGetter => {
        const attribute = column.attribute;
        if (config[attribute]) {
            return config[attribute](cellValueGetter);
        } else
            return cellValueGetter;
    }

    const formatHeader = (column: ColumnDefinition, header: Function) => {
        const attribute = column.attribute;
        if (factory?.header?.[attribute])
            return factory.header[attribute](column, header);
        return header;
    }

    const formatFooter = (column: ColumnDefinition, footer: Function) => {
        const attribute = column.attribute;
        if (factory?.footer?.[attribute])
            return factory.footer[attribute](column, footer)
        return footer;
    }

    return { formatCell, formatHeader, formatFooter }
}

export { useGridColumnCustomizer }