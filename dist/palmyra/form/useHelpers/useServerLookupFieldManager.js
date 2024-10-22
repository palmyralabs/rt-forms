import { useRef as b, useState as R, useEffect as F, useContext as W } from "react";
import { StoreFactoryContext as B } from "../formContext.js";
import { useFieldManager as E } from "./useFieldManager.js";
import { getValueAccessor as x } from "@palmyralabs/ts-utils";
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
import { getOptionIdKey as H, getOptionValueKey as J, generateFieldAccessor as N, generateFieldWriter as U } from "./ServerLookupCustomizer.js";
const X = (o, e) => {
  const s = x(H(o)), i = x(J(o)), n = (r) => typeof r == "object" ? s(r) : (console.error("getOptionKey", r), ""), u = (r) => typeof r == "object" ? i(r) : (r != "" && console.error("getOptionValue", r), ""), a = N(o), m = U(o, { getOptionKey: n, getOptionValue: u });
  var c = {
    fieldAccessor: a,
    fieldWriter: m
  };
  return e && (e.format && (c.format = e.format), e.parse && (c.parse = e.parse)), { customizer: c, optionIdAccessor: s, getOptionKey: n, getOptionValue: u };
}, be = (o, e, s) => {
  var A, S, q;
  const i = b(0), n = b(""), [u, a] = R([]), m = (s == null ? void 0 : s.preProcessSearchText) || ((t) => "*" + t + "*"), { customizer: c, optionIdAccessor: r, getOptionKey: P, getOptionValue: v } = X(e, s), g = E(o, e, c), V = Y(e), k = () => {
    const {
      lookupOptions: t,
      storeOptions: f,
      queryOptions: d,
      displayAttribute: Z,
      fetchDefault: _,
      defaultParams: $,
      ...M
    } = g.getFieldProps();
    return M;
  }, K = ((A = e.queryOptions) == null ? void 0 : A.queryAttribute) || ((S = e.queryOptions) == null ? void 0 : S.labelAttribute) || "name", z = {
    store: V,
    storeOptions: (q = e.queryOptions) == null ? void 0 : q.storeOptions,
    fetchAll: !0,
    pageSize: e.pageSize || 15,
    quickSearch: K,
    initialFetch: !1,
    defaultParams: e.defaultParams
  }, T = G(z), C = (t, f) => r(t) == r(f);
  function I(t, f) {
    return t.find((d) => {
      if (r(d) == f)
        return d;
    });
  }
  const { setQuickSearch: O, refresh: L, getCurrentData: Q, getTotalRecords: j } = T, p = Q(), y = j();
  F(() => {
    const t = p ? [...p] : [];
    a(t), i.current < y && (i.current = y);
  }, [p, y]);
  const l = g.getValue();
  F(() => {
    l && typeof l == "object" && a([l]);
  }, [l]);
  const D = (t) => {
    n.current = t || "", h();
  };
  function h() {
    const t = n.current;
    t.length > 0 ? O(m(t)) : p ? O(null) : L();
  }
  return {
    ...g,
    setSearchText: D,
    refreshOptions: h,
    options: u,
    hasValueInOptions: C,
    getOptionValue: v,
    getOptionByKey: I,
    getOptionKey: P,
    getFieldProps: k
  };
};
function Y(o) {
  var n;
  const e = W(B), s = ((n = o.queryOptions) == null ? void 0 : n.queryAttribute) || "name";
  var i = {};
  return w(i, o.queryOptions), e.getLookupStore(i, o.queryOptions.endPoint, s);
}
export {
  be as useServerLookupFieldManager
};
