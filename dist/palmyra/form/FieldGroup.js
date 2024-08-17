import { jsx as o, Fragment as a } from "react/jsx-runtime";
import { forwardRef as i, useRef as u, useContext as l, useImperativeHandle as m } from "react";
import { FormManagerContext as d, FieldGroupManagerContext as f } from "./formContext.js";
const M = i(function(r, e) {
  const t = e || u(null), n = l(d).registerFieldGroupManager(r);
  return m(t, () => ({}), [r.name, n]), /* @__PURE__ */ o(a, { children: /* @__PURE__ */ o(f.Provider, { value: n, children: r.children }) });
});
export {
  M as FieldGroup
};
