import { CellGetter, GridCustomizer } from './types';
declare const useGridColumnCustomizer: (config: Record<string, ((d: CellGetter) => CellGetter)>, factory?: {
    header?: Record<string, Function>;
    footer?: Record<string, Function>;
}) => GridCustomizer;
export { useGridColumnCustomizer };
