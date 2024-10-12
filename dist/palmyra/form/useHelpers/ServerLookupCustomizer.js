import { x as A, i as k, K as p } from "../../../chunks/accessor.js";
import "../../../chunks/NoopConverter.js";
import "dayjs";
const m = (e) => {
  var r, t;
  return ((r = e.queryOptions) == null ? void 0 : r.idAttribute) || ((t = e.lookupOptions) == null ? void 0 : t.idAttribute) || "id";
}, I = (e) => {
  var r, t;
  return ((r = e.queryOptions) == null ? void 0 : r.labelAttribute) || ((t = e.lookupOptions) == null ? void 0 : t.labelAttribute) || "id";
}, O = (e) => {
  var r, t;
  return ((r = e.lookupOptions) == null ? void 0 : r.idAttribute) || ((t = e.queryOptions) == null ? void 0 : t.idAttribute) || "id";
}, V = (e) => {
  var r, t;
  return ((r = e.lookupOptions) == null ? void 0 : r.labelAttribute) || ((t = e.queryOptions) == null ? void 0 : t.labelAttribute) || "id";
}, w = (e, { getOptionKey: r, getOptionValue: t }) => {
  const { attribute: b, lookupOptions: i } = e, d = A(b);
  if (i != null && i.displayAttribute)
    return (u, l) => {
      const c = r(u), n = t(u);
      k(i.displayAttribute, l, n), d(l, c);
    };
  if (i != null && i.idAttribute)
    return (u, l) => {
      const c = r(u), n = t(u), s = i.idAttribute, o = i.labelAttribute, a = { [s]: c, [o]: n };
      d(l, a);
    };
  throw new Error("lookupOptions must be provided in the field options");
}, S = (e) => {
  const { attribute: r } = e, t = e.lookupOptions, b = m(e), i = I(e), d = p(r), u = A(b), l = A(i), c = (n, s) => {
    var o = {};
    return u(o, n), l(o, s), o;
  };
  if (t != null && t.displayAttribute) {
    const n = p(t.displayAttribute);
    return (s) => {
      const o = d(s);
      if (o) {
        const a = n(s);
        return c(o, a);
      } else
        return null;
    };
  } else if (t != null && t.idAttribute) {
    const n = O(e), s = V(e), o = p(n), a = p(s);
    return (K) => {
      const y = d(K);
      if (y) {
        const f = o(y), v = a(y);
        return c(f, v);
      } else
        return null;
    };
  } else
    throw new Error("lookupOptions must be provided in the field options");
};
export {
  S as generateFieldAccessor,
  w as generateFieldWriter,
  O as getLookupIdKey,
  V as getLookupValueKey,
  m as getOptionIdKey,
  I as getOptionValueKey
};
