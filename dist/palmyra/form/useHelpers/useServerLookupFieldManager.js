import { useRef as R, useState as P, useEffect as S, useContext as W } from "react";
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
import '../../../assets/FieldContainer.css';import '../../../assets/FieldGroupContainer.css';/* empty css                                  */
/* empty css                             */
import "../../layout/card/CardLayout.js";
import { getOptionIdKey as H, getOptionValueKey as J, generateFieldAccessor as N, generateFieldWriter as U } from "./ServerLookupCustomizer.js";
const X = (t, e) => {
  const s = v(H(t)), i = v(J(t)), r = (o) => typeof o == "object" ? s(o) : (console.log(o), ""), c = (o) => typeof o == "object" ? i(o) : (o != "" && console.log(o), ""), g = N(t), u = U(t, { getOptionKey: r, getOptionValue: c });
  var a = {
    fieldAccessor: g,
    fieldWriter: u
  };
  return e && (e.format && (a.format = e.format), e.parse && (a.parse = e.parse)), { customizer: a, optionIdAccessor: s, getOptionKey: r, getOptionValue: c };
}, me = (t, e, s) => {
  var b, q, F;
  const i = R(0), [r, c] = P(""), [g, u] = P([]), a = (s == null ? void 0 : s.preProcessSearchText) || ((n) => "*" + n + "*"), { customizer: o, optionIdAccessor: m, getOptionKey: x, getOptionValue: k } = X(e, s), y = E(t, e, o), K = Y(e), z = () => {
    const {
      lookupOptions: n,
      storeOptions: f,
      displayAttribute: h,
      fetchDefault: Z,
      defaultParams: _,
      ...M
    } = y.getFieldProps();
    return M;
  }, T = ((b = e.queryOptions) == null ? void 0 : b.queryAttribute) || ((q = e.queryOptions) == null ? void 0 : q.labelAttribute) || "name", V = {
    store: K,
    storeOptions: (F = e.queryOptions) == null ? void 0 : F.storeOptions,
    fetchAll: !0,
    pageSize: e.pageSize || 15,
    quickSearch: T,
    initialFetch: !1,
    defaultParams: e.defaultParams
  }, C = G(V), I = (n, f) => m(n) == m(f);
  function L(n, f) {
    return n.find((h) => {
      if (m(h) == f)
        return h;
    });
  }
  const { setQuickSearch: A, refresh: Q, getCurrentData: j, getTotalRecords: D } = C, p = j(), d = D();
  S(() => {
    const n = p ? [...p] : [];
    u(n), i.current < d && (i.current = d);
  }, [p, d]);
  const l = y.getValue();
  S(() => {
    l && typeof l == "object" && u([l]);
  }, [l]), S(() => {
    O();
  }, [r]);
  function O() {
    r.length > 0 ? A(a(r)) : p ? A(null) : Q();
  }
  return {
    ...y,
    searchText: r,
    setSearchText: c,
    refreshOptions: O,
    options: g,
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
  me as useServerLookupFieldManager
};
