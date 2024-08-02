import { useRef } from "react";

const useValidityTracker = (onValidityChange: (status: boolean) => void) => {
    const invalidEntries = useRef<Record<string, any>>({});

    const setValidity = (key: string, valid: boolean) => {
        var tobeNotified = false;
        var result = false;
        if (false == valid) {
            tobeNotified = isValid();
            invalidEntries.current[key] = key;
        } else {
            delete invalidEntries.current[key];
            tobeNotified = isValid();
            result = true;
        }
        if (tobeNotified) {
            onValidityChange(result);
        }
    }

    const isValid = () => {
        return 0 == Object.keys(invalidEntries.current).length
    }

    return { isValid, setValidity };
}

export { useValidityTracker }