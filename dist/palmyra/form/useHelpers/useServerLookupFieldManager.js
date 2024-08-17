import { useRef as j, useState as b, useEffect as S, useContext as D } from "react";
import { StoreFactoryContext as M } from "../formContext.js";
import { K as P } from "../../../chunks/accessor.js";
import "../../../chunks/NoopConverter.js";
import "dayjs";
import { useFieldManager as R } from "./useFieldManager.js";
import { mergeDeep as W } from "../../utils/ObjectUtils.js";
import "../PalmyraForm.js";
import "@palmyralabs/ts-predicates";
import { u as B } from "../../../chunks/ServerCardLayout.js";
import "react/jsx-runtime";
import "../../layout/card/CardLayout.js";
import { getOptionIdKey as E, getOptionValueKey as w, generateFieldAccessor as G, generateFieldWriter as H } from "./ServerLookupCustomizer.js";
const J = (t, e) => {
  const o = P(E(t)), n = P(w(t)), i = (r) => typeof r == "object" ? o(r) : (console.log(r), ""), c = (r) => typeof r == "object" ? n(r) : (r != "" && console.log(r), ""), g = G(t), u = H(t, { getOptionKey: i, getOptionValue: c });
  var a = {
    fieldAccessor: g,
    fieldWriter: u
  };
  return e && (e.format && (a.format = e.format), e.parse && (a.parse = e.parse)), { customizer: a, optionIdAccessor: o, getOptionKey: i, getOptionValue: c };
}, ue = (t, e, o) => {
  const n = j(0), [i, c] = b(""), [g, u] = b([]), a = (o == null ? void 0 : o.preProcessSearchText) || ((s) => "*" + s + "*"), { customizer: r, optionIdAccessor: d, getOptionKey: F, getOptionValue: v } = J(e, o), m = R(t, e, r), x = N(e), k = () => {
    const {
      lookupOptions: s,
      storeOptions: f,
      displayAttribute: h,
      fetchDefault: U,
      defaultParams: X,
      ...Q
    } = m.getFieldProps();
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
    return s.find((h) => {
      if (d(h) == f)
        return h;
    });
  }
  const { setQuickSearch: A, refresh: C, getCurrentData: I, getTotalRecords: L } = z, l = I(), y = L();
  S(() => {
    const s = l ? [...l] : [];
    u(s), n.current < y && (n.current = y);
  }, [l, y]);
  const p = m.getValue();
  S(() => {
    p && typeof p == "object" && u([p]);
  }, [p]), S(() => {
    O();
  }, [i]);
  function O() {
    i.length > 0 ? A(a(i)) : l ? A(null) : C();
  }
  return {
    ...m,
    searchText: i,
    setSearchText: c,
    refreshOptions: O,
    options: g,
    hasValueInOptions: T,
    getOptionValue: v,
    getOptionByKey: V,
    getOptionKey: F,
    getFieldProps: k
  };
};
function N(t) {
  const e = D(M), o = t.storeOptions.queryAttribute || "name";
  var n = {};
  return W(n, t.storeOptions), e.getLookupStore(n, t.storeOptions.endPoint, o);
}
export {
  ue as useServerLookupFieldManager
};
