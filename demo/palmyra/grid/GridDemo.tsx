import { useState } from "react";
import { useServerQuery } from "../../../src/palmyra";
import { useDemoConfig } from "../../config/DemoConfigContext";

const humanize = (key: string) =>
    key.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase());

const GridDemo = () => {
    const { config } = useDemoConfig();
    const [search, setSearch] = useState<string>("");

    const grid = useServerQuery({
        endPoint: config.gridEndpoint,
        pageSize: 5,
        quickSearch: "name",
        initialFetch: true
    });

    const rows = grid.getCurrentData() || [];
    const total = grid.getTotalRecords() || 0;
    const pageNo = grid.getPageNo();
    const totalPages = grid.getTotalPages() || 1;
    const columns = rows.length > 0 ? Object.keys(rows[0]) : [];

    const onSearch = (value: string) => {
        setSearch(value);
        grid.setQuickSearch(value);
    };

    const renderCell = (column: string, row: any) => {
        if (column === "status")
            return <span className="demo-pill">{row[column]}</span>;
        return row[column];
    };

    return (
        <div className="demo-panel">
            <h2>Grid</h2>
            <p className="demo-panel-desc">
                Server-driven grid using <code>useServerQuery</code>. Columns adapt to the
                response shape, so pointing the Grid Endpoint elsewhere renders its fields.
            </p>

            <div className="demo-grid-toolbar">
                <input
                    placeholder="Quick search by name"
                    value={search}
                    onChange={(e) => onSearch(e.target.value)}
                />
                <button className="demo-btn" onClick={() => grid.refresh()}>Refresh</button>
            </div>

            <div className="demo-table-wrap">
                <table className="demo-table">
                    <thead>
                        <tr>
                            {columns.map((c) => (
                                <th key={c}>{humanize(c)}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row: any, idx: number) => (
                            <tr key={row.id ?? idx}>
                                {columns.map((c) => (
                                    <td key={c}>{renderCell(c, row)}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>

                {!grid.isLoading && rows.length === 0 && (
                    <div className="demo-empty">No records for the current endpoint.</div>
                )}
                {grid.isLoading && (
                    <div className="demo-empty">Loading…</div>
                )}
            </div>

            <div className="demo-grid-footer">
                <span>{total} record(s) · page {pageNo + 1} of {totalPages}</span>
                <span className="demo-pager">
                    <button
                        className="demo-btn"
                        disabled={pageNo <= 0}
                        onClick={() => grid.prevPage()}>Previous</button>
                    <button
                        className="demo-btn"
                        disabled={pageNo + 1 >= totalPages}
                        onClick={() => grid.nextPage()}>Next</button>
                </span>
            </div>
        </div>
    );
};

export default GridDemo;
