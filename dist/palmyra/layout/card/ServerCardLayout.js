import { jsx as o } from "react/jsx-runtime";
import { forwardRef as P, useRef as p, useImperativeHandle as C } from "react";
import g from "./CardLayout.js";
import { useServerQuery as L } from "../../wire/ServerQueryManager.js";
const K = P(function(r, s) {
  const { Child: d, childProps: l } = r, u = s || p(null), {
    setQueryFilter: t,
    refreshData: c,
    setSortColumns: m,
    setEndPointOptions: y,
    setQueryLimit: f,
    getQueryLimit: h,
    data: a
  } = L(r), v = r.listKeyProvider || ((e, i) => i);
  return C(u, () => ({
    setFilter: (e) => {
      t(e);
    },
    refresh: () => {
      c();
    },
    resetFilter() {
      t({});
    },
    setEndPointOptions: y,
    addFilter: (e, i) => {
      t((n) => (n[e] = i, { ...n }));
    },
    setQueryLimit: f,
    getQueryLimit: h,
    getCurrentData: () => a,
    nextPage() {
    },
    prevPage() {
    },
    setSortOptions(e) {
      m(e);
    }
  }), [t]), /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o("div", { className: "card-page-container", children: /* @__PURE__ */ o(
    g,
    {
      Child: d,
      childKeyProvider: v,
      preProcess: r.preProcess,
      dataList: a,
      childProps: l,
      EmptyChild: r.EmptyChild
    }
  ) }) });
});
export {
  K as ServerCardLayout
};
