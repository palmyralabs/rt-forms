
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
}

interface IAclAPIEditor {
    getValue: () => NestedAPIPermission[]
}

export type { APIPermission, NestedAPIPermission, AclAPIEditorProps, IAclAPIEditor }