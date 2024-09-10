import { ColumnDefinition, GridCustomizer } from '../types';

declare function generateColumns(columnDefs: ColumnDefinition[], customizer?: GridCustomizer): any[];
export { generateColumns };
