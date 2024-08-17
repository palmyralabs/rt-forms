import { MutableRefObject } from 'react';
import { IForm, ISaveForm } from './types';

declare const getSaveFormHandle: (saveData: any, formRef: MutableRefObject<IForm>) => ISaveForm;
export { getSaveFormHandle };
