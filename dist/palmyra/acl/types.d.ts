interface APIPermission {
    id: number;
    code: string;
    mask: number;
    operations: string;
}
interface NestedAPIPermission extends APIPermission {
    className: string;
    children?: NestedAPIPermission[];
    permissions?: APIPermission[];
}
interface AclAPIEditorProps {
    data: NestedAPIPermission[];
}
interface IAclAPIEditor {
    getValue: () => NestedAPIPermission[];
}
export type { APIPermission, NestedAPIPermission, AclAPIEditorProps, IAclAPIEditor };
