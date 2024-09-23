import { act, render, renderHook, waitFor } from "@testing-library/react";

import { useValidityTracker } from "../../../../src/palmyra/form/useHelpers/useValidityTracker"
import { vi } from "vitest";

describe('useValidityTracker', () => {

    beforeEach(() => {
        vi.useFakeTimers()
    })
    afterEach(() => {
        vi.restoreAllMocks()
    })

    test('Verify FieldState and callback on validity Change', async () => {
        const onValidityChange = vi.fn();

        const { result } = renderHook(() => useValidityTracker(onValidityChange, 50));

        act(() => {
            result.current.setValidity('hello', true);
            result.current.setValidity('world', false);
        })
        expect(result.current.isValid()).toBeFalsy();
        vi.advanceTimersByTime(20);
        expect(onValidityChange).not.toHaveBeenCalled();
        vi.advanceTimersByTime(32);
        expect(onValidityChange).toHaveBeenCalledWith(false)

        act(() => {
            result.current.setValidity('world', true);
        })
        expect(result.current.isValid()).toBeTruthy();
        vi.advanceTimersByTime(100);
        expect(onValidityChange).toHaveBeenCalledWith(true);
    })
})