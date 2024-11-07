import { useRef as d, useState as Q, useEffect as T, useContext as C } from "react";
import { StoreFactoryContext as D } from "../formContext.js";
import { useFieldManager as M } from "./useFieldManager.js";
import "@palmyralabs/ts-utils";
import { mergeDeep as R } from "../../utils/ObjectUtils.js";
import "../PalmyraForm.js";
import "@palmyralabs/ts-predicates";
import { u as z } from "../../../chunks/ServerCardLayout.js";
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
import "../../acl/AclAPIEditor.js";
const at = (o, t, r) => {
  var l, f, y;
  const s = d(0), i = d(""), [g, p] = Q([]), S = (r == null ? void 0 : r.preProcessSearchText) || ((e) => "*" + e + "*"), a = M(o, t, r), h = L(t), q = () => {
    const {
      lookupOptions: e,
      storeOptions: E,
      queryOptions: j,
      displayAttribute: w,
      fetchDefault: B,
      defaultParams: G,
      ...v
    } = a.getFieldProps();
    return v;
  }, O = ((l = t.queryOptions) == null ? void 0 : l.queryAttribute) || ((f = t.queryOptions) == null ? void 0 : f.labelAttribute) || "name", x = {
    store: h,
    storeOptions: (y = t.queryOptions) == null ? void 0 : y.storeOptions,
    fetchAll: !0,
    pageSize: t.pageSize || 15,
    quickSearch: O,
    initialFetch: !1,
    defaultParams: t.defaultParams
  }, P = z(x), { setQuickSearch: c, refresh: b, getCurrentData: A, getTotalRecords: F } = P, n = A(), u = F();
  T(() => {
    const e = n ? [...n] : [];
    p(e), s.current < u && (s.current = u);
  }, [n, u]);
  const k = (e) => {
    i.current = e || "", m();
  };
  function m() {
    const e = i.current;
    e.length > 0 ? c(S(e)) : n ? c(null) : b();
  }
  return {
    ...a,
    setSearchText: k,
    refreshOptions: m,
    options: g,
    setOptions: p,
    getFieldProps: q
  };
};
function L(o) {
  var i;
  const t = C(D), r = ((i = o.queryOptions) == null ? void 0 : i.queryAttribute) || "name";
  var s = {};
  return R(s, o.queryOptions), t.getLookupStore(s, o.queryOptions.endPoint, r);
}
export {
  at as useServerQueryFieldManager
};
