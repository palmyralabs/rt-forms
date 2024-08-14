import { useCallback as W, useState as E, useContext as S } from "react";
import { FieldGroupManagerContext as h } from "../formContext.js";
import "../PalmyraForm.js";
import { generatePredicate as G, validate as x } from "../validator/validatorHelper.js";
import { o as c, e as O, i as g } from "../../../chunks/accessor.js";
import "../../../chunks/NoopConverter.js";
import "dayjs";
import "../../../chunks/ServerCardLayout.js";
import "react/jsx-runtime";
import "../../layout/card/CardLayout.js";
const y = (a, e, n) => {
  const r = W(() => D(a, n), [a])(), t = W(() => R(a, n), [a])(), p = G(e), [u, v] = E({ value: r({}) }), f = S(h), [F, A] = E({}), i = u.value, C = u.error, V = {
    getValidator: () => p,
    getValue: () => i,
    setValue: (s, d = !1, M = !0) => {
      const o = typeof s == "function" ? s(i) : s, l = x(o, p, e);
      o == i && l.status == l.status && l.message == l.message || (v({ value: o, error: l }), M && f.setFieldData(a, o), d || f.setFieldValidity(a, !l.status));
    },
    valueAccessor: r,
    valueWriter: t,
    isValid: () => {
      var s;
      return !((s = u.error) != null && s.status);
    },
    getError: () => C || { status: !1, message: "" },
    refreshError: () => {
      const s = x(i, p, e);
      s.status == s.status && s.message == s.message || (v((d) => ({ ...d, error: s })), f.setFieldValidity(a, !s.status));
    },
    mutateOptions: F,
    setMutateOptions: A,
    getFieldProps: () => {
      const {
        invalidMessage: s,
        missingMessage: d,
        validator: M,
        regExp: o,
        validRule: l,
        validFn: K,
        ...P
      } = e;
      return { ...P, ...F };
    }
  };
  return f.registerFieldManager(V, e), V;
};
function D(a, e) {
  const n = e != null && e.fieldAccessor ? e.fieldAccessor : c(a) ? (r) => {
    const t = O(a, r);
    return t || "";
  } : (r) => {
    const t = r == null ? void 0 : r[a];
    return t || "";
  };
  if (e != null && e.parse) {
    const r = e.parse;
    return (t) => r(n(t));
  }
  return n;
}
function R(a, e) {
  const n = e == null ? void 0 : e.format;
  return n ? e != null && e.fieldWriter ? (r, t) => e.fieldWriter(n(t), r) : c(a) ? (r, t) => g(a, r, n(t)) : (r, t) => g(a, r, n(t)) : e != null && e.fieldWriter ? (r, t) => e.fieldWriter(t, r) : c(a) ? (r, t) => g(a, r, t) : (r, t) => g(a, r, t);
}
export {
  y as useFieldManager
};
