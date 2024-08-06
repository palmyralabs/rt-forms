
import { InputType } from "zlib";
import { FieldOptions, IServerLookupOptions } from "../../../../src/palmyra";
import { DefaultQueryParams, IEndPoint, IEndPointOptions, LookupStore } from "@palmyralabs/palmyra-wire";
import { AutocompleteOwnerState, AutocompleteRenderOptionState } from "@mui/material";

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

interface IServerLookupDefinition extends MuiInputFieldOptions, ILayoutOptions, IServerLookupOptions {
    displayAttribute?: string,
    defaultValue?: InputType | any,
    multiple?: boolean,
    renderOption?: (
        props: React.HTMLAttributes<HTMLLIElement> & { key: any },
        option: any,
        state: AutocompleteRenderOptionState,
        ownerState: any,
    ) => React.ReactNode    
}

interface IEventListeners {
    onBlur: (data: any) => void,
    onFocus: (data: any) => void,
    onValueChange: (data: any) => void,
    onSearch?: (searchKey: string, limt?: number, offset?: number) => void
}

export type { ITextFieldDefinition, ISelectDefinition, IDatePickerDefinition, IServerLookupDefinition }

export type { MuiInputFieldOptions, IEventListeners }