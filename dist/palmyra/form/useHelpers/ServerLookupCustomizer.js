import { getValueSetter as k, setValueByKey as V, getValueAccessor as b } from "@palmyralabs/ts-utils";
const g = (t) => {
  var o, e;
  return ((o = t.queryOptions) == null ? void 0 : o.idAttribute) || ((e = t.lookupOptions) == null ? void 0 : e.idAttribute) || "id";
}, q = (t) => {
  var o, e, c, r;
  return t.lookupOptions.displayAttribute ? ((o = t.queryOptions) == null ? void 0 : o.labelAttribute) || ((e = t.lookupOptions) == null ? void 0 : e.displayAttribute) || "code" : ((c = t.queryOptions) == null ? void 0 : c.labelAttribute) || ((r = t.lookupOptions) == null ? void 0 : r.labelAttribute) || "code";
}, v = (t) => {
  var o, e;
  return ((o = t.lookupOptions) == null ? void 0 : o.idAttribute) || ((e = t.queryOptions) == null ? void 0 : e.idAttribute) || "id";
}, I = (t) => {
  var o, e;
  return t.lookupOptions.displayAttribute ? t.lookupOptions.displayAttribute : ((o = t.lookupOptions) == null ? void 0 : o.labelAttribute) || ((e = t.queryOptions) == null ? void 0 : e.labelAttribute) || "code";
}, m = (t, { getOptionKey: o, getOptionValue: e }) => {
  const { attribute: c, lookupOptions: r } = t, p = k(c);
  if (r != null && r.displayAttribute)
    return (u, l) => {
      const a = o(u), i = e(u);
      V(r.displayAttribute, l, i), p(l, a);
    };
  if (r != null && r.idAttribute)
    return (u, l) => {
      if (typeof u != "object")
        p(l, "");
      else {
        const a = o(u), i = e(u), n = r.idAttribute, s = r.labelAttribute, d = { [n]: a, [s]: i };
        p(l, d);
      }
    };
  throw new Error("lookupOptions must be provided in the field options");
}, h = (t) => {
  const { attribute: o } = t, e = t.lookupOptions, c = g(t), r = q(t), p = b(o), u = k(c), l = k(r), a = (i, n) => {
    var s = {};
    return u(s, i), l(s, n), s;
  };
  if (e != null && e.displayAttribute) {
    const i = b(e.displayAttribute);
    return (n) => {
      const s = p(n);
      if (s) {
        const d = i(n);
        return a(s, d);
      } else
        return null;
    };
  } else {
    const i = v(t), n = I(t);
    if (c != i || r != n)
      return (s) => {
        const d = b(i), O = b(n), y = p(s);
        if (y) {
          const f = d(y), K = O(y);
          if (f || K) {
            var A = {};
            return u(A, f), l(A, K), A;
          }
        }
      };
  }
};
export {
  h as generateFieldAccessor,
  m as generateFieldWriter,
  v as getLookupIdKey,
  I as getLookupValueKey,
  g as getOptionIdKey,
  q as getOptionValueKey
};
