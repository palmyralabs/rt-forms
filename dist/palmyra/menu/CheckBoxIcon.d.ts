import { CheckBoxIcons } from './types';
interface ICheckBoxIconInput {
    variant: "all" | "none" | "some";
    icons?: CheckBoxIcons;
    readOnly?: boolean;
    className?: string;
    onClick?: (e: any) => void;
}
declare const CheckBoxIcon: (props: ICheckBoxIconInput) => import("react/jsx-runtime").JSX.Element;
export { CheckBoxIcon };
