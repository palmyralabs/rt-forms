import { getValueSetter as A, setValueByKey as v, getValueAccessor as b } from "@palmyralabs/ts-utils";
const V = (e) => {
  var r, t;
  return ((r = e.queryOptions) == null ? void 0 : r.idAttribute) || ((t = e.lookupOptions) == null ? void 0 : t.idAttribute) || "id";
}, g = (e) => {
  var r, t;
  return ((r = e.queryOptions) == null ? void 0 : r.labelAttribute) || ((t = e.lookupOptions) == null ? void 0 : t.labelAttribute) || "id";
}, I = (e) => {
  var r, t;
  return ((r = e.lookupOptions) == null ? void 0 : r.idAttribute) || ((t = e.queryOptions) == null ? void 0 : t.idAttribute) || "id";
}, O = (e) => {
  var r, t;
  return ((r = e.lookupOptions) == null ? void 0 : r.labelAttribute) || ((t = e.queryOptions) == null ? void 0 : t.labelAttribute) || "id";
}, m = (e, { getOptionKey: r, getOptionValue: t }) => {
  const { attribute: p, lookupOptions: o } = e, c = A(p);
  if (o != null && o.displayAttribute)
    return (n, l) => {
      const d = r(n), i = t(n);
      v(o.displayAttribute, l, i), c(l, d);
    };
  if (o != null && o.idAttribute)
    return (n, l) => {
      if (typeof n != "object")
        c(l, "");
      else {
        const d = r(n), i = t(n), u = o.idAttribute, s = o.labelAttribute, a = { [u]: d, [s]: i };
        c(l, a);
      }
    };
  throw new Error("lookupOptions must be provided in the field options");
}, q = (e) => {
  const { attribute: r } = e, t = e.lookupOptions, p = V(e), o = g(e), c = b(r), n = A(p), l = A(o), d = (i, u) => {
    var s = {};
    return n(s, i), l(s, u), s;
  };
  if (t != null && t.displayAttribute) {
    const i = b(t.displayAttribute);
    return (u) => {
      const s = c(u);
      if (s) {
        const a = i(u);
        return d(s, a);
      } else
        return null;
    };
  } else if (t != null && t.idAttribute) {
    const i = I(e), u = O(e), s = b(i), a = b(u);
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
