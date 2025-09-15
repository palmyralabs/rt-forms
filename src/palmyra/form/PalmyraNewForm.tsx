
import { INewFormOptions, ISaveForm } from "./types";
import { PalmyraForm } from "./PalmyraForm";
import { forwardRef, MutableRefObject, useImperativeHandle, useRef } from "react";
import { getSaveFormHandle } from "./formUtil";
import { usePalmyraNewForm } from "./useHelpers";

const PalmyraNewForm = forwardRef(function EditForm(props: INewFormOptions, ref: MutableRefObject<ISaveForm>) {
    const storeFactory = props.storeFactory;

    const { saveData, formRef } = usePalmyraNewForm(props)
    const currentRef = ref || useRef<ISaveForm>(null);

    useImperativeHandle(currentRef, () => getSaveFormHandle(saveData, formRef))

    return (<PalmyraForm onValidChange={props.onValidChange}
        formData={props.initialData} ref={formRef} storeFactory={storeFactory}>
        {props.children}
    </PalmyraForm>
    );
});

export { PalmyraNewForm };