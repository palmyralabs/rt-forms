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
  const { attribute: b, displayAttribute: d, lookupOptions: p } = t, l = k(b);
  return d ? (s, u) => {
    const i = e(s), r = o(s);
    v(d, u, r), l(u, i);
  } : p ? (s, u) => {
    const i = e(s), r = o(s), c = p.idAttribute, n = p.labelAttribute, a = { [c]: i, [n]: r };
    l(u, a);
  } : (s, u) => {
    const i = e(s);
    l(u, i);
  };
}, L = (t) => {
  const { attribute: e, displayAttribute: o, lookupOptions: b } = t, d = I(t), p = V(t), l = y(e), s = k(d), u = k(p), i = (r, c) => {
    var n = {};
    return s(n, r), u(n, c), n;
  };
  if (o) {
    const r = y(o);
    return (c) => {
      const n = l(c);
      if (n) {
        const a = r(c);
        return i(n, a);
      } else
        return "";
    };
  } else if (b) {
    const r = m(t), c = q(t), n = y(r), a = y(c);
    return (K) => {
      const A = l(K);
      if (A) {
        const O = n(A), f = a(A);
        return i(O, f);
      } else
        return "";
    };
  } else
    return (r) => l(r);
};
export {
  L as generateFieldAccessor,
  F as generateFieldWriter,
  m as getLookupIdKey,
  q as getLookupValueKey,
  I as getOptionIdKey,
  V as getOptionValueKey
};
