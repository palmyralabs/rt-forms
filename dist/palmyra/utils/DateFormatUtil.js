import a from "dayjs";
import { c as m } from "../../chunks/customParseFormat.js";
a.extend(m);
const f = (s) => {
  const n = s.serverPattern, o = s.displayPattern || "YYYY-MM-DD", c = (t, r) => {
    const e = a(t, r, !0);
    return e.isValid() ? e.toDate() : null;
  }, u = (t, r) => a(t).format(r);
  return (t) => {
    const r = c(t, n);
    return u(r, o);
  };
};
export {
  f as default
};
