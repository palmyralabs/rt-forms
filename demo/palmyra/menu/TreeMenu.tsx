import { useRef, useState } from "react";
import { Button } from "@mui/material";
import { AsyncTreeMenuEditor, IAsyncTreeEditor } from "../../../src/palmyra/menu";
import { useDemoConfig } from "../../config/DemoConfigContext";

const TreeMenu = () => {
    const { storeFactory, config } = useDemoConfig();
    const [readOnly, setReadOnly] = useState<boolean>(true);
    const treeRef = useRef<IAsyncTreeEditor>(null);

    const submitValue = () => {
        if (!treeRef.current)
            return;
        const formStore = storeFactory.getFormStore({}, config.menuEndpoint);
        const rootMenu = treeRef.current.getValue();
        const record = {
            rootMenu,
            name: "admin",
            status: 1
        };
        formStore.put(record).then(() => { });
    };

    return (
        <div className="demo-panel">
            <h2>Tree Menu</h2>
            <p className="demo-panel-desc">
                Editable async menu tree via <code>AsyncTreeMenuEditor</code> loading from
                {" "}<code>{config.baseUrl}{config.menuEndpoint}</code>.
            </p>

            <div className="demo-form-actions" style={{ justifyContent: "flex-start", marginTop: 0, borderTop: "none", paddingTop: 0 }}>
                {readOnly
                    ? <Button variant="contained" onClick={() => setReadOnly(false)}>Edit</Button>
                    : <Button variant="contained" onClick={submitValue}>Submit</Button>}
            </div>

            <div style={{ maxWidth: 360, marginTop: 16 }}>
                <AsyncTreeMenuEditor
                    ref={treeRef}
                    storeFactory={storeFactory}
                    endPoint={config.menuEndpoint}
                    groupId={1}
                    fineGrained={true}
                    readOnly={readOnly}
                />
            </div>
        </div>
    );
};

export default TreeMenu;
