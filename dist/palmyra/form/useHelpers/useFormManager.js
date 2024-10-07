import { useRef as g } from "react";
import { useValidityTracker as M } from "./useValidityTracker.js";
const A = (o) => {
  const s = g(o.formData || {}), l = g({}), d = o.onValidChange || ((t) => {
    console.log(t);
  }), i = g({}), { isValid: v, setValidity: D } = M((t) => {
    d(t);
  }, 200), F = () => ({ ...s.current, ...l.current }), y = () => s.current, G = () => {
    const t = F(), r = i.current;
    for (const n in r)
      r[n].setData(t);
  }, V = (t) => {
    const r = i.current;
    for (const n in r)
      r[n].setData(t);
    s.current = t;
  }, p = (t) => i.current[t], m = (t) => {
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
          const u = a[c].field;
          return u.valueWriter(e, u.getValue()), !0;
        }), e;
      },
      registerFieldManager: (e, a) => {
        r.current[a.attribute] = { field: e, options: a };
        const c = e.isValid();
        D(a.attribute, c);
      },
      hasField: (e) => r.current[e] != null,
      getFieldRawData: (e) => {
        var a = e(l.current);
        return a ?? e(s.current);
      },
      setFieldData: (e, a) => {
        var u;
        const c = (u = r.current[e]) == null ? void 0 : u.field;
        c && c.valueWriter(l.current, a);
      },
      setFieldValidity: n.setValidity,
      isValid: n.isValid
    };
  };
  return {
    getData: F,
    getPropsData: y,
    isValid: v,
    reset: G,
    setData: V,
    registerFieldGroupManager: m,
    getFieldGroupManager: p
  };
}, k = (o, s) => {
  Object.keys(o).every((l) => {
    const d = o[l].field, i = d.valueAccessor;
    return d.setValue(i(s), !1, !1), !0;
  });
};
export {
  A as useFormManager
};
