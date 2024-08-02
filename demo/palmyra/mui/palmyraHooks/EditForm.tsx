import { PalmyraStoreFactory } from "@palmyralabs/palmyra-wire";
import { usePalmyraEditForm } from "../../../../src/palmyra/form/usePalmyraEditForm";
import { PalmyraForm } from "../../../../src/palmyra";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import MuiTextField from "../form/MuiTextField";
import MuiSelect from "../form/MuiSelect";

const EditForm = () => {
    const storeFactory = new PalmyraStoreFactory({ baseUrl: '/testdata' })
    const [valid, setValid] = useState<any>(false);

    const { data, saveData, formRef } = usePalmyraEditForm({
        endPoint: "",
        storeFactory,
        id: 'testFormData.json'
    })

    useEffect(() => {
        if (formRef.current)
            formRef.current.setData(data);
    }, [data])


    return <>
        <h2>Edit</h2>
        <Button
            className='cancel-filled-button'
            onClick={() => window.history.back()}>
            Cancel</Button>
        <Button disabled={!valid}
            onClick={saveData}>Save</Button>

        <PalmyraForm formData={data} mode="edit" onValidChange={setValid} ref={formRef}>
            <MuiTextField attribute="text" title="Text Field" />
            <MuiSelect attribute="select" options={{ true: "True", false: "False" }} title="Select Field" />
        </PalmyraForm>

    </>
}

export default EditForm;