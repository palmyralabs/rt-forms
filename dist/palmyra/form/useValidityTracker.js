import "../../chunks/NoopConverter.js";
import "dayjs";
import { useRef as o, useCallback as f } from "react";
const a = (r) => {
  if (r && r > 0) {
    var n;
    return function(t, ...e) {
      clearTimeout(n), n = setTimeout(t.bind(null, ...e), r);
    };
  } else
    return (t, ...e) => t.apply(null, e);
}, b = (r, n) => {
  const t = o({}), e = f(() => a(n), [n])(), s = (u, c) => {
    if (c) {
      if (!t.current[u])
        return;
      delete t.current[u], i() && e(r, !0);
    } else {
      if (t.current[u])
        return;
      const l = i();
      t.current[u] = u, l && e(r, !1);
    }
  }, i = () => Object.keys(t.current).length == 0;
  return { isValid: i, setValidity: s };
};
export {
  b as useValidityTracker
};
