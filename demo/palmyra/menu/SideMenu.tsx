import { PalmyraTreeStore } from '@palmyralabs/palmyra-wire';
import React from 'react'
import DynamicMenu from './DynamicMenu';
import { SimpleIconProvider } from './SimpleIconProvider';

const SideMenu = () => {
    const treeStore = new PalmyraTreeStore("", "/flatMenu.json", {});
    
    return (
        <div>
            <div>Side Menu</div>
            <DynamicMenu treeStore={treeStore} iconProvider={SimpleIconProvider}/>
        </div>
    )
}

export default SideMenu
