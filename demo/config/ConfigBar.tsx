import { useDemoConfig, IDemoConfig } from "./DemoConfigContext";

interface IFieldSpec {
    key: keyof IDemoConfig;
    label: string;
}

const fields: IFieldSpec[] = [
    { key: "baseUrl", label: "Base URL" },
    { key: "formEndpoint", label: "Form Endpoint" },
    { key: "gridEndpoint", label: "Grid Endpoint" },
    { key: "lookupEndpoint", label: "Lookup Endpoint" },
    { key: "lookupIdAttribute", label: "Lookup Id Attribute" },
    { key: "lookupLabelAttribute", label: "Lookup Label Attribute" },
    { key: "menuEndpoint", label: "Menu Endpoint" }
];

const ConfigBar = () => {
    const { draft, setDraftField, apply, reset } = useDemoConfig();

    return (
        <div className="demo-config">
            <p className="demo-config-title">Connection &amp; Endpoints</p>
            <div className="demo-config-grid">
                {fields.map((f) => (
                    <div className="demo-field" key={f.key}>
                        <label htmlFor={`cfg-${f.key}`}>{f.label}</label>
                        <input
                            id={`cfg-${f.key}`}
                            value={draft[f.key]}
                            onChange={(e) => setDraftField(f.key, e.target.value)}
                        />
                    </div>
                ))}
            </div>
            <div className="demo-config-actions">
                <button className="demo-btn demo-btn-primary" onClick={apply}>Apply</button>
                <button className="demo-btn" onClick={reset}>Reset</button>
            </div>
        </div>
    );
};

export default ConfigBar;
