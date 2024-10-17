import { IFieldGroup, IFieldGroupOptions } from './types';
interface IFieldGroupCOptions extends IFieldGroupOptions {
    children?: any;
}
declare const FieldGroup: import('react').ForwardRefExoticComponent<IFieldGroupCOptions & import('react').RefAttributes<IFieldGroup>>;
export { FieldGroup };
