import { CSSProperties, useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { PalmyraStoreFactory, PalmyraTreeStore, StoreFactory } from "@palmyralabs/palmyra-wire";
import {
    MdCheckBox, MdCheckBoxOutlineBlank, MdIndeterminateCheckBox, MdChevronRight, MdRefresh
} from "react-icons/md";
import { AclAPIEditor, AsyncTreeMenu, AsyncTreeMenuEditor, TreeIcons } from "../../../src/palmyra";
import AsyncTreeCrudDropDown from "../../../src/palmyra/menu/AsyncTreeCrudDropDown";

const customIcons: TreeIcons = {
    arrow: MdChevronRight,
    loading: MdRefresh,
    checked: MdCheckBox,
    unchecked: MdCheckBoxOutlineBlank,
    indeterminate: MdIndeterminateCheckBox
}

const customColors: any = {
    '--asynctree-checkbox-color': 'seagreen',
    '--asynctree-checkbox-unchecked-color': 'darkseagreen',
    '--asynctree-checkbox-readonly-color': 'lightgray'
}

const aclData: any = [{
    className: 'User',
    permissions: [
        { id: 1, name: 'Edit', code: 'QCRU', mask: 1 },
        { id: 2, name: 'Delete', code: 'DELETE', mask: 0 }
    ]
}];

const columnStyle: CSSProperties = { width: '45%', padding: '10px', backgroundColor: 'white' };
const dropDownStyle: CSSProperties = { position: 'relative', height: '130px' };

interface IColumnInput {
    title: string,
    id: string,
    icons?: TreeIcons,
    readOnly: boolean,
    style?: CSSProperties
}

const Column = (props: IColumnInput) => {
    const { icons, readOnly } = props;
    const storeFactory: StoreFactory<any, any> = new PalmyraStoreFactory({ baseUrl: '/testdata' });
    const treeStore = new PalmyraTreeStore("", "/flatMenu.json", {});

    return <div id={props.id} style={{ ...columnStyle, ...props.style }}>
        <h3>{props.title}</h3>
        <h4>AsyncTreeMenu</h4>
        <AsyncTreeMenu store={treeStore} icons={icons} />
        <h4>AsyncTreeMenuEditor</h4>
        <AsyncTreeMenuEditor storeFactory={storeFactory} endPoint="/menuData.json"
            groupId={1} fineGrained={true} readOnly={readOnly} icons={icons} />
        <h4>AclAPIEditor</h4>
        <AclAPIEditor data={aclData} icons={icons} />
        <h4>AsyncTreeCrudDropDown</h4>
        <div style={dropDownStyle}><AsyncTreeCrudDropDown icons={icons} /></div>
        <div style={dropDownStyle}><AsyncTreeCrudDropDown icons={icons} isSelected /></div>
        <div style={dropDownStyle}><AsyncTreeCrudDropDown icons={icons} isHalfSelected /></div>
    </div>
}

const TreeIconsDemo = () => {
    const [readOnly, setReadOnly] = useState<boolean>(false);

    return <Router>
        <button id="toggle-readonly" onClick={() => setReadOnly(!readOnly)}>
            {readOnly ? 'Edit' : 'Read only'}
        </button>
        <div style={{ display: 'flex', gap: '20px' }}>
            <Column id="default-icons" title="Default icons" readOnly={readOnly} />
            <Column id="custom-icons" title="Custom icons and colors" readOnly={readOnly}
                icons={customIcons} style={customColors} />
        </div>
    </Router>
}

export default TreeIconsDemo;
