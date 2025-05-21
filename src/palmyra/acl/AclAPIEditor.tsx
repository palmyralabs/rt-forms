import './ApiAccessMgmt.css';
import { CheckBoxIcon } from '../../../src/palmyra/menu/AsyncTreeMenuEditor';
import { forwardRef, MutableRefObject, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { AclAPIEditorProps, APIPermission, IAclAPIEditor, NestedAPIPermission } from './types';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const style =
    { color: "rgb(44, 134, 213)", backgroundColor: 'white' };


const AclAPIEditor = forwardRef(function AclAPIEditor(props: AclAPIEditorProps, ref: MutableRefObject<IAclAPIEditor>) {
    const [data, setData] = useState<NestedAPIPermission[]>(props.data);

    useEffect(() => {
        setData(props.data);
    }, [props.data]);


    const currentRef = ref ? ref : useRef<IAclAPIEditor>(null);

    useImperativeHandle(currentRef, () => {
        return {
            getValue() {
                return data;
            }
        };
    }, [data]);


    const handleClick = (pIndex: number, index: number, flag: boolean) => {
        setData((data: NestedAPIPermission[]) => {
            data[pIndex].permissions[index].mask = flag ? 1 : 0;
            return [...data];
        })
    };
    useEffect(() => {
        const handleResize = () => setData([...data]);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [data]);

    const defaultColumnsCountBreakPoints = { 450: 1, 750: 2, 900: 2, 1200: 3, 2000: 5 };
    const defaultGutter = "10px";
    return (
        <>
            <ResponsiveMasonry
                columnsCountBreakPoints={props.columnsCountBreakPoints || defaultColumnsCountBreakPoints}>
                <Masonry gutter={props.gutter || defaultGutter}>
                    {data.map((d: NestedAPIPermission, pIndex: number) => (
                        <div key={d.className} className='parent-list'>
                            <h3>{d.className}</h3>
                            {d.permissions?.map((permission: APIPermission, index) => {
                                const isSelected = permission.mask > 0;
                                return (
                                    <div className='child-list' key={index}>
                                        <div>
                                            <CheckBoxIcon
                                                className="checkbox-icon"
                                                onClick={() => handleClick(pIndex, index, !isSelected)}
                                                style={style}
                                                variant={isSelected ? "all" : "none"}
                                            />
                                        </div>
                                        <div className='api-label-field'>
                                            <span className='operation-name-text'> {permission.name}</span>
                                            <span className='operation-code-text'>({permission.code})</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </>
    )
});


export { AclAPIEditor }
