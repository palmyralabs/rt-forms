import { useRef } from "react";
import { IForm, PalmyraForm, SimpleTextField } from "../src/palmyra"
import { FieldManager } from "../src/palmyra/form/FieldManager";


const App = () => {

    const formRef = useRef<IForm>();

    const printData = () => {
        console.log(formRef.current.getData())
    }

    return <>
        <PalmyraForm formData={{ firstName: "raja", lastName: 'sri' }} mode="new" ref={formRef}>


            <SimpleTextField attribute="firstName" name="First Name" label="First Name" />
            <FieldManager name='group'>
                <SimpleTextField attribute="lastName" name="First Name" label="First Name" />
            </FieldManager>
            <button type={"button"} onClick={printData}> submit </button>
        </PalmyraForm>
    </>
}

export default App;