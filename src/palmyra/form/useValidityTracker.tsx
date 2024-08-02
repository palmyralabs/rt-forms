import { useCallback, useRef } from "react";

const delayGenerator = (ms: number) => {
    if (ms && ms > 0) {
        var timer: ReturnType<typeof setTimeout>;
        return function (callback: Function, ...args: any[]) {
            clearTimeout(timer);
            timer = setTimeout(callback.bind(null, ...args), ms);
        };
    } else {
        return (callback: Function, ...args: any[]) => callback.apply(null, args);
    }
}

const useValidityTracker = (onValidityChange: (status: boolean) => void, propagationDelay?: number) => {
    const invalidEntries = useRef<Record<string, any>>({});
    const delayedExec = useCallback(() => delayGenerator(propagationDelay), [propagationDelay])();

    const setValidity = (key: string, valid: boolean) => {
        if (valid) {
            if (!invalidEntries.current[key])
                return;

            delete invalidEntries.current[key];
            if (isValid()) {
                delayedExec(onValidityChange, true)
            }
        } else {
            if (invalidEntries.current[key])
                return;
            const oldStatus = isValid();
            invalidEntries.current[key] = key;
            if (oldStatus) {
                delayedExec(onValidityChange, false)
            }
        }
    }

    const isValid = () => {
        return 0 == Object.keys(invalidEntries.current).length
    }

    return { isValid, setValidity };
}

export { useValidityTracker }