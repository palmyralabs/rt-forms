import { useRef as f, useState as F, useEffect as R, useContext as k } from "react";
import { StoreFactoryContext as v } from "../formContext.js";
import { useFieldManager as Q } from "./useFieldManager.js";
import { useServerQuery as T } from "../../wire/ServerQueryManager.js";
import { mergeDeep as C } from "../../utils/ObjectUtils.js";
const J = (r, t, o) => {
  const s = f(0), a = f(""), [m, i] = F([]), y = o?.preProcessSearchText || ((e) => "*" + e + "*"), c = Q(r, t, o), q = D(t), d = () => {
    const {
      lookupOptions: e,
      storeOptions: M,
      queryOptions: z,
      displayAttribute: L,
      fetchDefault: E,
      defaultParams: j,
      ...A
    } = c.getFieldProps();
    return A;
  }, g = t.queryOptions?.queryAttribute || t.queryOptions?.labelAttribute || "name", O = {
    store: q,
    storeOptions: t.queryOptions?.storeOptions,
    fetchAll: !0,
    initParams: t.initParams,
    pageSize: t.pageSize || 15,
    quickSearch: g,
    initialFetch: !1,
    defaultParams: t.defaultParams,
    transformRequest: t.transformRequest,
    transformResult: t.transformResult
  }, S = T(O), { setQuickSearch: p, refresh: h, getCurrentData: P, getTotalRecords: x } = S, n = P(), u = x();
  R(() => {
    const e = n ? [...n] : [];
    i(e), s.current < u && (s.current = u);
  }, [n, u]);
  const b = (e) => {
    a.current = e || "", l();
  };
  function l() {
    const e = a.current;
    e.length > 0 ? p(y(e)) : n ? p(null) : h();
  }
  return {
    ...c,
    setSearchText: b,
    refreshOptions: l,
    options: m,
    setOptions: i,
    getFieldProps: d
  };
};
function D(r) {
  const t = k(v), o = r.queryOptions?.queryAttribute || "name";
  var s = {};
  return C(s, r.queryOptions), t.getLookupStore(s, r.queryOptions.endPoint, o);
}
export {
  J as useServerQueryFieldManager
};
