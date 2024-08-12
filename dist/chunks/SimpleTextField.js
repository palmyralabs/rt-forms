import { jsxs as B, Fragment as D, jsx as O } from "react/jsx-runtime";
import { useCallback as A, useState as C, useContext as G, forwardRef as T, useRef as b, useImperativeHandle as m } from "react";
import "../palmyra/form/PalmyraForm.js";
import { FieldGroupManagerContext as q } from "../palmyra/form/formContext.js";
import { generatePredicate as w, validate as P } from "../palmyra/form/validator/validatorHelper.js";
import "./NoopConverter.js";
import "dayjs";
import { o as R, e as y, i as F } from "./accessor.js";
const H = (a, e, i) => {
  const t = A(() => I(a, i), [a])(), r = A(() => J(a, i), [a])(), d = w(e), [f, p] = C({ value: t({}) }), o = G(q), [v, M] = C({}), u = f.value, x = f.error, S = {
    getValidator: () => d,
    getValue: () => u,
    setValue: (l, V = !1, W = !0) => {
      const c = typeof l == "function" ? l(u) : l, g = P(c, d, e);
      c == u && g.status == g.status && g.message == g.message || (p({ value: c, error: g }), W && o.setFieldData(a, c), V || o.setFieldValidity(a, !g.status));
    },
    valueAccessor: t,
    valueWriter: r,
    isValid: () => {
      var l;
      return !((l = f.error) != null && l.status);
    },
    getError: () => x || { status: !1, message: "" },
    refreshError: () => {
      const l = P(u, d, e);
      l.status == l.status && l.message == l.message || (p((V) => ({ ...V, error: l })), o.setFieldValidity(a, !l.status));
    },
    mutateOptions: v,
    setMutateOptions: M,
    getFieldProps: () => {
      const {
        invalidMessage: l,
        missingMessage: V,
        validator: W,
        regExp: c,
        validRule: g,
        validFn: Q,
        ...j
      } = e;
      return { ...j, ...v };
    }
  };
  return o.registerFieldManager(S, e), S;
};
function I(a, e) {
  const i = e != null && e.fieldAccessor ? e.fieldAccessor : R(a) ? (t) => {
    const r = y(a, t);
    return r || "";
  } : (t) => {
    const r = t == null ? void 0 : t[a];
    return r || "";
  };
  if (e != null && e.parse) {
    const t = e.parse;
    return (r) => t(i(r));
  }
  return i;
}
function J(a, e) {
  const i = e == null ? void 0 : e.format;
  return i ? e != null && e.fieldWriter ? (t, r) => e.fieldWriter(i(r), t) : R(a) ? (t, r) => F(a, t, i(r)) : (t, r) => F(a, t, i(r)) : e != null && e.fieldWriter ? (t, r) => e.fieldWriter(r, t) : R(a) ? (t, r) => F(a, t, r) : (t, r) => F(a, t, r);
}
const ee = T(function(e, i) {
  const t = H(e.attribute, e), { getError: r, getValue: d, setValue: f, mutateOptions: p, setMutateOptions: o } = t, v = i || b(null), M = b(), u = r(), x = { ...e, ...p }, h = (s) => {
    var n = {
      name: s.attribute,
      value: d(),
      onChange: (E) => f(E.target.value)
    };
    return s.onBlur && (n.onblur = s.onBlur), s.onFocus && (n.onfocus = s.onFocus), s.disabled && (n.disabled = !0), s.readOnly && (n.readOnly = !0), n;
  };
  return m(v, () => ({
    focus() {
      M.current.focus();
    },
    isValid() {
      return !u.status;
    },
    getValue() {
      return d();
    },
    clear() {
      f("");
    },
    setValue(s, n = !1) {
      f(s);
    },
    setVisible(s) {
      o((n) => ({ ...n, visible: s }));
    },
    setDisabled(s) {
      o((n) => ({ ...n, disabled: s }));
    },
    setRequired(s) {
      o((n) => ({ ...n, required: s }));
    },
    setReadOnly(s) {
      o((n) => ({ ...n, readonly: s }));
    },
    setAttribute(s) {
      o((n) => ({ ...n, ...s }));
    }
  }), [t, d]), /* @__PURE__ */ B(D, { children: [
    /* @__PURE__ */ O("div", { children: e.label }),
    " : ",
    /* @__PURE__ */ O(
      "input",
      {
        type: "text",
        ...h(x)
      }
    ),
    u.status && /* @__PURE__ */ O("div", { children: u.message })
  ] });
});
export {
  ee as S,
  H as u
};
