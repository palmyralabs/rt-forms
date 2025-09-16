
import { IEditFormOptions, ISaveForm } from "./types";
import { usePalmyraEditForm } from "./useHelpers";
import { PalmyraForm } from "./PalmyraForm";
import { forwardRef, RefObject, useEffect, useImperativeHandle, useRef } from "react";
import { getSaveFormHandle } from "./formUtil";

const PalmyraEditForm = forwardRef(function EditForm(props: IEditFormOptions, ref: RefObject<ISaveForm>) {
    const storeFactory = props.storeFactory;

    const { fetchData, saveData, formRef, refresh } = usePalmyraEditForm(props)

    const currentRef = ref || useRef<ISaveForm>(null);

    useEffect(() => {
        fetchData();
        if (formRef.current.isValid()) {
            if (props.onValidChange)
                props.onValidChange(true);
        }
    }, [formRef, props.id])

    useImperativeHandle(currentRef, () => getSaveFormHandle(saveData, formRef, refresh))

    return (<PalmyraForm onValidChange={props.onValidChange} ref={formRef} storeFactory={storeFactory} >
        {props.children}
    </PalmyraForm>
    );
});

export { PalmyraEditForm };