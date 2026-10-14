import { usePalmyraViewForm } from "../../../../src/palmyra/form/useHelpers/usePalmyraViewForm";
import { FieldGroupContainer, PalmyraForm } from "../../../../src/palmyra";
import MuiTextField from "../form/MuiTextField";
import MuiSelect from "../form/MuiSelect";
import { FormGroup } from "../../../../src/palmyra/form/FormGroup";
import { useDemoConfig } from "../../../config/DemoConfigContext";
import { IoMdFastforward } from "react-icons/io";

const ViewForm = () => {
    const { config } = useDemoConfig();

    const { getData } = usePalmyraViewForm({
        endPoint: { get: config.formEndpoint },
        id: ""
    });

    return (
        <div className="demo-panel">
            <h2>View Form</h2>
            <p className="demo-panel-desc">
                Read-only layout via <code>usePalmyraViewForm</code> fetching from
                {" "}<code>{config.baseUrl}{config.formEndpoint}</code>.
            </p>

            <PalmyraForm formData={getData()} onValidChange={() => { }}>
                <FieldGroupContainer columns={1}>
                    <FormGroup title="Primary Details" description="asdsd" 
                   borderless titleIcon={<IoMdFastforward />}
                    >
                        <FieldGroupContainer columns={2}>
                            <MuiTextField attribute="text" label="Text" readOnly />
                            <MuiTextField attribute="number" label="Number" readOnly />
                            <MuiTextField attribute="email" label="Email" readOnly />
                            <MuiTextField attribute="date" label="Date" readOnly />
                        </FieldGroupContainer>
                    </FormGroup>

                    <FormGroup title="Classification">
                        <FieldGroupContainer columns={2}>
                            <MuiSelect
                                attribute="select.gender"
                                label="Gender"
                                options={{ m: "Male", f: "Female", t: "Transgender" }}
                            />
                            <MuiSelect
                                attribute="selects"
                                label="Flag"
                                options={{ 0: "No", 1: "Yes" }}
                            />
                        </FieldGroupContainer>
                    </FormGroup>
                </FieldGroupContainer>
            </PalmyraForm>
        </div>
    );
};

export default ViewForm;
