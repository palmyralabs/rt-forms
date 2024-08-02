import { PalmyraStoreFactory } from "@palmyralabs/palmyra-wire";
import { usePalmyraViewForm } from "../../../../src/palmyra/form/usePalmyraViewForm";
import { PalmyraForm } from "../../../../src/palmyra";
import MuiTextField from "../form/MuiTextField";
import MuiSelect from "../form/MuiSelect";

const ViewForm = () => {
    const storeFactory = new PalmyraStoreFactory({ baseUrl: '/testdata' })

    const { data } = usePalmyraViewForm({
        endPoint: "/testFormData.json",
        storeFactory,
        id: ''
    })

    return <>
        <h2>View</h2>
        <PalmyraForm formData={data} mode="view" onValidChange={() => { }}>
            <MuiTextField attribute="text" />
            <MuiSelect attribute="select" options={{ true: "True", false: "False" }} />
        </PalmyraForm>

    </>
}

export default ViewForm;