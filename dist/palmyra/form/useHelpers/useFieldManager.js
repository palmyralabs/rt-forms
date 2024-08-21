import { useCallback as A, useContext as G, useState as h } from "react";
import { FieldGroupManagerContext as O } from "../formContext.js";
import "../PalmyraForm.js";
import { generatePredicate as D, validate as p } from "../validator/validatorHelper.js";
import { o as F, e as R, i as v } from "../../../chunks/accessor.js";
import "../../../chunks/NoopConverter.js";
import "dayjs";
import "../../../chunks/ServerCardLayout.js";
import "react/jsx-runtime";
import "../../layout/card/CardLayout.js";
const m = (t, e, l) => {
  const r = A(() => j(t, l), [t])(), a = A(() => q(t, l), [t])(), o = D(e);
  var f = r({}), M = void 0;
  const d = G(O);
  d.hasField(e.attribute) || (f == "" || f == null) && e.defaultValue != null && (f = l != null && l.parse ? l.parse(e.defaultValue) : e.defaultValue, M = p(f, o, e));
  const [V, c] = h({ value: f, error: M }), [W, C] = h({}), g = V.value, P = V.error, E = {
    getValidator: () => o,
    getValue: () => g,
    setValue: (s, u = !1, x = !0) => {
      const i = typeof s == "function" ? s(g) : s, n = p(i, o, e);
      i == g && n.status == n.status && n.message == n.message || (c({ value: i, error: n }), x && d.setFieldData(t, i), u || d.setFieldValidity(t, !n.status));
    },
    valueAccessor: r,
    valueWriter: a,
    isValid: () => {
      var s;
      return !((s = V.error) != null && s.status);
    },
    getError: () => P || { status: !1, message: "" },
    refreshError: () => {
      const s = p(g, o, e);
      s.status == s.status && s.message == s.message || (c((u) => ({ ...u, error: s })), d.setFieldValidity(t, !s.status));
    },
    mutateOptions: W,
    setMutateOptions: C,
    getFieldProps: () => {
      const {
        invalidMessage: s,
        missingMessage: u,
        validator: x,
        regExp: i,
        validRule: n,
        validFn: N,
        defaultValue: Q,
        ...S
      } = e;
      return { ...S, ...W };
    }
  };
  return d.registerFieldManager(E, e), E;
};
function j(t, e) {
  const l = e != null && e.fieldAccessor ? e.fieldAccessor : F(t) ? (r) => {
    const a = R(t, r);
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
function q(t, e) {
  const l = e == null ? void 0 : e.format;
  return l ? e != null && e.fieldWriter ? (r, a) => e.fieldWriter(l(a), r) : F(t) ? (r, a) => v(t, r, l(a)) : (r, a) => v(t, r, l(a)) : e != null && e.fieldWriter ? (r, a) => e.fieldWriter(a, r) : F(t) ? (r, a) => v(t, r, a) : (r, a) => v(t, r, a);
}
export {
  m as useFieldManager
};
