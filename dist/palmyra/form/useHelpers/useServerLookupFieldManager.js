import { useRef as j, useState as b, useEffect as h, useContext as M } from "react";
import { StoreFactoryContext as R } from "../formContext.js";
import { K as F } from "../../../chunks/accessor.js";
import "../../../chunks/NoopConverter.js";
import "dayjs";
import { useFieldManager as D } from "./useFieldManager.js";
import { mergeDeep as W } from "../../utils/ObjectUtils.js";
import "../PalmyraForm.js";
import "../../../chunks/SimplePredicates.js";
import { u as B } from "../../../chunks/ServerCardLayout.js";
import "react/jsx-runtime";
import "../../layout/card/CardLayout.js";
import { getOptionIdKey as E, getOptionValueKey as w, generateFieldAccessor as G, generateFieldWriter as H } from "./ServerLookupCustomizer.js";
const J = (t, e) => {
  const o = F(E(t)), n = F(w(t)), i = (r) => typeof r == "object" ? o(r) : (console.log(r), ""), a = (r) => typeof r == "object" ? n(r) : (r != "" && console.log(r), ""), g = G(t), u = H(t, { getOptionKey: i, getOptionValue: a });
  var c = {
    fieldAccessor: g,
    fieldWriter: u
  };
  return e && (e.format && (c.format = e.format), e.parse && (c.parse = e.parse)), { customizer: c, optionIdAccessor: o, getOptionKey: i, getOptionValue: a };
}, ce = (t, e, o) => {
  const n = j(0), [i, a] = b(""), [g, u] = b([]), c = (o == null ? void 0 : o.preProcessSearchText) || ((s) => "*" + s + "*"), { customizer: r, optionIdAccessor: d, getOptionKey: P, getOptionValue: v } = J(e, o), m = D(t, e, r), x = N(e), k = () => {
    const { lookupOptions: s, storeOptions: f, displayAttribute: S, ...Q } = m.getFieldProps();
    return Q;
  }, K = e.storeOptions.queryAttribute || e.storeOptions.labelAttribute || "name", q = {
    store: x,
    endPointOptions: e.storeOptions.endPointOptions,
    fetchAll: !0,
    pageSize: e.pageSize || 15,
    quickSearch: K,
    initialFetch: !1,
    defaultParams: e.defaultParams
  }, z = B(q), T = (s, f) => d(s) == d(f);
  function V(s, f) {
    return s.find((S) => {
      if (d(S) == f)
        return S;
    });
  }
  const { setQuickSearch: A, refresh: C, getCurrentData: I, getTotalRecords: L } = z, p = I(), y = L();
  h(() => {
    const s = p ? [...p] : [];
    u(s), n.current < y && (n.current = y);
  }, [p, y]);
  const l = m.getValue();
  h(() => {
    l && typeof l == "object" && u([l]);
  }, [l]), h(() => {
    O();
  }, [i]);
  function O() {
    i.length > 0 ? A(c(i)) : p ? A(null) : C();
  }
  return {
    ...m,
    searchText: i,
    setSearchText: a,
    refreshOptions: O,
    options: g,
    hasValueInOptions: T,
    getOptionValue: v,
    getOptionByKey: V,
    getOptionKey: P,
    getFieldProps: k
  };
};
function N(t) {
  const e = M(R), o = t.storeOptions.queryAttribute || "name";
  var n = {};
  return W(n, t.storeOptions), e.getLookupStore(n, t.storeOptions.endPoint, o);
}
export {
  ce as useServerLookupFieldManager
};
