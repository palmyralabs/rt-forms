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
import "react-accessible-treeview";
import "classnames";
import "../../../chunks/index.js";
import "react-router-dom";
import "../../menu/AsyncTreeMenuEditor.js";
import "@mui/icons-material";
import { getOptionIdKey as H, getOptionValueKey as J, generateFieldAccessor as N, generateFieldWriter as U } from "./ServerLookupCustomizer.js";
const X = (t, e) => {
  const s = v(H(t)), n = v(J(t)), r = (o) => typeof o == "object" ? s(o) : (console.error("getOptionKey", o), ""), c = (o) => typeof o == "object" ? n(o) : (o != "" && console.error("getOptionValue", o), ""), m = N(t), u = U(t, { getOptionKey: r, getOptionValue: c });
  var a = {
    fieldAccessor: m,
    fieldWriter: u
  };
  return e && (e.format && (a.format = e.format), e.parse && (a.parse = e.parse)), { customizer: a, optionIdAccessor: s, getOptionKey: r, getOptionValue: c };
}, Fe = (t, e, s) => {
  var q, b, F;
  const n = R(0), [r, c] = P(""), [m, u] = P([]), a = (s == null ? void 0 : s.preProcessSearchText) || ((i) => "*" + i + "*"), { customizer: o, optionIdAccessor: g, getOptionKey: x, getOptionValue: V } = X(e, s), y = E(t, e, o), k = Y(e), K = () => {
    const {
      lookupOptions: i,
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
  }, C = G(T), I = (i, f) => g(i) == g(f);
  function L(i, f) {
    return i.find((O) => {
      if (g(O) == f)
        return O;
    });
  }
  const { setQuickSearch: A, refresh: Q, getCurrentData: j, getTotalRecords: D } = C, p = j(), d = D();
  h(() => {
    const i = p ? [...p] : [];
    u(i), n.current < d && (n.current = d);
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
    options: m,
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
  var n = {};
  return w(n, t.queryOptions), e.getLookupStore(n, t.queryOptions.endPoint, s);
}
export {
  Fe as useServerLookupFieldManager
};
