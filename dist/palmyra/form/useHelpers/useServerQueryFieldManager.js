import { useRef as l, useState as F, useEffect as k, useContext as v } from "react";
import { StoreFactoryContext as Q } from "../formContext.js";
import { u as T, c as C } from "../../../chunks/ServerCardLayout.js";
import "@palmyralabs/ts-utils";
import { mergeDeep as D } from "../../utils/ObjectUtils.js";
import "../PalmyraForm.js";
import "@palmyralabs/ts-predicates";
import "react/jsx-runtime";
import '../../../assets/CardLayout.css';import '../../../assets/FormGroup.css';import '../../../assets/FieldContainer.css';import '../../../assets/FieldGroupContainer.css';/* empty css                                  */
/* empty css                             */
/* empty css                        */
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
const nt = (r, t, s) => {
  const o = l(0), u = l(""), [f, p] = F([]), y = s?.preProcessSearchText || ((e) => "*" + e + "*"), c = T(r, t, s), d = M(t), g = () => {
    const {
      lookupOptions: e,
      storeOptions: R,
      queryOptions: z,
      displayAttribute: L,
      fetchDefault: E,
      defaultParams: j,
      ...A
    } = c.getFieldProps();
    return A;
  }, O = t.queryOptions?.queryAttribute || t.queryOptions?.labelAttribute || "name", S = {
    store: d,
    storeOptions: t.queryOptions?.storeOptions,
    fetchAll: !0,
    pageSize: t.pageSize || 15,
    quickSearch: O,
    initialFetch: !1,
    defaultParams: t.defaultParams
  }, h = C(S), { setQuickSearch: a, refresh: q, getCurrentData: x, getTotalRecords: P } = h, i = x(), n = P();
  k(() => {
    const e = i ? [...i] : [];
    p(e), o.current < n && (o.current = n);
  }, [i, n]);
  const b = (e) => {
    u.current = e || "", m();
  };
  function m() {
    const e = u.current;
    e.length > 0 ? a(y(e)) : i ? a(null) : q();
  }
  return {
    ...c,
    setSearchText: b,
    refreshOptions: m,
    options: f,
    setOptions: p,
    getFieldProps: g
  };
};
function M(r) {
  const t = v(Q), s = r.queryOptions?.queryAttribute || "name";
  var o = {};
  return D(o, r.queryOptions), t.getLookupStore(o, r.queryOptions.endPoint, s);
}
export {
  nt as useServerQueryFieldManager
};
