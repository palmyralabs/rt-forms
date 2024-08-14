import { jsx as E } from "react/jsx-runtime";
import { useState as c, useRef as Q, useEffect as J, useContext as U, forwardRef as W, useImperativeHandle as X } from "react";
import Y from "../palmyra/layout/card/CardLayout.js";
import { useKeyValue as Z } from "../palmyra/utils/pubsub/PubSubHelper.js";
import "../palmyra/form/PalmyraForm.js";
import { StoreFactoryContext as $ } from "../palmyra/form/formContext.js";
import "./SimplePredicates.js";
import "./NoopConverter.js";
import "dayjs";
function tt(r) {
  if (r.endPoint) {
    const n = U($);
    if (!n)
      throw new Error("@palmyralabs/rt-forms - StoreFactoryContext is not available");
    return n.getGridStore(r.endPointOptions, r.endPoint);
  } else
    throw new Error("Either store or endPoint must be provided");
}
const et = (r) => {
  var L, N;
  const { quickSearch: n } = r, l = r.store || tt(r), P = r.fetchAll != !1, [d, S] = c(r.endPointOptions), [s, u] = c(null), m = ((L = r.defaultParams) == null ? void 0 : L.filter) || {}, v = ((N = r.defaultParams) == null ? void 0 : N.sort) || {}, [g, f] = r.filterTopic ? Z(r.filterTopic, m) : c(m), [h, T] = c({}), R = Q(r.initialFetch == !1), C = r.pageSize ? r.pageSize : 15;
  var j = C instanceof Array ? C[0] : C;
  const [i, F] = c({ limit: j, offset: 0, total: !0 }), [K, M] = c(null), y = () => Math.round(i.offset / i.limit), z = () => i, a = (t) => {
    F((e) => ({ limit: e.limit, total: e.total, offset: t * e.limit }));
  }, A = (t) => {
    const e = t > 10 || t == -1 ? t : 15;
    F((o) => {
      const B = Math.floor(o.offset / e) * e;
      return { limit: e, total: o.total, offset: B };
    });
  }, G = () => g ? Object.keys(g).length == 0 : !1, O = (t) => {
    M((e) => (setTimeout(() => {
      r.onDataChange && r.onDataChange(t, e);
    }, 300), t));
  };
  J(() => {
    if (R.current) {
      R.current = !1;
      return;
    }
    (P || !G()) && b();
  }, [i, h, d]);
  const D = () => ({
    sortOrder: h && Object.keys(h).length > 0 ? h : v,
    total: !0,
    endPointVars: d,
    ...i,
    filter: { ...g, ...m }
  }), b = () => {
    const t = D();
    if (l)
      try {
        l.query(t).then((e) => {
          O(e.result), u(e.total);
        }).catch((e) => {
          var o = e.response ? e.response : e;
          console.error("error while fetching", o), _();
        });
      } catch (e) {
        console.error(e), k();
      }
    else
      console.error("Store is not provided for the Grid"), k();
  }, k = () => {
    O([]), u(0);
  }, _ = () => {
    O(void 0), u(null);
  }, V = (t) => {
    const e = n;
    f(t ? (o) => (o[e] = t, { ...o }) : (o) => (delete o[e], { ...o })), a(0);
  }, p = (t) => {
    typeof t == "function" || t && Object.keys(t).length > 0 ? f(t) : f({}), a(0);
  }, q = (t, e) => {
    f((o) => (o[t] = e, { ...o })), a(0);
  }, H = () => {
    p({});
  }, w = (t) => {
    T(t);
  }, I = () => y() < x() ? (a(y() + 1), !0) : !1, x = () => Math.ceil(s / (i.limit || 25));
  return {
    addFilter: q,
    resetFilter: H,
    setFilter: p,
    setQuickSearch: V,
    setSortColumns: w,
    setEndPointOptions: S,
    getTotalPages: x,
    refresh: b,
    setPageSize: A,
    getPageNo: y,
    getQueryLimit: z,
    setQueryLimit: F,
    gotoPage: a,
    nextPage: I,
    prevPage: () => {
      const t = y();
      return t > 0 ? (a(t - 1), !0) : !1;
    },
    getQueryRequest: D,
    setSortOptions: w,
    getCurrentFilter: () => g,
    getTotalRecords: () => s,
    getCurrentData: () => K
  };
}, dt = W(function(n, l) {
  const { Child: P, childProps: d } = n, S = l || Q(null), s = et(n), u = n.listKeyProvider || ((m, v) => v);
  return X(S, () => ({
    ...s
  }), [s]), /* @__PURE__ */ E("div", { children: /* @__PURE__ */ E("div", { className: "card-page-container", children: /* @__PURE__ */ E(
    Y,
    {
      Child: P,
      childKeyProvider: u,
      preProcess: n.preProcess,
      dataList: s.getCurrentData(),
      childProps: d,
      EmptyChild: n.EmptyChild
    }
  ) }) });
});
export {
  dt as S,
  et as u
};
