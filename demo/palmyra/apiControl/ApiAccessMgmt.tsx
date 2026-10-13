import { useState } from 'react';
import { AclAPIEditor } from '../../../src/palmyra/acl/AclAPIEditor';

const modules = [
    "Award", "BudgetHead", "Contractor", "Deviation", "Department",
    "Funding", "Invoice", "Group", "Finance Head", "Dashboard",
    "Issue", "Project", "Report", "Vendor", "Payment"
];

const actions = [
    "View", "Create / Edit", "Delete", "Approve", "Reject",
    "Assign", "Export", "Import", "Read ACL", "Edit ACL"
];

const pick = (source: string[], count: number): string[] => {
    const pool = [...source];
    const result: string[] = [];
    for (let i = 0; i < count && pool.length > 0; i++) {
        const idx = Math.floor(Math.random() * pool.length);
        result.push(pool.splice(idx, 1)[0]);
    }
    return result;
};

const abbr = (name: string) => name.replace(/[^A-Za-z]/g, "").substring(0, 3).toUpperCase();

const buildData = () => modules.map((name, mIndex) => {
    const count = Math.random() < 0.5 ? 4 : 5;
    const permissions = pick(actions, count).map((action, aIndex) => ({
        id: mIndex * 100 + aIndex,
        name: `${action} ${name}`,
        code: `PRJ${abbr(name)}${String(aIndex + 1).padStart(3, "0")}`,
        mask: Math.random() < 0.75 ? 1 : 0
    }));
    return {
        className: `${name} Management`,
        permissions
    };
});

const ApiAccessMgmt = () => {
    const [data] = useState<any>(buildData);

    return (
        <div className="demo-panel">
            <h2>ACL API Editor</h2>
            <p className="demo-panel-desc">
                Masonry permission editor via <code>AclAPIEditor</code>. Each group shows a
                random set of 4 to 5 permissions; toggle the Create, Read, Update and Delete masks.
            </p>
            <AclAPIEditor data={data} />
        </div>
    );
};

export default ApiAccessMgmt;
