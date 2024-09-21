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
const de = (r, t, n) => {
  const e = D(), a = G(q);
  if (!a)
    throw Error("useFieldManager must be called within the scope of <PalmyraForm>");
  const [u, w] = x({}), o = { ...t, ...u }, i = I(r), d = J(n), M = (s) => d(i(s)), P = O(() => K(r, n), [r])(), g = B(o), R = e.current == "done" ? { value: "", e: void 0 } : L(
    a,
    i,
    o,
    n,
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
    setValue: (s, c = !0, S = !0) => {
      const v = typeof s == "function" ? s(p) : s, f = E(v, g, o);
      v == p && l && f.status == l.status && f.message == l.message || (a.setFieldValidity(r, !f.status), f.showError = S, A({ value: v, error: f }), c && a.setFieldData(r, v));
    },
    valueAccessor: M,
    valueWriter: P,
    rawValueAccessor: i,
    isValid: () => {
      var s;
      return V.error == null ? !E(p, g, o).status : !((s = V.error) != null && s.status);
    },
    getError: () => l != null && l.showError ? l : { status: !1, message: "" },
    refreshError: () => {
      const s = E(p, g, o);
      l && l.showError && s.status == l.status && s.message == l.message || (s.showError = !0, A((c) => ({ ...c, error: s })), a.setFieldValidity(r, !s.status));
    },
    mutateOptions: u,
    setMutateOptions: w,
    getFieldProps: () => {
      const {
        invalidMessage: s,
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
    return (n) => t(n);
  }
  return (t) => t ?? "";
}
function K(r, t) {
  const n = t == null ? void 0 : t.format;
  return n ? t != null && t.fieldWriter ? (e, a) => t.fieldWriter(n(a), e) : h(r) ? (e, a) => F(r, e, n(a)) : (e, a) => F(r, e, n(a)) : t != null && t.fieldWriter ? (e, a) => t.fieldWriter(a, e) : h(r) ? (e, a) => F(r, e, a) : (e, a) => F(r, e, a);
}
const L = (r, t, n, e, a, u, w) => {
  var o = null, i = void 0;
  const d = r.getFieldRawData(t);
  return d == null ? n.defaultValue != null ? (o = e != null && e.parse ? e.parse(n.defaultValue) : n.defaultValue, i = E(d, a, n)) : o = u({}) : o = w(d), { value: o, error: i };
};
export {
  de as useFieldManager
};
