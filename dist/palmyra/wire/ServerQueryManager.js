import { useState as i, useRef as H, useEffect as I, useContext as J } from "react";
import { useKeyValue as U } from "../utils/pubsub/PubSubHelper.js";
import "../form/PalmyraForm.js";
import { StoreFactoryContext as W } from "../form/formContext.js";
import "../form/validator/validatorHelper.js";
import "../../chunks/NoopConverter.js";
import "dayjs";
import "../../chunks/SimpleTextField.js";
function X(r) {
  if (r.endPoint) {
    const c = J(W);
    if (!c)
      throw new Error("@palmyralabs/rt-forms - StoreFactoryContext is not available");
    return c.getGridStore(r.endPointOptions, r.endPoint);
  } else
    throw new Error("Either store or endPoint must be provided");
}
const it = (r) => {
  var p, D;
  const { quickSearch: c } = r, P = r.store || X(r), T = r.fetchAll != !1, [S, w] = i(r.endPointOptions), [F, m] = i(null), d = ((p = r.defaultParams) == null ? void 0 : p.filter) || {}, x = ((D = r.defaultParams) == null ? void 0 : D.sort) || {}, [l, a] = r.filterTopic ? U(r.filterTopic, d) : i(d), [u, N] = i({}), O = H(r.initialFetch == !1), g = r.pageSize ? r.pageSize : 15;
  var Q = g instanceof Array ? g[0] : g;
  const [n, h] = i({ limit: Q, offset: 0, total: !0 }), [j, z] = i(null), f = () => Math.round(n.offset / n.limit), A = () => n, s = (t) => {
    h((e) => ({ limit: e.limit, total: e.total, offset: t * e.limit }));
  }, G = (t) => {
    const e = t > 10 || t == -1 ? t : 15;
    h((o) => {
      const B = Math.floor(o.offset / e) * e;
      return { limit: e, total: o.total, offset: B };
    });
  }, L = () => l ? Object.keys(l).length == 0 : !1, y = (t) => {
    z((e) => (setTimeout(() => {
      r.onDataChange && r.onDataChange(t, e);
    }, 300), t));
  };
  I(() => {
    if (O.current) {
      O.current = !1;
      return;
    }
    (T || !L()) && C();
  }, [n, u, S]);
  const v = () => ({
    sortOrder: u && Object.keys(u).length > 0 ? u : x,
    total: !0,
    endPointVars: S,
    ...n,
    filter: { ...l, ...d }
  }), C = () => {
    const t = v();
    if (P)
      try {
        P.query(t).then((e) => {
          y(e.result), m(e.total);
        }).catch((e) => {
          var o = e.response ? e.response : e;
          console.error("error while fetching", o), M();
        });
      } catch (e) {
        console.error(e), E();
      }
    else
      console.error("Store is not provided for the Grid"), E();
  }, E = () => {
    y([]), m(0);
  }, M = () => {
    y(void 0), m(null);
  }, _ = (t) => {
    const e = c;
    a(t ? (o) => (o[e] = t, { ...o }) : (o) => (delete o[e], { ...o })), s(0);
  }, R = (t) => {
    typeof t == "function" || t && Object.keys(t).length > 0 ? a(t) : a({}), s(0);
  }, V = (t, e) => {
    a((o) => (o[t] = e, { ...o })), s(0);
  }, q = () => {
    R({});
  }, b = (t) => {
    N(t);
  }, K = () => f() < k() ? (s(f() + 1), !0) : !1, k = () => Math.ceil(F / (n.limit || 25));
  return {
    addFilter: V,
    resetFilter: q,
    setFilter: R,
    setQuickSearch: _,
    setSortColumns: b,
    setEndPointOptions: w,
    getTotalPages: k,
    refresh: C,
    setPageSize: G,
    getPageNo: f,
    getQueryLimit: A,
    setQueryLimit: h,
    gotoPage: s,
    nextPage: K,
    prevPage: () => {
      const t = f();
      return t > 0 ? (s(t - 1), !0) : !1;
    },
    getQueryRequest: v,
    setSortOptions: b,
    getCurrentFilter: () => l,
    getTotalRecords: () => F,
    getCurrentData: () => j
  };
};
export {
  it as useServerQuery
};
