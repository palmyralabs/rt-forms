interface APIPermission {
    code: string;
    mask: number;
    operations: string;
}
interface NestedAPIPermission extends APIPermission {
    className: string;
    children?: NestedAPIPermission[];
    permissions?: APIPermission[];
}
export type { APIPermission, NestedAPIPermission };
