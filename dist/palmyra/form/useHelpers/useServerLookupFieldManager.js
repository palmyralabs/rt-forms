import { useRef as R, useState as P, useEffect as h, useContext as W } from "react";
import { StoreFactoryContext as B } from "../formContext.js";
import { useFieldManager as E } from "./useFieldManager.js";
import { K as v } from "../../../chunks/accessor.js";
import "../../../chunks/NoopConverter.js";
import "dayjs";
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
import "../../grid/utils/FormatterFactory.js";
import { getOptionIdKey as H, getOptionValueKey as J, generateFieldAccessor as N, generateFieldWriter as U } from "./ServerLookupCustomizer.js";
const X = (t, e) => {
  const s = v(H(t)), i = v(J(t)), r = (o) => typeof o == "object" ? s(o) : (console.error("getOptionKey", o), ""), u = (o) => typeof o == "object" ? i(o) : (o != "" && console.error("getOptionValue", o), ""), m = N(t), c = U(t, { getOptionKey: r, getOptionValue: u });
  var a = {
    fieldAccessor: m,
    fieldWriter: c
  };
  return e && (e.format && (a.format = e.format), e.parse && (a.parse = e.parse)), { customizer: a, optionIdAccessor: s, getOptionKey: r, getOptionValue: u };
}, he = (t, e, s) => {
  var A, b, F;
  const i = R(0), [r, u] = P(""), [m, c] = P([]), a = (s == null ? void 0 : s.preProcessSearchText) || ((n) => "*" + n + "*"), { customizer: o, optionIdAccessor: y, getOptionKey: x, getOptionValue: K } = X(e, s), g = E(t, e, o), k = Y(e), V = () => {
    const {
      lookupOptions: n,
      storeOptions: l,
      queryOptions: O,
      displayAttribute: Z,
      fetchDefault: _,
      defaultParams: $,
      ...M
    } = g.getFieldProps();
    return M;
  }, z = ((A = e.queryOptions) == null ? void 0 : A.queryAttribute) || ((b = e.queryOptions) == null ? void 0 : b.labelAttribute) || "name", T = {
    store: k,
    storeOptions: (F = e.queryOptions) == null ? void 0 : F.storeOptions,
    fetchAll: !0,
    pageSize: e.pageSize || 15,
    quickSearch: z,
    initialFetch: !1,
    defaultParams: e.defaultParams
  }, C = G(T), I = (n, l) => y(n) == y(l);
  function L(n, l) {
    return n.find((O) => {
      if (y(O) == l)
        return O;
    });
  }
  const { setQuickSearch: S, refresh: Q, getCurrentData: j, getTotalRecords: D } = C, p = j(), d = D();
  h(() => {
    const n = p ? [...p] : [];
    c(n), i.current < d && (i.current = d);
  }, [p, d]);
  const f = g.getValue();
  h(() => {
    f && typeof f == "object" && c([f]);
  }, [f]), h(() => {
    q();
  }, [r]);
  function q() {
    r.length > 0 ? S(a(r)) : p ? S(null) : Q();
  }
  return {
    ...g,
    searchText: r,
    setSearchText: u,
    refreshOptions: q,
    options: m,
    hasValueInOptions: I,
    getOptionValue: K,
    getOptionByKey: L,
    getOptionKey: x,
    getFieldProps: V
  };
};
function Y(t) {
  var r;
  const e = W(B), s = ((r = t.queryOptions) == null ? void 0 : r.queryAttribute) || "name";
  var i = {};
  return w(i, t.queryOptions), e.getLookupStore(i, t.queryOptions.endPoint, s);
}
export {
  he as useServerLookupFieldManager
};
