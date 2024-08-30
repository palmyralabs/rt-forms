
type IFieldDecoratorInput = {
    label?: any;
    children: any;
    colspan?: number;
    customContainerClass?: string;
    customFieldClass?: string;
    customLabelClass?: string;
    index?: number;
};
declare const FieldDecorator: (props: IFieldDecoratorInput) => import("react/jsx-runtime").JSX.Element;
export default FieldDecorator;
