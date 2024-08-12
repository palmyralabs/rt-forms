import { jsx as n, Fragment as i } from "react/jsx-runtime";
import { forwardRef as u, useRef as a, useImperativeHandle as l } from "react";
import { FieldGroupManagerContext as d } from "./formContext.js";
import { useFieldGroupManager as m } from "./useHelpers/useFieldGroupManager.js";
const G = u(function(r, e) {
  const t = e || a(null), o = m(r);
  return l(t, () => ({}), [r.name, o]), /* @__PURE__ */ n(i, { children: /* @__PURE__ */ n(d.Provider, { value: o, children: r.children }) });
});
export {
  G as FieldGroup
};
