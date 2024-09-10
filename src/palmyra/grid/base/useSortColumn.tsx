import { useState } from "react";

const useSortColumn = ({ sortDisabled, onSortChange }) => {
    const [sortOrder, setSortOrder] = useState('');
    var order = sortOrder;

    const sortColumn = () => {
        if (onSortChange === undefined || sortDisabled)
            return;
        switch (order) {
            case 'asc':
                order = 'desc'
                break;
            case 'desc':
                order = '';
                break;
            default:
                order = 'asc'
                break;
        }
        setSortOrder(order)
    };

    return { sortColumn, order, sortOrder }
}

export { useSortColumn };