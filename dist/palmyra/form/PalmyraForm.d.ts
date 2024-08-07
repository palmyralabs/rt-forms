import { IFormManager, IForm, IFormOptions } from './types';

declare const PalmyraForm: import('react').ForwardRefExoticComponent<IFormOptions & import('react').RefAttributes<IForm>>;
export { PalmyraForm };
declare const useFormManager: (props: IFormOptions) => IFormManager;
export { useFormManager };
