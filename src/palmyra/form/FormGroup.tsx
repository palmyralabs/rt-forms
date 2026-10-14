import { CSSProperties, ReactNode, useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import './FormGroup.css';

interface FormGroupIcons {
    collapsed?: ReactNode;
    expanded?: ReactNode;
}

interface FormGroupProps {
    title?: string;
    titleIcon?: ReactNode;
    description?: string;
    headerContent?: any;
    collapsible?: boolean;
    defaultCollapsed?: boolean;
    borderless?: boolean;
    icons?: FormGroupIcons;
    className?: string;
    style?: CSSProperties;
    headerClassName?: string;
    titleClassName?: string;
    bodyClassName?: string;
    bodyStyle?: CSSProperties;
    children: React.ReactNode;
}

const FormGroup: React.FC<FormGroupProps> = ({
    title, titleIcon, description, children, headerContent, collapsible, defaultCollapsed,
    borderless, icons, className, style, headerClassName, titleClassName, bodyClassName, bodyStyle
}) => {
    const [collapsed, setCollapsed] = useState<boolean>(!!defaultCollapsed);
    const hasHeader = title || titleIcon || description || headerContent || collapsible;

    const collapseIcon = collapsed
        ? (icons?.collapsed ?? <FaChevronRight />)
        : (icons?.expanded ?? <FaChevronDown />);

    return (
        <div
            className={"py-form-group"
                + (borderless ? " py-form-group-flat" : "")
                + (className ? " " + className : "")}
            style={style}>
            {hasHeader && (
                <div
                    className={"py-form-group-header"
                        + (collapsible ? " py-form-group-header-clickable" : "")
                        + (headerClassName ? " " + headerClassName : "")}
                    onClick={collapsible ? () => setCollapsed((c) => !c) : undefined}>
                    {titleIcon && <span className="py-form-group-title-icon">{titleIcon}</span>}
                    <div className={"py-form-group-title" + (titleClassName ? " " + titleClassName : "")}>
                        {title && <span className="py-form-group-title-text">{title}</span>}
                        {description && <span className="py-form-group-desc">{description}</span>}
                    </div>
                    {headerContent && (
                        <div className="py-form-group-actions" onClick={(e) => e.stopPropagation()}>
                            {headerContent}
                        </div>
                    )}
                    {collapsible && (
                        <button
                            type="button"
                            className="py-form-group-collapse"
                            aria-label={collapsed ? "Expand" : "Collapse"}
                            onClick={(e) => { e.stopPropagation(); setCollapsed((c) => !c); }}>
                            {collapseIcon}
                        </button>
                    )}
                </div>
            )}
            {!collapsed && (
                <div
                    className={"py-form-group-body" + (bodyClassName ? " " + bodyClassName : "")}
                    style={bodyStyle}>
                    {children}
                </div>
            )}
        </div>
    );
};

export { FormGroup };
export type { FormGroupProps, FormGroupIcons };
