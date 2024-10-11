import { act, renderHook } from "@testing-library/react";
import { useServerLookupFieldManager, PalmyraForm } from "../../../../../src/palmyra";
import { IServerLookupDefinition } from "../../../../../demo/palmyra/mui/form/types";
import { PalmyraStoreFactory } from "@palmyralabs/palmyra-wire";
import { beforeAll, describe, test, vi } from 'vitest';


describe('useServerLookupFieldManager', () => {
    const data = [
        { id: 1, name: "Name" },
        { id: 2, name: "Date" },
        { id: 3, name: "Location" }
    ]

    beforeAll(() => {
        vi.resetAllMocks();
    });

    test('get data', async () => {
        const storeFactory = new PalmyraStoreFactory({ baseUrl: '/api/palmyra' })
        const lookupStore: any = {
            query() {
                return Promise.resolve({ result: data, total: data.length })
            }
        };

        vi.spyOn(storeFactory, "getLookupStore").mockReturnValue(lookupStore)

        const wrapper = ({ children }) => {
            return <PalmyraForm formData={{}} storeFactory={storeFactory}>{children} </PalmyraForm>
        }

        const options: IServerLookupDefinition = {
            queryOptions: { endPoint: 'masterdata' },
            attribute: 'lookup'
        }

        const { result } = renderHook(() => useServerLookupFieldManager('lookup', options), { wrapper });

        act(() => {
            result.current.refreshOptions();
        })

        console.log(result.current.options);

        // expect(result.current.options).toStrictEqual([{ id: 1, name: "Name" }]);
        // expect(result.current.isValid()).toBeTruthy();
        // expect(result.current.getValue()).toStrictEqual({ id: 1, name: "Name" });
    });

})