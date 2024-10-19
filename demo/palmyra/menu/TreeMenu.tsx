import { IEndPoint, PalmyraStoreFactory, StoreFactory } from "@palmyralabs/palmyra-wire";

import { useRef, useState } from "react";
import { Button } from "@mui/material";
import { AsyncTreeMenuEditor, IAsyncTreeEditor } from "../../../src/palmyra/menu";
``
const TreeMenu = () => {
    const [readOnly, setReadOnly] = useState<boolean>(true);

    const storeFactory: StoreFactory<any, any> = new PalmyraStoreFactory({ baseUrl: '/testdata' });
    const treeRef = useRef<IAsyncTreeEditor>();
    const MenuEndPoint: IEndPoint = '/menuData.json';

    const submitValue = () => {
        const formStore = storeFactory.getFormStore({}, '/menuData.json');
        const rootMenu = treeRef.current.getValue();
        const record = {
            rootMenu,
            name: 'admin',
            status: 1
        }
        formStore.put(record).then(() => {

        });
    }

    const editMenu = () => {
        setReadOnly(false)
    }

    return <>
        <div style={{ display: 'flex', backgroundColor: 'white' }}>
            {readOnly ? <div> <Button className="filled-button" onClick={editMenu}>Edit</Button> </div> :
                <div> <Button className="filled-button" onClick={submitValue}>Submit</Button></div>}
            <div style={{ width: "30%", marginTop: '10px' }}>Tree Menu
                <AsyncTreeMenuEditor ref={treeRef} storeFactory={storeFactory} endPoint={MenuEndPoint}
                    groupId={1} fineGrained={true} readOnly={readOnly} />
            </div>

            {/* <div style={{ width: "30%", marginTop: '10px' }}>Static Side Menu
            
            </div> */}
        </div>
    </>
}

export default TreeMenu;