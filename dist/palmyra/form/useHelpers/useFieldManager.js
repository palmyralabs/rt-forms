import { useContext as G, useState as x, useCallback as A } from "react";
import { FieldGroupManagerContext as O } from "../formContext.js";
import "../PalmyraForm.js";
import { generatePredicate as D, validate as V } from "../validator/validatorHelper.js";
import { o as c, e as R, i as F } from "../../../chunks/accessor.js";
import "../../../chunks/NoopConverter.js";
import "dayjs";
import '../../../assets/FieldContainer.css';import '../../../assets/FieldGroupContainer.css';import '../../../assets/CardLayout.css';/* empty css                               */
import "react/jsx-runtime";
/* empty css                         */
import "@tanstack/react-table";
import "../../grid/base/utils/ColumnConverter.js";
/* empty css                                  */
/* empty css                             */
const ar = (a, t, s) => {
  const r = G(O);
  if (!r)
    throw Error("useFieldManager must be called within the scope of <PalmyraForm>");
  const [e, P] = x({}), o = { ...t, ...e }, E = A(() => j(a, s), [a])(), C = A(() => q(a, s), [a])(), d = D(o);
  var f = E({}), h = void 0;
  r.hasField(o.attribute) || (f == "" || f == null) && o.defaultValue != null && (f = s != null && s.parse ? s.parse(o.defaultValue) : o.defaultValue, h = V(f, d, o));
  const [v, M] = x({ value: f, error: h }), p = v.value, l = v.error, w = {
    getValidator: () => d,
    getValue: () => p,
    setValue: (n, u = !0, W = !0) => {
      const g = typeof n == "function" ? n(p) : n, i = V(g, d, o);
      g == p && l && i.status == l.status && i.message == l.message || (r.setFieldValidity(a, !i.status), i.showError = W, M({ value: g, error: i }), u && r.setFieldData(a, g));
    },
    valueAccessor: E,
    valueWriter: C,
    isValid: () => {
      var n;
      return v.error == null ? !V(p, d, o).status : !((n = v.error) != null && n.status);
    },
    getError: () => l != null && l.showError ? l : { status: !1, message: "" },
    refreshError: () => {
      const n = V(p, d, o);
      l && l.showError && n.status == l.status && n.message == l.message || (n.showError = !0, M((u) => ({ ...u, error: n })), r.setFieldValidity(a, !n.status));
    },
    mutateOptions: e,
    setMutateOptions: P,
    getFieldProps: () => {
      const {
        invalidMessage: n,
        missingMessage: u,
        validator: W,
        regExp: g,
        validRule: i,
        validFn: Q,
        defaultValue: T,
        ...S
      } = o;
      return { ...S, ...e };
    }
  };
  return r.registerFieldManager(w, o), w;
};
function j(a, t) {
  const s = t != null && t.fieldAccessor ? t.fieldAccessor : c(a) ? (r) => {
    const e = R(a, r);
    return e || "";
  } : (r) => {
    const e = r == null ? void 0 : r[a];
    return e || "";
  };
  if (t != null && t.parse) {
    const r = t.parse;
    return (e) => r(s(e));
  }
  return s;
}
function q(a, t) {
  const s = t == null ? void 0 : t.format;
  return s ? t != null && t.fieldWriter ? (r, e) => t.fieldWriter(s(e), r) : c(a) ? (r, e) => F(a, r, s(e)) : (r, e) => F(a, r, s(e)) : t != null && t.fieldWriter ? (r, e) => t.fieldWriter(e, r) : c(a) ? (r, e) => F(a, r, e) : (r, e) => F(a, r, e);
}
export {
  ar as useFieldManager
};
