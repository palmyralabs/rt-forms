import { useRef } from "react";
import { IForm, PalmyraForm, SimpleTextField } from "../src/palmyra"
import { FieldGroup } from "../src/palmyra/form/FieldGroup";


const PalmyraFormPage = () => {

    const formRef = useRef<IForm>();

    const printData = () => {
        console.log(formRef.current.getData())
    }

    return <>
        <PalmyraForm formData={{
            firstName: "raja", lastName: 'sri', address: { 'pincode': 6273 }
        }} mode="new" ref={formRef}>

            <SimpleTextField attribute="firstName" name="First Name" label="First Name" />

            <SimpleTextField attribute="address.pincode" name="PinCode" label="First Name" />

            <FieldGroup name='group'>
                <SimpleTextField attribute="lastName" name="First Name" label="First Name" />
            </FieldGroup>

            <button type={"button"} onClick={printData}> submit </button>
        </PalmyraForm>
    </>
}

export default PalmyraFormPage;