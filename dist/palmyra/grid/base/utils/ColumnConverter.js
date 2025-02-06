import { jsx as m } from "react/jsx-runtime";
import { createColumnHelper as d } from "@tanstack/react-table";
import { formatColumn as c } from "./CellFormatter.js";
import { hasDot as b, getValueByKey as g } from "@palmyralabs/ts-utils";
import { NoopGridCustomizer as C } from "../NoopGridCustomizer.js";
import { getFormatConverter as h } from "../../utils/FormatterFactory.js";
const u = d();
function w(r, o) {
  const e = o || C;
  return r.every((t) => t.columnGroup == null) ? r.map((t) => p(t, e)) : v(r, e);
}
function v(r, o) {
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
  const a = o.formatHeader(r, G(r)), i = o.formatFooter(r, f());
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
  let l = o.formatCell(r, c(r));
  return u.accessor(y(r), {
    id: s(r),
    meta: {
      attribute: r.attribute,
      columnDef: r
    },
    enableSorting: e,
    enableColumnFilter: t,
    header: a,
    footer: i,
    cell: l
  });
}
function y(r) {
  var o = r.attribute ? r.attribute : r.name;
  const e = h(r);
  return b(o) ? (t) => e.convert(g(o, t)) : (t) => e.convert(t[o]);
}
function s(r) {
  return r.name ? r.name : r.attribute;
}
function G(r) {
  return () => /* @__PURE__ */ m("span", { children: r.label });
}
function f(r) {
  return (o, e) => {
  };
}
export {
  w as generateColumns
};
