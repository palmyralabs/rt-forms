import { usePalmyraNewForm } from "../../../../src/palmyra/form/useHelpers/usePalmyraNewForm";
import { PalmyraForm } from "../../../../src/palmyra";
import { useState } from "react";
import { Button } from "@mui/material";
import MuiTextField from "../form/MuiTextField";
import MuiSelect from "../form/MuiSelect";
import { useDemoConfig } from "../../../config/DemoConfigContext";

const NewForm = () => {
    const { config } = useDemoConfig();
    const [valid, setValid] = useState<any>();

    const { getData, saveData, formRef } = usePalmyraNewForm({
        endPoint: config.formEndpoint
    });

    return (
        <div className="demo-panel">
            <h2>New Form</h2>
            <p className="demo-panel-desc">
                Creates a record via <code>usePalmyraNewForm</code> posting to
                {" "}<code>{config.baseUrl}{config.formEndpoint}</code>.
            </p>

            <PalmyraForm formData={getData()} onValidChange={setValid} ref={formRef}>
                <div className="demo-form-grid">
                    <MuiTextField attribute="text" label="Text Field" />
                    <MuiSelect
                        attribute="select"
                        label="Select Field"
                        options={{ true: "True", false: "False" }}
                    />
                </div>
            </PalmyraForm>

            <div className="demo-form-actions">
                <Button variant="outlined" onClick={() => window.history.back()}>Cancel</Button>
                <Button variant="contained" disabled={!valid} onClick={() => saveData()}>Save</Button>
            </div>
        </div>
    );
};

export default NewForm;
