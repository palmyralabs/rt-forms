import { useRef as l, useState as F, useEffect as R, useContext as k } from "react";
import { StoreFactoryContext as v } from "../formContext.js";
import { u as Q, c as T } from "../../../chunks/ServerCardLayout.js";
import "@palmyralabs/ts-utils";
import { mergeDeep as C } from "../../utils/ObjectUtils.js";
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
const it = (r, t, s) => {
  const o = l(0), u = l(""), [f, p] = F([]), y = s?.preProcessSearchText || ((e) => "*" + e + "*"), a = Q(r, t, s), q = D(t), d = () => {
    const {
      lookupOptions: e,
      storeOptions: M,
      queryOptions: z,
      displayAttribute: L,
      fetchDefault: E,
      defaultParams: j,
      ...A
    } = a.getFieldProps();
    return A;
  }, g = t.queryOptions?.queryAttribute || t.queryOptions?.labelAttribute || "name", O = {
    store: q,
    storeOptions: t.queryOptions?.storeOptions,
    fetchAll: !0,
    pageSize: t.pageSize || 15,
    quickSearch: g,
    initialFetch: !1,
    defaultParams: t.defaultParams,
    transformRequest: t.transformRequest,
    transformResult: t.transformResult
  }, S = T(O), { setQuickSearch: c, refresh: h, getCurrentData: x, getTotalRecords: P } = S, n = x(), i = P();
  R(() => {
    const e = n ? [...n] : [];
    p(e), o.current < i && (o.current = i);
  }, [n, i]);
  const b = (e) => {
    u.current = e || "", m();
  };
  function m() {
    const e = u.current;
    e.length > 0 ? c(y(e)) : n ? c(null) : h();
  }
  return {
    ...a,
    setSearchText: b,
    refreshOptions: m,
    options: f,
    setOptions: p,
    getFieldProps: d
  };
};
function D(r) {
  const t = k(v), s = r.queryOptions?.queryAttribute || "name";
  var o = {};
  return C(o, r.queryOptions), t.getLookupStore(o, r.queryOptions.endPoint, s);
}
export {
  it as useServerQueryFieldManager
};
