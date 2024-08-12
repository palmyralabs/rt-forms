import { PredicateResponse } from '@palmyralabs/ts-predicates';
import { FieldOptions } from '../typesFieldOptions';

declare const generatePredicate: (o: FieldOptions) => (value: any) => PredicateResponse;
declare const validate: (v: any, validator: Function, field: FieldOptions) => {
    status: boolean;
    message: string;
};
export { generatePredicate, validate };
