import { IFieldGroup } from './types';
import { IFieldGroupOptions } from './useHelpers/useFieldGroupManager';

interface IFieldGroupCOptions extends IFieldGroupOptions {
    children?: any;
}
declare const FieldGroup: import('react').ForwardRefExoticComponent<IFieldGroupCOptions & import('react').RefAttributes<IFieldGroup>>;
export { FieldGroup };
