import "./NoopConverter.js";
import "dayjs";
const f = (i, r) => {
  var t = i.indexOf(r);
  return t >= 0;
}, e = (i) => f(i, "."), v = (i, r) => {
  if (!(r === void 0 || r == null)) {
    var t = i.indexOf(".");
    if (t < 0)
      return r[i];
    var s = i.substring(0, t), u = i.substring(t + 1);
    return v(u, r[s]);
  }
}, n = (i, r, t) => {
  var s = i.indexOf(".");
  if (s < 0) {
    r[i] = t;
    return;
  }
  var u = i.substring(0, s), d = i.substring(s + 1);
  return (r[u] === void 0 || r[u] == null) && (r[u] = {}), n(d, r[u], t);
}, a = (i) => e(i) ? (r) => v(i, r) : (r) => r == null ? void 0 : r[i], x = (i) => e(i) ? (r, t) => n(i, r, t) : (r, t) => {
  r[i] = t;
};
export {
  a as K,
  v as e,
  n as i,
  e as o,
  x
};
