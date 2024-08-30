import { jsx as r, Fragment as o } from "react/jsx-runtime";
import '../../assets/FieldGroupContainer.css';/* empty css                               */
const l = (n) => {
  const e = n.columns ? "py-field-group-container py-field-group-container-" + n.columns + "columns" : "py-field-group-container";
  return /* @__PURE__ */ r(o, { children: /* @__PURE__ */ r("div", { className: e, children: n.children }) });
};
export {
  l as FieldGroupContainer
};
