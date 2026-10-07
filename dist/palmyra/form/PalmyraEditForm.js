import { jsx as f } from "react/jsx-runtime";
import { PalmyraForm as d } from "./PalmyraForm.js";
import { forwardRef as l, useRef as c, useEffect as u, useImperativeHandle as h } from "react";
import { getSaveFormHandle as s } from "./formUtil.js";
import { usePalmyraEditForm as F } from "./useHelpers/usePalmyraEditForm.js";
const v = l(function(e, t) {
  const a = e.storeFactory, { fetchData: o, saveData: n, formRef: r, refresh: i } = F(e), m = t || c(null);
  return u(() => {
    o(), r.current.isValid() && e.onValidChange && e.onValidChange(!0);
  }, [r, e.id]), h(m, () => s(n, r, i)), /* @__PURE__ */ f(d, { onValidChange: e.onValidChange, ref: r, storeFactory: a, children: e.children });
});
export {
  v as PalmyraEditForm
};
