import { useRef as g, useEffect as O } from "react";
import { useValidityTracker as v } from "./useValidityTracker.js";
import { e as T } from "../../../chunks/accessor.js";
import "../../../chunks/NoopConverter.js";
import "dayjs";
const B = (o) => {
  const c = g(o.formData || {}), l = g({}), d = o.onValidChange || ((r) => {
    console.log(r);
  }), u = g({}), { isValid: M, setValidity: V } = v((r) => {
    d(r);
  }, 200), D = () => ({ ...c.current, ...l.current }), p = () => c.current, b = () => {
    const r = D(), t = u.current;
    for (const n in t)
      t[n].setData(r);
  }, k = (r) => {
    const t = u.current;
    for (const n in t)
      t[n].setData(r);
    c.current = r;
  }, R = (r) => u.current[r], h = (r) => {
    const t = u.current, n = A(r);
    return t[r.name] = n, n;
  }, A = (r) => {
    const t = g({}), n = v((e) => {
      V(m(), e);
    }), f = D();
    O(() => {
      G(t.current, f);
    }, [f]);
    const j = (e) => T(e, c.current), m = () => r.name, C = () => {
      var e = {};
      const a = t.current;
      return Object.keys(a).every((s) => {
        const i = a[s].field;
        return i.valueWriter(e, i.getValue()), !0;
      }), e;
    }, y = (e, a) => {
      var i;
      const s = (i = t.current[e]) == null ? void 0 : i.field;
      s && s.valueWriter(l.current, a);
    };
    return {
      setData: (e) => {
        c.current = e, G(t.current, e);
      },
      getName: m,
      getFieldGroupData: C,
      registerFieldManager: (e, a) => {
        if (t.current[a.attribute])
          t.current[a.attribute] = { field: e, options: a };
        else if (t.current[a.attribute] = { field: e, options: a }, a.defaultValue != null) {
          var s = e.valueAccessor(l.current);
          if ((s == null || s == "") && e.valueAccessor(c.current), s == null || s == "") {
            const F = e.getValue();
            console.log("setting default", F), y(a.attribute, F);
          }
        }
        const i = e.isValid();
        V(a.attribute, i);
      },
      hasField: (e) => t.current[e] != null,
      getFieldData: j,
      setFieldData: y,
      setFieldValidity: n.setValidity,
      isValid: n.isValid
    };
  };
  return {
    getData: D,
    getPropsData: p,
    isValid: M,
    reset: b,
    setData: k,
    registerFieldGroupManager: h,
    getFieldGroupManager: R
  };
}, G = (o, c) => {
  Object.keys(o).every((l) => {
    const d = o[l].field, u = d.valueAccessor;
    return d.setValue(u(c), !1, !1), !0;
  });
};
export {
  B as useFormManager
};
