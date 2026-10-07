import { jsx as d, Fragment as u } from "react/jsx-runtime";
import { forwardRef as l, useRef as s, useImperativeHandle as f } from "react";
import { useFieldManager as m } from "./useHelpers/useFieldManager.js";
const H = l(function(e, t) {
  const r = m(e.attribute, e), n = t || s(null), { getValue: i, setValue: a, isValid: o } = r;
  return f(n, () => ({
    getValue: i,
    setValue: a,
    isValid: o
  }), [r]), /* @__PURE__ */ d(u, {});
});
export {
  H as HiddenField
};
