import { useContext as F, useRef as u, useEffect as R } from "react";
import { StoreFactoryContext as h } from "../formContext.js";
const C = (t) => {
  const f = t.storeFactory || F(h), n = t.formRef || u(null), s = u(), m = t.idKey || "id", d = t.endPointOptions || {}, y = (e, r) => typeof e == "string" ? e + "/{" + r + "}" : e, c = () => {
    const e = t.id, r = m;
    var l = y(t.endPoint, r);
    const D = f.getFormStore({}, l, r);
    var P = {
      options: {
        ...d,
        [r]: e
      }
    };
    return D.get(P).then((a) => {
      const i = t.onQueryData, o = i ? i(a) : a;
      return n.current && n.current.setData(o), s.current = o, Promise.resolve(o);
    });
  }, g = () => {
    c();
  };
  return R(() => {
    c();
  }, [t.id]), { getData: () => s.current, formRef: n, refresh: g };
};
export {
  C as usePalmyraViewForm
};
