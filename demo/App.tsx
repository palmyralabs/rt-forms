
import { useRef } from "react";
import { ISaveForm, IViewForm } from "../src/palmyra";
import PalmyraFormPage from "./PalmyraFormPage";
import EditForm from "./palmyra/mui/palmyraHooks/EditFormPage";
import NewForm from "./palmyra/mui/palmyraHooks/NewForm";
import ViewForm from "./palmyra/mui/palmyraHooks/ViewForm";
import TreeMenu from "./palmyra/menu/TreeMenu";
import ApiAccessMgmt from "./palmyra/apiControl/ApiAccessMgmt";
import SideMenu from './palmyra/menu/SideMenu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {

    const formRef = useRef<ISaveForm>();
    return <>
        {/* <EditForm /> */}
        {/* <TreeMenu /> */}
        {/* <SideMenu /> */}
        {/* <ApiAccessMgmt/> */}
        {/* <NewForm /> */}
        {/* <ViewForm formRef={formRef} /> */}
        <Router>
            <Routes>
                {/* <Route path="/" element={<TreeMenu />} /> */}
                <Route path="/" element={<SideMenu />} />
            </Routes>
        </Router>
    </>
}

export default App;