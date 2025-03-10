declare const useSortColumn: ({ sortDisabled, onSortChange, initMode }: {
    sortDisabled: any;
    onSortChange: any;
    initMode?: string;
}) => {
    sortColumn: () => void;
    order: string;
    sortOrder: string;
};
export { useSortColumn };
