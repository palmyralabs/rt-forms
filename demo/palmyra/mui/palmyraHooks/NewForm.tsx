import { PalmyraStoreFactory } from "@palmyralabs/palmyra-wire";
import { usePalmyraNewForm } from "../../../../src/palmyra/form/useHelpers/usePalmyraNewForm";
import { PalmyraForm } from "../../../../src/palmyra";
import { useState } from "react";
import { Button } from "@mui/material";
import MuiTextField from "../form/MuiTextField";
import MuiSelect from "../form/MuiSelect";

const NewForm = () => {
    const storeFactory = new PalmyraStoreFactory({ baseUrl: '/testdata' })
    const [valid, setValid] = useState<any>();

    const { getData, saveData, formRef } = usePalmyraNewForm({
        endPoint: "/testFormData.json",
        storeFactory
    })
    
    return <>
        <h2>New</h2>
        <Button
            className='cancel-filled-button'
            onClick={() => window.history.back()}>
            Cancel</Button>
        <Button disabled={!valid}
            onClick={saveData}>Save</Button>

        <PalmyraForm formData={getData()} mode="new" onValidChange={setValid} ref={formRef}>
            <MuiTextField attribute="text" label="Text Field" />
            <MuiSelect attribute="select" options={{ true: "True", false: "False" }} label="Select Field" />
        </PalmyraForm>

    </>
}

export default NewForm;