import { useContext as I, useState as C, useCallback as J, useEffect as R } from "react";
import { FieldGroupManagerContext as K } from "../formContext.js";
import "../PalmyraForm.js";
import { generatePredicate as L, validate as F } from "../validator/validatorHelper.js";
import { o as E, e as N, i as c } from "../../../chunks/accessor.js";
import "../../../chunks/NoopConverter.js";
import "dayjs";
import '../../../assets/FieldContainer.css';import '../../../assets/FieldGroupContainer.css';import '../../../assets/CardLayout.css';/* empty css                               */
import "react/jsx-runtime";
/* empty css                         */
import "@tanstack/react-table";
import "../../grid/base/utils/ColumnConverter.js";
import "../../grid/utils/FormatterFactory.js";
/* empty css                                  */
/* empty css                             */
const ue = (r, e, s) => {
  var S, x;
  const t = I(K);
  if (!t)
    throw Error("useFieldManager must be called within the scope of <PalmyraForm>");
  const [a, V] = C({}), l = { ...e, ...a }, f = Q(r), h = T(s), M = (o) => h(f(o)), G = J(() => U(r, s), [r])(), p = L(l), w = t.getFieldRawData(f), O = X(
    w,
    l,
    s,
    p,
    M,
    h
  ), [i, A] = C(O);
  R(() => {
    w != null && W();
  }, [a]);
  const u = i.value, n = i.error, j = () => u, m = () => n != null && n.showError ? n : { status: !1, message: "" }, q = () => p, B = (o, d = !0, P = !0) => {
    const g = typeof o == "function" ? o(u) : o;
    d && g !== u && t.setFieldData(r, g);
    const v = F(g, p, l);
    g === u && n && v.status == n.status && v.message == n.message || (t.setFieldValidity(r, !v.status), v.showError = P, A({ value: g, error: v }));
  }, W = () => {
    const o = F(u, p, l);
    n && n.showError && o.status == n.status && o.message == n.message || (o.showError = !0, A((d) => ({ ...d, error: o })));
  };
  R(() => {
    const { error: o, value: d } = i;
    t.setFieldData(r, d), t.setFieldValidity(r, !o.status);
  }, [i]);
  const D = {
    getValidator: q,
    getValue: j,
    setValue: B,
    valueAccessor: M,
    valueWriter: G,
    rawValueAccessor: f,
    isValid: () => {
      var o;
      return i.error == null ? !F(u, p, l).status : !((o = i.error) != null && o.status);
    },
    getError: m,
    refreshError: W,
    mutateOptions: a,
    setMutateOptions: V,
    getFieldProps: () => {
      const {
        invalidMessage: o,
        missingMessage: d,
        validator: P,
        regExp: g,
        validRule: v,
        validFn: _,
        defaultValue: $,
        ...H
      } = l;
      return { ...H, ...a };
    }
  };
  return t.registerFieldManager(D, l), w == null && e.defaultValue && t.setFieldData(r, i.value), (S = i.error) != null && S.status && t.setFieldValidity(r, (x = i.error) == null ? void 0 : x.status), D;
};
function Q(r, e) {
  return e != null && e.fieldAccessor ? e.fieldAccessor : E(r) ? (t) => N(r, t) : (t) => t == null ? void 0 : t[r];
}
function T(r) {
  if (r != null && r.parse) {
    const e = r.parse;
    return (s) => e(s);
  }
  return (e) => e ?? "";
}
function U(r, e) {
  const s = e == null ? void 0 : e.format;
  return s ? e != null && e.fieldWriter ? (t, a) => e.fieldWriter(s(a), t) : E(r) ? (t, a) => c(r, t, s(a)) : (t, a) => c(r, t, s(a)) : e != null && e.fieldWriter ? (t, a) => e.fieldWriter(a, t) : E(r) ? (t, a) => c(r, t, a) : (t, a) => c(r, t, a);
}
const X = (r, e, s, t, a, V) => {
  var l = null, f = void 0;
  return r == null ? e.defaultValue != null ? l = s != null && s.parse ? s.parse(e.defaultValue) : e.defaultValue : l = a({}) : l = V(r), f = F(l, t, e), f.status && (f.showError = r != null || e.defaultValue != null), { value: l, error: f };
};
export {
  ue as useFieldManager
};
