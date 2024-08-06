
import { InputType } from "zlib";
import { FieldOptions } from "../../../../src/palmyra";
import { DefaultQueryParams, IEndPoint, IEndPointOptions, LookupStore } from "@palmyralabs/palmyra-wire";

interface ILayoutOptions {
    customContainerClass?: string,
    customLabelClass?: string,
    customFieldClass?: string,
    colspan?: number
}

interface MuiInputFieldOptions extends FieldOptions {
    title?: string,
    attribute: string
}

interface ISelectDefinition extends MuiInputFieldOptions, ILayoutOptions {
    options?: Record<any, any> | Record<string, any>
}

interface ITextFieldDefinition extends MuiInputFieldOptions, ILayoutOptions {

}

interface IDatePickerDefinition extends MuiInputFieldOptions, ILayoutOptions {
    serverPattern?: string,
    displayPattern?: string,
    disableFuture?: boolean,
    variant?: 'standard' | 'outlined' | 'filled'
}

interface IFormFieldServerLookup {
    idAttribute?: string,
    displayAttribute?: string
}

interface IServerLookupDefinition extends MuiInputFieldOptions, ILayoutOptions {
    displayAttribute?: string,
    defaultValue?: InputType | any,
    idAttribute?: string,
    multiple?: boolean,
    renderOption?: Function,
    lookupOptions: IFormFieldServerLookup,
    store?: LookupStore<any>,
    storeOptions: {
        endPoint: IEndPoint,
        endPointOptions?: IEndPointOptions
    }
    fetchDefault?:number,
    pageSize?: number | number[],
    defaultParams?: DefaultQueryParams,
}

interface IEventListeners {
    onBlur: (data: any) => void,
    onFocus: (data: any) => void,
    onValueChange: (data: any) => void,
    onSearch?: (searchKey: string, limt?: number, offset?: number) => void
}

export type { ITextFieldDefinition, ISelectDefinition, IDatePickerDefinition, IServerLookupDefinition }

export type { MuiInputFieldOptions, IEventListeners }