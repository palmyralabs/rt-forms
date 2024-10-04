import { useContext as F, useRef as c, useEffect as P } from "react";
import { StoreFactoryContext as l } from "../formContext.js";
const v = (t) => {
  const s = t.storeFactory || F(l), n = t.formRef || c(null), o = c(), i = t.idKey || "id", u = t.endPointOptions || {}, f = t.onQueryData || ((e) => e), d = (e, r) => typeof e == "string" ? e + "/{" + r + "}" : e;
  return P(() => {
    const e = t.id, r = i;
    var m = d(t.endPoint, r);
    const y = s.getFormStore({}, m, r);
    var g = {
      options: {
        ...u,
        [r]: e
      }
    };
    y.get(g).then((D) => {
      const a = f(D);
      n.current && n.current.setData(a), o.current = a;
    });
  }, [t.id]), { getData: () => o.current, formRef: n };
};
export {
  v as usePalmyraViewForm
};
