import { renderHook } from "@testing-library/react";
import { useServerLookupFieldManager, PalmyraForm } from "../../../../../src/palmyra";
import { IServerLookupDefinition } from "../../../../../demo/palmyra/mui/form/types";
import { PalmyraStoreFactory } from "@palmyralabs/palmyra-wire";
import { vi } from 'vitest';
import orgAxios from "axios";

let axios = vi.mocked(orgAxios, true)

beforeAll(() => {
    vi.resetAllMocks();
    axios = vi.mocked(orgAxios, true)
});

const mockFetch = (data) => {
    global.fetch = vi.fn(() =>
        Promise.resolve({
            ok: true,
            status: 200,
            statusText: 'OK',
            headers: new Headers(),
            redirected: false,
            type: 'basic',
            url: '/masterdata',
            json: () => Promise.resolve(data),
        } as Response)
    );
};

const storeFactory = new PalmyraStoreFactory({ baseUrl: '/api/palmyra' })

describe('useServerLookupFieldManager', () => {
    const data = [
        { id: 1, name: "Name" },
        { id: 2, name: "Date" },
        { id: 3, name: "Location" }
    ]

    test('get data', async () => {

        mockFetch(data);
        const wrapper = ({ children }) => {
            return <PalmyraForm formData={{ lookup: { id: 1, name: "Name" } }} storeFactory={storeFactory}>{children} </PalmyraForm>
        }
        const options: IServerLookupDefinition = {
            queryOptions: { endPoint: '/masterdata' },
            attribute: 'lookup'
        }
        const { result } = renderHook(() => useServerLookupFieldManager('lookup', options), { wrapper })

        expect(result.current.options).toStrictEqual([{ id: 1, name: "Name" }]);
        expect(result.current.isValid()).toBeTruthy();
        expect(result.current.getValue()).toStrictEqual({ id: 1, name: "Name" });
    });

    test('default data', async () => {

        // mockFetch(data);
        const wrapper = ({ children }) => {
            return <PalmyraForm formData={{}} storeFactory={storeFactory}>{children} </PalmyraForm>
        }
        const options: IServerLookupDefinition = {
            queryOptions: { endPoint: '/masterdata' },
            attribute: 'lookup',
            defaultValue: { id: 3, name: "Location" }
        }
        const { result } = renderHook(() => useServerLookupFieldManager('lookup', options), { wrapper })

        expect(result.current.options).toStrictEqual([{ id: 3, name: "Location" }]);
        expect(result.current.isValid()).toBeTruthy();
        expect(result.current.getValue()).toStrictEqual({ id: 3, name: "Location" });
    });

    test('get data', async () => {

        const wrapper = ({ children }) => {
            return <PalmyraForm formData={{ lookup: { id: 1, name: "Name" } }} storeFactory={storeFactory}>{children} </PalmyraForm>
        }
        const options: IServerLookupDefinition = {
            queryOptions: { endPoint: '/masterdata' },
            attribute: 'lookup.id'
        }
        const { result } = renderHook(() => useServerLookupFieldManager('lookup', options), { wrapper })

        expect(result.current.isValid()).toBeTruthy();
        expect(result.current.getValue()).toStrictEqual({ id: 1, name: "Name" });
    });

    // test('get data', async () => {
    //     const asd = axios.get.mockResolvedValue({ data: { result: data } });
    //     const actualres = await asd

    //     const wrapper = ({ children }) => {
    //         return <PalmyraForm formData={{ lookup: 1 }} storeFactory={storeFactory}>{children} </PalmyraForm>
    //     }
    //     const options: IServerLookupDefinition = {
    //         queryOptions: { endPoint: '/masterdata' },
    //         attribute: 'lookup'
    //     }
    //     const { result } = renderHook(() => useServerLookupFieldManager('lookup', options), { wrapper })
    //     result.current.options = data;

    //     console.log(actualres, result.current.options)

    //     expect(result.current.options).toStrictEqual([
    //         { id: 1, name: 'Name' },
    //         { id: 2, name: 'Date' },
    //         { id: 3, name: 'Location' }
    //     ]);

    //     expect(actualres).toStrictEqual(result.current.options);
    //     expect(result.current.isValid()).toBeTruthy();
    //     expect(result.current.getValue()).toBe(1);
    // });



    test('get data', async () => {
        const wrapper = ({ children }) => {
            return <PalmyraForm formData={{ lookup: { id: 1, name: "Name" } }} storeFactory={storeFactory}>{children} </PalmyraForm>
        }
        const options: IServerLookupDefinition = {
            queryOptions: { endPoint: '/masterdata' },
            attribute: 'lookup.id'
        }
        const { result } = renderHook(() => useServerLookupFieldManager('lookup', options), { wrapper })
        result.current.options = data;

        expect(result.current.options).toStrictEqual([
            { id: 1, name: 'Name' },
            { id: 2, name: 'Date' },
            { id: 3, name: 'Location' }
        ]);
        expect(result.current.isValid()).toBeTruthy();
        expect(result.current.getValue()).toStrictEqual({ id: 1, name: "Name" });
    });

})