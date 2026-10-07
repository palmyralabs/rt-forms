import { useContext as H, useState as P, useCallback as I, useEffect as C } from "react";
import { FieldGroupManagerContext as J } from "../formContext.js";
import { hasDot as h, getValueByKey as L, setValueByKey as w } from "@palmyralabs/ts-utils";
import { generatePredicate as N, validate as E } from "../validator/validatorHelper.js";
const z = (e, t, o) => {
  const r = H(J);
  if (!r)
    throw Error("useFieldManager must be called within the scope of <PalmyraForm>");
  const [s, m] = P({}), l = { ...t, ...s }, i = Q(e, o), M = T(o), A = (a) => M(i(a)), R = I(() => U(e, o), [e])(), v = N(l), p = r.getFieldRawData(i), y = X(
    p,
    l,
    o,
    v,
    A,
    M
  ), [u, F] = P(y);
  C(() => {
    p != null && D();
  }, [s]);
  const c = u.value, n = u.error, B = () => c, G = () => n != null && n.showError ? n : { status: !1, message: "" }, K = () => v, O = (a, d = !0, V = !0, S = !1) => {
    const g = typeof a == "function" ? a(c) : a, f = E(g, v, l);
    g === c && n && f.status == n.status && f.message == n.message || (r.setFieldValidity(e, !f.status), f.showError = V, t?.readOnly && !S ? F((x) => ({ ...x, error: f })) : (F({ value: g, error: f }), d && g !== c && r.setFieldData(e, g)));
  }, D = () => {
    const a = E(c, v, l);
    n && n.showError && a.status == n.status && a.message == n.message || (a.showError = !0, F((d) => ({ ...d, error: a })));
  }, j = (a, d) => {
    F((V) => ({ ...V, error: { status: !0, message: a, showError: !0 } }));
  };
  C(() => {
    const { error: a, value: d } = u;
    r.setFieldData(e, d), r.setFieldValidity(e, !a.status);
  }, [u]);
  const W = {
    getValidator: K,
    getValue: B,
    setValue: O,
    valueAccessor: A,
    valueWriter: R,
    rawValueAccessor: i,
    isValid: () => u.error == null ? !E(c, v, l).status : !u.error?.status,
    getError: G,
    refreshError: D,
    mutateOptions: s,
    setMutateOptions: m,
    getFieldProps: () => {
      const {
        invalidMessage: a,
        missingMessage: d,
        validator: V,
        regExp: S,
        validRule: g,
        validFn: f,
        defaultValue: x,
        ...q
      } = l;
      return { ...q, ...s };
    },
    setError: j
  };
  return r.registerFieldManager(W, l), p == null && t.defaultValue && r.setFieldData(e, u.value), u.error?.status && r.setFieldValidity(e, u.error?.status), W;
};
function Q(e, t) {
  return t?.fieldAccessor ? t.fieldAccessor : h(e) ? (r) => L(e, r) : (r) => r?.[e];
}
function T(e) {
  if (e?.parse) {
    const t = e.parse;
    return (o) => t(o);
  }
  return (t) => t ?? "";
}
function U(e, t) {
  const o = t?.format;
  return o ? t?.fieldWriter ? (r, s) => t.fieldWriter(o(s), r) : h(e) ? (r, s) => w(e, r, o(s)) : (r, s) => w(e, r, o(s)) : t?.fieldWriter ? (r, s) => t.fieldWriter(s, r) : h(e) ? (r, s) => w(e, r, s) : (r, s) => w(e, r, s);
}
const X = (e, t, o, r, s, m) => {
  var l = null, i = void 0;
  return e == null ? t.defaultValue != null ? l = o?.parse ? o.parse(t.defaultValue) : t.defaultValue : l = s({}) : l = m(e), i = E(l, r, t), i.status && (i.showError = e != null || t.defaultValue != null), { value: l, error: i };
};
export {
  z as useFieldManager
};
