
type IFieldDecoratorInput = {
    label?: any,
    children: any,
    colspan?: number,
    customContainerClass?: string,
    customFieldClass?: string,
    customLabelClass?: string,
    index?: number
}

const ContainerClass = 'palmyra-form-field-container';

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
        const labelClass = props.customLabelClass ? 'palmyra-form-field-label ' + props.customLabelClass : 'palmyra-form-field-label'
        const fieldClass = props.customFieldClass ? 'palmyra-form-field-data ' + props.customFieldClass : 'palmyra-form-field-data'
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
        fieldClass += ' ' + ( props.customFieldClass ? 'palmyra-form-field-data ' + props.customFieldClass : 'palmyra-form-field-data');
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