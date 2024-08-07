import { jsx as i, Fragment as F } from "react/jsx-runtime";
import { forwardRef as D, useRef as s, useImperativeHandle as M } from "react";
import { StoreFactoryContext as y, FormManagerContext as v } from "./formContext.js";
import { FieldGroup as V } from "./FieldGroup.js";
import { useValidityTracker as h } from "./useValidityTracker.js";
const b = D(function(t, o) {
  const r = o || s(null), c = s(), d = t.formData, u = t.onValidChange, g = t.mode, n = G(t);
  return M(r, () => ({
    getData() {
      return n.getData();
    },
    isValid() {
      return n.isValid();
    },
    setData(m) {
      n.setData(m);
    }
  }), [d, u, g]), /* @__PURE__ */ i(F, { children: /* @__PURE__ */ i(y.Provider, { value: t.storeFactory, children: /* @__PURE__ */ i(v.Provider, { value: n, children: /* @__PURE__ */ i(V, { name: "_default", ref: c, children: t.children }) }) }) });
}), G = (l) => {
  const t = s(l.formData || {}), o = l.onValidChange || ((e) => {
    console.log(e);
  }), r = s({}), { isValid: c, setValidity: d } = h((e) => {
    o(e);
  }, 200);
  return {
    getData: () => {
      var e = t.current || {};
      return Object.values(r.current).every((a) => (e = { ...e, ...a.getFieldGroupData() }, !0)), e;
    },
    getPropsData: () => t.current,
    isValid: c,
    setFieldGroupValid: d,
    setData: (e) => {
      const a = r.current;
      for (const f in a)
        a[f].setData(e);
      t.current = e;
    },
    registerFieldGroupManager: (e) => {
      const a = r.current;
      a[e.getName()] = e;
    },
    getFieldGroupManager: (e) => r.current[e]
  };
};
export {
  b as PalmyraForm,
  G as useFormManager
};
