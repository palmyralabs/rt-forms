import './FieldGroupContainer.css'
import './FieldContainer.css'

type IFieldDecoratorInput = {
    label?: any,
    children: any,
    colspan?: number,
    customContainerClass?: string,
    customFieldClass?: string,
    customLabelClass?: string,
    index?: number
}

const ContainerClass = 'py-form-field-container';

const getColSpanClass = (colspan: number): string => {
    return ContainerClass + '-' + colspan + 'colspan';
}

const FieldDecorator = (props: IFieldDecoratorInput) => {
    if (props.label) {
        var containerClass = props.customContainerClass ? ContainerClass + ' ' + props.customContainerClass
            : ContainerClass;
        if (props.colspan) {
            containerClass += ' ' + getColSpanClass(props.colspan);
        }
        const labelClass = props.customLabelClass ? 'py-form-field-label ' + props.customLabelClass : 'py-form-field-label'
        const fieldClass = props.customFieldClass ? 'py-form-field-data ' + props.customFieldClass : 'py-form-field-data'
        return (
            <div className={containerClass}>
                <div className={labelClass}>
                    {props.label}
                </div>
                <div className={fieldClass}>
                    {props.children}
                </div>
            </div>
        )
    }
    else {
        var fieldClass = ContainerClass;
        fieldClass += ' ' + ( props.customFieldClass ? 'py-form-field-data ' + props.customFieldClass : 'py-form-field-data');
        if (props.colspan) {
            fieldClass += ' ' + getColSpanClass(props.colspan);
        }
        return (
            <div className={fieldClass}>
                {props.children}
            </div>
        )
    }

}

export default FieldDecorator;