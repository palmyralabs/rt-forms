import { useState as g, useEffect as f } from "react";
import h from "./EmptyChildTable.js";
import { getCoreRowModel as w } from "@tanstack/react-table";
const D = (t) => {
  const { columnDefs: s, rowData: a, customizer: o } = t, i = t.onColumnSort || (() => {
  }), C = t.EmptyChild || h, p = t.onRowClick || (() => {
  }), m = (o == null ? void 0 : o.preProcessData) || ((n) => n), c = o != null && o.getTableOptions ? o.getTableOptions() : {};
  o != null && o.preProcessColumns && (o == null || o.preProcessColumns(s));
  const u = {
    data: m(a),
    manualSorting: !0,
    manualFiltering: !0,
    manualPagination: !0,
    columns: s,
    getCoreRowModel: w(),
    ...c
  }, [e, d] = g({});
  f(() => {
    i(e);
  }, [e]);
  const S = (n, l) => {
    var r = { ...e };
    l == "" ? delete r[n] : r[n] = l, d(r);
  };
  return { onColumnSort: t.onColumnSort ? S : () => {
  }, onRowClick: p, options: u, EmptyChild: C };
};
export {
  D as useBaseGridManager
};
