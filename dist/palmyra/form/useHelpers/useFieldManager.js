import { useContext as q, useState as C, useEffect as B, useCallback as S } from "react";
import { FieldGroupManagerContext as H } from "../formContext.js";
import "../PalmyraForm.js";
import { generatePredicate as I, validate as M } from "../validator/validatorHelper.js";
import { o as W, e as J, i as F } from "../../../chunks/accessor.js";
import "../../../chunks/NoopConverter.js";
import "dayjs";
import '../../../assets/FieldContainer.css';import '../../../assets/FieldGroupContainer.css';import '../../../assets/CardLayout.css';/* empty css                               */
import "react/jsx-runtime";
/* empty css                         */
import "@tanstack/react-table";
import "../../grid/base/utils/ColumnConverter.js";
/* empty css                                  */
/* empty css                             */
const se = (a, n, r) => {
  const e = q(H);
  if (!e)
    throw Error("useFieldManager must be called within the scope of <PalmyraForm>");
  const [t, i] = C({}), s = { ...n, ...t };
  B(() => {
    x();
  }, [t]);
  const o = S(() => K(a, r), [a])(), w = S(() => L(a, r), [a])(), g = I(s);
  var d = o({}), h = void 0;
  e.hasField(s.attribute) || (d == "" || d == null) && s.defaultValue != null && (d = r != null && r.parse ? r.parse(s.defaultValue) : s.defaultValue, h = M(d, g, s));
  const [c, E] = C({ value: d, error: h }), u = c.value, v = c.error, G = () => u, O = () => v || { status: !1, message: "" }, D = () => g, R = (l, V = !1, P = !0) => {
    const p = typeof l == "function" ? l(u) : l, f = M(p, g, s);
    p == u && f.status == f.status && f.message == f.message || (E({ value: p, error: f }), P && e.setFieldData(a, p), V || e.setFieldValidity(a, !f.status));
  }, x = () => {
    const l = M(u, g, s);
    v && l.status == v.status && l.message == v.message || (E((V) => ({ ...V, error: l })), e.setFieldValidity(a, !l.status));
  }, A = {
    getValidator: D,
    getValue: G,
    setValue: R,
    valueAccessor: o,
    valueWriter: w,
    isValid: () => {
      var l;
      return !((l = c.error) != null && l.status);
    },
    getError: O,
    refreshError: x,
    mutateOptions: t,
    setMutateOptions: i,
    getFieldProps: () => {
      const {
        invalidMessage: l,
        missingMessage: V,
        validator: P,
        regExp: p,
        validRule: f,
        validFn: T,
        defaultValue: U,
        ...j
      } = s;
      return { ...j, ...t };
    }
  };
  return e.registerFieldManager(A, s), A;
};
function K(a, n = null, r) {
  const e = n || "", t = r != null && r.fieldAccessor ? r.fieldAccessor : W(a) ? (i, s) => {
    const o = J(a, i);
    return o || (s ? e : "");
  } : (i, s) => {
    const o = i == null ? void 0 : i[a];
    return o || (s ? e : "");
  };
  if (r != null && r.parse) {
    const i = r.parse;
    return (s, o) => i(t(s, o));
  }
  return t;
}
function L(a, n) {
  const r = n == null ? void 0 : n.format;
  return r ? n != null && n.fieldWriter ? (e, t) => n.fieldWriter(r(t), e) : W(a) ? (e, t) => F(a, e, r(t)) : (e, t) => F(a, e, r(t)) : n != null && n.fieldWriter ? (e, t) => n.fieldWriter(t, e) : W(a) ? (e, t) => F(a, e, t) : (e, t) => F(a, e, t);
}
export {
  se as useFieldManager
};
