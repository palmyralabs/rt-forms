import { useRef as D, useContext as G, useState as x, useCallback as O, useEffect as j } from "react";
import { FieldGroupManagerContext as q } from "../formContext.js";
import "../PalmyraForm.js";
import { generatePredicate as B, validate as E } from "../validator/validatorHelper.js";
import { o as h, e as H, i as F } from "../../../chunks/accessor.js";
import "../../../chunks/NoopConverter.js";
import "dayjs";
import '../../../assets/FieldContainer.css';import '../../../assets/FieldGroupContainer.css';import '../../../assets/CardLayout.css';/* empty css                               */
import "react/jsx-runtime";
/* empty css                         */
import "@tanstack/react-table";
import "../../grid/base/utils/ColumnConverter.js";
/* empty css                                  */
/* empty css                             */
const de = (r, t, s) => {
  const e = D(), a = G(q);
  if (!a)
    throw Error("useFieldManager must be called within the scope of <PalmyraForm>");
  const [u, w] = x({}), o = { ...t, ...u }, i = I(r), d = J(s), M = (n) => d(i(n)), P = O(() => K(r, s), [r])(), g = B(o), R = e.current == "done" ? { value: "", e: void 0 } : L(
    a,
    i,
    o,
    s,
    g,
    M,
    d
  ), [V, A] = x(R);
  j(() => (e.current = "done", () => {
    e.current = null;
  }), [r]);
  const p = V.value, l = V.error, W = {
    getValidator: () => g,
    getValue: () => p,
    setValue: (n, c = !0, S = !0) => {
      const v = typeof n == "function" ? n(p) : n, f = E(v, g, o);
      v == p && l && f.status == l.status && f.message == l.message || (a.setFieldValidity(r, !f.status), f.showError = S, A({ value: v, error: f }), c && a.setFieldData(r, v));
    },
    valueAccessor: M,
    valueWriter: P,
    rawValueAccessor: i,
    isValid: () => {
      var n;
      return V.error == null ? !E(p, g, o).status : !((n = V.error) != null && n.status);
    },
    getError: () => l != null && l.showError ? l : { status: !1, message: "" },
    refreshError: () => {
      const n = E(p, g, o);
      l && l.showError && n.status == l.status && n.message == l.message || (n.showError = !0, A((c) => ({ ...c, error: n })), a.setFieldValidity(r, !n.status));
    },
    mutateOptions: u,
    setMutateOptions: w,
    getFieldProps: () => {
      const {
        invalidMessage: n,
        missingMessage: c,
        validator: S,
        regExp: v,
        validRule: f,
        validFn: _,
        defaultValue: $,
        ...C
      } = o;
      return { ...C, ...u };
    }
  };
  return a.registerFieldManager(W, o), W;
};
function I(r, t) {
  return t != null && t.fieldAccessor ? t.fieldAccessor : h(r) ? (e) => H(r, e) : (e) => e == null ? void 0 : e[r];
}
function J(r) {
  if (r != null && r.parse) {
    const t = r.parse;
    return (s) => t(s);
  }
  return (t) => t ?? "";
}
function K(r, t) {
  const s = t == null ? void 0 : t.format;
  return s ? t != null && t.fieldWriter ? (e, a) => t.fieldWriter(s(a), e) : h(r) ? (e, a) => F(r, e, s(a)) : (e, a) => F(r, e, s(a)) : t != null && t.fieldWriter ? (e, a) => t.fieldWriter(a, e) : h(r) ? (e, a) => F(r, e, a) : (e, a) => F(r, e, a);
}
const L = (r, t, s, e, a, u, w) => {
  var o = null, i = void 0;
  const d = r.getFieldRawData(t);
  return d == null ? s.defaultValue != null ? o = e != null && e.parse ? e.parse(s.defaultValue) : s.defaultValue : o = u({}) : o = w(d), i = E(o, a, s), i.status && (i.showError = d != null || s.defaultValue != null), { value: o, error: i };
};
export {
  de as useFieldManager
};
