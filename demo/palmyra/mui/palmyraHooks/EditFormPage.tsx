import { useRef, useState } from "react";
import { Button } from "@mui/material";
import MuiTextField from "../form/MuiTextField";
import MuiSelect from "../form/MuiSelect";
import MuiDatePicker from "../form/MuiDatePicker";
import MuiServerLookup from "../form/MuiServerLookup";
import { PalmyraEditForm } from "../../../../src/palmyra/form/PalmyraEditForm";
import { ISaveForm } from "../../../../src/palmyra";
import { FieldGroupContainer } from "../../../../src/palmyra";
import { useDemoConfig } from "../../../config/DemoConfigContext";

const EditFormPage = () => {
    const { config } = useDemoConfig();
    const [valid, setValid] = useState<any>(false);
    const formRef = useRef<ISaveForm>(null);

    const save = () => {
        if (formRef.current)
            formRef.current.saveData();
    };

    return (
        <div className="demo-panel">
            <h2>Edit Form</h2>
            <p className="demo-panel-desc">
                Loads and updates a record via <code>PalmyraEditForm</code>. The lookup field
                reads from <code>{config.baseUrl}{config.lookupEndpoint}</code>.
            </p>

            <PalmyraEditForm
                onValidChange={setValid}
                endPoint={{ get: config.formEndpoint, query: config.formEndpoint, put: config.formEndpoint }}
                id=""
                ref={formRef}>
                <FieldGroupContainer columns={2}>
                    <MuiTextField attribute="text" title="Text Field" required />
                    <MuiSelect
                        attribute="select.gender"
                        title="Select Field"
                        options={{ m: "Male", f: "Female", t: "Transgender" }}
                    />
                    <MuiDatePicker
                        attribute="date"
                        title="Date Field"
                        serverPattern="YYYY/DD/MM"
                        displayPattern="DD-MMM-YYYY"
                    />
                    <MuiServerLookup
                        attribute="serverLookup"
                        title="Server Lookup"
                        lookupOptions={{
                            idAttribute: "id",
                            labelAttribute: "name"
                        }}
                        queryOptions={{
                            endPoint: config.lookupEndpoint,
                            idAttribute: config.lookupIdAttribute,
                            labelAttribute: config.lookupLabelAttribute
                        }}
                    />
                </FieldGroupContainer>
            </PalmyraEditForm>

            <div className="demo-form-actions">
                <Button variant="outlined" onClick={() => window.history.back()}>Cancel</Button>
                <Button variant="contained" disabled={!valid} onClick={save}>Save</Button>
            </div>
        </div>
    );
};

export default EditFormPage;
