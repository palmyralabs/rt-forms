import { jsx as P } from "react/jsx-runtime";
import { forwardRef as E, useRef as C, useEffect as K, useImperativeHandle as x, useState as y, useContext as $ } from "react";
import '../assets/FieldContainer.css';import '../assets/FieldGroupContainer.css';import '../assets/CardLayout.css';/* empty css           */
import { useKeyValue as p } from "../palmyra/utils/pubsub/PubSubHelper.js";
import { PalmyraForm as M } from "../palmyra/form/PalmyraForm.js";
import { StoreFactoryContext as tt } from "../palmyra/form/formContext.js";
import "@palmyralabs/ts-predicates";
import "./NoopConverter.js";
import "dayjs";
import { CardLayout as et } from "../palmyra/layout/card/CardLayout.js";
import "@tanstack/react-table";
import "../palmyra/grid/base/utils/ColumnConverter.js";
import "../palmyra/grid/utils/FormatterFactory.js";
import { getSaveFormHandle as z } from "../palmyra/form/formUtil.js";
/* empty css                    */
/* empty css               */
import { usePalmyraNewForm as rt } from "../palmyra/form/useHelpers/usePalmyraNewForm.js";
import { usePalmyraEditForm as ot } from "../palmyra/form/useHelpers/usePalmyraEditForm.js";
const Ot = E(function(e, i) {
  const d = e.storeFactory, { fetchData: c, saveData: u, formRef: n, refresh: l } = ot(e), g = i || C();
  return K(() => {
    c(), n.current.isValid() && e.onValidChange && e.onValidChange(!0), l();
  }, [n, e.id]), x(g, () => z(u, n)), /* @__PURE__ */ P(M, { onValidChange: e.onValidChange, ref: n, storeFactory: d, children: e.children });
}), wt = E(function(e, i) {
  const d = e.storeFactory, { saveData: c, formRef: u } = rt(e), n = i || C();
  return x(n, () => z(c, u)), /* @__PURE__ */ P(
    M,
    {
      onValidChange: e.onValidChange,
      formData: e.initialData,
      ref: u,
      storeFactory: d,
      children: e.children
    }
  );
});
function nt(o) {
  if (o.endPoint) {
    const e = $(tt);
    if (!e)
      throw new Error("@palmyralabs/rt-forms - StoreFactoryContext is not available");
    return e.getGridStore(o.storeOptions, o.endPoint);
  } else
    throw new Error("Either store or endPoint must be provided");
}
const at = (o) => {
  var Q, T, j;
  const { quickSearch: e } = o, i = o.store || nt(o), d = o.fetchAll != !1, c = ((Q = o.defaultParams) == null ? void 0 : Q.filter) || {}, u = ((T = o.defaultParams) == null ? void 0 : T.sort) || {}, [n, l] = o.filterTopic ? p(o.filterTopic, c) : y(c), g = C(o.initialFetch == !1), h = o.pageSize ? o.pageSize : 15;
  var A = h instanceof Array ? h[0] : h;
  const [D, G] = y((j = o.storeOptions) == null ? void 0 : j.endPointOptions), [F, _] = y({}), [f, v] = y({ limit: A, offset: 0, total: !0 }), [s, O] = y({ total: null, isLoading: !1, data: null }), m = (t) => {
    v((r) => ({ limit: r.limit, total: r.total, offset: t * r.limit }));
  }, H = (t) => {
    const r = t > 10 || t == -1 ? t : 15;
    v((a) => {
      const Z = Math.floor(a.offset / r) * r;
      return { limit: r, total: a.total, offset: Z };
    });
  }, q = () => n ? Object.keys(n).length == 0 : !1, L = (t, r) => {
    O((a) => (setTimeout(() => {
      o.onDataChange && o.onDataChange(t, a.data);
    }, 100), { data: t, total: r, isLoading: !1 }));
  }, w = () => L([], 0), I = () => L(void 0, null), B = () => N({}), S = () => Math.round(f.offset / f.limit), J = () => f, U = () => {
    O((t) => ({ ...t, isLoading: !0 }));
  };
  K(() => {
    if (g.current) {
      g.current = !1;
      return;
    }
    (d || !q()) && V();
  }, [f, F, D]);
  const R = () => ({
    sortOrder: F && Object.keys(F).length > 0 ? F : u,
    total: !0,
    endPointVars: D,
    ...f,
    filter: { ...n, ...c }
  }), V = () => {
    const t = R();
    if (i)
      try {
        U(), i.query(t).then((r) => {
          L(r.result, r.total);
        }).catch((r) => {
          var a = r.response ? r.response : r;
          console.error("error while fetching", a), I();
        });
      } catch (r) {
        console.error(r), w();
      }
    else
      console.error("Store is not provided for the Grid"), w();
  }, W = (t) => {
    const r = e;
    l(t ? (a) => (a[r] = t, { ...a }) : (a) => (delete a[r], { ...a })), m(0);
  }, N = (t) => {
    typeof t == "function" || t && Object.keys(t).length > 0 ? l(t) : l({}), m(0);
  }, X = (t, r) => {
    l((a) => (a[t] = r, { ...a })), m(0);
  }, b = (t) => {
    _(t);
  }, Y = () => S() < k() ? (m(S() + 1), !0) : !1, k = () => Math.ceil((s == null ? void 0 : s.total) / (f.limit || 25));
  return {
    addFilter: X,
    resetFilter: B,
    setFilter: N,
    setQuickSearch: W,
    setSortColumns: b,
    setEndPointOptions: G,
    getTotalPages: k,
    refresh: V,
    setPageSize: H,
    getPageNo: S,
    getQueryLimit: J,
    setQueryLimit: v,
    gotoPage: m,
    nextPage: Y,
    prevPage: () => {
      const t = S();
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
}, Rt = E(function(e, i) {
  const { Child: d, childProps: c } = e, u = i || C(null), n = at(e), l = e.listKeyProvider || ((g, h) => h);
  return x(u, () => ({
    ...n
  }), [n]), /* @__PURE__ */ P("div", { children: /* @__PURE__ */ P("div", { className: "card-page-container", children: /* @__PURE__ */ P(
    et,
    {
      Child: d,
      childKeyProvider: l,
      preProcess: e.preProcess,
      dataList: n.getCurrentData(),
      childProps: c,
      EmptyChild: e.EmptyChild,
      Loading: e.Loading,
      title: e.title
    }
  ) }) });
});
export {
  Ot as P,
  Rt as S,
  wt as a,
  at as u
};
