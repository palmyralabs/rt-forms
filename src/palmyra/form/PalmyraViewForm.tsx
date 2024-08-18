
import { IViewFormOptions } from "./types";
import { usePalmyraViewForm } from "./useHelpers";
import { PalmyraForm } from "./PalmyraForm";

const PalmyraViewForm = (props: IViewFormOptions) => {
    const storeFactory = props.storeFactory;

    const { formRef } = usePalmyraViewForm(props)

    return (<PalmyraForm ref={formRef} storeFactory={storeFactory}>
        {props.children}
    </PalmyraForm>
    );
}

export { PalmyraViewForm };