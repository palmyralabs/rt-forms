import { x as k, i as v, K as y } from "../../../chunks/accessor.js";
import "../../../chunks/NoopConverter.js";
import "dayjs";
const I = (t) => {
  var e, o;
  return ((e = t.queryOptions) == null ? void 0 : e.idAttribute) || ((o = t.lookupOptions) == null ? void 0 : o.idAttribute) || "id";
}, V = (t) => {
  var e, o;
  return ((e = t.queryOptions) == null ? void 0 : e.labelAttribute) || ((o = t.lookupOptions) == null ? void 0 : o.labelAttribute) || "id";
}, m = (t) => {
  var e, o;
  return ((e = t.lookupOptions) == null ? void 0 : e.idAttribute) || ((o = t.queryOptions) == null ? void 0 : o.idAttribute) || "id";
}, q = (t) => {
  var e, o;
  return ((e = t.lookupOptions) == null ? void 0 : e.labelAttribute) || ((o = t.queryOptions) == null ? void 0 : o.labelAttribute) || "id";
}, F = (t, { getOptionKey: e, getOptionValue: o }) => {
  const { attribute: b, displayAttribute: d, lookupOptions: p } = t, c = k(b);
  return d ? (s, u) => {
    const i = e(s), r = o(s);
    v(d, u, r), c(u, i);
  } : p ? (s, u) => {
    const i = e(s), r = o(s), l = p.idAttribute, n = p.labelAttribute, a = { [l]: i, [n]: r };
    c(u, a);
  } : (s, u) => {
    const i = e(s);
    c(u, i);
  };
}, L = (t) => {
  const { attribute: e, displayAttribute: o, lookupOptions: b } = t, d = I(t), p = V(t), c = y(e), s = k(d), u = k(p), i = (r, l) => {
    var n = {};
    return s(n, r), u(n, l), n;
  };
  if (o) {
    const r = y(o);
    return (l) => {
      const n = c(l);
      if (n) {
        const a = r(l);
        return i(n, a);
      } else
        return null;
    };
  } else if (b) {
    const r = m(t), l = q(t), n = y(r), a = y(l);
    return (K) => {
      const A = c(K);
      if (A) {
        const O = n(A), f = a(A);
        return i(O, f);
      } else
        return null;
    };
  } else
    return (r) => c(r);
};
export {
  L as generateFieldAccessor,
  F as generateFieldWriter,
  m as getLookupIdKey,
  q as getLookupValueKey,
  I as getOptionIdKey,
  V as getOptionValueKey
};
