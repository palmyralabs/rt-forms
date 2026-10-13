import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { PalmyraStoreFactory } from "@palmyralabs/palmyra-wire";

interface IDemoConfig {
    baseUrl: string;
    formEndpoint: string;
    gridEndpoint: string;
    lookupEndpoint: string;
    lookupIdAttribute: string;
    lookupLabelAttribute: string;
    menuEndpoint: string;
}

const defaultConfig: IDemoConfig = {
    baseUrl: "/testdata",
    formEndpoint: "/testFormData.json",
    gridEndpoint: "/gridData.json",
    lookupEndpoint: "/lookupData.json",
    lookupIdAttribute: "sid",
    lookupLabelAttribute: "location",
    menuEndpoint: "/menuData.json"
};

interface IDemoConfigContext {
    config: IDemoConfig;
    draft: IDemoConfig;
    revision: number;
    storeFactory: PalmyraStoreFactory;
    setDraftField: (key: keyof IDemoConfig, value: string) => void;
    apply: () => void;
    reset: () => void;
}

const DemoConfigContext = createContext<IDemoConfigContext | null>(null);

const useDemoConfig = (): IDemoConfigContext => {
    const ctx = useContext(DemoConfigContext);
    if (!ctx)
        throw new Error("useDemoConfig must be used within DemoConfigProvider");
    return ctx;
};

const DemoConfigProvider = (props: { children: ReactNode }) => {
    const [config, setConfig] = useState<IDemoConfig>(defaultConfig);
    const [draft, setDraft] = useState<IDemoConfig>(defaultConfig);
    const [revision, setRevision] = useState<number>(0);

    const storeFactory = useMemo(
        () => new PalmyraStoreFactory({ baseUrl: config.baseUrl }),
        [config.baseUrl]
    );

    const setDraftField = (key: keyof IDemoConfig, value: string) => {
        setDraft((d) => ({ ...d, [key]: value }));
    };

    const apply = () => {
        setConfig(draft);
        setRevision((r) => r + 1);
    };

    const reset = () => {
        setDraft(defaultConfig);
        setConfig(defaultConfig);
        setRevision((r) => r + 1);
    };

    const value: IDemoConfigContext = {
        config, draft, revision, storeFactory, setDraftField, apply, reset
    };

    return (
        <DemoConfigContext.Provider value={value}>
            {props.children}
        </DemoConfigContext.Provider>
    );
};

export { DemoConfigProvider, useDemoConfig };
export type { IDemoConfig };
