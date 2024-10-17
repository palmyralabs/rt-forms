import { PredicateResponse } from '@palmyralabs/ts-predicates';
import { FieldOptions } from '../typesFieldOptions';
import { IFormFieldError } from '../types';
declare const generatePredicate: (o: FieldOptions) => (value: any) => PredicateResponse;
declare const validate: (v: any, validator: Function, field: FieldOptions) => IFormFieldError;
export { generatePredicate, validate };
