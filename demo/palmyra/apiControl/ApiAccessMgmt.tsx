import './ApiAccessMgmt.css';
import { CheckBoxIcon } from '../../../src/palmyra/menu/AsyncTreeMenuEditor';
import style from './../../../node_modules/@mui/system/legacy/style';
import { useEffect, useState } from 'react';
const response = [
    {
        code: "DELETE",
        operations: "Delete",
        mask: 1
    },
    {
        code: "QCRU",
        operations: "All Crud, Search",
        mask: 0
    }
];
const apiList = Array.from({ length: 80 }, (_, index) => {
    const item = response[index % response.length];
    const pageNumber = Math.floor(index / 2) + 1;
    return {
        ...item,
        className: `Page ${pageNumber}`
    };
});

const style =
    { color: "rgb(44, 134, 213)", backgroundColor: 'white' };

const ApidataessMgmt = () => {
    const [selected, setSelected] = useState<any>({});

    const groupedData = apiList.reduce((data, item) => {
        if (!data[item.className]) {
            data[item.className] = [];
        }
        data[item.className].push({
            code: item.code,
            operations: item.operations,
            mask: item.mask
        });
        return data;
    }, {});

    const modifyApiList: any = Object.entries(groupedData).map(([parent, children]) => ({
        parent,
        children
    }));

    useEffect(() => {
        const initialSelection = {};
        apiList.forEach(item => {
            initialSelection[item.code] = item.mask === 1;
        });
        setSelected(initialSelection);
    }, []);

    const handleClick = (code: string) => {
        setSelected((prevState: any) => {
            return {
                ...prevState,
                [code]: !prevState[code]
            };
        });
    };
    return (
        <div className='apilist-container'>
            {modifyApiList.map((d: any) => (
                <div key={d.parent}>
                    <h3>{d?.parent}</h3>
                    {d?.children.map((c: any) => {
                        const isSelected = selected[c.code];
                        return (
                            <div className='child-list' key={c.code}>
                                <CheckBoxIcon
                                    className="checkbox-icon"
                                    onClick={() => handleClick(c.code)}
                                    style={style}
                                    variant={isSelected ? "all" : "none"}
                                />
                                <p>{c.code} / {c.operations}</p>
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    )
}

export default ApidataessMgmt
