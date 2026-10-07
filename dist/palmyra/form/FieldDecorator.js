import { jsxs as d, jsx as s } from "react/jsx-runtime";
import '../../assets/FieldGroupContainer.css';import '../../assets/FieldDecorator.css';/* empty css                               */
const a = "py-form-field-container", i = (l) => a + "-" + l + "colspan", f = (l) => {
  if (l.label) {
    var c = l.customContainerClass ? a + " " + l.customContainerClass : a;
    l.colspan && (c += " " + i(l.colspan));
    const t = l.customLabelClass ? "py-form-field-label " + l.customLabelClass : "py-form-field-label", n = l.customFieldClass ? "py-form-field-data " + l.customFieldClass : "py-form-field-data";
    return /* @__PURE__ */ d("div", { className: c, children: [
      /* @__PURE__ */ s("div", { className: t, children: l.label }),
      /* @__PURE__ */ s("div", { className: n, children: l.children })
    ] });
  } else {
    var e = a;
    return e += " " + (l.customFieldClass ? "py-form-field-data " + l.customFieldClass : "py-form-field-data"), l.colspan && (e += " " + i(l.colspan)), /* @__PURE__ */ s("div", { className: e, children: l.children });
  }
};
export {
  f as FieldDecorator
};
