
import { IViewFormOptions } from "./types";
import { usePalmyraViewForm } from "./useHelpers";
import { PalmyraForm } from "./PalmyraForm";
import { useEffect } from "react";

const PalmyraViewForm = (props: IViewFormOptions) => {
    const storeFactory = props.storeFactory;

    const { formRef, refresh } = usePalmyraViewForm(props)

    useEffect(() => {
        refresh()
    }, [props.endPoint])

    return (<PalmyraForm ref={formRef} storeFactory={storeFactory}>
        {props.children}
    </PalmyraForm>
    );
}

export { PalmyraViewForm };