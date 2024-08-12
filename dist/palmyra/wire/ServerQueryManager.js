import { useState as a, useRef as H, useEffect as I } from "react";
import { useKeyValue as J } from "../utils/pubsub/PubSubHelper.js";
const Y = (o) => {
  var T, C;
  const { store: y, quickSearch: N } = o, Q = o.fetchAll != !1, [P, E] = a(o.endPointOptions), [S, f] = a(null), g = ((T = o.defaultParams) == null ? void 0 : T.filter) || {}, b = ((C = o.defaultParams) == null ? void 0 : C.sort) || {}, [i, c] = o.filterTopic ? J(o.filterTopic, g) : a(g), [l, j] = a({}), O = H(o.initialFetch == !1), m = o.pageSize ? o.pageSize : 15;
  var z = m instanceof Array ? m[0] : m;
  const [s, d] = a({ limit: z, offset: 0, total: !0 }), [A, L] = a(null), u = () => Math.round(s.offset / s.limit), M = () => s, n = (t) => {
    d((e) => ({ limit: e.limit, total: e.total, offset: t * e.limit }));
  }, _ = (t) => {
    const e = t > 10 || t == -1 ? t : 15;
    d((r) => {
      const B = Math.floor(r.offset / e) * e;
      return { limit: e, total: r.total, offset: B };
    });
  }, x = () => i ? Object.keys(i).length == 0 : !1, h = (t) => {
    L((e) => (setTimeout(() => {
      o.onDataChange && o.onDataChange(t, e);
    }, 300), t));
  };
  I(() => {
    if (O.current) {
      O.current = !1;
      return;
    }
    (Q || !x()) && R();
  }, [s, l, P]);
  const F = () => ({
    sortOrder: l && Object.keys(l).length > 0 ? l : b,
    total: !0,
    endPointVars: P,
    ...s,
    filter: { ...i, ...g }
  }), R = () => {
    const t = F();
    if (y)
      try {
        y.query(t).then((e) => {
          h(e.result), f(e.total);
        }).catch((e) => {
          var r = e.response ? e.response : e;
          console.error("error while fetching", r), V();
        });
      } catch (e) {
        console.error(e), k();
      }
    else
      console.error("Store is not provided for the Grid"), k();
  }, k = () => {
    h([]), f(0);
  }, V = () => {
    h(void 0), f(null);
  }, p = (t) => {
    const e = N;
    c(t ? (r) => (r[e] = t, { ...r }) : (r) => (delete r[e], { ...r })), n(0);
  }, v = (t) => {
    typeof t == "function" || t && Object.keys(t).length > 0 ? c(t) : c({}), n(0);
  }, q = (t, e) => {
    c((r) => (r[t] = e, { ...r })), n(0);
  }, w = () => {
    v({});
  }, D = (t) => {
    j(t);
  }, G = () => u() < K() ? (n(u() + 1), !0) : !1, K = () => Math.ceil(S / (s.limit || 25));
  return {
    addFilter: q,
    resetFilter: w,
    setFilter: v,
    setQuickSearch: p,
    setSortColumns: D,
    setEndPointOptions: E,
    refresh: R,
    setPageSize: _,
    getPageNo: u,
    getQueryLimit: M,
    setQueryLimit: d,
    gotoPage: n,
    nextPage: G,
    prevPage: () => {
      const t = u();
      return t > 0 ? (n(t - 1), !0) : !1;
    },
    getQueryRequest: F,
    setSortOptions: D,
    getCurrentFilter: () => i,
    getTotalRecords: () => S,
    getCurrentData: () => A
  };
};
export {
  Y as useServerQuery
};
