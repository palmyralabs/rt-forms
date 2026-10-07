import { useRef as J, useState as l, useEffect as W, useContext as X } from "react";
import { useKeyValue as Z } from "../utils/pubsub/PubSubHelper.js";
import { StoreFactoryContext as $ } from "../form/formContext.js";
const p = 120;
function tt(r) {
  if (r.endPoint) {
    const c = X($);
    if (!c)
      throw new Error("@palmyralabs/rt-forms - StoreFactoryContext is not available");
    return c.getGridStore(r.storeOptions, r.endPoint);
  } else
    throw new Error("Either store or endPoint must be provided");
}
const it = (r) => {
  const { quickSearch: c, initialFetch: T = !0 } = r, u = J(null), f = r.store || tt(r), C = r.fetchAll != !1, R = r.defaultParams?.filter || {}, Q = r.defaultParams?.sort || {}, h = r.pageSize ? r.pageSize : 15;
  var _ = h instanceof Array ? h[0] : h;
  const b = r.initParams?.filter || {}, k = r.initParams?.limit || _, M = r.initParams?.offset || 0, q = r.initParams?.sort || {}, v = { ...b, ...R }, [m, i] = r.filterTopic ? Z(r.filterTopic, v) : l(v), [w, N] = l(r.storeOptions?.endPointOptions), [d, A] = l(q), [n, y] = l({ limit: k, offset: M, total: !0 }), [a, x] = l({ total: null, isLoading: !1, data: null }), s = (e) => {
    y((t) => ({ limit: t.limit, total: t.total, offset: e * t.limit }));
  }, j = (e) => {
    const t = e > 0 || e == -1 ? e : 15;
    y((o) => {
      const g = Math.floor(o.offset / t) * t;
      return { limit: t, total: o.total, offset: g };
    });
  }, z = () => m ? Object.keys(m).length == 0 : !1, P = (e, t) => {
    x((o) => (setTimeout(() => {
      r.onDataChange && r.onDataChange(e, o.data);
    }, 100), { data: e, total: t, isLoading: !1 }));
  }, D = () => P([], 0), G = () => P(void 0, null), V = () => L({}), S = () => Math.round(n.offset / n.limit), Y = () => n, I = () => {
    x((e) => ({ ...e, isLoading: !0 }));
  };
  W(() => {
    (C || !z()) && E();
  }, [n, d, w]);
  const F = () => {
    const t = {
      sortOrder: d && Object.keys(d).length > 0 ? d : Q,
      total: !0,
      endPointVars: w,
      ...n,
      filter: { ...m, ...R }
    };
    return r.transformRequest && (t.transformRequest = r.transformRequest), r.transformResult && (t.transformResult = r.transformResult), t;
  }, E = () => {
    const e = F();
    if (u.current != null) {
      const t = /* @__PURE__ */ new Date(), o = u.current, g = t.getTime() - o.getTime();
      if (g < p) {
        a.isLoading || console.warn("ServerQueryManager: refresh called within short interval" + g);
        return;
      }
    } else if (!T) {
      u.current = new Date((/* @__PURE__ */ new Date()).getTime() - 6e4);
      return;
    }
    if (f)
      try {
        u.current = /* @__PURE__ */ new Date(), I(), f.query(e).then((t) => {
          P(t.result, t.total);
        }).catch((t) => {
          var o = t.response ? t.response : t;
          console.error("error while fetching", o), G();
        });
      } catch (t) {
        console.error(t), D();
      }
    else
      console.error("Store is not provided for the Grid"), D();
  }, K = (e) => {
    const t = c;
    i(e ? (o) => (o[t] = e, { ...o }) : (o) => (delete o[t], { ...o })), s(0);
  }, L = (e) => {
    typeof e == "function" || e && Object.keys(e).length > 0 ? i(e) : i({}), s(0);
  }, U = (e, t) => {
    i((o) => (o[e] = t, { ...o })), s(0);
  }, B = (e) => {
    A(e);
  }, H = () => {
    const e = S();
    if (e < O()) {
      const t = e + 1;
      return s(t), t;
    }
    return -1;
  }, O = () => Math.ceil(a?.total / (n.limit || 25));
  return {
    addFilter: U,
    resetFilter: V,
    setFilter: L,
    setQuickSearch: K,
    setSortColumns: B,
    setEndPointOptions: N,
    getTotalPages: O,
    refresh: E,
    setPageSize: j,
    getPageNo: S,
    getQueryLimit: Y,
    setQueryLimit: y,
    gotoPage: s,
    nextPage: H,
    prevPage: () => {
      const e = S();
      if (e > 0) {
        const t = e - 1;
        return s(t), t;
      }
      return -1;
    },
    export: (e) => {
      f.export ? f.export(e) : console.warn("Store does not implement export method");
    },
    getQueryRequest: F,
    getCurrentFilter: () => m,
    getTotalRecords: () => a?.total,
    getCurrentData: () => a?.data,
    isLoading: a.isLoading
  };
};
export {
  it as useServerQuery
};
