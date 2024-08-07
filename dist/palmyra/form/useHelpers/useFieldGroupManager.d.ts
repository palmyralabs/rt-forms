import { IFieldGroupManager, IFieldGroupOptions, IFormManager } from '../types';

declare const useFieldGroupManager: (p: IFieldGroupOptions) => IFieldGroupManager;
declare const registerFieldGroupManager: (p: IFieldGroupOptions, formManager: IFormManager) => IFieldGroupManager;
export { useFieldGroupManager, registerFieldGroupManager };
export type { IFieldGroupOptions };
