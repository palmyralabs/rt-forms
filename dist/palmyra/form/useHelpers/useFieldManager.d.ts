import { IFieldCustomizer, IFieldManager } from '../types';
import { FieldOptions } from '../typesFieldOptions';

/**
 * Functionalities covered in Field Manager
 *
 * Default Reader and Writer from formData
 * Predicate building for data validation
 * Maintain field Value and validation/error status
 *
 */
declare const useFieldManager: (key: string, options: FieldOptions, customizer?: IFieldCustomizer) => IFieldManager;
export { useFieldManager };
