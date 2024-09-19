import { useRef as f } from "react";
import { useValidityTracker as v } from "./useValidityTracker.js";
import { e as j } from "../../../chunks/accessor.js";
import "../../../chunks/NoopConverter.js";
import "dayjs";
const z = (o) => {
  const c = f(o.formData || {}), l = f({}), d = o.onValidChange || ((t) => {
    console.log(t);
  }), u = f({}), { isValid: G, setValidity: D } = v((t) => {
    d(t);
  }, 200), V = () => ({ ...c.current, ...l.current }), M = () => c.current, p = () => {
    const t = V(), r = u.current;
    for (const n in r)
      r[n].setData(t);
  }, b = (t) => {
    const r = u.current;
    for (const n in r)
      r[n].setData(t);
    c.current = t;
  }, k = (t) => u.current[t], R = (t) => {
    const r = u.current, n = h(t);
    return r[t.name] = n, n;
  }, h = (t) => {
    const r = f({}), n = v((e) => {
      D(m(), e);
    }), g = (e) => j(e, c.current), m = () => t.name, A = () => {
      var e = {};
      const a = r.current;
      return Object.keys(a).every((s) => {
        const i = a[s].field;
        return i.valueWriter(e, i.getValue()), !0;
      }), e;
    }, y = (e, a) => {
      var i;
      const s = (i = r.current[e]) == null ? void 0 : i.field;
      s && s.valueWriter(l.current, a);
    };
    return {
      setData: (e) => {
        c.current = e, C(r.current, e);
      },
      getName: m,
      getFieldGroupData: A,
      registerFieldManager: (e, a) => {
        if (r.current[a.attribute])
          r.current[a.attribute] = { field: e, options: a };
        else if (r.current[a.attribute] = { field: e, options: a }, a.defaultValue != null) {
          var s = e.valueAccessor(l.current);
          if ((s == null || s == "") && e.valueAccessor(c.current), s == null || s == "") {
            const F = e.getValue();
            console.log("setting default", F), y(a.attribute, F);
          }
        }
        const i = e.isValid();
        D(a.attribute, i);
      },
      hasField: (e) => r.current[e] != null,
      getFieldData: g,
      setFieldData: y,
      setFieldValidity: n.setValidity,
      isValid: n.isValid
    };
  };
  return {
    getData: V,
    getPropsData: M,
    isValid: G,
    reset: p,
    setData: b,
    registerFieldGroupManager: R,
    getFieldGroupManager: k
  };
}, C = (o, c) => {
  Object.keys(o).every((l) => {
    const d = o[l].field, u = d.valueAccessor;
    return d.setValue(u(c, !0), !1, !1), !0;
  });
};
export {
  z as useFormManager
};
