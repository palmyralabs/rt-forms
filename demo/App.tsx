
import { useRef } from "react";
import { ISaveForm, IViewForm } from "../src/palmyra";
import PalmyraFormPage from "./PalmyraFormPage";
import EditForm from "./palmyra/mui/palmyraHooks/EditFormPage";
import NewForm from "./palmyra/mui/palmyraHooks/NewForm";
import ViewForm from "./palmyra/mui/palmyraHooks/ViewForm";
import TreeMenu from "./palmyra/menu/TreeMenu";
import ApiAccessMgmt from "./palmyra/apiControl/ApiAccessMgmt";


const App = () => {

    const formRef = useRef<ISaveForm>();
    return <>
        <EditForm />
        <TreeMenu />
        <ApiAccessMgmt/>
        {/* <NewForm /> */}
        {/* <ViewForm formRef={formRef} /> */}
    </>
}

export default App;