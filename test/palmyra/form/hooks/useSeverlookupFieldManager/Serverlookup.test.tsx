import { act, renderHook, waitFor } from "@testing-library/react";
import { useServerLookupFieldManager, PalmyraForm } from "../../../../../src/palmyra";
import { IServerLookupDefinition } from "../../../../../demo/palmyra/mui/form/types";
import { PalmyraStoreFactory } from "@palmyralabs/palmyra-wire";
import { afterAll, afterEach, beforeAll, describe, expect, test } from 'vitest';
import { mswServer } from "../mswHelper";


describe('useServerLookupFieldManager', () => {
    beforeAll(() => { mswServer.listen(); });
    afterEach(() => mswServer.resetHandlers())
    afterAll(() => mswServer.close())

    test('get data', async () => {
        const storeFactory = new PalmyraStoreFactory({ baseUrl: '/api/palmyra' });
        const wrapper = ({ children }) => {
            return <PalmyraForm formData={{ lookup: { id: 1, label: 'hello' } }} storeFactory={storeFactory}>{children} </PalmyraForm>
        }

        const options: IServerLookupDefinition = {
            queryOptions: { endPoint: '/masterdata' },
            attribute: 'lookup',
            lookupOptions: {
                idAttribute: 'id', labelAttribute: 'sdf'
            }
        }

        const { result } = renderHook(() => useServerLookupFieldManager('lookup', options), { wrapper });

        act(() => {
            result.current.refreshOptions();
        })

        await waitFor(async () => {
            expect(result.current.options).not.toBeNull();
        }, { timeout: 500 })

        console.log(result.current.options);
        console.log('value 1', result.current.getValue());

        act(() => {
            result.current.setValue(2);
        })

        console.log('value 2', result.current.getValue());

        console.log(result.current.isValid());

        // expect(result.current.options).toStrictEqual([{ id: 1, name: "Name" }]);
        // expect(result.current.isValid()).toBeTruthy();
        // expect(result.current.getValue()).toStrictEqual({ id: 1, name: "Name" });
    });

})