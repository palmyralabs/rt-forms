
import { describe, test } from "vitest";

/**

No Data
	formData {}
	no defaultValue set
	required - set to true
	
	fireEvent - setValue - 'value'
	expect - fieldValue toBe 'value'
	expect - formData toBe {<attribute>:'value'}
	expect - field, form - isValid Truthy
	
	fireEvent - setValue - ''
	expect - fieldValue toBe ''
	expect - formData toBe {<attribute>:''}
	expect - field, form - isValid Falsy
	

formData provided
	formData - {<attribute>:'value'}
	no defaultValue set
	required - set to true
	
	fireEvent - setValue - ''
	expect - fieldValue toBe ''
	expect - formData toBe {<attribute>:''}
	expect - field, form - isValid Falsy
	
	fireEvent - setValue - 'value'
	expect - fieldValue toBe 'value'
	expect - formData toBe {<attribute>:'value'}
	expect - field, form - isValid Truthy
	
no formData, defaultValue set
	formData - {}
	defaultValue - 'defValue'
	required - set to true
		
	fireEvent - setValue - ''
	expect - fieldValue toBe ''
	expect - formData toBe {<attribute>:''}
	expect - field, form - isValid Falsy
	
	fireEvent - setValue - 'value'
	expect - fieldValue toBe 'value'
	expect - formData toBe {<attribute>:'value'}
	expect - field, form - isValid Truthy
	
formData provided, defaultValue set
	formData - {<attribute>:'value'}
	defaultValue - 'defValue'
	required - set to true		
	
	fireEvent - setValue - ''
	expect - fieldValue toBe ''
	expect - formData toBe {<attribute>:''}
	expect - field, form - isValid Falsy
	
	fireEvent - setValue - 'value'
	expect - fieldValue toBe 'value'
	expect - formData toBe {<attribute>:'value'}
	expect - field, form - isValid Truthy
 */

describe('PalmyraForm/useFieldManager- onValueChange / Required', () => {

	test("no defaultValue", () => {

	});

})