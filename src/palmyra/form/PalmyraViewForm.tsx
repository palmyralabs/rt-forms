
import { IViewForm, IViewFormOptions } from "./types";
import { usePalmyraViewForm } from "./useHelpers";
import { PalmyraForm } from "./PalmyraForm";
import { MutableRefObject, forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { getSaveFormHandle } from "./formUtil";

const PalmyraViewForm = forwardRef(function EditForm(props: IViewFormOptions, ref: MutableRefObject<IViewForm>) {
    const storeFactory = props.storeFactory;

    const { formRef, refresh } = usePalmyraViewForm(props)
    const currentRef = ref || useRef<IViewForm>();

    useEffect(() => {
        refresh()
    }, [props.endPoint])

    useImperativeHandle(currentRef, () => getSaveFormHandle(refresh, formRef))

    return (<PalmyraForm ref={formRef} storeFactory={storeFactory}>
        {props.children}
    </PalmyraForm>
    );
})

export { PalmyraViewForm };