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
import "../../layout/card/CardLayout.js";
import { getOptionIdKey as H, getOptionValueKey as J, generateFieldAccessor as N, generateFieldWriter as U } from "./ServerLookupCustomizer.js";
const X = (t, e) => {
  const s = v(H(t)), i = v(J(t)), r = (o) => typeof o == "object" ? s(o) : (console.log(o), ""), c = (o) => typeof o == "object" ? i(o) : (o != "" && console.log(o), ""), g = N(t), u = U(t, { getOptionKey: r, getOptionValue: c });
  var a = {
    fieldAccessor: g,
    fieldWriter: u
  };
  return e && (e.format && (a.format = e.format), e.parse && (a.parse = e.parse)), { customizer: a, optionIdAccessor: s, getOptionKey: r, getOptionValue: c };
}, fe = (t, e, s) => {
  var b, q, F;
  const i = R(0), [r, c] = P(""), [g, u] = P([]), a = (s == null ? void 0 : s.preProcessSearchText) || ((n) => "*" + n + "*"), { customizer: o, optionIdAccessor: y, getOptionKey: x, getOptionValue: k } = X(e, s), m = E(t, e, o), K = Y(e), z = () => {
    const {
      lookupOptions: n,
      storeOptions: f,
      displayAttribute: h,
      fetchDefault: Z,
      defaultParams: _,
      ...M
    } = m.getFieldProps();
    return M;
  }, T = ((b = e.queryOptions) == null ? void 0 : b.queryAttribute) || ((q = e.queryOptions) == null ? void 0 : q.labelAttribute) || "name", V = {
    store: K,
    storeOptions: (F = e.queryOptions) == null ? void 0 : F.storeOptions,
    fetchAll: !0,
    pageSize: e.pageSize || 15,
    quickSearch: T,
    initialFetch: !1,
    defaultParams: e.defaultParams
  }, C = G(V), I = (n, f) => y(n) == y(f);
  function L(n, f) {
    return n.find((h) => {
      if (y(h) == f)
        return h;
    });
  }
  const { setQuickSearch: A, refresh: Q, getCurrentData: j, getTotalRecords: D } = C, l = j(), d = D();
  S(() => {
    const n = l ? [...l] : [];
    u(n), i.current < d && (i.current = d);
  }, [l, d]);
  const p = m.getValue();
  S(() => {
    p && typeof p == "object" && u([p]);
  }, [p]), S(() => {
    O();
  }, [r]);
  function O() {
    r.length > 0 ? A(a(r)) : l ? A(null) : Q();
  }
  return {
    ...m,
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
  fe as useServerLookupFieldManager
};
