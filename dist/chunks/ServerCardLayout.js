import { jsx as g } from "react/jsx-runtime";
import { forwardRef as D, useRef as C, useEffect as K, useImperativeHandle as O, useState as m, useContext as $ } from "react";
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
const Ct = D(function(e, s) {
  const l = e.storeFactory, { fetchData: i, saveData: c, formRef: n } = ot(e), u = s || C();
  return K(() => {
    i(), n.current.isValid() && e.onValidChange && e.onValidChange(!0);
  }, [n, e.id]), O(u, () => z(c, n)), /* @__PURE__ */ g(M, { onValidChange: e.onValidChange, ref: n, storeFactory: l, children: e.children });
}), vt = D(function(e, s) {
  const l = e.storeFactory, { saveData: i, formRef: c } = rt(e), n = s || C();
  return O(n, () => z(i, c)), /* @__PURE__ */ g(M, { onValidChange: e.onValidChange, ref: c, storeFactory: l, children: e.children });
});
function nt(o) {
  if (o.endPoint) {
    const e = $(et);
    if (!e)
      throw new Error("@palmyralabs/rt-forms - StoreFactoryContext is not available");
    return e.getGridStore(o.endPointOptions, o.endPoint);
  } else
    throw new Error("Either store or endPoint must be provided");
}
const at = (o) => {
  var T, j;
  const { quickSearch: e } = o, s = o.store || nt(o), l = o.fetchAll != !1, [i, c] = m(o.endPointOptions), [n, u] = m(null), y = ((T = o.defaultParams) == null ? void 0 : T.filter) || {}, v = ((j = o.defaultParams) == null ? void 0 : j.sort) || {}, [P, h] = o.filterTopic ? tt(o.filterTopic, y) : m(y), [F, A] = m({}), w = C(o.initialFetch == !1), R = o.pageSize ? o.pageSize : 15;
  var G = R instanceof Array ? R[0] : R;
  const [f, E] = m({ limit: G, offset: 0, total: !0 }), [_, H] = m(null), S = () => Math.round(f.offset / f.limit), q = () => f, d = (t) => {
    E((r) => ({ limit: r.limit, total: r.total, offset: t * r.limit }));
  }, I = (t) => {
    const r = t > 10 || t == -1 ? t : 15;
    E((a) => {
      const Z = Math.floor(a.offset / r) * r;
      return { limit: r, total: a.total, offset: Z };
    });
  }, B = () => P ? Object.keys(P).length == 0 : !1, x = (t) => {
    H((r) => (setTimeout(() => {
      o.onDataChange && o.onDataChange(t, r);
    }, 300), t));
  };
  K(() => {
    if (w.current) {
      w.current = !1;
      return;
    }
    (l || !B()) && L();
  }, [f, F, i]);
  const V = () => ({
    sortOrder: F && Object.keys(F).length > 0 ? F : v,
    total: !0,
    endPointVars: i,
    ...f,
    filter: { ...P, ...y }
  }), L = () => {
    const t = V();
    if (s)
      try {
        s.query(t).then((r) => {
          x(r.result), u(r.total);
        }).catch((r) => {
          var a = r.response ? r.response : r;
          console.error("error while fetching", a), J();
        });
      } catch (r) {
        console.error(r), N();
      }
    else
      console.error("Store is not provided for the Grid"), N();
  }, N = () => {
    x([]), u(0);
  }, J = () => {
    x(void 0), u(null);
  }, U = (t) => {
    const r = e;
    h(t ? (a) => (a[r] = t, { ...a }) : (a) => (delete a[r], { ...a })), d(0);
  }, b = (t) => {
    typeof t == "function" || t && Object.keys(t).length > 0 ? h(t) : h({}), d(0);
  }, W = (t, r) => {
    h((a) => (a[t] = r, { ...a })), d(0);
  }, X = () => {
    b({});
  }, k = (t) => {
    A(t);
  }, Y = () => S() < Q() ? (d(S() + 1), !0) : !1, Q = () => Math.ceil(n / (f.limit || 25));
  return {
    addFilter: W,
    resetFilter: X,
    setFilter: b,
    setQuickSearch: U,
    setSortColumns: k,
    setEndPointOptions: c,
    getTotalPages: Q,
    refresh: L,
    setPageSize: I,
    getPageNo: S,
    getQueryLimit: q,
    setQueryLimit: E,
    gotoPage: d,
    nextPage: Y,
    prevPage: () => {
      const t = S();
      return t > 0 ? (d(t - 1), !0) : !1;
    },
    export: (t) => {
      s.export ? s.export(t) : console.warn("Store does not implement export method");
    },
    getQueryRequest: V,
    setSortOptions: k,
    getCurrentFilter: () => P,
    getTotalRecords: () => n,
    getCurrentData: () => _
  };
}, Rt = D(function(e, s) {
  const { Child: l, childProps: i } = e, c = s || C(null), n = at(e), u = e.listKeyProvider || ((y, v) => v);
  return O(c, () => ({
    ...n
  }), [n]), /* @__PURE__ */ g("div", { children: /* @__PURE__ */ g("div", { className: "card-page-container", children: /* @__PURE__ */ g(
    p,
    {
      Child: l,
      childKeyProvider: u,
      preProcess: e.preProcess,
      dataList: n.getCurrentData(),
      childProps: i,
      EmptyChild: e.EmptyChild,
      Loading: e.Loading
    }
  ) }) });
});
export {
  Ct as P,
  Rt as S,
  vt as a,
  at as u
};
