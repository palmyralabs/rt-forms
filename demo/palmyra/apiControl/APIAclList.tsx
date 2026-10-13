import { useMemo, useState } from "react";
import { PalmyraStoreFactory } from "@palmyralabs/palmyra-wire";
import { AclAPIEditor, useAclAPIEditor } from "../../../src/palmyra/acl";
import { NestedAPIPermission } from "../../../src/palmyra/acl/types";
import "./APIAclList.css";

const toPayload = (current: NestedAPIPermission[]) => {
    const apiList: Array<{ permissionId: number, mask: number }> = [];
    current.forEach((d) => {
        d.permissions?.forEach((p) => {
            apiList.push({ permissionId: p.id, mask: p.mask });
        });
    });
    return apiList;
};

const APIAclList = () => {
    const [savedPayload, setSavedPayload] = useState<Array<{ permissionId: number, mask: number }> | null>(null);
    const [savedAt, setSavedAt] = useState<string>("");
    const [showSearch, setShowSearch] = useState<boolean>(true);
    const [showSelectAll, setShowSelectAll] = useState<boolean>(true);

    const storeFactory = useMemo(() => new PalmyraStoreFactory({ baseUrl: "/api/palmyra" }), []);

    const { aclData, editorRef, saveData, refresh, isLoading, error } = useAclAPIEditor({
        groupId: "1",
        endPoint: "/admin/acl/permission/group/{groupId}",
        storeFactory
    });

    const handleSave = (data: NestedAPIPermission[]) => {
        setSavedPayload(toPayload(data));
        setSavedAt(new Date().toLocaleTimeString());
        return saveData();
    };

    return (
        <div className="demo-panel">
            <p className="demo-panel-desc">
                Driven by <code>useAclAPIEditor</code> against the live endpoint
                {" "}<code>/api/palmyra/admin/acl/permission/group/1</code> (via the Vite proxy).
            </p>

            <div className="acl-prop-controls">
                <label>
                    <input type="checkbox" checked={showSearch}
                        onChange={(e) => setShowSearch(e.target.checked)} />
                    <span>Show search</span>
                </label>
                <label>
                    <input type="checkbox" checked={showSelectAll}
                        onChange={(e) => setShowSelectAll(e.target.checked)} />
                    <span>Show Select / Clear All</span>
                </label>
                <button className="acl-reload-btn" onClick={() => refresh().catch(() => { })}>
                    Reload
                </button>
            </div>

            <AclAPIEditor
                data={aclData}
                ref={editorRef}
                title="API Access Control (admin)"
                onSave={handleSave}
                collapsible={false}
                saveLabel="SAVE ACL"
                showSearch={showSearch}
                showSelectAll={showSelectAll}
                isLoading={isLoading}
                error={error}
            />

            {savedPayload && (
                <div className="acl-saved-output">
                    <div className="acl-saved-title">
                        Saved payload · {savedPayload.length} permissions · {savedAt}
                    </div>
                    <pre>{JSON.stringify(savedPayload, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export { APIAclList };
export default APIAclList;
