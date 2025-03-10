import { useState as f, useEffect as P } from "react";
import { EmptyChildTable as w } from "./EmptyChildTable.js";
import { getCoreRowModel as b } from "@tanstack/react-table";
const R = (t) => {
  var a;
  const { columnDefs: s, rowData: i, customizer: o } = t, C = t.onColumnSort || (() => {
  }), m = t.EmptyChild || w, p = t.onRowClick || (() => {
  }), c = (o == null ? void 0 : o.preProcessData) || ((n) => n), u = o != null && o.getTableOptions ? o.getTableOptions() : {}, [e, d] = f(((a = t.initParams) == null ? void 0 : a.sort) || {});
  o != null && o.preProcessColumns && (o == null || o.preProcessColumns(s));
  const S = {
    data: c(i),
    manualSorting: !0,
    manualFiltering: !0,
    manualPagination: !0,
    columns: s,
    getCoreRowModel: b(),
    ...u
  };
  P(() => {
    C(e);
  }, [e]);
  const g = (n, l) => {
    var r = { ...e };
    l == "" ? delete r[n] : r[n] = l, d(r);
  };
  return { onColumnSort: t.onColumnSort ? g : () => {
  }, onRowClick: p, options: S, EmptyChildren: m };
};
export {
  R as useBaseGridManager
};
