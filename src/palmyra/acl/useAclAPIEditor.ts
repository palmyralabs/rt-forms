import { StoreFactory, StoreOptions } from "@palmyralabs/palmyra-wire";
import { MutableRefObject, useContext, useEffect, useRef, useState } from "react";
import { StoreFactoryContext } from "../form";
import { IAclAPIEditor, NestedAPIPermission } from "./types";

interface PalmyraAclEditorProps {
    groupId: string,
    storeFactory?: StoreFactory<any, StoreOptions>,
    editorRef?: MutableRefObject<IAclAPIEditor>
}

const useAclAPIEditor = (props: PalmyraAclEditorProps) => {
    const { groupId } = props;
    const storeFactory: StoreFactory<any, StoreOptions> = props.storeFactory || useContext(StoreFactoryContext);
    const editorRef = props.editorRef || useRef<IAclAPIEditor>(null);
    const store = storeFactory.getFormStore({}, "/admin/acl/permission/group/{groupId}")

    const [aclData, setAclData] = useState<any>([]);

    const refresh = () => {
        store.get({ endPointVars: { groupId } }).then((apiData) => {
            const groupedData = apiData.reduce((data, item) => {
                if (!data[item.className]) {
                    data[item.className] = [];
                }
                data[item.className].push({
                    id:item.id,
                    code: item.code,
                    operations: item.operations,
                    mask: item.mask
                });
                return data;
            }, {});

            const aclList: any = Object.entries(groupedData).map(([className, permissions]) => ({
                className,
                permissions
            }));
            setAclData(aclList);
        })
    }

    useEffect(() => {
        refresh()
    }, [groupId, props.editorRef])

    const saveData = () => {
        const data: NestedAPIPermission[] = editorRef.current.getValue();
        const apiList = []
        data.forEach((d) => {
            d.permissions?.forEach((p) => {
                apiList.push({ permissionId: p.id, mask: p.mask });
            })
        });
        store.put(apiList, { endPointVars: { groupId } })
    }

    return { aclData, editorRef, refresh, saveData }
}


export { useAclAPIEditor }