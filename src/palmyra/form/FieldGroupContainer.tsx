
import './FieldGroupContainer.css'

interface FormFieldContainerInput {
    columns?: 2 | 3 | 4 | number,
    children: any
}

const FieldGroupContainer = (props: FormFieldContainerInput) => {
    const containerClass = props.columns ?
        "py-field-group-container py-field-group-container-" + props.columns + "columns"
        : "py-field-group-container";

    return (<>
        <div className={containerClass}>
            {props.children}
        </div>
    </>)
}

export { FieldGroupContainer }