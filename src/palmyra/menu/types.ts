import { IEndPoint, StoreFactory, StoreOptions, Tree, TreeQueryStore } from "@palmyralabs/palmyra-wire";
import { ComponentType } from "react";
import { IconProvider } from "./IconProvider";

interface TreeIconProps {
    className?: string,
    onClick?: (e: any) => void,
    'aria-hidden'?: boolean
}

type TreeIcon = ComponentType<TreeIconProps>;

interface TreeNodeIcons {
    // should point right, it is rotated by 90deg when the node is expanded
    arrow?: TreeIcon,
    loading?: TreeIcon
}

interface CheckBoxIcons {
    checked?: TreeIcon,
    unchecked?: TreeIcon,
    indeterminate?: TreeIcon
}

interface TreeIcons extends TreeNodeIcons, CheckBoxIcons {
}

interface IChildTreeRequest {
    parent?: number
}

interface TreeListener<T> {
    onClick: (id: string, e: T) => void
    expand: (id: string, e: T) => void
    collapse: (id: string, e: T) => void
}

interface MenuDef extends Tree<MenuDef> {
    name: string,
    title?: string
    path?: string,
    children?: MenuDef[],
    icon?: string,
    isExternal?: boolean;
}

interface TreeMenuInput {
    data: MenuDef[],
    iconProvider?: IconProvider,
    sidebarWidth?: boolean
}

interface IAsyncTreeMenuInput {
    store: TreeQueryStore<IChildTreeRequest, any>
    iconProvider?: IconProvider,
    icons?: TreeNodeIcons
}

interface IAsyncTreeEditorInput {
    storeFactory: StoreFactory<IChildTreeRequest, StoreOptions>
    endPoint: IEndPoint,
    groupId: number,
    readOnly?: boolean,
    fineGrained?: boolean,
    icons?: TreeIcons
}

interface Node {
    id: number,
    parent: number,
    name: string,
    loaded: boolean,
    isBranch: true,
    children: (Node | number)[],
    selected: 0 | 1 | 2;
}

interface IAsyncTreeEditor {
    getValue: () => Node
}


export type {
    TreeListener, MenuDef, TreeMenuInput, IChildTreeRequest,
    IAsyncTreeEditorInput, IAsyncTreeEditor, IAsyncTreeMenuInput,
    TreeIconProps, TreeIcon, TreeNodeIcons, CheckBoxIcons, TreeIcons
}