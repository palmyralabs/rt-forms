import './FormGroup.css';
interface FormGroupProps {
    title?: string;
    children: React.ReactNode;
}

const FormGroup: React.FC<FormGroupProps> = ({ title, children }) => {
    return (
        <div className="py-form-group">
            <div className="py-form-group-title">{title}</div>
            {children}
        </div>
    );
};

export { FormGroup };
