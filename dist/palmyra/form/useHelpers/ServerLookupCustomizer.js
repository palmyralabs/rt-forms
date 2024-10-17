import { x as A, i as v, K as b } from "../../../chunks/accessor.js";
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
  const { attribute: a, lookupOptions: o } = e, c = A(a);
  if (o != null && o.displayAttribute)
    return (s, l) => {
      const d = r(s), n = t(s);
      v(o.displayAttribute, l, n), c(l, d);
    };
  if (o != null && o.idAttribute)
    return (s, l) => {
      if (typeof s != "object")
        c(l, "");
      else {
        const d = r(s), n = t(s), u = o.idAttribute, i = o.labelAttribute, p = { [u]: d, [i]: n };
        c(l, p);
      }
    };
  throw new Error("lookupOptions must be provided in the field options");
}, S = (e) => {
  const { attribute: r } = e, t = e.lookupOptions, a = m(e), o = I(e), c = b(r), s = A(a), l = A(o), d = (n, u) => {
    var i = {};
    return s(i, n), l(i, u), i;
  };
  if (t != null && t.displayAttribute) {
    const n = b(t.displayAttribute);
    return (u) => {
      const i = c(u);
      if (i) {
        const p = n(u);
        return d(i, p);
      } else
        return null;
    };
  } else if (t != null && t.idAttribute) {
    const n = O(e), u = V(e), i = b(n), p = b(u);
    return (K) => {
      const y = c(K);
      if (y) {
        const f = i(y), k = p(y);
        return d(f, k);
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
