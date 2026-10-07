import { jsx as a } from "react/jsx-runtime";
import { forwardRef as n, useRef as i, useImperativeHandle as c } from "react";
import { getSaveFormHandle as l } from "./formUtil.js";
import { PalmyraForm as s } from "./PalmyraForm.js";
import { usePalmyraViewForm as u } from "./useHelpers/usePalmyraViewForm.js";
const w = n(function(r, o) {
  const m = r.storeFactory, { formRef: e, refresh: t } = u(r), f = o || i(null);
  return c(f, () => l({}, e, t)), /* @__PURE__ */ a(s, { ref: e, storeFactory: m, children: r.children });
});
export {
  w as PalmyraViewForm
};
