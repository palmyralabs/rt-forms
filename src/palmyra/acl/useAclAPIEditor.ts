import { IEndPoint, StoreFactory, StoreOptions } from "@palmyralabs/palmyra-wire";
import { RefObject, useContext, useEffect, useRef, useState } from "react";
import { StoreFactoryContext } from "../form";
import { APIPermission, IAclAPIEditor, NestedAPIPermission } from "./types";

const DEFAULT_ACL_ENDPOINT = "/admin/acl/permission/group/{groupId}";

interface PalmyraAclEditorProps {
    groupId: string,
    endPoint?: IEndPoint,
    storeFactory?: StoreFactory<any, StoreOptions>,
    editorRef?: RefObject<IAclAPIEditor>
}

const useAclAPIEditor = (props: PalmyraAclEditorProps) => {
    const { groupId } = props;
    const storeFactory: StoreFactory<any, StoreOptions> = props.storeFactory || useContext(StoreFactoryContext);
    const editorRef = props.editorRef || useRef<IAclAPIEditor>(null);
    const endPoint = props.endPoint || DEFAULT_ACL_ENDPOINT;
    const store = storeFactory.getFormStore({}, endPoint)

    const [aclData, setAclData] = useState<any>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isSaving, setIsSaving] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);

    const refresh = (): Promise<NestedAPIPermission[]> => {
        setIsLoading(true);
        setError(null);
        return store.get({ endPointVars: { groupId } }).then((apiData) => {
            const groupedData = apiData.reduce((data: Record<string, APIPermission[]>, item: any) => {
                if (!data[item.className]) {
                    data[item.className] = [];
                }
                data[item.className].push({
                    id: item.id,
                    code: item.code,
                    name: item.permission,
                    mask: item.mask
                });
                return data;
            }, {});

            const aclList = Object.entries(groupedData).map(([className, permissions]) => ({
                className,
                permissions
            }));
            setAclData(aclList);
            setIsLoading(false);
            return aclList as NestedAPIPermission[];
        }).catch((e) => {
            console.error("useAclAPIEditor: failed to load permissions", e);
            setAclData([]);
            setError(e);
            setIsLoading(false);
            return Promise.reject(e);
        });
    }

    useEffect(() => {
        refresh()
    }, [groupId, props.editorRef])

    const saveData = (): Promise<any> => {
        if (!editorRef.current)
            return Promise.reject(new Error("useAclAPIEditor: editor is not ready"));

        const data: NestedAPIPermission[] = editorRef.current.getValue();
        const apiList: Array<{ permissionId: number, mask: number }> = [];
        data.forEach((d) => {
            d.permissions?.forEach((p) => {
                apiList.push({ permissionId: p.id, mask: p.mask });
            })
        });

        setIsSaving(true);
        setError(null);
        return store.put(apiList, { endPointVars: { groupId } })
            .then((response) => {
                setIsSaving(false);
                return response;
            })
            .catch((e) => {
                console.error("useAclAPIEditor: failed to save permissions", e);
                setError(e);
                setIsSaving(false);
                return Promise.reject(e);
            });
    }

    return { aclData, editorRef, refresh, saveData, isLoading, isSaving, error }
}


export { useAclAPIEditor }
