import { PalmyraStoreFactory } from "@palmyralabs/palmyra-wire";
import { usePalmyraEditForm } from "../../../../src/palmyra/form/usePalmyraEditForm";
import { PalmyraForm } from "../../../../src/palmyra";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import MuiTextField from "../form/MuiTextField";
import MuiSelect from "../form/MuiSelect";
import MuiDatePicker from "../form/MuiDatePicker";
import MuiServerLookup from "../form/MuiServerLookup";

const EditForm = () => {
    const storeFactory = new PalmyraStoreFactory({ baseUrl: '/testdata' })
    const [valid, setValid] = useState<any>(false);

    const { saveData, formRef } = usePalmyraEditForm({
        endPoint: "",
        storeFactory,
        id: 'testFormData.json'
    })

    const logData = () => {
        console.log(formRef.current.getData());
    }

    return <>
        <h2>Edit</h2>
        <Button
            className='cancel-filled-button'
            onClick={() => window.history.back()}>
            Cancel</Button>
        <Button // disabled={!valid}
            onClick={logData}>Save</Button>

        <PalmyraForm formData={{}} mode="edit" onValidChange={setValid} ref={formRef} storeFactory={storeFactory}>
            <MuiTextField attribute="text" title="Text Field" required readOnly />
            <MuiSelect attribute="select" options={{ true: "True", false: "False" }} title="Select Field" readOnly />
            <MuiDatePicker
            
            attribute="date" title="Date Field" serverPattern="YYYY/DD/MM" displayPattern="DD-MMM-YYYY" required />
            <MuiServerLookup attribute="serverLookup" store={storeFactory.getLookupStore({}, '/lookupData.json', 'id')}
                lookupOptions={{ idAttribute: 'id', displayAttribute: "name" }}
                storeOptions={{ endPoint: '/lookupData.json' }} required />
        </PalmyraForm>
    </>
}

export default EditForm;