import { useContext as F, useRef as f, useEffect as M } from "react";
import { e as D } from "../../../chunks/accessor.js";
import "../../../chunks/NoopConverter.js";
import "dayjs";
import { FormManagerContext as G } from "../formContext.js";
import { useValidityTracker as V } from "../useValidityTracker.js";
const N = (a) => {
  const t = F(G);
  return y(a, t);
}, y = (a, t) => {
  const r = a.name || "_default", s = v({ name: r }, t);
  return t.registerFieldGroupManager(s), s;
}, g = (a, t) => {
  Object.keys(a).every((r) => {
    const s = a[r].field, o = s.valueAccessor;
    return s.setValue(o(t), !1, !1), !0;
  });
}, v = (a, t) => {
  const r = f({}), s = t.getPropsData() || {}, o = f(s), l = o.current, { isValid: p, setValidity: u } = V((e) => {
    t.setFieldGroupValid(d(), e);
  });
  M(() => {
    g(r.current, l);
  }, [l]);
  const m = (e) => D(e, o.current), d = () => a.name;
  return {
    setData: (e) => {
      o.current = e, g(r.current, e);
    },
    getName: d,
    getFieldGroupData: () => {
      var e = {};
      const n = r.current;
      return Object.keys(n).every((i) => {
        const c = n[i].field;
        return c.valueWriter(e, c.getValue()), !0;
      }), e;
    },
    registerFieldManager: (e, n) => {
      r.current[n.attribute] = { field: e, options: n };
      const i = e.isValid();
      u(n.attribute, i);
    },
    getFieldData: m,
    setFieldData: (e, n) => {
      var c;
      const i = (c = r.current[e]) == null ? void 0 : c.field;
      i && i.valueWriter(l, n);
    },
    setFieldValidity: u,
    isValid: p
  };
};
export {
  y as registerFieldGroupManager,
  N as useFieldGroupManager
};
