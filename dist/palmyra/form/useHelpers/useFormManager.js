import { useRef as g } from "react";
import { useValidityTracker as M } from "./useValidityTracker.js";
const A = (o) => {
  const s = g(o.formData || {}), u = g({}), d = o.onValidChange || ((t) => {
    console.log(t);
  }), i = g({}), { isValid: y, setValidity: D } = M((t) => {
    d(t);
  }, 200), F = () => ({ ...s.current, ...u.current }), G = () => s.current, V = () => {
    const t = F(), r = i.current;
    for (const n in r)
      r[n].setData(t);
  }, p = (t) => {
    const r = i.current;
    for (const n in r)
      r[n].setData(t);
    s.current = t;
  }, v = (t) => i.current[t], m = (t) => {
    const r = i.current, n = R(t);
    return r[t.name] = n, n;
  }, R = (t) => {
    const r = g({}), n = M((e) => {
      D(f(), e);
    }), f = () => t.name;
    return {
      setData: (e) => {
        s.current = e, k(r.current, e);
      },
      getName: f,
      getFieldGroupData: () => {
        var e = {};
        const a = r.current;
        return Object.keys(a).every((c) => {
          const l = a[c].field;
          return l.valueWriter(e, l.getValue()), !0;
        }), e;
      },
      registerFieldManager: (e, a) => {
        r.current[a.attribute] = { field: e, options: a };
        const c = e.isValid();
        D(a.attribute, c);
      },
      hasField: (e) => r.current[e] != null,
      getFieldRawData: (e) => {
        var a = e(u.current);
        return a ?? e(s.current);
      },
      setFieldData: (e, a) => {
        var l;
        const c = (l = r.current[e]) == null ? void 0 : l.field;
        c && c.valueWriter(u.current, a);
      },
      setFieldValidity: n.setValidity,
      isValid: n.isValid
    };
  };
  return {
    getData: F,
    getPropsData: G,
    isValid: y,
    reset: V,
    setData: p,
    registerFieldGroupManager: m,
    getFieldGroupManager: v
  };
}, k = (o, s) => {
  Object.keys(o).every((u) => {
    const d = o[u].field, i = d.valueAccessor;
    return d.setValue(i(s), !1, !1, !0), !0;
  });
};
export {
  A as useFormManager
};
