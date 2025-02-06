import { act, renderHook, waitFor } from "@testing-library/react";
import { afterAll, afterEach, beforeAll, describe, expect, test, vi } from "vitest";
import { IPalmyraEditFormInput } from "../../../../../src/palmyra/form/useHelpers/types";
import { IForm, usePalmyraEditForm } from "../../../../../src/palmyra";
import { ErrorHandler, PalmyraStoreFactory } from "@palmyralabs/palmyra-wire";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
import { useRef } from "react";

// spied function to return the form data
const getFormData = vi.fn((id: string | readonly string[]) => {
    return { name: 'john' }
});

const mswServer = setupServer(
    http.get('/api/palmyra/productType/:id', ({ request, params, cookies }) => {
        const { id } = params
        if (id == '23')
            return HttpResponse.json(getFormData(id))
        else {
            return new HttpResponse('', {
                status: 404
            })
        }
    })
)

describe('PalmyraForm/usePalmyraEditForm- Form Initialization', () => {
    beforeAll(() => { mswServer.listen(); });
    afterEach(() => { mswServer.resetHandlers(); })
    afterAll(() => mswServer.close());

    test("200-Data Fetched - only once", async () => {
        const storeFactory = new PalmyraStoreFactory({ baseUrl: '/api/palmyra/' });
        const formRef = renderHook(() => useRef<IForm>()).result.current;
        const props: IPalmyraEditFormInput = {
            id: '23', endPoint: 'productType', storeFactory, formRef
        };

        const editForm = renderHook(() => usePalmyraEditForm(props)).result;
        act(() => {
            editForm.current.fetchData();
        })

        // wait till the callback happens
        await waitFor(async () => {
            expect(getFormData).toHaveBeenCalled();
        }, { timeout: 500 });

        // verify the function called only once
        expect(getFormData).toHaveBeenCalledOnce();
    })

    test("404-Data not found - onFetchFailure called", async () => {
        const storeFactory = new PalmyraStoreFactory({ baseUrl: '/api/palmyra/' });
        const formRef = renderHook(() => useRef<IForm>()).result.current;
        const errorHandler: ErrorHandler = vi.fn((d) => { return true });

        const props: IPalmyraEditFormInput = {
            id: '24', endPoint: 'productType', storeFactory, formRef,
            onQueryFailure: errorHandler
        };

        const editForm = renderHook(() => usePalmyraEditForm(props)).result;
        await act(async () => {
            await expect(() => editForm.current.fetchData()).rejects.toThrowError();
        })

        // wait till the callback happens
        await waitFor(async () => {
            expect(errorHandler).toHaveBeenCalled();
        }, { timeout: 500 });

        expect(errorHandler).toHaveBeenCalledOnce();
        expect(errorHandler).toHaveBeenCalledWith(expect.objectContaining({ status: 404 }))
    })


    test("404-Data not found", async () => {
        const storeFactory = new PalmyraStoreFactory({ baseUrl: '/api/palmyra/' });
        const formRef = renderHook(() => useRef<IForm>()).result.current;

        const props: IPalmyraEditFormInput = {
            id: '24', endPoint: 'productType', storeFactory, formRef
        };

        const editForm = renderHook(() => usePalmyraEditForm(props)).result;
        await act(async () => {
            await expect(() => editForm.current.fetchData()).rejects.toThrowError();
        })
    })
})