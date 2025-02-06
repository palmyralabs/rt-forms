import { useState as S, useEffect as g } from "react";
import { EmptyChildTable as w } from "./EmptyChildTable.js";
import { getCoreRowModel as P } from "@tanstack/react-table";
const R = (n) => {
  const { columnDefs: s, rowData: l, customizer: o } = n, i = n.onColumnSort || (() => {
  }), C = n.EmptyChild || w, p = n.onRowClick || (() => {
  }), u = (o == null ? void 0 : o.preProcessData) || ((t) => t), m = o != null && o.getTableOptions ? o.getTableOptions() : {}, [e, d] = S({});
  o != null && o.preProcessColumns && (o == null || o.preProcessColumns(s));
  const c = {
    data: u(l),
    manualSorting: !0,
    manualFiltering: !0,
    manualPagination: !0,
    columns: s,
    getCoreRowModel: P(),
    ...m
  };
  g(() => {
    i(e);
  }, [e]);
  const f = (t, a) => {
    var r = { ...e };
    a == "" ? delete r[t] : r[t] = a, d(r);
  };
  return { onColumnSort: n.onColumnSort ? f : () => {
  }, onRowClick: p, options: c, EmptyChildren: C };
};
export {
  R as useBaseGridManager
};
