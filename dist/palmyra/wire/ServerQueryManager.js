import { useState as i, useRef as V, useEffect as _ } from "react";
import { useKeyValue as w } from "../utils/pubsub/PubSubHelper.js";
const G = (r) => {
  var F, N;
  const { store: s, quickSearch: l } = r, u = r.fetchAll != !1, [f, g] = i(r.endPointOptions), [Q, n] = i(null), d = ((F = r.defaultParams) == null ? void 0 : F.filter) || {}, T = ((N = r.defaultParams) == null ? void 0 : N.sort) || {}, [m, y] = r.filterTopic ? w(r.filterTopic, d) : i(d), [h, b] = i({}), v = V(r.initialFetch == !1), a = r.pageSize ? r.pageSize : 15;
  var z = a instanceof Array ? a : [a], A = a instanceof Array ? a[0] : a;
  const [c, P] = i({ limit: A, offset: 0, total: !0 }), [C, E] = i(null), L = () => Math.round(c.offset / c.limit), j = () => c, S = (e) => {
    P((t) => ({ limit: t.limit, total: t.total, offset: e * t.limit }));
  }, q = (e) => {
    const t = e > 10 || e == -1 ? e : 15;
    P((o) => {
      const x = Math.floor(o.offset / t) * t;
      return { limit: t, total: o.total, offset: x };
    });
  }, M = () => m ? Object.keys(m).length == 0 : !1, O = (e) => {
    E((t) => (setTimeout(() => {
      r.onDataChange && r.onDataChange(e, t);
    }, 300), e));
  };
  _(() => {
    if (v.current) {
      v.current = !1;
      return;
    }
    (u || !M()) && R();
  }, [c, h, f]);
  const k = () => ({
    sortOrder: h && Object.keys(h).length > 0 ? h : T,
    total: !0,
    endPointVars: f,
    ...c,
    filter: { ...m, ...d }
  }), R = () => {
    const e = k();
    if (s)
      try {
        s.query(e).then((t) => {
          O(t.result), n(t.total);
        }).catch((t) => {
          var o = t.response ? t.response : t;
          console.error("error while fetching", o), p();
        });
      } catch (t) {
        console.error(t), D();
      }
    else
      console.error("Store is not provided for the Grid"), D();
  }, D = () => {
    O([]), n(0);
  }, p = () => {
    O(void 0), n(null);
  };
  return {
    setQueryFilter: (e) => {
      typeof e == "function" || e && Object.keys(e).length > 0 ? y(e) : y({}), S(0);
    },
    setQuickSearch: (e) => {
      const t = l;
      y(e ? (o) => (o[t] = e, { ...o }) : (o) => (delete o[t], { ...o })), S(0);
    },
    setSortColumns: (e) => {
      b(e);
    },
    setEndPointOptions: g,
    refreshData: R,
    gotoPage: S,
    setPageSize: q,
    getPageNo: L,
    getQueryLimit: j,
    setQueryLimit: P,
    getQueryRequest: k,
    filter: m,
    queryLimit: c,
    data: C,
    totalRecords: Q,
    pageSizeOptions: z
  };
}, U = (r) => {
  const s = G(r), { getPageNo: l, gotoPage: u } = s, f = () => l() < g() ? (u(l() + 1), !0) : !1, g = () => Math.ceil(s.totalRecords / s.queryLimit.limit);
  return { ...s, nextPage: f, prevPage: () => {
    const n = l();
    return n > 0 ? (u(n - 1), !0) : !1;
  }, getTotalPages: g };
};
export {
  U as usePageableServerQuery,
  G as useServerQuery
};
