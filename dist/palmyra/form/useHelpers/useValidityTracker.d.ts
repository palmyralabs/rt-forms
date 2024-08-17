declare const useValidityTracker: (onValidityChange: (status: boolean) => void, propagationDelay?: number) => {
    isValid: () => boolean;
    setValidity: (key: string, valid: boolean) => void;
};
export { useValidityTracker };
