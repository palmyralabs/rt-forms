import './FormGroup.css';
interface FormGroupProps {
    title?: string;
    headerContent?: any;
    children: React.ReactNode;
}

const FormGroup: React.FC<FormGroupProps> = ({ title, children, headerContent }) => {
    return (
        <div className="py-form-group">
            <div className="py-form-group-title">
                {title}
                {headerContent && <div>{headerContent}</div>}
            </div>
            {children}
        </div>
    );
};

export { FormGroup };
