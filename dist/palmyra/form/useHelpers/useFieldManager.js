import { useContext as J, useState as R, useCallback as L, useEffect as y } from "react";
import { FieldGroupManagerContext as N } from "../formContext.js";
import "../PalmyraForm.js";
import { generatePredicate as Q, validate as F } from "../validator/validatorHelper.js";
import { hasDot as h, getValueByKey as T, setValueByKey as p } from "@palmyralabs/ts-utils";
import '../../../assets/FieldContainer.css';import '../../../assets/FieldGroupContainer.css';import '../../../assets/CardLayout.css';/* empty css                               */
import "react/jsx-runtime";
/* empty css                         */
import "@tanstack/react-table";
import "../../grid/base/utils/ColumnConverter.js";
import "dayjs";
import "../../grid/utils/FormatterFactory.js";
/* empty css                                  */
/* empty css                             */
const ue = (r, e, s) => {
  var S, x;
  const t = J(N);
  if (!t)
    throw Error("useFieldManager must be called within the scope of <PalmyraForm>");
  const [a, V] = R({}), o = { ...e, ...a }, i = U(r), M = X(s), A = (l) => M(i(l)), B = L(() => Y(r, s), [r])(), c = Q(o), w = t.getFieldRawData(i), G = Z(
    w,
    o,
    s,
    c,
    A,
    M
  ), [f, E] = R(G);
  y(() => {
    w != null && D();
  }, [a]);
  const g = f.value, n = f.error, K = () => g, j = () => n != null && n.showError ? n : { status: !1, message: "" }, q = () => c, H = (l, u = !0, P = !0) => {
    const v = typeof l == "function" ? l(g) : l, d = F(v, c, o);
    v === g && n && d.status == n.status && d.message == n.message || (t.setFieldValidity(r, !d.status), d.showError = P, e != null && e.readOnly ? E((C) => ({ ...C, error: d })) : (E({ value: v, error: d }), u && v !== g && t.setFieldData(r, v)));
  }, D = () => {
    const l = F(g, c, o);
    n && n.showError && l.status == n.status && l.message == n.message || (l.showError = !0, E((u) => ({ ...u, error: l })));
  };
  y(() => {
    const { error: l, value: u } = f;
    t.setFieldData(r, u), t.setFieldValidity(r, !l.status);
  }, [f]);
  const W = {
    getValidator: q,
    getValue: K,
    setValue: H,
    valueAccessor: A,
    valueWriter: B,
    rawValueAccessor: i,
    isValid: () => {
      var l;
      return f.error == null ? !F(g, c, o).status : !((l = f.error) != null && l.status);
    },
    getError: j,
    refreshError: D,
    mutateOptions: a,
    setMutateOptions: V,
    getFieldProps: () => {
      const {
        invalidMessage: l,
        missingMessage: u,
        validator: P,
        regExp: v,
        validRule: d,
        validFn: C,
        defaultValue: m,
        ...I
      } = o;
      return { ...I, ...a };
    }
  };
  return t.registerFieldManager(W, o), w == null && e.defaultValue && t.setFieldData(r, f.value), (S = f.error) != null && S.status && t.setFieldValidity(r, (x = f.error) == null ? void 0 : x.status), W;
};
function U(r, e) {
  return e != null && e.fieldAccessor ? e.fieldAccessor : h(r) ? (t) => T(r, t) : (t) => t == null ? void 0 : t[r];
}
function X(r) {
  if (r != null && r.parse) {
    const e = r.parse;
    return (s) => e(s);
  }
  return (e) => e ?? "";
}
function Y(r, e) {
  const s = e == null ? void 0 : e.format;
  return s ? e != null && e.fieldWriter ? (t, a) => e.fieldWriter(s(a), t) : h(r) ? (t, a) => p(r, t, s(a)) : (t, a) => p(r, t, s(a)) : e != null && e.fieldWriter ? (t, a) => e.fieldWriter(a, t) : h(r) ? (t, a) => p(r, t, a) : (t, a) => p(r, t, a);
}
const Z = (r, e, s, t, a, V) => {
  var o = null, i = void 0;
  return r == null ? e.defaultValue != null ? o = s != null && s.parse ? s.parse(e.defaultValue) : e.defaultValue : o = a({}) : o = V(r), i = F(o, t, e), i.status && (i.showError = r != null || e.defaultValue != null), { value: o, error: i };
};
export {
  ue as useFieldManager
};
