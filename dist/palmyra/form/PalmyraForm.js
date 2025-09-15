import { jsx as t, Fragment as c } from "react/jsx-runtime";
import { forwardRef as s, useRef as o, useContext as g, useImperativeHandle as F, useEffect as h } from "react";
import { StoreFactoryContext as i, FormManagerContext as C } from "./formContext.js";
import { FieldGroup as V } from "./FieldGroup.js";
import { useFormManager as y } from "./useHelpers/useFormManager.js";
const j = s(function(e, a) {
  const l = a || o(null), d = e.storeFactory || g(i), m = o(null), n = e.formData, f = e.onValidChange, r = y(e);
  return F(l, () => ({
    getData() {
      return r.getData();
    },
    isValid() {
      return r.isValid();
    },
    setData(u) {
      r.setData(u);
    }
  }), [n, f]), h(() => {
    r.isValid() && e.onValidChange && e.onValidChange(!0);
  }, [n]), /* @__PURE__ */ t(c, { children: /* @__PURE__ */ t(i.Provider, { value: d, children: /* @__PURE__ */ t(C.Provider, { value: r, children: /* @__PURE__ */ t(V, { name: "_default", ref: m, children: e.children }) }) }) });
});
export {
  j as PalmyraForm
};
