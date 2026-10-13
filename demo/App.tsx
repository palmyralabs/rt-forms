import { useState } from "react";
import { MemoryRouter } from "react-router-dom";
import { StoreFactoryContext } from "../src/palmyra";
import { DemoConfigProvider, useDemoConfig } from "./config/DemoConfigContext";
import ConfigBar from "./config/ConfigBar";
import NewForm from "./palmyra/mui/palmyraHooks/NewForm";
import ViewForm from "./palmyra/mui/palmyraHooks/ViewForm";
import EditForm from "./palmyra/mui/palmyraHooks/EditFormPage";
import GridDemo from "./palmyra/grid/GridDemo";
import APIAclList from "./palmyra/apiControl/APIAclList";
import TreeMenu from "./palmyra/menu/TreeMenu";
import SideMenu from "./palmyra/menu/SideMenu";
import "./demo.css";

const tabs = [
    { id: "new", label: "New Form", Comp: NewForm },
    { id: "view", label: "View Form", Comp: ViewForm },
    { id: "edit", label: "Edit Form", Comp: EditForm },
    { id: "grid", label: "Grid", Comp: GridDemo },
    { id: "acl", label: "ACL Editor", Comp: APIAclList },
    { id: "tree", label: "Tree Menu", Comp: TreeMenu },
    { id: "side", label: "Side Menu", Comp: SideMenu }
];

const DemoBody = () => {
    const { storeFactory, revision } = useDemoConfig();
    const [active, setActive] = useState<string>("new");
    const current = tabs.find((t) => t.id === active) || tabs[0];
    const Active = current.Comp;

    return (
        <StoreFactoryContext.Provider value={storeFactory}>
            <div className="demo-shell">
                <header className="demo-header">
                    <h1>rt-forms Demo</h1>
                    <span className="demo-subtitle">New, View, Edit forms, grid &amp; server lookups</span>
                </header>

                <ConfigBar />

                <nav className="demo-tabs">
                    {tabs.map((t) => (
                        <button
                            key={t.id}
                            className={"demo-tab" + (t.id === active ? " active" : "")}
                            onClick={() => setActive(t.id)}>
                            {t.label}
                        </button>
                    ))}
                </nav>

                <Active key={`${active}-${revision}`} />
            </div>
        </StoreFactoryContext.Provider>
    );
};

const App = () => (
    <DemoConfigProvider>
        <MemoryRouter>
            <DemoBody />
        </MemoryRouter>
    </DemoConfigProvider>
);

export default App;
