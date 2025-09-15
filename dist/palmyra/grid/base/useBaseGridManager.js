import { useState as g, useEffect as f } from "react";
import { EmptyChildTable as P } from "./EmptyChildTable.js";
import { getCoreRowModel as w } from "@tanstack/react-table";
const E = (o) => {
  const { columnDefs: s, rowData: i, customizer: t } = o, l = o.onColumnSort || (() => {
  }), m = o.EmptyChild || P, c = o.onRowClick || (() => {
  }), u = t?.preProcessData || ((n) => n), C = t?.getTableOptions ? t.getTableOptions() : {}, [e, p] = g(o.initParams?.sort || {});
  t?.preProcessColumns && t?.preProcessColumns(s);
  const d = {
    data: u(i),
    manualSorting: !0,
    manualFiltering: !0,
    manualPagination: !0,
    columns: s,
    getCoreRowModel: w(),
    ...C
  };
  f(() => {
    l(e);
  }, [e]);
  const S = (n, a) => {
    var r = { ...e };
    a == "" ? delete r[n] : r[n] = a, p(r);
  };
  return { onColumnSort: o.onColumnSort ? S : () => {
  }, onRowClick: c, options: d, EmptyChildren: m };
};
export {
  E as useBaseGridManager
};
