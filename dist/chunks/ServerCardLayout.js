import { jsx as y } from "react/jsx-runtime";
import { forwardRef as E, useRef as S, useEffect as K, useImperativeHandle as x, useState as h, useContext as Z } from "react";
import { CardLayout as $ } from "../palmyra/layout/card/CardLayout.js";
import { useKeyValue as tt } from "../palmyra/utils/pubsub/PubSubHelper.js";
import { PalmyraForm as M } from "../palmyra/form/PalmyraForm.js";
import { StoreFactoryContext as et } from "../palmyra/form/formContext.js";
import "@palmyralabs/ts-predicates";
import "./NoopConverter.js";
import "dayjs";
import "@tanstack/react-table";
import "../palmyra/grid/base/utils/ColumnConverter.js";
import { getSaveFormHandle as z } from "../palmyra/form/formUtil.js";
import '../assets/FieldContainer.css';import '../assets/FieldGroupContainer.css';/* empty css                    */
/* empty css               */
import { usePalmyraNewForm as rt } from "../palmyra/form/useHelpers/usePalmyraNewForm.js";
import { usePalmyraEditForm as ot } from "../palmyra/form/useHelpers/usePalmyraEditForm.js";
const xt = E(function(e, i) {
  const d = e.storeFactory, { fetchData: c, saveData: u, formRef: n } = ot(e), l = i || S();
  return K(() => {
    c(), n.current.isValid() && e.onValidChange && e.onValidChange(!0);
  }, [n, e.id]), x(l, () => z(u, n)), /* @__PURE__ */ y(M, { onValidChange: e.onValidChange, ref: n, storeFactory: d, children: e.children });
}), Ot = E(function(e, i) {
  const d = e.storeFactory, { saveData: c, formRef: u } = rt(e), n = i || S();
  return x(n, () => z(c, u)), /* @__PURE__ */ y(M, { onValidChange: e.onValidChange, ref: u, storeFactory: d, children: e.children });
});
function nt(o) {
  if (o.endPoint) {
    const e = Z(et);
    if (!e)
      throw new Error("@palmyralabs/rt-forms - StoreFactoryContext is not available");
    return e.getGridStore(o.storeOptions, o.endPoint);
  } else
    throw new Error("Either store or endPoint must be provided");
}
const at = (o) => {
  var Q, T, j;
  const { quickSearch: e } = o, i = o.store || nt(o), d = o.fetchAll != !1, c = ((Q = o.defaultParams) == null ? void 0 : Q.filter) || {}, u = ((T = o.defaultParams) == null ? void 0 : T.sort) || {}, [n, l] = o.filterTopic ? tt(o.filterTopic, c) : h(c), C = S(o.initialFetch == !1), g = o.pageSize ? o.pageSize : 15;
  var A = g instanceof Array ? g[0] : g;
  const [O, G] = h((j = o.storeOptions) == null ? void 0 : j.endPointOptions), [P, _] = h({}), [f, v] = h({ limit: A, offset: 0, total: !0 }), [s, w] = h({ total: null, isLoading: !1, data: null }), m = (t) => {
    v((r) => ({ limit: r.limit, total: r.total, offset: t * r.limit }));
  }, H = (t) => {
    const r = t > 10 || t == -1 ? t : 15;
    v((a) => {
      const Y = Math.floor(a.offset / r) * r;
      return { limit: r, total: a.total, offset: Y };
    });
  }, p = () => n ? Object.keys(n).length == 0 : !1, L = (t, r) => {
    w((a) => (setTimeout(() => {
      o.onDataChange && o.onDataChange(t, a.data);
    }, 100), { data: t, total: r, isLoading: !1 }));
  }, D = () => L([], 0), q = () => L(void 0, null), I = () => N({}), F = () => Math.round(f.offset / f.limit), B = () => f, J = () => {
    w((t) => ({ ...t, isLoading: !0 }));
  };
  K(() => {
    if (C.current) {
      C.current = !1;
      return;
    }
    (d || !p()) && V();
  }, [f, P, O]);
  const R = () => ({
    sortOrder: P && Object.keys(P).length > 0 ? P : u,
    total: !0,
    endPointVars: O,
    ...f,
    filter: { ...n, ...c }
  }), V = () => {
    const t = R();
    if (i)
      try {
        J(), i.query(t).then((r) => {
          L(r.result, r.total);
        }).catch((r) => {
          var a = r.response ? r.response : r;
          console.error("error while fetching", a), q();
        });
      } catch (r) {
        console.error(r), D();
      }
    else
      console.error("Store is not provided for the Grid"), D();
  }, U = (t) => {
    const r = e;
    l(t ? (a) => (a[r] = t, { ...a }) : (a) => (delete a[r], { ...a })), m(0);
  }, N = (t) => {
    typeof t == "function" || t && Object.keys(t).length > 0 ? l(t) : l({}), m(0);
  }, W = (t, r) => {
    l((a) => (a[t] = r, { ...a })), m(0);
  }, b = (t) => {
    _(t);
  }, X = () => F() < k() ? (m(F() + 1), !0) : !1, k = () => Math.ceil((s == null ? void 0 : s.total) / (f.limit || 25));
  return {
    addFilter: W,
    resetFilter: I,
    setFilter: N,
    setQuickSearch: U,
    setSortColumns: b,
    setEndPointOptions: G,
    getTotalPages: k,
    refresh: V,
    setPageSize: H,
    getPageNo: F,
    getQueryLimit: B,
    setQueryLimit: v,
    gotoPage: m,
    nextPage: X,
    prevPage: () => {
      const t = F();
      return t > 0 ? (m(t - 1), !0) : !1;
    },
    export: (t) => {
      i.export ? i.export(t) : console.warn("Store does not implement export method");
    },
    getQueryRequest: R,
    setSortOptions: b,
    getCurrentFilter: () => n,
    getTotalRecords: () => s == null ? void 0 : s.total,
    getCurrentData: () => s == null ? void 0 : s.data,
    isLoading: s.isLoading
  };
}, wt = E(function(e, i) {
  const { Child: d, childProps: c } = e, u = i || S(null), n = at(e), l = e.listKeyProvider || ((C, g) => g);
  return x(u, () => ({
    ...n
  }), [n]), /* @__PURE__ */ y("div", { children: /* @__PURE__ */ y("div", { className: "card-page-container", children: /* @__PURE__ */ y(
    $,
    {
      Child: d,
      childKeyProvider: l,
      preProcess: e.preProcess,
      dataList: n.getCurrentData(),
      childProps: c,
      EmptyChild: e.EmptyChild,
      Loading: e.Loading
    }
  ) }) });
});
export {
  xt as P,
  wt as S,
  Ot as a,
  at as u
};
