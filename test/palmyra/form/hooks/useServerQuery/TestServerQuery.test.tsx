import { act, renderHook, waitFor } from "@testing-library/react";
import { IServerQueryInput, useServerQuery } from "../../../../../src/palmyra";
import { PalmyraStoreFactory } from "@palmyralabs/palmyra-wire";
import { afterAll, afterEach, beforeAll, describe, test, expect } from 'vitest';
import { mswServer } from "../mswHelper";


describe('useServerQuery', () => {
    beforeAll(() => { mswServer.listen(); });
    afterEach(() => mswServer.resetHandlers())
    afterAll(() => mswServer.close())

    test('get data', async () => {
        const storeFactory = new PalmyraStoreFactory({ baseUrl: '/api/palmyra' });

        const options: IServerQueryInput = {
            endPoint: 'masterdata', store: storeFactory.getLookupStore({}, '/masterdata', 'name')
        }

        const { result } = renderHook(() => useServerQuery(options));

        act(() => {
            result.current.refresh();
        });

        await waitFor(async () => {
            expect(result.current.getCurrentData()).not.toBeNull();
        }, { timeout: 500 });
    });

})