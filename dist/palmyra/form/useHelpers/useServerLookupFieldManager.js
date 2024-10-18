import { useRef as R, useState as P, useEffect as h, useContext as W } from "react";
import { StoreFactoryContext as B } from "../formContext.js";
import { useFieldManager as E } from "./useFieldManager.js";
import { getValueAccessor as v } from "@palmyralabs/ts-utils";
import { mergeDeep as w } from "../../utils/ObjectUtils.js";
import "../PalmyraForm.js";
import "@palmyralabs/ts-predicates";
import { u as G } from "../../../chunks/ServerCardLayout.js";
import "react/jsx-runtime";
import '../../../assets/CardLayout.css';import '../../../assets/FieldContainer.css';import '../../../assets/FieldGroupContainer.css';/* empty css                                  */
/* empty css                             */
/* empty css                         */
import "@tanstack/react-table";
import "../../grid/base/utils/ColumnConverter.js";
import "dayjs";
import "../../grid/utils/FormatterFactory.js";
import { getOptionIdKey as H, getOptionValueKey as J, generateFieldAccessor as N, generateFieldWriter as U } from "./ServerLookupCustomizer.js";
const X = (t, e) => {
  const s = v(H(t)), i = v(J(t)), r = (o) => typeof o == "object" ? s(o) : (console.error("getOptionKey", o), ""), c = (o) => typeof o == "object" ? i(o) : (o != "" && console.error("getOptionValue", o), ""), g = N(t), u = U(t, { getOptionKey: r, getOptionValue: c });
  var a = {
    fieldAccessor: g,
    fieldWriter: u
  };
  return e && (e.format && (a.format = e.format), e.parse && (a.parse = e.parse)), { customizer: a, optionIdAccessor: s, getOptionKey: r, getOptionValue: c };
}, Oe = (t, e, s) => {
  var q, b, F;
  const i = R(0), [r, c] = P(""), [g, u] = P([]), a = (s == null ? void 0 : s.preProcessSearchText) || ((n) => "*" + n + "*"), { customizer: o, optionIdAccessor: m, getOptionKey: x, getOptionValue: V } = X(e, s), y = E(t, e, o), k = Y(e), K = () => {
    const {
      lookupOptions: n,
      storeOptions: f,
      queryOptions: O,
      displayAttribute: Z,
      fetchDefault: _,
      defaultParams: $,
      ...M
    } = y.getFieldProps();
    return M;
  }, z = ((q = e.queryOptions) == null ? void 0 : q.queryAttribute) || ((b = e.queryOptions) == null ? void 0 : b.labelAttribute) || "name", T = {
    store: k,
    storeOptions: (F = e.queryOptions) == null ? void 0 : F.storeOptions,
    fetchAll: !0,
    pageSize: e.pageSize || 15,
    quickSearch: z,
    initialFetch: !1,
    defaultParams: e.defaultParams
  }, C = G(T), I = (n, f) => m(n) == m(f);
  function L(n, f) {
    return n.find((O) => {
      if (m(O) == f)
        return O;
    });
  }
  const { setQuickSearch: A, refresh: Q, getCurrentData: j, getTotalRecords: D } = C, p = j(), d = D();
  h(() => {
    const n = p ? [...p] : [];
    u(n), i.current < d && (i.current = d);
  }, [p, d]);
  const l = y.getValue();
  h(() => {
    l && typeof l == "object" && u([l]);
  }, [l]), h(() => {
    S();
  }, [r]);
  function S() {
    r.length > 0 ? A(a(r)) : p ? A(null) : Q();
  }
  return {
    ...y,
    searchText: r,
    setSearchText: c,
    refreshOptions: S,
    options: g,
    hasValueInOptions: I,
    getOptionValue: V,
    getOptionByKey: L,
    getOptionKey: x,
    getFieldProps: K
  };
};
function Y(t) {
  var r;
  const e = W(B), s = ((r = t.queryOptions) == null ? void 0 : r.queryAttribute) || "name";
  var i = {};
  return w(i, t.queryOptions), e.getLookupStore(i, t.queryOptions.endPoint, s);
}
export {
  Oe as useServerLookupFieldManager
};
