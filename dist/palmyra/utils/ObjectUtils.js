function c(n) {
  return n && typeof n == "object" && !Array.isArray(n);
}
function f(n, ...i) {
  if (!i.length) return n;
  const r = i.shift();
  if (c(n) && c(r))
    for (const e in r)
      c(r[e]) ? (n[e] || Object.assign(n, { [e]: {} }), f(n[e], r[e])) : Object.assign(n, { [e]: r[e] });
  return f(n, ...i);
}
const o = (n) => {
  var i = {};
  return f(i, n), i;
};
export {
  o as cloneDeep,
  c as isObject,
  f as mergeDeep
};
