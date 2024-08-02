import { useEffect, useRef } from "react";
import { IForm, ITextField, PalmyraForm, SimpleTextField } from "../src/palmyra"
import { FieldGroup } from "../src/palmyra/form/FieldGroup";
import MuiTextField from "./palmyra/mui/form/MuiTextField";
import MuiSelect from "./palmyra/mui/form/MuiSelect";
import { MenuItem } from "@mui/material";


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
                firstName: "k.raja", lastName: 'k', address: { 'pincode': '627806', mode: 20 }
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
            firstName: "raja", lastName: 'sri', address: { 'pincode': 6273, mode: 10 }
        }} mode="new" ref={formRef}>

            <MuiSelect attribute="address.mode" label="mode"
                options={{ 10: "Ten", 20: "Twenty" }}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </MuiSelect>

            <MuiTextField attribute="address.pincode" label="PinCode" length={{ eq: 6 }} />

            <MuiTextField variant="standard" attribute="firstName" ref={fieldRef}
                label="First Name" length={{ eq: 6 }}></MuiTextField>

            <MuiTextField variant="standard" attribute="lastName" ref={fieldRef}
                label="Last Name" length={{ eq: 3 }}></MuiTextField>

            {/* <FieldGroup name='group'>
                <SimpleTextField attribute="lastName" label="Last Name" length={{ eq: 6 }} />
            </FieldGroup> */}
            <br />
            <br />
            <button type={"button"} onClick={printData}> submit </button>
        </PalmyraForm>

        <button type={"button"} onClick={toggleDisabled}> toggleDisabled </button>

        <button type={"button"} onClick={toggleReadOnly}> toggleReadOnly </button>

    </>
}

export default PalmyraFormPage;