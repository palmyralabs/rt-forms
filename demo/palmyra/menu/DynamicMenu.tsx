import { IChildTreeRequest, IconProvider, SimpleIconProvider } from "@palmyralabs/rt-forms";
import './DynamicMenu.css'
import { TreeQueryStore } from "@palmyralabs/palmyra-wire";
import { AsyncTreeMenu } from "../../../src/palmyra";

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
