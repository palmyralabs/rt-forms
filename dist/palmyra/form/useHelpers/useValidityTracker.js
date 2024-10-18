import { delayGenerator as o } from "@palmyralabs/ts-utils";
import { useRef as f, useCallback as d } from "react";
const b = (n, s) => {
  const r = f({}), c = d(() => o(s), [s])(), u = (e, i) => {
    if (i) {
      if (!r.current[e])
        return;
      delete r.current[e], t() && c(n, !0);
    } else {
      if (r.current[e])
        return;
      const l = t();
      r.current[e] = e, l && c(n, !1);
    }
  }, t = () => Object.keys(r.current).length == 0;
  return { isValid: t, setValidity: u };
};
export {
  b as useValidityTracker
};
