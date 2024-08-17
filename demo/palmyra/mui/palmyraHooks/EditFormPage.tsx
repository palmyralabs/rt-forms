import { PalmyraStoreFactory } from "@palmyralabs/palmyra-wire";
import { useRef, useState } from "react";
import { Button } from "@mui/material";
import MuiTextField from "../form/MuiTextField";
import MuiSelect from "../form/MuiSelect";
import MuiDatePicker from "../form/MuiDatePicker";
import MuiServerLookup from "../form/MuiServerLookup";
import { EditForm } from "../../../../src/palmyra/form/EditForm";
import { ISaveForm } from "../../../../src/palmyra";
import { FieldGroup } from "../../../../src/palmyra/form/FieldGroup";

const EditFormPage = () => {
    const storeFactory = new PalmyraStoreFactory({ baseUrl: '/testdata/' })
    const [valid, setValid] = useState<any>(false);

    const formRef = useRef<ISaveForm>();

    const logData = () => {
        console.log(formRef.current.saveData());
    }

    const preSave = (d) => {

    }
    if (formRef.current)
        console.log('re-rendering ', formRef.current.getData());

    return <>
        <h2>Edit</h2>
        <Button
            className='cancel-filled-button'
            onClick={() => window.history.back()}>
            Cancel</Button>
        <Button disabled={!valid}
            onClick={logData}>Save</Button>

        <EditForm onValidChange={setValid} storeFactory={storeFactory} endPoint={
            { get: 'testFormData.json', query: 'testFormData.json', put: 'testFormData.json' }
        } id="" key='sdf' ref={formRef}>
            <MuiTextField attribute="text" title="Text Field" required />

            <FieldGroup name="test">

                <MuiSelect attribute="select.gender"
                    options={{ m: "Male", f: "Female", t: "Transgender" }} title="Select Field" />
                <MuiDatePicker

                    attribute="date" title="Date Field" serverPattern="YYYY/DD/MM" displayPattern="DD-MMM-YYYY" />
                <MuiServerLookup attribute="serverLookup"
                    lookupOptions={{ idAttribute: 'id', labelAttribute: "name" }}
                    storeOptions={{ endPoint: '/lookupData.json', idAttribute: 'sid', labelAttribute: "location" }} />
            </FieldGroup>
        </EditForm>
    </>
}

export default EditFormPage;