import { jsx as l } from "react/jsx-runtime";
import { createColumnHelper as c } from "@tanstack/react-table";
import { formatColumn as d } from "./CellFormatter.js";
import { o as b, e as v } from "../../../../chunks/accessor.js";
import "../../../../chunks/NoopConverter.js";
import "dayjs";
import { NoopGridCustomizer as C } from "../NoopGridCustomizer.js";
import { getFormatConverter as g } from "../../utils/FormatterFactory.js";
const u = c();
function N(r, o) {
  const e = o || C;
  return r.every((t) => t.columnGroup == null) ? r.map((t) => p(t, e)) : h(r, e);
}
function h(r, o) {
  const e = new Array();
  var t = void 0;
  return r.map((n) => {
    const a = p(n, o);
    n.columnGroup ? ((!t || t.header != n.columnGroup) && (t = {}, t.header = n.columnGroup, t.columns = [], e.push(t)), t.columns.push(a)) : e.push(a);
  }), e;
}
function p(r, o) {
  const e = r.sortable, t = r.searchable;
  var n = r.cellRenderer;
  const a = o.formatHeader(r, y(r)), i = o.formatFooter(r, F());
  if (n)
    return u.display({
      id: s(r),
      meta: {
        attribute: r.attribute,
        columnDef: r
      },
      enableSorting: e,
      enableColumnFilter: t,
      header: a,
      footer: i,
      cell: n
    });
  let m = o.formatCell(r, d(r));
  return u.accessor(G(r), {
    id: s(r),
    meta: {
      attribute: r.attribute,
      columnDef: r
    },
    enableSorting: e,
    enableColumnFilter: t,
    header: a,
    footer: i,
    cell: m
  });
}
function G(r) {
  var o = r.attribute ? r.attribute : r.name;
  const e = g(r);
  return b(o) ? (t) => e.convert(v(o, t)) : (t) => e.convert(t[o]);
}
function s(r) {
  return r.name ? r.name : r.attribute;
}
function y(r) {
  return () => /* @__PURE__ */ l("span", { children: r.label });
}
function F(r) {
  return (o, e) => {
  };
}
export {
  N as generateColumns
};
