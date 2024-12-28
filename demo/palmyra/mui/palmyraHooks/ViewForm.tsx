import { PalmyraStoreFactory } from "@palmyralabs/palmyra-wire";
import { usePalmyraViewForm } from "../../../../src/palmyra/form/useHelpers/usePalmyraViewForm";
import { FieldGroupContainer, PalmyraForm } from "../../../../src/palmyra";
import MuiTextField from "../form/MuiTextField";
import MuiSelect from "../form/MuiSelect";
import { FormGroup } from "../../../../src/palmyra/form/FormGroup";

const ViewForm = () => {
    const storeFactory = new PalmyraStoreFactory({ baseUrl: '/testdata' })

    const { getData } = usePalmyraViewForm({
        endPoint: "/testFormData.json",
        storeFactory,
        id: ''
    })

    return <>
        <h2>View</h2>
        <PalmyraForm formData={getData()} onValidChange={() => { }}>
            <FieldGroupContainer columns={1}>
                <FormGroup title="section 1">
                    <MuiTextField attribute="text" />
                    <MuiTextField attribute="text" />
                    <MuiTextField attribute="text" />
                    <MuiTextField attribute="text" />
                </FormGroup>

                <FormGroup title="section 2">
                    <FieldGroupContainer columns={2}>
                        <MuiSelect attribute="select" options={{ true: "True", false: "False" }} />
                        <MuiSelect attribute="select" options={{ true: "True", false: "False" }} />
                        <MuiSelect attribute="select" options={{ true: "True", false: "False" }} />
                        <MuiSelect attribute="select" options={{ true: "True", false: "False" }} />
                        <MuiSelect attribute="select" options={{ true: "True", false: "False" }} />
                        <MuiSelect attribute="select" options={{ true: "True", false: "False" }} />
                        <MuiSelect attribute="select" options={{ true: "True", false: "False" }} />
                        <MuiSelect attribute="select" options={{ true: "True", false: "False" }} />
                    </FieldGroupContainer>
                </FormGroup>
                {/* <FormGroup title="section 3">
                    <MuiSelect attribute="select" options={{ true: "True", false: "False" }} />
                    <MuiSelect attribute="select" options={{ true: "True", false: "False" }} />
                    <MuiSelect attribute="select" options={{ true: "True", false: "False" }} />
                    <MuiSelect attribute="select" options={{ true: "True", false: "False" }} />
                </FormGroup>
                <FormGroup title="section 4">
                    <MuiSelect attribute="select" options={{ true: "True", false: "False" }} />
                    <MuiSelect attribute="select" options={{ true: "True", false: "False" }} />
                    <MuiSelect attribute="select" options={{ true: "True", false: "False" }} />
                    <MuiSelect attribute="select" options={{ true: "True", false: "False" }} />
                </FormGroup>
                <FormGroup title="section 5">
                    <MuiSelect attribute="select" options={{ true: "True", false: "False" }} />
                    <MuiSelect attribute="select" options={{ true: "True", false: "False" }} />
                    <MuiSelect attribute="select" options={{ true: "True", false: "False" }} />
                    <MuiSelect attribute="select" options={{ true: "True", false: "False" }} />
                </FormGroup> */}
                <MuiSelect attribute="select" options={{ true: "True", false: "False" }}
                    colspan={2} />
            </FieldGroupContainer>
        </PalmyraForm>

    </>
}

export default ViewForm;