
import { describe, test } from "vitest";

/**
No Data
	formData {}
	no defaultValue set	
	
	fireEvent - setValue - 'value'
	expect - fieldValue toBe 'value'
	expect - formData toBe {<attribute>:'value'}
	
	fireEvent - setValue - ''
	expect - fieldValue toBe ''
	expect - formData toBe {<attribute>:''}
	

formData provided
	formData - {<attribute>:'value'}
	no defaultValue set
	
	fireEvent - setValue - ''
	expect - fieldValue toBe ''
	expect - formData toBe {<attribute>:''}
	
	fireEvent - setValue - 'value'
	expect - fieldValue toBe 'value'
	expect - formData toBe {<attribute>:'value'}
	
no formData, defaultValue set
	formData - {}
	defaultValue - 'defValue'
		
	fireEvent - setValue - ''
	expect - fieldValue toBe ''
	expect - formData toBe {<attribute>:''}
	
	fireEvent - setValue - 'value'
	expect - fieldValue toBe 'value'
	expect - formData toBe {<attribute>:'value'}
	
formData provided, defaultValue set
	formData - {<attribute>:'value'}
	defaultValue - 'defValue'		
	
	fireEvent - setValue - ''
	expect - fieldValue toBe ''
	expect - formData toBe {<attribute>:''}
	
	fireEvent - setValue - 'value'
	expect - fieldValue toBe 'value'
	expect - formData toBe {<attribute>:'value'}

 */

describe('PalmyraForm/useFieldManager- onValueChange', () => {

    test("no defaultValue", () => {
       
    });

})