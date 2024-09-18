import { useContext as G, useState as A, useCallback as P } from "react";
import { FieldGroupManagerContext as O } from "../formContext.js";
import "../PalmyraForm.js";
import { generatePredicate as D, validate as c } from "../validator/validatorHelper.js";
import { o as h, e as R, i as E } from "../../../chunks/accessor.js";
import "../../../chunks/NoopConverter.js";
import "dayjs";
import '../../../assets/FieldContainer.css';import '../../../assets/FieldGroupContainer.css';import '../../../assets/CardLayout.css';/* empty css                               */
import "react/jsx-runtime";
/* empty css                         */
import "@tanstack/react-table";
import "../../grid/base/utils/ColumnConverter.js";
/* empty css                                  */
/* empty css                             */
const ae = (t, n, r) => {
  const e = G(O);
  if (!e)
    throw Error("useFieldManager must be called within the scope of <PalmyraForm>");
  const [a, d] = A({}), s = { ...n, ...a }, l = P(() => j(t, r), [t])(), C = P(() => q(t, r), [t])(), u = D(s);
  var p = l({}), M = void 0;
  e.hasField(s.attribute) || (p == "" || p == null) && s.defaultValue != null && (p = r != null && r.parse ? r.parse(s.defaultValue) : s.defaultValue, M = c(p, u, s));
  const [F, w] = A({ value: p, error: M }), g = F.value, i = F.error, W = {
    getValidator: () => u,
    getValue: () => g,
    setValue: (o, v = !0, x = !0) => {
      const V = typeof o == "function" ? o(g) : o, f = c(V, u, s);
      V == g && i && f.status == i.status && f.message == i.message || (e.setFieldValidity(t, !f.status), f.showError = x, w({ value: V, error: f }), v && e.setFieldData(t, V));
    },
    valueAccessor: l,
    valueWriter: C,
    isValid: () => {
      var o;
      return F.error == null ? !c(g, u, s).status : !((o = F.error) != null && o.status);
    },
    getError: () => i != null && i.showError ? i : { status: !1, message: "" },
    refreshError: () => {
      const o = c(g, u, s);
      i && i.showError && o.status == i.status && o.message == i.message || (o.showError = !0, w((v) => ({ ...v, error: o })), e.setFieldValidity(t, !o.status));
    },
    mutateOptions: a,
    setMutateOptions: d,
    getFieldProps: () => {
      const {
        invalidMessage: o,
        missingMessage: v,
        validator: x,
        regExp: V,
        validRule: f,
        validFn: Q,
        defaultValue: T,
        ...S
      } = s;
      return { ...S, ...a };
    }
  };
  return e.registerFieldManager(W, s), W;
};
function j(t, n = null, r) {
  const e = n || "", a = r != null && r.fieldAccessor ? r.fieldAccessor : h(t) ? (d, s) => {
    const l = R(t, d);
    return l || (s ? e : "");
  } : (d, s) => {
    const l = d == null ? void 0 : d[t];
    return l || (s ? e : "");
  };
  if (r != null && r.parse) {
    const d = r.parse;
    return (s, l) => d(a(s, l));
  }
  return a;
}
function q(t, n) {
  const r = n == null ? void 0 : n.format;
  return r ? n != null && n.fieldWriter ? (e, a) => n.fieldWriter(r(a), e) : h(t) ? (e, a) => E(t, e, r(a)) : (e, a) => E(t, e, r(a)) : n != null && n.fieldWriter ? (e, a) => n.fieldWriter(a, e) : h(t) ? (e, a) => E(t, e, a) : (e, a) => E(t, e, a);
}
export {
  ae as useFieldManager
};
