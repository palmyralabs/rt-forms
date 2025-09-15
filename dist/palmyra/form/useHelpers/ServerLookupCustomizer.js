import { getValueSetter as k, setValueByKey as V, getValueAccessor as b } from "@palmyralabs/ts-utils";
const g = (t) => t.queryOptions?.idAttribute || t.lookupOptions?.idAttribute || "id", q = (t) => t.lookupOptions?.displayAttribute ? t.queryOptions?.labelAttribute || t.lookupOptions?.displayAttribute || "code" : t.queryOptions?.labelAttribute || t.lookupOptions?.labelAttribute || "code", I = (t) => t.lookupOptions?.idAttribute || t.queryOptions?.idAttribute || "id", S = (t) => t.lookupOptions?.displayAttribute ? t.lookupOptions.displayAttribute : t.lookupOptions?.labelAttribute || t.queryOptions?.labelAttribute || "code", v = (t, { getOptionKey: d, getOptionValue: l }) => {
  const { attribute: a, lookupOptions: u } = t, n = k(a);
  if (u?.displayAttribute)
    return (e, o) => {
      if (e != null && e != null) {
        const p = d(e), i = l(e);
        V(u.displayAttribute, o, i), n(o, p);
      } else
        n(o, null);
    };
  if (u?.idAttribute)
    return (e, o) => {
      if (typeof e != "object")
        n(o, null);
      else if (e) {
        const p = d(e), i = l(e), r = u.idAttribute, s = u.labelAttribute, c = { [r]: p, [s]: i };
        n(o, c);
      } else
        n(o, null);
    };
  throw new Error("lookupOptions must be provided in the field options");
}, h = (t) => {
  const { attribute: d } = t, l = t.lookupOptions, a = g(t), u = q(t), n = b(d), e = k(a), o = k(u), p = (i, r) => {
    var s = {};
    return e(s, i), o(s, r), s;
  };
  if (l?.displayAttribute) {
    const i = b(l.displayAttribute);
    return (r) => {
      const s = n(r);
      if (s) {
        const c = i(r);
        return p(s, c);
      } else
        return null;
    };
  } else {
    const i = I(t), r = S(t);
    if (a != i || u != r)
      return (s) => {
        const c = b(i), K = b(r), y = n(s);
        if (y) {
          const O = c(y), f = K(y);
          if (O || f) {
            var A = {};
            return e(A, O), o(A, f), A;
          }
        }
      };
  }
};
export {
  h as generateFieldAccessor,
  v as generateFieldWriter,
  I as getLookupIdKey,
  S as getLookupValueKey,
  g as getOptionIdKey,
  q as getOptionValueKey
};
