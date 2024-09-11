import { useState as g, useEffect as f } from "react";
import { EmptyChild as w } from "./EmptyChildTable.js";
import { getCoreRowModel as P } from "@tanstack/react-table";
const R = (t) => {
  const { columnDefs: s, rowData: l, customizer: o } = t, i = t.onColumnSort || (() => {
  }), C = t.EmptyChild || w, p = t.onRowClick || (() => {
  }), m = (o == null ? void 0 : o.preProcessData) || ((n) => n), c = o != null && o.getTableOptions ? o.getTableOptions() : {}, [e, u] = g({});
  o != null && o.preProcessColumns && (o == null || o.preProcessColumns(s));
  const d = {
    data: m(l),
    manualSorting: !0,
    manualFiltering: !0,
    manualPagination: !0,
    columns: s,
    getCoreRowModel: P(),
    ...c
  };
  f(() => {
    i(e);
  }, [e]);
  const S = (n, a) => {
    var r = { ...e };
    a == "" ? delete r[n] : r[n] = a, u(r);
  };
  return { onColumnSort: t.onColumnSort ? S : () => {
  }, onRowClick: p, options: d, EmptyChildren: C };
};
export {
  R as useBaseGridManager
};
