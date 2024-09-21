import { useRef as f } from "react";
import { useValidityTracker as m } from "./useValidityTracker.js";
import { e as b } from "../../../chunks/accessor.js";
import "../../../chunks/NoopConverter.js";
import "dayjs";
const z = (c) => {
  const s = f(c.formData || {}), l = f({}), d = c.onValidChange || ((t) => {
    console.log(t);
  }), i = f({}), { isValid: M, setValidity: D } = m((t) => {
    d(t);
  }, 200), F = () => ({ ...s.current, ...l.current }), V = () => s.current, v = () => {
    const t = F(), r = i.current;
    for (const n in r)
      r[n].setData(t);
  }, y = (t) => {
    const r = i.current;
    for (const n in r)
      r[n].setData(t);
    s.current = t;
  }, G = (t) => i.current[t], R = (t) => {
    const r = i.current, n = k(t);
    return r[t.name] = n, n;
  }, k = (t) => {
    const r = f({}), n = m((e) => {
      D(p(), e);
    }), g = (e) => b(e, s.current), p = () => t.name;
    return {
      setData: (e) => {
        s.current = e, h(r.current, e);
      },
      getName: p,
      getFieldGroupData: () => {
        var e = {};
        const a = r.current;
        return Object.keys(a).every((o) => {
          const u = a[o].field;
          return u.valueWriter(e, u.getValue()), !0;
        }), e;
      },
      registerFieldManager: (e, a) => {
        console.log(e.getValue()), r.current[a.attribute] = { field: e, options: a };
        const o = e.isValid();
        D(a.attribute, o);
      },
      hasField: (e) => r.current[e] != null,
      getFieldRawData: (e) => {
        var a = e(l.current);
        return a ?? e(s.current);
      },
      getFieldData: g,
      setFieldData: (e, a) => {
        var u;
        const o = (u = r.current[e]) == null ? void 0 : u.field;
        o && o.valueWriter(l.current, a);
      },
      setFieldValidity: n.setValidity,
      isValid: n.isValid
    };
  };
  return {
    getData: F,
    getPropsData: V,
    isValid: M,
    reset: v,
    setData: y,
    registerFieldGroupManager: R,
    getFieldGroupManager: G
  };
}, h = (c, s) => {
  Object.keys(c).every((l) => {
    const d = c[l].field, i = d.valueAccessor;
    return d.setValue(i(s), !1, !1), !0;
  });
};
export {
  z as useFormManager
};
