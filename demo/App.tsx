
import { useRef } from "react";
import { CardLayout, ISaveForm, IViewForm } from "../src/palmyra";
import PalmyraFormPage from "./PalmyraFormPage";
import EditForm from "./palmyra/mui/palmyraHooks/EditFormPage";
import NewForm from "./palmyra/mui/palmyraHooks/NewForm";
import ViewForm from "./palmyra/mui/palmyraHooks/ViewForm";
import TreeMenu from "./palmyra/menu/TreeMenu";
import ApiAccessMgmt from "./palmyra/apiControl/ApiAccessMgmt";
import SideMenu from './palmyra/menu/SideMenu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DashboardSlide } from "./palmyra/card/DashboardSlide";

const slideData = [
    { label: 'Supreme Court', amount: 150 },
    { label: 'High Court-A', amount: 200 },
    { label: 'High Court-B', amount: 500 },
    { label: 'Other Court', amount: 350 },
    { label: 'Other Court', amount: 350 },
    { label: 'Other Court', amount: 350 },
    { label: 'Other Court', amount: 350 }
];
const App = () => {

    const formRef = useRef<ISaveForm>();
    return <>
        {/* <EditForm /> */}
        {/* <TreeMenu /> */}
        {/* <SideMenu /> */}
        {/* <ApiAccessMgmt/> */}
        {/* <NewForm /> */}
        {/* <ViewForm /> */}
        {/* <Router>
            <Routes>
                <Route path="/" element={<SideMenu />} />
            </Routes>
        </Router> */}

        <CardLayout title="Last Six Months" Child={DashboardSlide} dataList={slideData}
            childKeyProvider={() => ''} childProps={{ className: 'land-data-slide' }} />
    </>
}

export default App;