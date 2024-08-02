
import PalmyraFormPage from "./PalmyraFormPage";
import EditForm from "./palmyra/mui/palmyraHooks/EditForm";
import NewForm from "./palmyra/mui/palmyraHooks/NewForm";
import ViewForm from "./palmyra/mui/palmyraHooks/ViewForm";


const App = () => {


    return <>
        <PalmyraFormPage></PalmyraFormPage>
        <NewForm />
        <EditForm />
        <ViewForm />
        
    </>
}

export default App;