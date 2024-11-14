import './ApiAccessMgmt.css';
import { CheckBoxIcon } from '../../../src/palmyra/menu/AsyncTreeMenuEditor';
import { forwardRef, MutableRefObject, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { AclAPIEditorProps, APIPermission, IAclAPIEditor, NestedAPIPermission } from './types';

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

    return (
        <div className='apilist-container'>
            {data.map((d: NestedAPIPermission, pIndex: number) => (
                <div key={d.className} className='parent-list'>
                    <h3>{d.className}</h3>
                    {d.permissions?.map((permission: APIPermission, index) => {
                        const isSelected = permission.mask > 0;
                        return (
                            <div className='child-list' key={index}>
                                <CheckBoxIcon
                                    className="checkbox-icon"
                                    onClick={() => handleClick(pIndex, index, !isSelected)}
                                    style={style}
                                    variant={isSelected ? "all" : "none"}
                                />
                                <span>{permission.name} <span className='operation-text'>({permission.code})</span></span>
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    )
});


export { AclAPIEditor }
