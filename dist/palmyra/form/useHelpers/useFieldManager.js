import { useContext as I, useState as C, useCallback as J, useEffect as R } from "react";
import { FieldGroupManagerContext as L } from "../formContext.js";
import "../PalmyraForm.js";
import { generatePredicate as N, validate as F } from "../validator/validatorHelper.js";
import { hasDot as h, getValueByKey as Q, setValueByKey as c } from "@palmyralabs/ts-utils";
import '../../../assets/FieldContainer.css';import '../../../assets/FieldGroupContainer.css';import '../../../assets/CardLayout.css';/* empty css                               */
import "react/jsx-runtime";
/* empty css                         */
import "@tanstack/react-table";
import "../../grid/base/utils/ColumnConverter.js";
import "dayjs";
import "../../grid/utils/FormatterFactory.js";
import "react-accessible-treeview";
import "classnames";
import "../../../chunks/index.js";
import "react-router-dom";
import "../../menu/AsyncTreeMenuEditor.js";
/* empty css                                  */
/* empty css                             */
const cr = (e, r, s) => {
  var S, m;
  const t = I(L);
  if (!t)
    throw Error("useFieldManager must be called within the scope of <PalmyraForm>");
  const [a, V] = C({}), l = { ...r, ...a }, f = T(e), M = U(s), A = (o) => M(f(o)), y = J(() => X(e, s), [e])(), p = N(l), w = t.getFieldRawData(f), B = Y(
    w,
    l,
    s,
    p,
    A,
    M
  ), [i, E] = C(B);
  R(() => {
    w != null && D();
  }, [a]);
  const g = i.value, n = i.error, G = () => g, K = () => n != null && n.showError ? n : { status: !1, message: "" }, j = () => p, q = (o, u = !0, x = !0) => {
    const v = typeof o == "function" ? o(g) : o, d = F(v, p, l);
    v === g && n && d.status == n.status && d.message == n.message || (t.setFieldValidity(e, !d.status), d.showError = x, r != null && r.readOnly ? E((P) => ({ ...P, error: d })) : (E({ value: v, error: d }), u && v !== g && t.setFieldData(e, v)));
  }, D = () => {
    const o = F(g, p, l);
    n && n.showError && o.status == n.status && o.message == n.message || (o.showError = !0, E((u) => ({ ...u, error: o })));
  };
  R(() => {
    const { error: o, value: u } = i;
    t.setFieldData(e, u), t.setFieldValidity(e, !o.status);
  }, [i]);
  const W = {
    getValidator: j,
    getValue: G,
    setValue: q,
    valueAccessor: A,
    valueWriter: y,
    rawValueAccessor: f,
    isValid: () => {
      var o;
      return i.error == null ? !F(g, p, l).status : !((o = i.error) != null && o.status);
    },
    getError: K,
    refreshError: D,
    mutateOptions: a,
    setMutateOptions: V,
    getFieldProps: () => {
      const {
        invalidMessage: o,
        missingMessage: u,
        validator: x,
        regExp: v,
        validRule: d,
        validFn: P,
        defaultValue: $,
        ...H
      } = l;
      return { ...H, ...a };
    }
  };
  return t.registerFieldManager(W, l), w == null && r.defaultValue && t.setFieldData(e, i.value), (S = i.error) != null && S.status && t.setFieldValidity(e, (m = i.error) == null ? void 0 : m.status), W;
};
function T(e, r) {
  return r != null && r.fieldAccessor ? r.fieldAccessor : h(e) ? (t) => Q(e, t) : (t) => t == null ? void 0 : t[e];
}
function U(e) {
  if (e != null && e.parse) {
    const r = e.parse;
    return (s) => r(s);
  }
  return (r) => r ?? "";
}
function X(e, r) {
  const s = r == null ? void 0 : r.format;
  return s ? r != null && r.fieldWriter ? (t, a) => r.fieldWriter(s(a), t) : h(e) ? (t, a) => c(e, t, s(a)) : (t, a) => c(e, t, s(a)) : r != null && r.fieldWriter ? (t, a) => r.fieldWriter(a, t) : h(e) ? (t, a) => c(e, t, a) : (t, a) => c(e, t, a);
}
const Y = (e, r, s, t, a, V) => {
  var l = null, f = void 0;
  return e == null ? r.defaultValue != null ? l = s != null && s.parse ? s.parse(r.defaultValue) : r.defaultValue : l = a({}) : l = V(e), f = F(l, t, r), f.status && (f.showError = e != null || r.defaultValue != null), { value: l, error: f };
};
export {
  cr as useFieldManager
};
