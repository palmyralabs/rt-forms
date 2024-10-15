import { describe, test } from "vitest";

/**
No Data
    formData {}
    no defaultValue set
    required - set to true
	
    expect - fieldValue toBe ''
    expect - formData toBe {<attribute>:''}
    expect - field, form - isValid Falsy

formData provided
    formData - {<attribute>:'value'}
    no defaultValue set
    required - set to true
	
    expect - fieldValue toBe 'value'
    expect - formData toBe {<attribute>:'value'}
    expect - field, form - isValid truthy
	
no formData, defaultValue set
    formData - {}
    defaultValue - 'defValue'
    required - set to true
	
    expect - fieldValue toBe 'defValue'
    expect - formData toBe {<attribute>:'defValue'}
    expect - field, form - isValid Falsy
	
formData provided, defaultValue set
    formData - {<attribute>:'value'}
    defaultValue - 'defValue'
    required - set to true
	
    expect - fieldValue toBe 'value'
    expect - formData toBe {<attribute>:'value'}
    expect - field, form - isValid Falsy
 */



describe('PalmyraForm/useFieldManager- Form Initialization - required', () => {

    test("no defaultValue", () => {

    });

});