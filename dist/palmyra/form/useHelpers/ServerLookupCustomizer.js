import { getValueSetter as f, setValueByKey as V, getValueAccessor as b } from "@palmyralabs/ts-utils";
const g = (t) => {
  var o, e;
  return ((o = t.queryOptions) == null ? void 0 : o.idAttribute) || ((e = t.lookupOptions) == null ? void 0 : e.idAttribute) || "id";
}, q = (t) => {
  var o, e, u, r, s;
  return (o = t.lookupOptions) != null && o.displayAttribute ? ((e = t.queryOptions) == null ? void 0 : e.labelAttribute) || ((u = t.lookupOptions) == null ? void 0 : u.displayAttribute) || "code" : ((r = t.queryOptions) == null ? void 0 : r.labelAttribute) || ((s = t.lookupOptions) == null ? void 0 : s.labelAttribute) || "code";
}, I = (t) => {
  var o, e;
  return ((o = t.lookupOptions) == null ? void 0 : o.idAttribute) || ((e = t.queryOptions) == null ? void 0 : e.idAttribute) || "id";
}, S = (t) => {
  var o, e, u;
  return (o = t.lookupOptions) != null && o.displayAttribute ? t.lookupOptions.displayAttribute : ((e = t.lookupOptions) == null ? void 0 : e.labelAttribute) || ((u = t.queryOptions) == null ? void 0 : u.labelAttribute) || "code";
}, h = (t, { getOptionKey: o, getOptionValue: e }) => {
  const { attribute: u, lookupOptions: r } = t, s = f(u);
  if (r != null && r.displayAttribute)
    return (i, n) => {
      if (i != null && i != null) {
        const d = o(i), l = e(i);
        V(r.displayAttribute, n, l), s(n, d);
      } else
        s(n, null);
    };
  if (r != null && r.idAttribute)
    return (i, n) => {
      if (typeof i != "object")
        s(n, null);
      else if (i) {
        const d = o(i), l = e(i), p = r.idAttribute, c = r.labelAttribute, a = { [p]: d, [c]: l };
        s(n, a);
      } else
        s(n, null);
    };
  throw new Error("lookupOptions must be provided in the field options");
}, v = (t) => {
  const { attribute: o } = t, e = t.lookupOptions, u = g(t), r = q(t), s = b(o), i = f(u), n = f(r), d = (l, p) => {
    var c = {};
    return i(c, l), n(c, p), c;
  };
  if (e != null && e.displayAttribute) {
    const l = b(e.displayAttribute);
    return (p) => {
      const c = s(p);
      if (c) {
        const a = l(p);
        return d(c, a);
      } else
        return null;
    };
  } else {
    const l = I(t), p = S(t);
    if (u != l || r != p)
      return (c) => {
        const a = b(l), O = b(p), y = s(c);
        if (y) {
          const k = a(y), K = O(y);
          if (k || K) {
            var A = {};
            return i(A, k), n(A, K), A;
          }
        }
      };
  }
};
export {
  v as generateFieldAccessor,
  h as generateFieldWriter,
  I as getLookupIdKey,
  S as getLookupValueKey,
  g as getOptionIdKey,
  q as getOptionValueKey
};
