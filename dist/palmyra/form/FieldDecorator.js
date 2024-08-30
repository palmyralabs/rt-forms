import { jsxs as d, jsx as s } from "react/jsx-runtime";
import '../../assets/FieldContainer.css';import '../../assets/FieldGroupContainer.css';/* empty css                               */
/* empty css                          */
const a = "py-form-field-container", c = (l) => a + "-" + l + "colspan", r = (l) => {
  if (l.label) {
    var i = l.customContainerClass ? a + " " + l.customContainerClass : a;
    l.colspan && (i += " " + c(l.colspan));
    const t = l.customLabelClass ? "py-form-field-label " + l.customLabelClass : "py-form-field-label", n = l.customFieldClass ? "py-form-field-data " + l.customFieldClass : "py-form-field-data";
    return /* @__PURE__ */ d("div", { className: i, children: [
      /* @__PURE__ */ s("div", { className: t, children: l.label }),
      /* @__PURE__ */ s("div", { className: n, children: l.children })
    ] });
  } else {
    var e = a;
    return e += " " + (l.customFieldClass ? "py-form-field-data " + l.customFieldClass : "py-form-field-data"), l.colspan && (e += " " + c(l.colspan)), /* @__PURE__ */ s("div", { className: e, children: l.children });
  }
};
export {
  r as FieldDecorator
};
