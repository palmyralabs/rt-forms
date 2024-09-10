import { formatValue as u } from "./DataFetchUtil.js";
const m = (e) => {
  var r = e.displayPattern || [{ 1: "Yes" }, { 0: "No" }], t = {};
  if (Array.isArray(r))
    for (var n in r)
      t = { ...t, ...r[n] };
  return (o) => {
    const a = o.getValue();
    return a && t[a] ? t[a] : a ? t[1] : t[0];
  };
}, f = (e) => (r) => u(e, r.getValue()), s = (e) => ({ cell: f(e) });
export {
  m as formatBIT,
  f as formatColumn,
  s as getFormatFn
};
