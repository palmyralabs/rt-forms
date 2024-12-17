import { useEffect, useRef, useState } from "react";
import TreeView, { INode, ITreeViewOnExpandProps, ITreeViewOnSelectProps, NodeId } from "react-accessible-treeview";
import cx from "classnames";
import "./AsyncTreeMenu.css";
import { useNavigate } from "react-router-dom";
import { AiOutlineLoading } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { IAsyncTreeMenuInput, IChildTreeRequest } from "./types";
import { TreeQueryStore } from "@palmyralabs/palmyra-wire";
import { IconProvider, SimpleIconProvider } from "./IconProvider";

const MENU_STORE_KEY_EXPANDED = 'palmyra.rui.sidemenu.expanded';
const MENU_STORE_KEY_SELECTED = 'palmyra.rui.sidemenu.expanded.selected';

export default function AsyncTreeMenu(props: IAsyncTreeMenuInput) {
    const navigate = useNavigate();
    const loadedAlertElement = useRef(null);
    let rootNode = { name: "", id: -1, parent: null, children: [], isBranch: true };
    const [data, setData] = useState({ data: [rootNode], expandedIds: [], selectedId: [] });
    const store: TreeQueryStore<IChildTreeRequest, any> = props.store;
    const expandedIdRef = useRef<NodeId[]>([]);

    const updateTreeData = (list, id, children) => {
        const data = list.map((node) => {
            if (node.id === id && !node.loaded) {
                node.loaded = true
                node.children = children.filter((e) => id == e.parent).map((el) => {
                    return el.id;
                });
            }
            return node;
        });
        return data.concat(children);
    };

    const getChildId = (ids: string): number[] => {
        const idList: string[] = ids.split(",");
        return idList.map((s) => {
            return parseInt(s);
        })
    }

    const convert = (nodes, parentId) => {
        if (nodes && Array.isArray(nodes)) {
            const result = nodes.map((d) => {
                const childIds: string = d.children || "";
                return {
                    id: d.id,
                    name: d.name,
                    parent: d.parent ? d.parent : parentId,
                    children: d.children ? getChildId(d.children) : [],
                    isBranch: childIds.length > 0,
                    loaded: true,
                    metadata: {
                        code: d.code, action: d.action, target: d.target
                    }
                }
            });

            return result;
        }
        return [];
    };

    function parse(v: NodeId): number {
        if (typeof v == 'number')
            return v;
        else
            return parseInt(v);
    }

    useEffect(() => {
        store.getRoot().then((d) => {
            var nodes: any[] = convert(d.result, -1);
            const sd = updateTreeData(data.data, -1, nodes);
            // Load the selected Ids from the localStorage;
            //@ts-ignore
            const localExpValue = (localStorage.getItem(MENU_STORE_KEY_EXPANDED) || '').split(',');
            expandedIdRef.current = localExpValue.map((d) => parse(d)).filter((id) => {
                //@ts-ignore
                return nodes.some((d) => {
                    return d.id == id;
                })
            });

            const localSelVal = (localStorage.getItem(MENU_STORE_KEY_SELECTED) || '').split(',').map(d => parse(d));
            const selectedId = localSelVal.filter((id) => {
                return nodes.some((d) => {
                    return d.id == id;
                })
            });

            setData({ data: sd, expandedIds: expandedIdRef.current, selectedId: selectedId });
        });
    }, []);

    const persistExpanded = () => {
        localStorage.setItem(MENU_STORE_KEY_EXPANDED, expandedIdRef.current.join());
    }

    const persistSelected = (element) => {
        //@ts-ignore
        localStorage.setItem(MENU_STORE_KEY_SELECTED, element);
    }

    const navigateTo = (element: INode) => {
        if (!element.isBranch && element.metadata?.code) {
            //@ts-ignore
            const target: string = element.metadata.code;
            navigate(target);
        } else if (element.metadata?.target) {
            //@ts-ignore
            const target: string = element.metadata.target;
            navigate(target);
        }
    }

    const iconProvider: IconProvider = props.iconProvider || SimpleIconProvider;
    return (
        <>
            <div className="sidebar-asyn-menu">
                <div
                    className="visually-hidden"
                    ref={loadedAlertElement}
                    role="alert"
                    aria-live="polite"
                ></div>
                <div className="checkbox">
                    {(data.data.length > 1) &&
                        <TreeView className="async-tree-menu-container"
                            data={data.data}
                            aria-label="Checkbox tree"
                            onExpand={(p: ITreeViewOnExpandProps) => {
                                const isExpanded = p.isExpanded;
                                const element = p.element;
                                if (isExpanded) {
                                    if (element.id != "") {
                                        if (!expandedIdRef.current.includes(element.id))
                                            expandedIdRef.current.push(element.id);
                                    }
                                } else {
                                    const idx: number = expandedIdRef.current.indexOf(element.id)
                                    if (idx > -1) {
                                        expandedIdRef.current.splice(idx, 1);
                                    }
                                }
                                persistExpanded();
                            }}
                            onSelect={(p: ITreeViewOnSelectProps) => {
                                const isSelected = p.isSelected;
                                const element = p.element;
                                if (isSelected && !p.isHalfSelected) {
                                    if (element.id !== "") {
                                        persistSelected(element.id);
                                    }
                                }
                            }}
                            propagateSelect={false}
                            togglableSelect
                            multiSelect={false}
                            selectedIds={data.selectedId}
                            expandedIds={data.expandedIds}
                            propagateSelectUpwards={true}
                            nodeRenderer={({
                                element,
                                isBranch,
                                isExpanded,
                                isSelected,
                                isHalfSelected,
                                getNodeProps,
                                level,
                                handleSelect,
                                handleExpand,
                            }) => {

                                const branchNode = (isExpanded, element) => {
                                    return isExpanded && element.children.length === 0 ? (
                                        <>
                                            <span
                                                role="alert"
                                                aria-live="assertive"
                                                className="visually-hidden"
                                            >
                                                loading {element.name}
                                            </span>
                                            <AiOutlineLoading
                                                aria-hidden={true}
                                                className="loading-icon"
                                            />
                                        </>
                                    ) : (
                                        <ArrowIcon isOpen={isExpanded} />
                                    );
                                };

                                // @ts-ignore
                                const Icon = iconProvider.getIcon(element.metadata.code);


                                return (
                                    <div
                                        {...getNodeProps({ onClick: handleExpand })}
                                        style={{ marginLeft: 5 * (level - 1) }}
                                    >
                                        <div className={isSelected ?
                                            "async-tree-menu-selected-list" : "async-tree-menu-list"}
                                            onClick={(e) => {
                                                if (!isSelected) {
                                                    handleSelect(e);
                                                }
                                                navigateTo(element);
                                            }}>
                                            <div className="async-tree-menu-list-text-container">
                                                <div className="menu-icon">{Icon && <Icon/>}</div>
                                                <span className="menu-name">{element.name}</span>
                                            </div>
                                            <div className="async-tree-menu-list-arrow-container">
                                                {isBranch && branchNode(isExpanded, element)}
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                            }
                        />}
                </div>
            </div >
        </>
    );
}

interface IArrowIconInput {
    isOpen: boolean,
    className?: string
}

const ArrowIcon = (props: IArrowIconInput) => {
    const { isOpen, className } = props;
    const baseClass = "arrow";
    const classes = cx(
        baseClass,
        { [`${baseClass}--closed`]: !isOpen },
        { [`${baseClass}--open`]: isOpen },
        className
    );
    return <IoIosArrowForward className={classes} />;
};