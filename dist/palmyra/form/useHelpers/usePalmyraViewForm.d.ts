import { IPalmyraViewFormInput, IPalmyraViewFormOutput } from './types';
type IusePalmyraViewForm = (props: IPalmyraViewFormInput) => IPalmyraViewFormOutput;
declare const usePalmyraViewForm: IusePalmyraViewForm;
export { usePalmyraViewForm };
