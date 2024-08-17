import { jsx as i, Fragment as m } from "react/jsx-runtime";
import { forwardRef as F, useRef as s, useImperativeHandle as D } from "react";
import { StoreFactoryContext as M, FormManagerContext as y } from "./formContext.js";
import { FieldGroup as v } from "./FieldGroup.js";
import { useValidityTracker as V } from "./useHelpers/useValidityTracker.js";
const b = F(function(r, o) {
  const t = o || s(null), c = s(), u = r.formData, d = r.onValidChange, n = h(r);
  return D(t, () => ({
    getData() {
      return n.getData();
    },
    isValid() {
      return n.isValid();
    },
    setData(g) {
      n.setData(g);
    }
  }), [u, d]), /* @__PURE__ */ i(m, { children: /* @__PURE__ */ i(M.Provider, { value: r.storeFactory, children: /* @__PURE__ */ i(y.Provider, { value: n, children: /* @__PURE__ */ i(v, { name: "_default", ref: c, children: r.children }) }) }) });
}), h = (l) => {
  const r = s(l.formData || {}), o = l.onValidChange || ((e) => {
    console.log(e);
  }), t = s({}), { isValid: c, setValidity: u } = V((e) => {
    o(e);
  }, 200);
  return {
    getData: () => {
      var e = r.current || {};
      return Object.values(t.current).every((a) => (e = { ...e, ...a.getFieldGroupData() }, !0)), e;
    },
    getPropsData: () => r.current,
    isValid: c,
    setFieldGroupValid: u,
    setData: (e) => {
      const a = t.current;
      for (const f in a)
        a[f].setData(e);
      r.current = e;
    },
    registerFieldGroupManager: (e) => {
      const a = t.current;
      a[e.getName()] = e;
    },
    getFieldGroupManager: (e) => t.current[e]
  };
};
export {
  b as PalmyraForm,
  h as useFormManager
};
