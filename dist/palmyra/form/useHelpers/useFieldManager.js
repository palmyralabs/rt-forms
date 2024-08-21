import { useContext as w, useCallback as W, useState as x } from "react";
import { FieldGroupManagerContext as G } from "../formContext.js";
import "../PalmyraForm.js";
import { generatePredicate as O, validate as p } from "../validator/validatorHelper.js";
import { o as V, e as D, i as u } from "../../../chunks/accessor.js";
import "../../../chunks/NoopConverter.js";
import "dayjs";
import "../../../chunks/ServerCardLayout.js";
import "react/jsx-runtime";
import "../../layout/card/CardLayout.js";
const m = (t, e, l) => {
  const r = w(G);
  if (!r)
    throw Error("useFieldManager must be called within the scope of <PalmyraForm>");
  const a = W(() => R(t, l), [t])(), A = W(() => j(t, l), [t])(), o = O(e);
  var f = a({}), F = void 0;
  r.hasField(e.attribute) || (f == "" || f == null) && e.defaultValue != null && (f = l != null && l.parse ? l.parse(e.defaultValue) : e.defaultValue, F = p(f, o, e));
  const [v, c] = x({ value: f, error: F }), [M, P] = x({}), i = v.value, C = v.error, h = {
    getValidator: () => o,
    getValue: () => i,
    setValue: (s, g = !1, E = !0) => {
      const d = typeof s == "function" ? s(i) : s, n = p(d, o, e);
      d == i && n.status == n.status && n.message == n.message || (c({ value: d, error: n }), E && r.setFieldData(t, d), g || r.setFieldValidity(t, !n.status));
    },
    valueAccessor: a,
    valueWriter: A,
    isValid: () => {
      var s;
      return !((s = v.error) != null && s.status);
    },
    getError: () => C || { status: !1, message: "" },
    refreshError: () => {
      const s = p(i, o, e);
      s.status == s.status && s.message == s.message || (c((g) => ({ ...g, error: s })), r.setFieldValidity(t, !s.status));
    },
    mutateOptions: M,
    setMutateOptions: P,
    getFieldProps: () => {
      const {
        invalidMessage: s,
        missingMessage: g,
        validator: E,
        regExp: d,
        validRule: n,
        validFn: N,
        defaultValue: Q,
        ...S
      } = e;
      return { ...S, ...M };
    }
  };
  return r.registerFieldManager(h, e), h;
};
function R(t, e) {
  const l = e != null && e.fieldAccessor ? e.fieldAccessor : V(t) ? (r) => {
    const a = D(t, r);
    return a || "";
  } : (r) => {
    const a = r == null ? void 0 : r[t];
    return a || "";
  };
  if (e != null && e.parse) {
    const r = e.parse;
    return (a) => r(l(a));
  }
  return l;
}
function j(t, e) {
  const l = e == null ? void 0 : e.format;
  return l ? e != null && e.fieldWriter ? (r, a) => e.fieldWriter(l(a), r) : V(t) ? (r, a) => u(t, r, l(a)) : (r, a) => u(t, r, l(a)) : e != null && e.fieldWriter ? (r, a) => e.fieldWriter(a, r) : V(t) ? (r, a) => u(t, r, a) : (r, a) => u(t, r, a);
}
export {
  m as useFieldManager
};
