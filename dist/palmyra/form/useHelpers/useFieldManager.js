import { useContext as G, useState as x, useCallback as A } from "react";
import { FieldGroupManagerContext as O } from "../formContext.js";
import "../PalmyraForm.js";
import { generatePredicate as D, validate as v } from "../validator/validatorHelper.js";
import { o as F, e as R, i as V } from "../../../chunks/accessor.js";
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
  const [e, P] = x({}), n = { ...t, ...e }, E = A(() => j(a, s), [a])(), C = A(() => q(a, s), [a])(), f = D(n);
  var c = E({}), h = void 0;
  n.defaultValue != null && (c = s != null && s.parse ? s.parse(n.defaultValue) : n.defaultValue, h = v(c, f, n));
  const [u, M] = x({ value: c, error: h }), p = u.value, l = u.error, w = {
    getValidator: () => f,
    getValue: () => p,
    setValue: (o, g = !0, W = !0) => {
      const i = typeof o == "function" ? o(p) : o;
      console.log(i);
      const d = v(i, f, n);
      i == p && l && d.status == l.status && d.message == l.message || (r.setFieldValidity(a, !d.status), d.showError = W, M({ value: i, error: d }), g && r.setFieldData(a, i));
    },
    valueAccessor: E,
    valueWriter: C,
    isValid: () => {
      var o;
      return u.error == null ? !v(p, f, n).status : !((o = u.error) != null && o.status);
    },
    getError: () => l != null && l.showError ? l : { status: !1, message: "" },
    refreshError: () => {
      const o = v(p, f, n);
      l && l.showError && o.status == l.status && o.message == l.message || (o.showError = !0, M((g) => ({ ...g, error: o })), r.setFieldValidity(a, !o.status));
    },
    mutateOptions: e,
    setMutateOptions: P,
    getFieldProps: () => {
      const {
        invalidMessage: o,
        missingMessage: g,
        validator: W,
        regExp: i,
        validRule: d,
        validFn: Q,
        defaultValue: T,
        ...S
      } = n;
      return { ...S, ...e };
    }
  };
  return r.registerFieldManager(w, n), w;
};
function j(a, t) {
  const s = t != null && t.fieldAccessor ? t.fieldAccessor : F(a) ? (r) => {
    const e = R(a, r);
    return e == null ? e : "";
  } : (r) => {
    const e = r == null ? void 0 : r[a];
    return e == null ? e : "";
  };
  if (t != null && t.parse) {
    const r = t.parse;
    return (e) => r(s(e));
  }
  return s;
}
function q(a, t) {
  const s = t == null ? void 0 : t.format;
  return s ? t != null && t.fieldWriter ? (r, e) => t.fieldWriter(s(e), r) : F(a) ? (r, e) => V(a, r, s(e)) : (r, e) => V(a, r, s(e)) : t != null && t.fieldWriter ? (r, e) => t.fieldWriter(e, r) : F(a) ? (r, e) => V(a, r, e) : (r, e) => V(a, r, e);
}
export {
  ar as useFieldManager
};
