import { TreeIcon, TreeIconProps } from "../../../src/palmyra";

const testIcon = (id: string): TreeIcon => {
    return (props: TreeIconProps) =>
        <span data-testid={id} className={props.className} onClick={props.onClick} />;
}

const CustomChecked = testIcon('custom-checked');
const CustomUnchecked = testIcon('custom-unchecked');
const CustomIndeterminate = testIcon('custom-indeterminate');
const CustomArrow = testIcon('custom-arrow');
const CustomLoading = testIcon('custom-loading');

export { testIcon, CustomChecked, CustomUnchecked, CustomIndeterminate, CustomArrow, CustomLoading }
