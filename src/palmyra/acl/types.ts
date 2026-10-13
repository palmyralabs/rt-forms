import { CheckBoxIcons } from "../menu/types";

interface APIPermission {
    id:number,
    code: string,
    mask: number,
    name: string
}

interface NestedAPIPermission extends APIPermission {
    className: string,
    children?: NestedAPIPermission[]
    permissions?: APIPermission[]
}


interface AclAPIEditorProps {
    data: NestedAPIPermission[]
    columnsCountBreakPoints?: { [key: number]: number };
    gutter?: string;
    icons?: CheckBoxIcons
    title?: string;
    saveLabel?: string;
    collapsible?: boolean;
    showSaveButton?: boolean;
    showSearch?: boolean;
    showSelectAll?: boolean;
    readOnly?: boolean;
    showGroupCount?: boolean;
    searchPlaceholder?: string;
    isLoading?: boolean;
    error?: any;
    loadingMessage?: string;
    errorMessage?: string;
    emptyMessage?: string;
    onSave?: (data: NestedAPIPermission[]) => void | Promise<any>;
}

interface IAclAPIEditor {
    getValue: () => NestedAPIPermission[]
}

export type { APIPermission, NestedAPIPermission, AclAPIEditorProps, IAclAPIEditor }