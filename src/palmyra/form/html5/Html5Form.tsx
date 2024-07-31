
import { IFieldGroupManager } from "../types";
import { FormManagerContext } from "../formBase";
import { useFormManager } from "../PalmyraForm";
import { IHtmlField, IHtmlFormManager, IHtmlFormOptions } from "./types";
import { registerField } from "../useFieldManager";
import { registerFieldGroupManager } from "../useFieldGroupManager";

interface IOptions {
    formManager: IHtmlFormManager,
    children?: any
}

const Form = (props: IOptions) => {
    const formManager = props.formManager;
    return (<>
        <FormManagerContext.Provider value={formManager}>
            {props.children}
        </FormManagerContext.Provider>
    </>);
};
export { Form }


const useHtmlFormManager = (props: IHtmlFormOptions): IHtmlFormManager => {
    const formManager = useFormManager(props);
    registerFieldGroupManager({ name: '_default' }, formManager);


    const register = (options: IHtmlField, fieldGroup?: string) => {
        const group = fieldGroup || '_default';
        var fieldGroupManager: IFieldGroupManager = formManager.getFieldGroupManager(group);        
        if (null == fieldGroupManager)
            fieldGroupManager = formManager.getFieldGroupManager('_default');

        if (null == fieldGroupManager) {
            return {
                name: options.attribute
            }
        }

        const { getValue, setValue }
            = registerField(fieldGroupManager, options);

        var result: any = {
            name: options.attribute,
            value: getValue(),
            onChange: (e: any) => {
                setValue(e.target.value)
            }
        };

        if (options.onBlur) result.onblur = options.onBlur;
        if (options.onFocus) result.onfocus = options.onFocus;

        if (options.disabled)
            result.disabled = true;

        if (options.readonly)
            result.readOnly = true;

        return result;
    }
    return { ...formManager, register };
}

export { useHtmlFormManager }