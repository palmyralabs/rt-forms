import { useContext as l, useRef as s, useEffect as R } from "react";
import { StoreFactoryContext as h } from "../formContext.js";
const C = (t) => {
  const i = t.storeFactory || l(h), n = t.formRef || s(null), o = s(), f = t.idKey || "id", u = t.endPointOptions || {}, d = t.onQueryData || ((e) => e), m = (e, r) => typeof e == "string" ? e + "/{" + r + "}" : e, a = () => {
    const e = t.id, r = f;
    var g = m(t.endPoint, r);
    const D = i.getFormStore({}, g, r);
    var F = {
      options: {
        ...u,
        [r]: e
      }
    };
    D.get(F).then((P) => {
      const c = d(P);
      n.current && n.current.setData(c), o.current = c;
    });
  }, y = () => {
    a();
  };
  return R(() => {
    a();
  }, [t.id]), { getData: () => o.current, formRef: n, refresh: y };
};
export {
  C as usePalmyraViewForm
};
