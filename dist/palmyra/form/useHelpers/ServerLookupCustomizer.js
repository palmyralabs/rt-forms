import { x as k, i as v, K as b } from "../../../chunks/accessor.js";
import "../../../chunks/NoopConverter.js";
import "dayjs";
const I = (t) => {
  var e, o;
  return ((e = t.storeOptions) == null ? void 0 : e.idAttribute) || ((o = t.lookupOptions) == null ? void 0 : o.idAttribute) || "id";
}, V = (t) => {
  var e, o;
  return ((e = t.storeOptions) == null ? void 0 : e.labelAttribute) || ((o = t.lookupOptions) == null ? void 0 : o.labelAttribute) || "id";
}, m = (t) => {
  var e, o;
  return ((e = t.lookupOptions) == null ? void 0 : e.idAttribute) || ((o = t.storeOptions) == null ? void 0 : o.idAttribute) || "id";
}, g = (t) => {
  var e, o;
  return ((e = t.lookupOptions) == null ? void 0 : e.labelAttribute) || ((o = t.storeOptions) == null ? void 0 : o.labelAttribute) || "id";
}, L = (t, { getOptionKey: e, getOptionValue: o }) => {
  const { attribute: y, displayAttribute: d, lookupOptions: p } = t, l = k(y);
  return d ? (n, i) => {
    const u = e(n), r = o(n);
    v(d, i, r), l(i, u);
  } : p ? (n, i) => {
    const u = e(n), r = o(n), c = p.idAttribute, s = p.labelAttribute, a = { [c]: u, [s]: r };
    l(i, a);
  } : (n, i) => {
    const u = e(n);
    l(i, u);
  };
}, W = (t) => {
  const { attribute: e, displayAttribute: o, lookupOptions: y } = t, d = I(t), p = V(t), l = b(e), n = k(d), i = k(p), u = (r, c) => {
    var s = {};
    return n(s, r), i(s, c), s;
  };
  if (o) {
    const r = b(o);
    return (c) => {
      const s = l(c);
      if (s) {
        const a = r(c);
        return u(s, a);
      } else
        return "";
    };
  } else if (y) {
    const r = m(t), c = g(t), s = b(r), a = b(c);
    return (K) => {
      const A = l(K);
      if (A) {
        const O = s(A), f = a(A);
        return u(O, f);
      } else
        return "";
    };
  } else
    return (r) => l(r);
};
export {
  W as generateFieldAccessor,
  L as generateFieldWriter,
  m as getLookupIdKey,
  g as getLookupValueKey,
  I as getOptionIdKey,
  V as getOptionValueKey
};
