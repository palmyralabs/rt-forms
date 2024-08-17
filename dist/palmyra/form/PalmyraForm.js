import { jsx as a, Fragment as f } from "react/jsx-runtime";
import { forwardRef as u, useRef as o, useImperativeHandle as c, useEffect as g } from "react";
import { StoreFactoryContext as s, FormManagerContext as h } from "./formContext.js";
import { FieldGroup as F } from "./FieldGroup.js";
import { useFormManager as V } from "./useHelpers/useFormManager.js";
const P = u(function(e, t) {
  const i = t || o(null), l = o(), n = e.formData, d = e.onValidChange, r = V(e);
  return c(i, () => ({
    getData() {
      return r.getData();
    },
    isValid() {
      return r.isValid();
    },
    setData(m) {
      r.setData(m);
    }
  }), [n, d]), g(() => {
    r.isValid() && e.onValidChange && e.onValidChange(!0);
  }, [n]), /* @__PURE__ */ a(f, { children: /* @__PURE__ */ a(s.Provider, { value: e.storeFactory, children: /* @__PURE__ */ a(h.Provider, { value: r, children: /* @__PURE__ */ a(F, { name: "_default", ref: l, children: e.children }) }) }) });
});
export {
  P as PalmyraForm
};
