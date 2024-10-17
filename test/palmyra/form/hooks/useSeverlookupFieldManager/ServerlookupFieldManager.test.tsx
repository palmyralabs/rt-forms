import { renderHook } from "@testing-library/react";
import { IFieldManager, useServerLookupFieldManager, PalmyraForm } from "../../../../../src/palmyra";
import { afterAll, afterEach, beforeAll, describe, expect, test } from "vitest";
import { IServerLookupDefinition } from "../../../../../demo/palmyra/mui/form/types";
import { PalmyraStoreFactory } from "@palmyralabs/palmyra-wire";
import { mswServer } from "../mswHelper";


describe('useServerLookupFieldManager', () => {
    beforeAll(() => { mswServer.listen(); });
    afterEach(() => mswServer.resetHandlers())
    afterAll(() => mswServer.close())    
    const storeFactory = new PalmyraStoreFactory({ baseUrl: '/api/palmyra' })

    test('get data', () => {
        const wrapper = ({ children }) => {
            return <PalmyraForm formData={{ lookup: 1 }} storeFactory={storeFactory}>{children} </PalmyraForm>
        }
        const options: IServerLookupDefinition = {
            queryOptions: { endPoint: '/masterdata' },
            attribute: 'lookup',
            lookupOptions: {
                idAttribute: 'id', labelAttribute: 'sdf'
            }
        }
        const { result } = renderHook(() => useServerLookupFieldManager('lookup', options), { wrapper })
        const fieldManager: IFieldManager = result.current;
        expect(result.current.getError().status).toBeFalsy();
        expect(result.current.getError().message).toBe('');
        expect(fieldManager.getValue()).toBe(1);
        expect(result.current.isValid()).toBeTruthy();
    });

    test('get data', () => {
        const wrapper = ({ children }) => {
            return <PalmyraForm formData={{ lookup: { id: 1 } }} storeFactory={storeFactory}>{children} </PalmyraForm>
        }

        const options: IServerLookupDefinition = {
            queryOptions: { endPoint: '/masterdata' },
            attribute: 'lookup',
            lookupOptions: {
                idAttribute: 'id', labelAttribute: 'sdf'
            }
        }
        const { result } = renderHook(() => useServerLookupFieldManager('lookup', options), { wrapper })
        const fieldManager: IFieldManager = result.current;

        expect(result.current.getError().status).toBeFalsy();
        expect(result.current.getError().message).toBe('');
        expect(fieldManager.getValue()).toEqual({ id: 1 });
        expect(result.current.isValid()).toBeTruthy();
    });

    test('get data', () => {
        const wrapper = ({ children }) => {
            return <PalmyraForm formData={{ lookup: { id: 1, name: 'Tenkasi' } }} storeFactory={storeFactory}>{children} </PalmyraForm>
        }

        const options: IServerLookupDefinition = {
            queryOptions: { endPoint: '/masterdata' },
            attribute: 'lookup.id',
            lookupOptions: { idAttribute: 'id', labelAttribute: 'name' }
        }
        const { result } = renderHook(() => useServerLookupFieldManager('lookup', options), { wrapper })
        const fieldManager: IFieldManager = result.current;

        expect(result.current.getError().status).toBeFalsy();
        expect(result.current.getError().message).toBe('');
        expect(fieldManager.getValue()).toEqual({ id: 1, name: "Tenkasi" });
        expect(result.current.isValid()).toBeTruthy();
    });



    // test('set data', () => {
    //     const wrapper = ({ children }) => {
    //         return <PalmyraForm formData={{ lookup: 1 }} storeFactory={storeFactory}>{children} </PalmyraForm>
    //     }

    //     const options: IServerLookupDefinition = {
    //         queryOptions: { endPoint: '/masterdata' },
    //         attribute: 'lookup',
    //     }
    //     const { result } = renderHook(() => useServerLookupFieldManager('lookup', options), { wrapper })
    //     const fieldManager: IFieldManager = result.current;
    //     console.log(fieldManager.getValue());

    //     expect(fieldManager.getValue()).toBe(1);

    //     act(() => {
    //         fieldManager.setValue(4);
    //     })

    //     expect(result.current.getError().status).toBeFalsy();
    //     expect(result.current.getError().message).toBe('');
    //     expect(fieldManager.getValue()).toBe(4);
    //     expect(result.current.isValid()).toBeTruthy();
    // });

    // test('set data', () => {
    //     const wrapper = ({ children }) => {
    //         return <PalmyraForm formData={{ lookup: '' }} storeFactory={storeFactory}>{children} </PalmyraForm>
    //     }

    //     const options: IServerLookupDefinition = {
    //         queryOptions: { endPoint: '/masterdata' },
    //         attribute: 'lookup',
    //     }
    //     const { result } = renderHook(() => useServerLookupFieldManager('lookup', options), { wrapper })
    //     const fieldManager: IFieldManager = result.current;
    //     console.log(fieldManager.getValue());
    //     expect(fieldManager.getValue()).toBe('');

    //     act(() => {
    //         fieldManager.setValue(4);
    //     })

    //     expect(result.current.getError().status).toBeFalsy();
    //     expect(result.current.getError().message).toBe('');
    //     expect(fieldManager.getValue()).toBe(4);
    //     expect(result.current.isValid()).toBeTruthy();
    // });

    test('default data', () => {
        const wrapper = ({ children }) => {
            return <PalmyraForm formData={{}} storeFactory={storeFactory}>{children} </PalmyraForm>
        }
        const options: IServerLookupDefinition = {
            queryOptions: { endPoint: '/masterdata' },
            attribute: 'lookup.id',
            defaultValue: 1,
            lookupOptions: { idAttribute: 'id', labelAttribute: 'name' }
        }
        const { result } = renderHook(() => useServerLookupFieldManager('lookup', options), { wrapper })
        const fieldManager: IFieldManager = result.current;

        expect(result.current.getError().status).toBeFalsy();
        expect(result.current.getError().message).toBe('');
        expect(fieldManager.getValue()).toEqual(1);
        expect(result.current.isValid()).toBeTruthy();
    });
    
})