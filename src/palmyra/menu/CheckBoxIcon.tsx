import { FaRegSquare, FaCheckSquare, FaMinusSquare } from "react-icons/fa";
import cx from "classnames";

import "./AsyncTreeMenu.css";
import { CheckBoxIcons } from "./types";

interface ICheckBoxIconInput {
    variant: "all" | "none" | "some",
    icons?: CheckBoxIcons,
    readOnly?: boolean,
    className?: string,
    onClick?: (e: any) => void
}

const variantState = {
    all: "checked",
    none: "unchecked",
    some: "indeterminate"
}

const defaultIcons: CheckBoxIcons = {
    checked: FaCheckSquare,
    unchecked: FaRegSquare,
    indeterminate: FaMinusSquare
}

const CheckBoxIcon = (props: ICheckBoxIconInput) => {
    const { variant, icons, readOnly, className, onClick } = props;
    const state = variantState[variant];
    if (!state)
        return null;

    const Icon = icons?.[state] || defaultIcons[state];
    const baseClass = "checkbox-icon";
    const classes = cx(
        className,
        `${baseClass}--${state}`,
        { [`${baseClass}--readonly`]: readOnly }
    );
    return <Icon className={classes} onClick={onClick} />;
};

export { CheckBoxIcon };
