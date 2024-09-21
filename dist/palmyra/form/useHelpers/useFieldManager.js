import { useRef as H, useContext as I, useState as P, useCallback as J, useEffect as R } from "react";
import { FieldGroupManagerContext as K } from "../formContext.js";
import "../PalmyraForm.js";
import { generatePredicate as L, validate as w } from "../validator/validatorHelper.js";
import { o as h, e as N, i as F } from "../../../chunks/accessor.js";
import "../../../chunks/NoopConverter.js";
import "dayjs";
import '../../../assets/FieldContainer.css';import '../../../assets/FieldGroupContainer.css';import '../../../assets/CardLayout.css';/* empty css                               */
import "react/jsx-runtime";
/* empty css                         */
import "@tanstack/react-table";
import "../../grid/base/utils/ColumnConverter.js";
/* empty css                                  */
/* empty css                             */
const de = (t, r, n) => {
  const e = H(), a = I(K);
  if (!a)
    throw Error("useFieldManager must be called within the scope of <PalmyraForm>");
  const [d, E] = P({}), o = { ...r, ...d }, i = Q(t), f = T(n), M = (s) => f(i(s)), C = J(() => U(t, n), [t])(), c = L(o), D = e.current == "done" ? { value: "", e: void 0 } : X(
    a,
    i,
    o,
    n,
    c,
    M,
    f
  ), [V, A] = P(D);
  R(() => {
    e.current == "done" && W();
  }, [d]), R(() => (e.current = "done", () => {
    e.current = null;
  }), []);
  const u = V.value, l = V.error, G = () => u, O = () => l != null && l.showError ? l : { status: !1, message: "" }, j = () => c, q = (s, v = !0, x = !0) => {
    const g = typeof s == "function" ? s(u) : s;
    v && g != u && a.setFieldData(t, g);
    const p = w(g, c, o);
    g == u && l && p.status == l.status && p.message == l.message || (a.setFieldValidity(t, !p.status), p.showError = x, A({ value: g, error: p }));
  }, W = () => {
    const s = w(u, c, o);
    l && l.showError && s.status == l.status && s.message == l.message || (s.showError = !0, A((v) => ({ ...v, error: s })), a.setFieldValidity(t, !s.status));
  }, S = {
    getValidator: j,
    getValue: G,
    setValue: q,
    valueAccessor: M,
    valueWriter: C,
    rawValueAccessor: i,
    isValid: () => {
      var s;
      return V.error == null ? !w(u, c, o).status : !((s = V.error) != null && s.status);
    },
    getError: O,
    refreshError: W,
    mutateOptions: d,
    setMutateOptions: E,
    getFieldProps: () => {
      const {
        invalidMessage: s,
        missingMessage: v,
        validator: x,
        regExp: g,
        validRule: p,
        validFn: _,
        defaultValue: $,
        ...B
      } = o;
      return { ...B, ...d };
    }
  };
  return a.registerFieldManager(S, o), S;
};
function Q(t, r) {
  return r != null && r.fieldAccessor ? r.fieldAccessor : h(t) ? (e) => N(t, e) : (e) => e == null ? void 0 : e[t];
}
function T(t) {
  if (t != null && t.parse) {
    const r = t.parse;
    return (n) => r(n);
  }
  return (r) => r ?? "";
}
function U(t, r) {
  const n = r == null ? void 0 : r.format;
  return n ? r != null && r.fieldWriter ? (e, a) => r.fieldWriter(n(a), e) : h(t) ? (e, a) => F(t, e, n(a)) : (e, a) => F(t, e, n(a)) : r != null && r.fieldWriter ? (e, a) => r.fieldWriter(a, e) : h(t) ? (e, a) => F(t, e, a) : (e, a) => F(t, e, a);
}
const X = (t, r, n, e, a, d, E) => {
  var o = null, i = void 0;
  const f = t.getFieldRawData(r);
  return f == null ? n.defaultValue != null ? o = e != null && e.parse ? e.parse(n.defaultValue) : n.defaultValue : o = d({}) : o = E(f), i = w(o, a, n), i.status && (i.showError = f != null || n.defaultValue != null), { value: o, error: i };
};
export {
  de as useFieldManager
};
