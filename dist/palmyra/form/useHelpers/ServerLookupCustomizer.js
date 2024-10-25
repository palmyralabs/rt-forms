import { getValueSetter as A, setValueByKey as v, getValueAccessor as b } from "@palmyralabs/ts-utils";
const V = (e) => {
  var r, t;
  return ((r = e.queryOptions) == null ? void 0 : r.idAttribute) || ((t = e.lookupOptions) == null ? void 0 : t.idAttribute) || "id";
}, g = (e) => {
  var r, t;
  return ((r = e.queryOptions) == null ? void 0 : r.labelAttribute) || ((t = e.lookupOptions) == null ? void 0 : t.labelAttribute) || "code";
}, I = (e) => {
  var r, t;
  return ((r = e.lookupOptions) == null ? void 0 : r.idAttribute) || ((t = e.queryOptions) == null ? void 0 : t.idAttribute) || "id";
}, O = (e) => {
  var r, t;
  return ((r = e.lookupOptions) == null ? void 0 : r.labelAttribute) || ((t = e.queryOptions) == null ? void 0 : t.labelAttribute) || "code";
}, m = (e, { getOptionKey: r, getOptionValue: t }) => {
  const { attribute: p, lookupOptions: o } = e, c = A(p);
  if (o != null && o.displayAttribute)
    return (i, l) => {
      const d = r(i), n = t(i);
      v(o.displayAttribute, l, n), c(l, d);
    };
  if (o != null && o.idAttribute)
    return (i, l) => {
      if (typeof i != "object")
        c(l, "");
      else {
        const d = r(i), n = t(i), u = o.idAttribute, s = o.labelAttribute, a = { [u]: d, [s]: n };
        c(l, a);
      }
    };
  throw new Error("lookupOptions must be provided in the field options");
}, q = (e) => {
  const { attribute: r } = e, t = e.lookupOptions, p = V(e), o = g(e), c = b(r), i = A(p), l = A(o), d = (n, u) => {
    var s = {};
    return i(s, n), l(s, u), s;
  };
  if (t != null && t.displayAttribute) {
    const n = b(t.displayAttribute);
    return (u) => {
      const s = c(u);
      if (s) {
        const a = n(u);
        return d(s, a);
      } else
        return null;
    };
  } else if (t != null && t.idAttribute) {
    const n = I(e), u = O(e), s = b(n), a = b(u);
    return (K) => {
      const y = c(K);
      if (y) {
        const f = s(y), k = a(y);
        return d(f, k);
      } else
        return null;
    };
  } else
    throw new Error("lookupOptions must be provided in the field options");
};
export {
  q as generateFieldAccessor,
  m as generateFieldWriter,
  I as getLookupIdKey,
  O as getLookupValueKey,
  V as getOptionIdKey,
  g as getOptionValueKey
};
