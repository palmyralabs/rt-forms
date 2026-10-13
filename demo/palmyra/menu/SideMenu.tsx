import { PalmyraTreeStore } from '@palmyralabs/palmyra-wire';
import DynamicMenu from './DynamicMenu';
import { SimpleIconProvider } from './SimpleIconProvider';

const SideMenu = () => {
    const treeStore = new PalmyraTreeStore("", "/flatMenu.json", {});

    return (
        <div className="demo-panel">
            <h2>Side Menu</h2>
            <p className="demo-panel-desc">
                Flat navigation menu via <code>DynamicMenu</code> rendered from
                {" "}<code>/flatMenu.json</code>.
            </p>
            <DynamicMenu treeStore={treeStore} iconProvider={SimpleIconProvider} />
        </div>
    );
};

export default SideMenu;
