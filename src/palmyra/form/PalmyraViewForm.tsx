
import { MutableRefObject, forwardRef, useImperativeHandle, useRef } from "react";
import { getSaveFormHandle } from "./formUtil";
import { PalmyraForm } from "./PalmyraForm";
import { IViewForm, IViewFormOptions } from "./types";
import { usePalmyraViewForm } from "./useHelpers";

const PalmyraViewForm = forwardRef(function EditForm(props: IViewFormOptions, ref: MutableRefObject<IViewForm>) {
    const storeFactory = props.storeFactory;

    const { formRef, refresh } = usePalmyraViewForm(props)
    const currentRef = ref || useRef<IViewForm>(null);

    // useEffect(() => {
    //     refresh()
    // }, [props.endPoint])

    useImperativeHandle(currentRef, () => getSaveFormHandle({}, formRef, refresh))

    return (<PalmyraForm ref={formRef} storeFactory={storeFactory}>
        {props.children}
    </PalmyraForm>
    );
})

export { PalmyraViewForm };