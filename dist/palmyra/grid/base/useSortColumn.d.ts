declare const useSortColumn: ({ sortDisabled, onSortChange }: {
    sortDisabled: any;
    onSortChange: any;
}) => {
    sortColumn: () => void;
    order: string;
    sortOrder: string;
};
export { useSortColumn };
