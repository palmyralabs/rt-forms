import './ApiAccessMgmt.css';
import { CheckBoxIcon } from '../menu/CheckBoxIcon';
import { forwardRef, RefObject, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { AclAPIEditorProps, APIPermission, IAclAPIEditor, NestedAPIPermission } from './types';
import { FaSearch, FaCheck, FaChevronDown, FaChevronRight } from 'react-icons/fa';

type SaveStatus = "idle" | "saving" | "saved" | "error";

const AclAPIEditor = forwardRef(function AclAPIEditor(props: AclAPIEditorProps, ref: RefObject<IAclAPIEditor>) {
    const [data, setData] = useState<NestedAPIPermission[]>(props.data);

    useEffect(() => {
        setData(props.data);
    }, [props.data]);


    const currentRef = ref ? ref : useRef<IAclAPIEditor>(null);

    useImperativeHandle(currentRef, () => {
        return {
            getValue() {
                return data;
            }
        };
    }, [data]);


    const [search, setSearch] = useState<string>("");
    const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
    const [saveStatus, setSaveStatus] = useState<SaveStatus>("idle");

    const setMask = (className: string, id: number, mask: number) => {
        setData((prev: NestedAPIPermission[]) => prev.map((group) =>
            group.className !== className ? group : {
                ...group,
                permissions: (group.permissions || []).map((permission) =>
                    permission.id === id ? { ...permission, mask } : permission
                )
            }
        ));
    };

    const setGroupMask = (className: string, mask: number) => {
        setData((prev: NestedAPIPermission[]) => prev.map((group) =>
            group.className !== className ? group : {
                ...group,
                permissions: (group.permissions || []).map((permission) => ({ ...permission, mask }))
            }
        ));
    };

    const setAllMask = (mask: number) => {
        setData((prev: NestedAPIPermission[]) => prev.map((group) => ({
            ...group,
            permissions: (group.permissions || []).map((permission) => ({ ...permission, mask }))
        })));
    };

    const toggleCollapse = (className: string) => {
        setCollapsed((prev) => ({ ...prev, [className]: !prev[className] }));
    };

    const getGroupVariant = (group: NestedAPIPermission): "all" | "none" | "some" => {
        const permissions = group.permissions || [];
        if (permissions.length === 0)
            return "none";
        const selected = permissions.filter((p) => p.mask > 0).length;
        if (selected === 0)
            return "none";
        if (selected === permissions.length)
            return "all";
        return "some";
    };

    const q = search.trim().toLowerCase();

    const getVisiblePermissions = (group: NestedAPIPermission): APIPermission[] => {
        const permissions = group.permissions || [];
        if (!q)
            return permissions;
        if ((group.className || "").toLowerCase().includes(q))
            return permissions;
        return permissions.filter((p) =>
            (p.name || "").toLowerCase().includes(q) || (p.code || "").toLowerCase().includes(q)
        );
    };

    const handleSave = () => {
        if (!props.onSave)
            return;
        const result = props.onSave(data);
        if (result && typeof (result as any).then === "function") {
            setSaveStatus("saving");
            (result as Promise<any>)
                .then(() => setSaveStatus("saved"))
                .catch(() => setSaveStatus("error"));
        } else {
            setSaveStatus("saved");
        }
    };

    const gutter = props.gutter || "12px";
    const collapsible = props.collapsible !== false;
    const visibleGroups = data.filter((d) => getVisiblePermissions(d).length > 0);
    const showSaveButton = !!props.onSave && props.showSaveButton !== false;
    const showHeader = props.title || showSaveButton;
    const showSearch = props.showSearch !== false;
    const showSelectAll = props.showSelectAll !== false;
    const showToolbar = showSearch || showSelectAll;
    const isLoading = !!props.isLoading;
    const hasError = !props.isLoading && !!props.error;
    const isEmpty = !props.isLoading && !props.error && data.length === 0;

    const allPermissions = data.reduce((acc: APIPermission[], g) => acc.concat(g.permissions || []), []);
    const selectedCount = allPermissions.filter((p) => p.mask > 0).length;
    const allSelected = allPermissions.length > 0 && selectedCount === allPermissions.length;
    const noneSelected = selectedCount === 0;

    return (
        <div className='acl-editor'>
            {showHeader && (
                <div className='acl-header'>
                    {props.title && <h2 className='acl-title'>{props.title}</h2>}
                    {showSaveButton && (
                        <div className='acl-save-area'>
                            <button
                                type='button'
                                className='acl-btn acl-btn-primary'
                                disabled={saveStatus === "saving"}
                                onClick={handleSave}>
                                {saveStatus === "saving"
                                    ? <span className='acl-spinner' />
                                    : <FaCheck className='acl-btn-icon' />}
                                <span>{saveStatus === "saving" ? "Saving…" : (props.saveLabel || "Save Changes")}</span>
                            </button>
                        </div>
                    )}
                </div>
            )}

            {isLoading ? (
                <div className='acl-state'>{props.loadingMessage || "Loading permissions…"}</div>
            ) : hasError ? (
                <div className='acl-state acl-state-error'>{props.errorMessage || "Could not load permissions."}</div>
            ) : isEmpty ? (
                <div className='acl-state'>{props.emptyMessage || "No permissions to display."}</div>
            ) : (
            <>
            {showToolbar && (
                <div className='acl-toolbar'>
                    {showSearch && (
                        <div className='acl-search-wrap'>
                            <FaSearch className='acl-search-icon' />
                            <input
                                className='acl-search'
                                placeholder={props.searchPlaceholder || 'Search APIs or groups'}
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                    )}
                    {showSelectAll && (
                        <div className='acl-toolbar-actions'>
                            <button type='button' className='acl-btn acl-btn-select'
                                disabled={allSelected} onClick={() => setAllMask(1)}>
                                <span>Select All</span>
                            </button>
                            <button type='button' className='acl-btn acl-btn-clear'
                                disabled={noneSelected} onClick={() => setAllMask(0)}>
                                <span>Clear All</span>
                            </button>
                        </div>
                    )}
                </div>
            )}

            {visibleGroups.length === 0 ? (
                <div className='acl-empty'>No APIs match "{search}"</div>
            ) : (
                <div className='acl-masonry' style={{ columnGap: gutter }}>
                    {visibleGroups.map((d: NestedAPIPermission) => {
                        const groupVariant = getGroupVariant(d);
                        const isCollapsed = collapsible && !q && collapsed[d.className];
                        return (
                            <div key={d.className} className='parent-list' style={{ marginBottom: gutter }}>
                                <div className='acl-group-header'>
                                    <CheckBoxIcon
                                        className="checkbox-icon"
                                        onClick={() => setGroupMask(d.className, groupVariant === "all" ? 0 : 1)}
                                        icons={props.icons}
                                        variant={groupVariant}
                                    />
                                    <h3>{d.className}</h3>
                                    {collapsible && (
                                        <button
                                            type='button'
                                            className='acl-collapse-btn'
                                            aria-label={isCollapsed ? "Expand" : "Collapse"}
                                            onClick={() => toggleCollapse(d.className)}>
                                            {isCollapsed ? <FaChevronRight /> : <FaChevronDown />}
                                        </button>
                                    )}
                                </div>
                                {!isCollapsed && getVisiblePermissions(d).map((permission: APIPermission, index) => {
                                    const isSelected = permission.mask > 0;
                                    return (
                                        <div className='child-list' key={permission.id ?? permission.code ?? index}>
                                            <div>
                                                <CheckBoxIcon
                                                    className="checkbox-icon"
                                                    onClick={() => setMask(d.className, permission.id, isSelected ? 0 : 1)}
                                                    icons={props.icons}
                                                    variant={isSelected ? "all" : "none"}
                                                />
                                            </div>
                                            <div className='api-label-field'>
                                                <span className='operation-name-text'> {permission.name}</span>
                                                <span className='operation-code-text'>({permission.code})</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            )}
            </>
            )}
        </div>
    )
});


export { AclAPIEditor }
