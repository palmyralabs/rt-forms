
import { IAbstractField } from "../";
import { IFieldGroupManager, IFormManager, IFormOptions } from "../types";
import { IFieldGroupOptions } from "../useFieldGroupManager";

interface IHtmlFormOptions extends IFormOptions {

}

interface IHtmlFormManager extends IFormManager {
    register: (options: IHtmlField, fieldGroup?: string) => {}
    registerFieldGroup: (options: IFieldGroupOptions) => IFieldGroupManager
}

interface IHtmlField extends IAbstractField {

}

export type { IHtmlFormOptions, IHtmlFormManager, IHtmlField }