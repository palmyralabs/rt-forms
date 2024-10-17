import { act, renderHook, waitFor } from "@testing-library/react";
import { afterAll, afterEach, beforeAll, describe, expect, test, vi } from "vitest";
import { IPalmyraEditFormInput } from "../../../../../src/palmyra/form/useHelpers/types";
import { IForm, usePalmyraEditForm } from "../../../../../src/palmyra";
import { PalmyraStoreFactory } from "@palmyralabs/palmyra-wire";
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
        return HttpResponse.json(getFormData(id))
    })
)

describe('PalmyraForm/usePalmyraEditForm- Form Initialization', () => {
    beforeAll(() => { mswServer.listen(); });
    afterEach(() => {mswServer.resetHandlers();})
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
})