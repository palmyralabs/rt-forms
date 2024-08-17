import { useRef as g, useEffect as j } from "react";
import { useValidityTracker as m } from "./useValidityTracker.js";
import { e as C } from "../../../chunks/accessor.js";
import "../../../chunks/NoopConverter.js";
import "dayjs";
const w = (o) => {
  const s = g(o.formData || {}), u = g({}), d = o.onValidChange || ((e) => {
    console.log(e);
  }), i = g({}), { isValid: F, setValidity: p } = m((e) => {
    d(e);
  }, 200), D = () => ({ ...s.current, ...u.current }), G = () => s.current, V = () => {
    const e = D(), r = i.current;
    for (const a in r)
      r[a].setData(e);
  }, v = (e) => {
    const r = i.current;
    for (const a in r)
      r[a].setData(e);
    s.current = e;
  }, k = (e) => i.current[e], R = (e) => {
    const r = i.current, a = b(e);
    return r[e.name] = a, a;
  }, b = (e) => {
    const r = g({}), a = m((t) => {
      p(M(), t);
    }), f = D();
    j(() => {
      y(r.current, f);
    }, [f]);
    const h = (t) => C(t, s.current), M = () => e.name;
    return {
      setData: (t) => {
        s.current = t, y(r.current, t);
      },
      getName: M,
      getFieldGroupData: () => {
        var t = {};
        const n = r.current;
        return Object.keys(n).every((c) => {
          const l = n[c].field;
          return l.valueWriter(t, l.getValue()), !0;
        }), t;
      },
      registerFieldManager: (t, n) => {
        r.current[n.attribute] = { field: t, options: n };
        const c = t.isValid();
        p(n.attribute, c);
      },
      getFieldData: h,
      setFieldData: (t, n) => {
        var l;
        const c = (l = r.current[t]) == null ? void 0 : l.field;
        c && c.valueWriter(u.current, n);
      },
      setFieldValidity: a.setValidity,
      isValid: a.isValid
    };
  };
  return {
    getData: D,
    getPropsData: G,
    isValid: F,
    reset: V,
    setData: v,
    registerFieldGroupManager: R,
    getFieldGroupManager: k
  };
}, y = (o, s) => {
  Object.keys(o).every((u) => {
    const d = o[u].field, i = d.valueAccessor;
    return d.setValue(i(s), !1, !1), !0;
  });
};
export {
  w as useFormManager
};
