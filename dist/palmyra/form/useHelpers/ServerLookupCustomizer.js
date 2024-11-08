import { getValueSetter as a, setValueByKey as A, getValueAccessor as y } from "@palmyralabs/ts-utils";
const O = (t) => {
  var r, e;
  return ((r = t.queryOptions) == null ? void 0 : r.idAttribute) || ((e = t.lookupOptions) == null ? void 0 : e.idAttribute) || "id";
}, f = (t) => {
  var r, e, l, i;
  return t.lookupOptions.displayAttribute ? ((r = t.queryOptions) == null ? void 0 : r.labelAttribute) || ((e = t.lookupOptions) == null ? void 0 : e.displayAttribute) || "code" : ((l = t.queryOptions) == null ? void 0 : l.labelAttribute) || ((i = t.lookupOptions) == null ? void 0 : i.labelAttribute) || "code";
}, K = (t) => {
  var r, e;
  return ((r = t.lookupOptions) == null ? void 0 : r.idAttribute) || ((e = t.queryOptions) == null ? void 0 : e.idAttribute) || "id";
}, V = (t) => {
  var r, e;
  return t.lookupOptions.displayAttribute ? t.lookupOptions.displayAttribute : ((r = t.lookupOptions) == null ? void 0 : r.labelAttribute) || ((e = t.queryOptions) == null ? void 0 : e.labelAttribute) || "code";
}, g = (t, { getOptionKey: r, getOptionValue: e }) => {
  const { attribute: l, lookupOptions: i } = t, p = a(l);
  if (i != null && i.displayAttribute)
    return (o, s) => {
      const b = r(o), n = e(o);
      A(i.displayAttribute, s, n), p(s, b);
    };
  if (i != null && i.idAttribute)
    return (o, s) => {
      if (typeof o != "object")
        p(s, "");
      else {
        const b = r(o), n = e(o), c = i.idAttribute, u = i.labelAttribute, d = { [c]: b, [u]: n };
        p(s, d);
      }
    };
  throw new Error("lookupOptions must be provided in the field options");
}, q = (t) => {
  const { attribute: r } = t, e = t.lookupOptions, l = O(t), i = f(t), p = y(r), o = a(l), s = a(i), b = (n, c) => {
    var u = {};
    return o(u, n), s(u, c), u;
  };
  if (e != null && e.displayAttribute) {
    const n = y(e.displayAttribute);
    return (c) => {
      const u = p(c);
      if (u) {
        const d = n(c);
        return b(u, d);
      } else
        return null;
    };
  } else
    return;
};
export {
  q as generateFieldAccessor,
  g as generateFieldWriter,
  K as getLookupIdKey,
  V as getLookupValueKey,
  O as getOptionIdKey,
  f as getOptionValueKey
};
