import { useRef as R, useState as P, useEffect as O, useContext as W } from "react";
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
import { getOptionIdKey as H, getOptionValueKey as J, generateFieldAccessor as N, generateFieldWriter as U } from "./ServerLookupCustomizer.js";
const X = (t, e) => {
  const s = v(H(t)), i = v(J(t)), r = (o) => typeof o == "object" ? s(o) : (console.log(o), ""), c = (o) => typeof o == "object" ? i(o) : (o != "" && console.log(o), ""), m = N(t), u = U(t, { getOptionKey: r, getOptionValue: c });
  var a = {
    fieldAccessor: m,
    fieldWriter: u
  };
  return e && (e.format && (a.format = e.format), e.parse && (a.parse = e.parse)), { customizer: a, optionIdAccessor: s, getOptionKey: r, getOptionValue: c };
}, he = (t, e, s) => {
  var A, b, F;
  const i = R(0), [r, c] = P(""), [m, u] = P([]), a = (s == null ? void 0 : s.preProcessSearchText) || ((n) => "*" + n + "*"), { customizer: o, optionIdAccessor: g, getOptionKey: x, getOptionValue: k } = X(e, s), y = E(t, e, o), K = Y(e), z = () => {
    const {
      lookupOptions: n,
      storeOptions: f,
      queryOptions: h,
      displayAttribute: Z,
      fetchDefault: _,
      defaultParams: $,
      ...M
    } = y.getFieldProps();
    return M;
  }, T = ((A = e.queryOptions) == null ? void 0 : A.queryAttribute) || ((b = e.queryOptions) == null ? void 0 : b.labelAttribute) || "name", V = {
    store: K,
    storeOptions: (F = e.queryOptions) == null ? void 0 : F.storeOptions,
    fetchAll: !0,
    pageSize: e.pageSize || 15,
    quickSearch: T,
    initialFetch: !1,
    defaultParams: e.defaultParams
  }, C = G(V), I = (n, f) => g(n) == g(f);
  function L(n, f) {
    return n.find((h) => {
      if (g(h) == f)
        return h;
    });
  }
  const { setQuickSearch: S, refresh: Q, getCurrentData: j, getTotalRecords: D } = C, p = j(), d = D();
  O(() => {
    const n = p ? [...p] : [];
    u(n), i.current < d && (i.current = d);
  }, [p, d]);
  const l = y.getValue();
  O(() => {
    l && typeof l == "object" && u([l]);
  }, [l]), O(() => {
    q();
  }, [r]);
  function q() {
    r.length > 0 ? S(a(r)) : p ? S(null) : Q();
  }
  return {
    ...y,
    searchText: r,
    setSearchText: c,
    refreshOptions: q,
    options: m,
    hasValueInOptions: I,
    getOptionValue: k,
    getOptionByKey: L,
    getOptionKey: x,
    getFieldProps: z
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
