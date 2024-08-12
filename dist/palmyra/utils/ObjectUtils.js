function i(n) {
  return n && typeof n == "object" && !Array.isArray(n);
}
function c(n, ...e) {
  if (!e.length) return n;
  const r = e.shift();
  if (i(n) && i(r))
    for (const o in r)
      i(r[o]) ? (n[o] || Object.assign(n, { [o]: {} }), c(n[o], r[o])) : Object.assign(n, { [o]: r[o] });
  return c(n, ...e);
}
const s = (n) => {
  var e = {};
  return c(e, n), e;
}, t = (n) => {
  var e;
  return function(r) {
    clearTimeout(e), e = setTimeout(function() {
      r.apply(null);
    }, n || 0);
  };
}, f = t(300);
export {
  s as cloneDeep,
  f as delay,
  t as delayGenerator,
  i as isObject,
  c as mergeDeep
};
