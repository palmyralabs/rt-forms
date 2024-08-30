import { jsxs as n, jsx as s } from "react/jsx-runtime";
import '../../assets/FieldContainer.css';import '../../assets/FieldGroupContainer.css';/* empty css                               */
/* empty css                          */
const a = "py-form-field-container", t = (l) => a + "-" + l + "colspan", r = (l) => {
  if (l.label) {
    var i = l.customContainerClass ? a + " " + l.customContainerClass : a;
    l.colspan && (i += " " + t(l.colspan));
    const c = l.customLabelClass ? "py-form-field-label " + l.customLabelClass : "py-form-field-label", d = l.customFieldClass ? "py-form-field-data " + l.customFieldClass : "py-form-field-data";
    return /* @__PURE__ */ n("div", { className: i, children: [
      /* @__PURE__ */ s("div", { className: c, children: l.label }),
      /* @__PURE__ */ s("div", { className: d, children: l.children })
    ] });
  } else {
    var e = a;
    return e += " " + (l.customFieldClass ? "py-form-field-data " + l.customFieldClass : "py-form-field-data"), l.colspan && (e += " " + t(l.colspan)), /* @__PURE__ */ s("div", { className: e, children: l.children });
  }
};
export {
  r as default
};
