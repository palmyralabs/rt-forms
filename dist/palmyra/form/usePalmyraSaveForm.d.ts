import { IPalmyraSaveFormInput, IPalmyraSaveFormOutput } from './types';

type IusePalmyraSaveForm = (props: IPalmyraSaveFormInput) => IPalmyraSaveFormOutput;
declare const usePalmyraSaveForm: IusePalmyraSaveForm;
export { usePalmyraSaveForm };
