import { jsx as g } from "react/jsx-runtime";
import { forwardRef as O, useRef as S, useEffect as K, useImperativeHandle as V, useState as m, useContext as $ } from "react";
import { CardLayout as p } from "../palmyra/layout/card/CardLayout.js";
import { useKeyValue as tt } from "../palmyra/utils/pubsub/PubSubHelper.js";
import { PalmyraForm as M } from "../palmyra/form/PalmyraForm.js";
import { StoreFactoryContext as et } from "../palmyra/form/formContext.js";
import "@palmyralabs/ts-predicates";
import "./NoopConverter.js";
import "dayjs";
import { getSaveFormHandle as z } from "../palmyra/form/formUtil.js";
import { usePalmyraNewForm as rt } from "../palmyra/form/useHelpers/usePalmyraNewForm.js";
import { usePalmyraEditForm as ot } from "../palmyra/form/useHelpers/usePalmyraEditForm.js";
const Ct = O(function(r, s) {
  const l = r.storeFactory, { fetchData: i, saveData: c, formRef: n } = ot(r), u = s || S();
  return K(() => {
    i(), n.current.isValid() && r.onValidChange && r.onValidChange(!0);
  }, [n, r.id]), V(u, () => z(c, n)), /* @__PURE__ */ g(M, { onValidChange: r.onValidChange, ref: n, storeFactory: l, children: r.children });
}), St = O(function(r, s) {
  const l = r.storeFactory, { saveData: i, formRef: c } = rt(r), n = s || S();
  return V(n, () => z(i, c)), /* @__PURE__ */ g(M, { onValidChange: r.onValidChange, ref: c, storeFactory: l, children: r.children });
});
function nt(o) {
  if (o.endPoint) {
    const r = $(et);
    if (!r)
      throw new Error("@palmyralabs/rt-forms - StoreFactoryContext is not available");
    return r.getGridStore(o.endPointOptions, o.endPoint);
  } else
    throw new Error("Either store or endPoint must be provided");
}
const at = (o) => {
  var T, j;
  const { quickSearch: r } = o, s = o.store || nt(o), l = o.fetchAll != !1, [i, c] = m(o.endPointOptions), [n, u] = m(null), y = ((T = o.defaultParams) == null ? void 0 : T.filter) || {}, v = ((j = o.defaultParams) == null ? void 0 : j.sort) || {}, [P, h] = o.filterTopic ? tt(o.filterTopic, y) : m(y), [F, A] = m({}), w = S(o.initialFetch == !1), E = o.pageSize ? o.pageSize : 15;
  var G = E instanceof Array ? E[0] : E;
  const [f, R] = m({ limit: G, offset: 0, total: !0 }), [_, H] = m(null), C = () => Math.round(f.offset / f.limit), q = () => f, d = (t) => {
    R((e) => ({ limit: e.limit, total: e.total, offset: t * e.limit }));
  }, I = (t) => {
    const e = t > 10 || t == -1 ? t : 15;
    R((a) => {
      const Z = Math.floor(a.offset / e) * e;
      return { limit: e, total: a.total, offset: Z };
    });
  }, B = () => P ? Object.keys(P).length == 0 : !1, D = (t) => {
    H((e) => (setTimeout(() => {
      o.onDataChange && o.onDataChange(t, e);
    }, 300), t));
  };
  K(() => {
    if (w.current) {
      w.current = !1;
      return;
    }
    (l || !B()) && b();
  }, [f, F, i]);
  const N = () => ({
    sortOrder: F && Object.keys(F).length > 0 ? F : v,
    total: !0,
    endPointVars: i,
    ...f,
    filter: { ...P, ...y }
  }), b = () => {
    const t = N();
    if (s)
      try {
        s.query(t).then((e) => {
          D(e.result), u(e.total);
        }).catch((e) => {
          var a = e.response ? e.response : e;
          console.error("error while fetching", a), J();
        });
      } catch (e) {
        console.error(e), k();
      }
    else
      console.error("Store is not provided for the Grid"), k();
  }, k = () => {
    D([]), u(0);
  }, J = () => {
    D(void 0), u(null);
  }, U = (t) => {
    const e = r;
    h(t ? (a) => (a[e] = t, { ...a }) : (a) => (delete a[e], { ...a })), d(0);
  }, x = (t) => {
    typeof t == "function" || t && Object.keys(t).length > 0 ? h(t) : h({}), d(0);
  }, W = (t, e) => {
    h((a) => (a[t] = e, { ...a })), d(0);
  }, X = () => {
    x({});
  }, L = (t) => {
    A(t);
  }, Y = () => C() < Q() ? (d(C() + 1), !0) : !1, Q = () => Math.ceil(n / (f.limit || 25));
  return {
    addFilter: W,
    resetFilter: X,
    setFilter: x,
    setQuickSearch: U,
    setSortColumns: L,
    setEndPointOptions: c,
    getTotalPages: Q,
    refresh: b,
    setPageSize: I,
    getPageNo: C,
    getQueryLimit: q,
    setQueryLimit: R,
    gotoPage: d,
    nextPage: Y,
    prevPage: () => {
      const t = C();
      return t > 0 ? (d(t - 1), !0) : !1;
    },
    getQueryRequest: N,
    setSortOptions: L,
    getCurrentFilter: () => P,
    getTotalRecords: () => n,
    getCurrentData: () => _
  };
}, vt = O(function(r, s) {
  const { Child: l, childProps: i } = r, c = s || S(null), n = at(r), u = r.listKeyProvider || ((y, v) => v);
  return V(c, () => ({
    ...n
  }), [n]), /* @__PURE__ */ g("div", { children: /* @__PURE__ */ g("div", { className: "card-page-container", children: /* @__PURE__ */ g(
    p,
    {
      Child: l,
      childKeyProvider: u,
      preProcess: r.preProcess,
      dataList: n.getCurrentData(),
      childProps: i,
      EmptyChild: r.EmptyChild
    }
  ) }) });
});
export {
  Ct as P,
  vt as S,
  St as a,
  at as u
};
