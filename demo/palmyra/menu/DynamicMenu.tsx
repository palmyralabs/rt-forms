import './DynamicMenu.css'
import { TreeQueryStore } from "@palmyralabs/palmyra-wire";
import { AsyncTreeMenu, IChildTreeRequest, IconProvider } from "../../../src/palmyra";
import { SimpleIconProvider } from './SimpleIconProvider';

interface IOptions {
    treeStore: TreeQueryStore<IChildTreeRequest, any>
    iconProvider?: IconProvider
}
const DynamicMenu = (props: IOptions) => {
    const iconProvider = props.iconProvider || SimpleIconProvider;
    return (
        <div style={{ width: "100%" }}>
            <div>
                <AsyncTreeMenu store={props.treeStore} iconProvider={iconProvider}/>
            </div>
        </div>
    )
}

export default DynamicMenu;
