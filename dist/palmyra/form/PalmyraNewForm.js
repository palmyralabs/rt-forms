import { jsx as n } from "react/jsx-runtime";
import { PalmyraForm as i } from "./PalmyraForm.js";
import { forwardRef as f, useRef as l, useImperativeHandle as c } from "react";
import { getSaveFormHandle as d } from "./formUtil.js";
import { usePalmyraNewForm as s } from "./useHelpers/usePalmyraNewForm.js";
const v = f(function(r, o) {
  const a = r.storeFactory, { saveData: t, formRef: e } = s(r), m = o || l(null);
  return c(m, () => d(t, e)), /* @__PURE__ */ n(
    i,
    {
      onValidChange: r.onValidChange,
      formData: r.initialData,
      ref: e,
      storeFactory: a,
      children: r.children
    }
  );
});
export {
  v as PalmyraNewForm
};
