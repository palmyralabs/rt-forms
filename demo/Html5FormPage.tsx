
import { FieldGroup } from "../src/palmyra/form/FieldGroup";
import { Form, useHtmlFormManager } from "../src/palmyra/form/html5/Html5Form";
import { IHtmlFormManager } from "../src/palmyra/form/html5/types";


const Html5FormPage = () => {



    const formManager: IHtmlFormManager = useHtmlFormManager({
        formData: {
            firstName: "raja", lastName: 'sri', address: { 'pincode': 6273 }
        }, mode: "new"
    });

    const { register, getData } = formManager;

    const printData = () => {
        console.log(getData())
    }

    return <>
        <Form formManager={formManager} >
            <input type="text"
                {...register({ attribute: 'hello' })}
            /><br></br>

            <FieldGroup name='address'>
                <Address register={register} />
            </FieldGroup>

            <button type={"button"} onClick={printData}> submit </button>
        </Form>
    </>
}

const Address = (p: any) => {    
    return <>
        <input type="text"
            {...p.register({ attribute: 'pincode' }, 'address')}
        /><br></br>
    </>
}

export default Html5FormPage;