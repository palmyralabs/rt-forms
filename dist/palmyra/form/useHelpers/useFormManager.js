import { useRef as f } from "react";
import { useValidityTracker as M } from "./useValidityTracker.js";
const A = (o) => {
  const s = f(o.formData || {}), l = f({}), u = o.onValidChange || ((t) => {
    console.log(t);
  }), i = f({}), { isValid: v, setValidity: g } = M((t) => {
    u(t);
  }, 200), D = () => ({ ...s.current, ...l.current }), y = () => s.current, G = () => {
    const t = D(), r = i.current;
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
    const r = f({}), n = M((e) => {
      g(d(), e);
    }), d = () => t.name;
    return {
      setData: (e) => {
        s.current = e, k(r.current, e);
      },
      getName: d,
      getFieldGroupData: () => {
        var e = {};
        const a = r.current;
        return Object.keys(a).every((c) => {
          const F = a[c].field;
          return F.valueWriter(e, F.getValue()), !0;
        }), e;
      },
      registerFieldManager: (e, a) => {
        r.current[a.attribute] = { field: e, options: a };
        const c = e.isValid();
        g(a.attribute, c);
      },
      hasField: (e) => r.current[e] != null,
      getFieldRawData: (e) => {
        var a = e(l.current);
        return a ?? e(s.current);
      },
      setFieldData: (e, a) => {
        const c = r.current[e]?.field;
        c && c.valueWriter(l.current, a);
      },
      setFieldValidity: n.setValidity,
      isValid: n.isValid
    };
  };
  return {
    getData: D,
    getPropsData: y,
    isValid: v,
    reset: G,
    setData: V,
    registerFieldGroupManager: m,
    getFieldGroupManager: p
  };
}, k = (o, s) => {
  Object.keys(o).every((l) => {
    const u = o[l].field, i = u.valueAccessor;
    return u.setValue(i(s), !1, !1, !0), !0;
  });
};
export {
  A as useFormManager
};
