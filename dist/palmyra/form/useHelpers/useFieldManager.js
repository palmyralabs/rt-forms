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
  const [e, P] = x({}), o = { ...t, ...e }, E = A(() => j(a, s), [a])(), C = A(() => q(a, s), [a])(), d = D(o);
  var c = E({}), h = void 0;
  o.defaultValue != null && (c = s != null && s.parse ? s.parse(o.defaultValue) : o.defaultValue, h = v(c, d, o));
  const [u, M] = x({ value: c, error: h }), p = u.value, l = u.error, w = {
    getValidator: () => d,
    getValue: () => p,
    setValue: (n, g = !0, W = !0) => {
      const i = typeof n == "function" ? n(p) : n;
      console.log(i);
      const f = v(i, d, o);
      i == p && l && f.status == l.status && f.message == l.message || (r.setFieldValidity(a, !f.status), f.showError = W, M({ value: i, error: f }), g && r.setFieldData(a, i));
    },
    valueAccessor: E,
    valueWriter: C,
    isValid: () => {
      var n;
      return u.error == null ? !v(p, d, o).status : !((n = u.error) != null && n.status);
    },
    getError: () => l != null && l.showError ? l : { status: !1, message: "" },
    refreshError: () => {
      const n = v(p, d, o);
      l && l.showError && n.status == l.status && n.message == l.message || (n.showError = !0, M((g) => ({ ...g, error: n })), r.setFieldValidity(a, !n.status));
    },
    mutateOptions: e,
    setMutateOptions: P,
    getFieldProps: () => {
      const {
        invalidMessage: n,
        missingMessage: g,
        validator: W,
        regExp: i,
        validRule: f,
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
  const s = t != null && t.fieldAccessor ? t.fieldAccessor : F(a) ? (r) => {
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
  return s ? t != null && t.fieldWriter ? (r, e) => t.fieldWriter(s(e), r) : F(a) ? (r, e) => V(a, r, s(e)) : (r, e) => V(a, r, s(e)) : t != null && t.fieldWriter ? (r, e) => t.fieldWriter(e, r) : F(a) ? (r, e) => V(a, r, e) : (r, e) => V(a, r, e);
}
export {
  ar as useFieldManager
};
