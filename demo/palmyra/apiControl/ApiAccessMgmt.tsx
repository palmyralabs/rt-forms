
import { AclAPIEditor } from '../../../src/palmyra/acl/AclAPIEditor';
const response = [
    {
        name: "DELETE",
        code: "DELETE",
        operations: "Delete",
        mask: 1
    },
    {
        name: "QCRU",
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


const ApidataessMgmt = () => {

    const groupedData = apiList.reduce((data, item) => {
        if (!data[item.className]) {
            data[item.className] = [];
        }
        data[item.className].push({
            name: item.name,
            code: item.code,
            operations: item.operations,
            mask: item.mask
        });
        return data;
    }, {});

    const modifyApiList: any = Object.entries(groupedData).map(([className, permissions]) => ({
        className,
        permissions
    }));
    return (
        <AclAPIEditor data={modifyApiList} />
    )
}

export default ApidataessMgmt
