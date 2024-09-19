import { useContext as G, useState as x, useCallback as A } from "react";
import { FieldGroupManagerContext as O } from "../formContext.js";
import "../PalmyraForm.js";
import { generatePredicate as D, validate as V } from "../validator/validatorHelper.js";
import { o as F, e as R, i as c } from "../../../chunks/accessor.js";
import "../../../chunks/NoopConverter.js";
import "dayjs";
import '../../../assets/FieldContainer.css';import '../../../assets/FieldGroupContainer.css';import '../../../assets/CardLayout.css';/* empty css                               */
import "react/jsx-runtime";
/* empty css                         */
import "@tanstack/react-table";
import "../../grid/base/utils/ColumnConverter.js";
/* empty css                                  */
/* empty css                             */
const ar = (a, t, s) => {
  const r = G(O);
  if (!r)
    throw Error("useFieldManager must be called within the scope of <PalmyraForm>");
  const [e, P] = x({}), n = { ...t, ...e }, E = A(() => j(a, s), [a])(), C = A(() => q(a, s), [a])(), f = D(n);
  var p = E({}), h = void 0;
  (p == "" || p == null) && n.defaultValue != null && (p = s != null && s.parse ? s.parse(n.defaultValue) : n.defaultValue, h = V(p, f, n));
  const [v, M] = x({ value: p, error: h }), g = v.value, l = v.error, w = {
    getValidator: () => f,
    getValue: () => g,
    setValue: (o, u = !0, W = !0) => {
      const i = typeof o == "function" ? o(g) : o;
      console.log(i);
      const d = V(i, f, n);
      i == g && l && d.status == l.status && d.message == l.message || (r.setFieldValidity(a, !d.status), d.showError = W, M({ value: i, error: d }), u && r.setFieldData(a, i));
    },
    valueAccessor: E,
    valueWriter: C,
    isValid: () => {
      var o;
      return v.error == null ? !V(g, f, n).status : !((o = v.error) != null && o.status);
    },
    getError: () => l != null && l.showError ? l : { status: !1, message: "" },
    refreshError: () => {
      const o = V(g, f, n);
      l && l.showError && o.status == l.status && o.message == l.message || (o.showError = !0, M((u) => ({ ...u, error: o })), r.setFieldValidity(a, !o.status));
    },
    mutateOptions: e,
    setMutateOptions: P,
    getFieldProps: () => {
      const {
        invalidMessage: o,
        missingMessage: u,
        validator: W,
        regExp: i,
        validRule: d,
        validFn: Q,
        defaultValue: T,
        ...S
      } = n;
      return { ...S, ...e };
    }
  };
  return r.registerFieldManager(w, n), w;
};
function j(a, t) {
  const s = t != null && t.fieldAccessor ? t.fieldAccessor : F(a) ? (r) => {
    const e = R(a, r);
    return e || "";
  } : (r) => {
    const e = r == null ? void 0 : r[a];
    return e || "";
  };
  if (t != null && t.parse) {
    const r = t.parse;
    return (e) => r(s(e));
  }
  return s;
}
function q(a, t) {
  const s = t == null ? void 0 : t.format;
  return s ? t != null && t.fieldWriter ? (r, e) => t.fieldWriter(s(e), r) : F(a) ? (r, e) => c(a, r, s(e)) : (r, e) => c(a, r, s(e)) : t != null && t.fieldWriter ? (r, e) => t.fieldWriter(e, r) : F(a) ? (r, e) => c(a, r, e) : (r, e) => c(a, r, e);
}
export {
  ar as useFieldManager
};
