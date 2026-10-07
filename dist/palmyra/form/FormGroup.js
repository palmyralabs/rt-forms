import { jsxs as o, jsx as m } from "react/jsx-runtime";
import '../../assets/FormGroup.css';const c = ({ title: i, children: s, headerContent: r }) => /* @__PURE__ */ o("div", { className: "py-form-group", children: [
  /* @__PURE__ */ o("div", { className: "py-form-group-title", children: [
    i,
    r && /* @__PURE__ */ m("div", { children: r })
  ] }),
  s
] });
export {
  c as FormGroup
};
