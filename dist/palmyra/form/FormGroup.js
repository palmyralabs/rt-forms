import { jsxs as o, jsx as p } from "react/jsx-runtime";
import '../../assets/FormGroup.css';/* empty css                     */
const l = ({ title: i, children: m, headerContent: r }) => /* @__PURE__ */ o("div", { className: "py-form-group", children: [
  /* @__PURE__ */ o("div", { className: "py-form-group-title", children: [
    i,
    r && /* @__PURE__ */ p("div", { children: r })
  ] }),
  m
] });
export {
  l as FormGroup
};
