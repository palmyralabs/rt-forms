
import { IEditFormOptions, ISaveForm } from "./types";
import { usePalmyraEditForm } from "./useHelpers";
import { PalmyraForm } from "./PalmyraForm";
import { forwardRef, MutableRefObject, useEffect, useImperativeHandle, useRef } from "react";
import { getSaveFormHandle } from "./formUtil";

const PalmyraEditForm = forwardRef(function EditForm(props: IEditFormOptions, ref: MutableRefObject<ISaveForm>) {
    const storeFactory = props.storeFactory;

    const { fetchData, saveData, formRef, refresh } = usePalmyraEditForm(props)

    const currentRef = ref || useRef<ISaveForm>();

    useEffect(() => {
        fetchData();
        if (formRef.current.isValid()) {
            if (props.onValidChange)
                props.onValidChange(true);
        }
        refresh()
    }, [formRef, props.id])

    useImperativeHandle(currentRef, () => getSaveFormHandle(saveData, formRef))

    return (<PalmyraForm onValidChange={props.onValidChange} ref={formRef} storeFactory={storeFactory} >
        {props.children}
    </PalmyraForm>
    );
});

export { PalmyraEditForm };