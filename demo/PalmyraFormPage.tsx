import { useEffect, useRef } from "react";
import { IForm, ITextField, PalmyraForm, SimpleTextField } from "../src/palmyra"
import { FieldGroup } from "../src/palmyra/form/FieldGroup";
import MuiTextField from "./palmyra/mui/form/MuiTextField";


const PalmyraFormPage = () => {

    const formRef = useRef<IForm>();

    const fieldRef = useRef<ITextField>();

    const ro = useRef<boolean>(false);
    const dis = useRef<boolean>(false);

    const printData = () => {
        console.log(formRef.current.getData())
    }

    useEffect(() => {
        setTimeout(() => {
            formRef.current.setData({
                firstName: "raja", lastName: 'k', address: { 'pincode': 627806 }
            })
        }, 2000)
    }, [formRef.current])


    const toggleReadOnly = () => {
        ro.current = !ro.current;
        fieldRef.current.setReadOnly(ro.current);
    }

    const toggleDisabled = () => {
        dis.current = !dis.current;
        fieldRef.current.setDisabled(dis.current);
    }

    return <>
        <PalmyraForm formData={{
            firstName: "raja", lastName: 'sri', address: { 'pincode': 6273 }
        }} mode="new" ref={formRef}>

            <MuiTextField attribute="address.pincode" label="PinCode" length={{ eq: 6 }} />

            <MuiTextField variant="standard" attribute="firstName" ref={fieldRef}
                label="First Name" length={{ eq: 6 }}></MuiTextField>

            <FieldGroup name='group'>
                <SimpleTextField attribute="lastName" label="Last Name" length={{ eq: 6 }}/>
            </FieldGroup>
            <br />
            <br />
            <button type={"button"} onClick={printData}> submit </button>
        </PalmyraForm>

        <button type={"button"} onClick={toggleDisabled}> toggleDisabled </button>

        <button type={"button"} onClick={toggleReadOnly}> toggleReadOnly </button>

    </>
}

export default PalmyraFormPage;