import { useRef as T, useState as b, useEffect as h, useContext as j } from "react";
import { StoreFactoryContext as C } from "../formContext.js";
import { K as F } from "../../../chunks/accessor.js";
import "../../../chunks/NoopConverter.js";
import "dayjs";
import { u as M } from "../../../chunks/SimpleTextField.js";
import { mergeDeep as D } from "../../utils/ObjectUtils.js";
import "../PalmyraForm.js";
import "@palmyralabs/ts-predicates";
import { useServerQuery as R } from "../../wire/ServerQueryManager.js";
import { getOptionIdKey as W, getOptionValueKey as B, generateFieldAccessor as E, generateFieldWriter as w } from "./ServerLookupCustomizer.js";
const G = (t, e) => {
  const o = F(W(t)), n = F(B(t)), i = (r) => typeof r == "object" ? o(r) : (console.log(r), ""), a = (r) => typeof r == "object" ? n(r) : (r != "" && console.log(r), ""), g = E(t), u = w(t, { getOptionKey: i, getOptionValue: a });
  var c = {
    fieldAccessor: g,
    fieldWriter: u
  };
  return e && (e.format && (c.format = e.format), e.parse && (c.parse = e.parse)), { customizer: c, optionIdAccessor: o, getOptionKey: i, getOptionValue: a };
}, oe = (t, e, o) => {
  const n = T(0), [i, a] = b(""), [g, u] = b([]), c = (o == null ? void 0 : o.preProcessSearchText) || ((s) => "*" + s + "*"), { customizer: r, optionIdAccessor: d, getOptionKey: P, getOptionValue: v } = G(e, o), m = M(t, e, r), x = H(e), k = () => {
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
  }, z = R(q), V = (s, f) => d(s) == d(f);
  function I(s, f) {
    return s.find((S) => {
      if (d(S) == f)
        return S;
    });
  }
  const { setQuickSearch: A, refreshData: L, data: p, totalRecords: y } = z;
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
    i.length > 0 ? A(c(i)) : p ? A(null) : L();
  }
  return {
    ...m,
    searchText: i,
    setSearchText: a,
    refreshOptions: O,
    options: g,
    hasValueInOptions: V,
    getOptionValue: v,
    getOptionByKey: I,
    getOptionKey: P,
    getFieldProps: k
  };
};
function H(t) {
  const e = j(C), o = t.storeOptions.queryAttribute || "name";
  var n = {};
  return D(n, t.storeOptions), e.getLookupStore(n, t.storeOptions.endPoint, o);
}
export {
  oe as useServerLookupFieldManager
};
