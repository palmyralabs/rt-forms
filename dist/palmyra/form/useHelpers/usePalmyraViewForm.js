import { useContext as D, useRef as F, useState as P, useEffect as l } from "react";
import { StoreFactoryContext as S } from "../formContext.js";
const C = (t) => {
  const n = t.storeFactory || D(S), r = t.formRef || F(null), [a, s] = P({}), i = t.idKey || "id", c = t.endPointOptions || {}, f = t.onQueryData || ((e) => e), u = (e, o) => typeof e == "string" ? e + "/{" + o + "}" : e;
  return l(() => {
    const e = t.id, o = i;
    var d = u(t.endPoint, o);
    const m = n.getFormStore({}, d, o);
    var y = {
      options: {
        ...c,
        [o]: e
      }
    };
    m.get(y).then((g) => {
      s(f(g));
    });
  }, [t.id]), { getData: () => a, formRef: r };
};
export {
  C as usePalmyraViewForm
};
