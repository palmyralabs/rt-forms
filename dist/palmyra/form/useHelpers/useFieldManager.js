import { useContext as q, useState as P, useEffect as B, useCallback as C } from "react";
import { FieldGroupManagerContext as H } from "../formContext.js";
import "../PalmyraForm.js";
import { generatePredicate as I, validate as V } from "../validator/validatorHelper.js";
import { o as c, e as J, i as v } from "../../../chunks/accessor.js";
import "../../../chunks/NoopConverter.js";
import "dayjs";
import "../../../chunks/ServerCardLayout.js";
import "react/jsx-runtime";
import "../../layout/card/CardLayout.js";
const ee = (t, a, s) => {
  const e = q(H);
  if (!e)
    throw Error("useFieldManager must be called within the scope of <PalmyraForm>");
  const [r, S] = P({}), l = { ...a, ...r };
  B(() => {
    E();
  }, [r]);
  const M = C(() => K(t, s), [t])(), w = C(() => L(t, s), [t])(), d = I(l);
  var f = M({}), W = void 0;
  e.hasField(l.attribute) || (f == "" || f == null) && l.defaultValue != null && (f = s != null && s.parse ? s.parse(l.defaultValue) : l.defaultValue, W = V(f, d, l));
  const [F, h] = P({ value: f, error: W }), p = F.value, g = F.error, G = () => p, O = () => g || { status: !1, message: "" }, D = () => d, R = (n, u = !1, A = !0) => {
    const i = typeof n == "function" ? n(p) : n, o = V(i, d, l);
    i == p && o.status == o.status && o.message == o.message || (h({ value: i, error: o }), A && e.setFieldData(t, i), u || e.setFieldValidity(t, !o.status));
  }, E = () => {
    const n = V(p, d, l);
    g && n.status == g.status && n.message == g.message || (h((u) => ({ ...u, error: n })), e.setFieldValidity(t, !n.status));
  }, x = {
    getValidator: D,
    getValue: G,
    setValue: R,
    valueAccessor: M,
    valueWriter: w,
    isValid: () => {
      var n;
      return !((n = F.error) != null && n.status);
    },
    getError: O,
    refreshError: E,
    mutateOptions: r,
    setMutateOptions: S,
    getFieldProps: () => {
      const {
        invalidMessage: n,
        missingMessage: u,
        validator: A,
        regExp: i,
        validRule: o,
        validFn: T,
        defaultValue: U,
        ...j
      } = l;
      return { ...j, ...r };
    }
  };
  return e.registerFieldManager(x, l), x;
};
function K(t, a) {
  const s = a != null && a.fieldAccessor ? a.fieldAccessor : c(t) ? (e) => {
    const r = J(t, e);
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
function L(t, a) {
  const s = a == null ? void 0 : a.format;
  return s ? a != null && a.fieldWriter ? (e, r) => a.fieldWriter(s(r), e) : c(t) ? (e, r) => v(t, e, s(r)) : (e, r) => v(t, e, s(r)) : a != null && a.fieldWriter ? (e, r) => a.fieldWriter(r, e) : c(t) ? (e, r) => v(t, e, r) : (e, r) => v(t, e, r);
}
export {
  ee as useFieldManager
};
