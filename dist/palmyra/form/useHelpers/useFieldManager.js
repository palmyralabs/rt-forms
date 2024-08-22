import { useContext as G, useState as A, useCallback as P } from "react";
import { FieldGroupManagerContext as O } from "../formContext.js";
import "../PalmyraForm.js";
import { generatePredicate as D, validate as F } from "../validator/validatorHelper.js";
import { o as c, e as R, i as v } from "../../../chunks/accessor.js";
import "../../../chunks/NoopConverter.js";
import "dayjs";
import "../../../chunks/ServerCardLayout.js";
import "react/jsx-runtime";
import "../../layout/card/CardLayout.js";
const z = (t, a, s) => {
  const e = G(O);
  if (!e)
    throw Error("useFieldManager must be called within the scope of <PalmyraForm>");
  const [r, C] = A({}), n = { ...a, ...r }, M = P(() => j(t, s), [t])(), S = P(() => q(t, s), [t])(), d = D(n);
  var f = M({}), h = void 0;
  e.hasField(n.attribute) || (f == "" || f == null) && n.defaultValue != null && (f = s != null && s.parse ? s.parse(n.defaultValue) : n.defaultValue, h = F(f, d, n));
  const [V, E] = A({ value: f, error: h }), g = V.value, p = V.error, W = {
    getValidator: () => d,
    getValue: () => g,
    setValue: (l, u = !1, x = !0) => {
      const i = typeof l == "function" ? l(g) : l, o = F(i, d, n);
      i == g && o.status == o.status && o.message == o.message || (E({ value: i, error: o }), x && e.setFieldData(t, i), u || e.setFieldValidity(t, !o.status));
    },
    valueAccessor: M,
    valueWriter: S,
    isValid: () => {
      var l;
      return !((l = V.error) != null && l.status);
    },
    getError: () => p || { status: !1, message: "" },
    refreshError: () => {
      const l = F(g, d, n);
      p && l.status == p.status && l.message == p.message || (E((u) => ({ ...u, error: l })), e.setFieldValidity(t, !l.status));
    },
    mutateOptions: r,
    setMutateOptions: C,
    getFieldProps: () => {
      const {
        invalidMessage: l,
        missingMessage: u,
        validator: x,
        regExp: i,
        validRule: o,
        validFn: Q,
        defaultValue: T,
        ...w
      } = n;
      return { ...w, ...r };
    }
  };
  return e.registerFieldManager(W, n), W;
};
function j(t, a) {
  const s = a != null && a.fieldAccessor ? a.fieldAccessor : c(t) ? (e) => {
    const r = R(t, e);
    return r || "";
  } : (e) => {
    const r = e == null ? void 0 : e[t];
    return r || "";
  };
  if (a != null && a.parse) {
    const e = a.parse;
    return (r) => e(s(r));
  }
  return s;
}
function q(t, a) {
  const s = a == null ? void 0 : a.format;
  return s ? a != null && a.fieldWriter ? (e, r) => a.fieldWriter(s(r), e) : c(t) ? (e, r) => v(t, e, s(r)) : (e, r) => v(t, e, s(r)) : a != null && a.fieldWriter ? (e, r) => a.fieldWriter(r, e) : c(t) ? (e, r) => v(t, e, r) : (e, r) => v(t, e, r);
}
export {
  z as useFieldManager
};
