import { IFormManager, IFormOptions } from "../types";
import { IAbstractField } from "../typesWidgetOptions";

interface IHtmlFormOptions extends IFormOptions {

}

interface IHtmlFormManager extends IFormManager {
    register: (options: IHtmlField, fieldGroup?: string) => {};
}

interface IHtmlField extends IAbstractField {

}

export type { IHtmlFormOptions, IHtmlFormManager, IHtmlField }