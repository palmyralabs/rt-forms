import { useContext as K, useState as R, useCallback as L, useEffect as G } from "react";
import { FieldGroupManagerContext as N } from "../formContext.js";
import "../PalmyraForm.js";
import { generatePredicate as Q, validate as F } from "../validator/validatorHelper.js";
import { o as h, e as T, i as p } from "../../../chunks/accessor.js";
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
const ur = (e, r, s) => {
  var S, x;
  const t = K(N);
  if (!t)
    throw Error("useFieldManager must be called within the scope of <PalmyraForm>");
  const [a, V] = R({}), o = { ...r, ...a }, f = U(e), M = X(s), A = (l) => M(f(l)), j = L(() => Y(e, s), [e])(), c = Q(o), w = t.getFieldRawData(f), m = Z(
    w,
    o,
    s,
    c,
    A,
    M
  ), [i, E] = R(m);
  G(() => {
    w != null && W();
  }, [a]);
  const g = i.value, n = i.error, q = () => g, B = () => n != null && n.showError ? n : { status: !1, message: "" }, H = () => c, I = (l, d = !0, P = !0) => {
    const v = typeof l == "function" ? l(g) : l, u = F(v, c, o);
    v === g && n && u.status == n.status && u.message == n.message || (t.setFieldValidity(e, !u.status), u.showError = P, r != null && r.readOnly ? E((C) => ({ ...C, error: u })) : (E({ value: v, error: u }), d && v !== g && t.setFieldData(e, v)));
  }, W = () => {
    const l = F(g, c, o);
    n && n.showError && l.status == n.status && l.message == n.message || (l.showError = !0, E((d) => ({ ...d, error: l })));
  };
  G(() => {
    const { error: l, value: d } = i;
    t.setFieldData(e, d), t.setFieldValidity(e, !l.status);
  }, [i]);
  const D = {
    getValidator: H,
    getValue: q,
    setValue: I,
    valueAccessor: A,
    valueWriter: j,
    rawValueAccessor: f,
    isValid: () => {
      var l;
      return i.error == null ? !F(g, c, o).status : !((l = i.error) != null && l.status);
    },
    getError: B,
    refreshError: W,
    mutateOptions: a,
    setMutateOptions: V,
    getFieldProps: () => {
      const {
        invalidMessage: l,
        missingMessage: d,
        validator: P,
        regExp: v,
        validRule: u,
        validFn: C,
        defaultValue: y,
        ...J
      } = o;
      return { ...J, ...a };
    }
  };
  return t.registerFieldManager(D, o), w == null && r.defaultValue && t.setFieldData(e, i.value), (S = i.error) != null && S.status && t.setFieldValidity(e, (x = i.error) == null ? void 0 : x.status), D;
};
function U(e, r) {
  return r != null && r.fieldAccessor ? r.fieldAccessor : h(e) ? (t) => T(e, t) : (t) => t == null ? void 0 : t[e];
}
function X(e) {
  if (e != null && e.parse) {
    const r = e.parse;
    return (s) => r(s);
  }
  return (r) => r ?? "";
}
function Y(e, r) {
  const s = r == null ? void 0 : r.format;
  return s ? r != null && r.fieldWriter ? (t, a) => r.fieldWriter(s(a), t) : h(e) ? (t, a) => p(e, t, s(a)) : (t, a) => p(e, t, s(a)) : r != null && r.fieldWriter ? (t, a) => r.fieldWriter(a, t) : h(e) ? (t, a) => p(e, t, a) : (t, a) => p(e, t, a);
}
const Z = (e, r, s, t, a, V) => {
  var o = null, f = void 0;
  return e == null ? r.defaultValue != null ? o = s != null && s.parse ? s.parse(r.defaultValue) : r.defaultValue : o = a({}) : o = V(e), f = F(o, t, r), f.status && (f.showError = e != null || r.defaultValue != null), { value: o, error: f };
};
export {
  ur as useFieldManager
};
