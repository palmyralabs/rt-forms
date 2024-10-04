import { useContext as P, useRef as s, useEffect as l } from "react";
import { StoreFactoryContext as R } from "../formContext.js";
const v = (t) => {
  const i = t.storeFactory || P(R), n = t.formRef || s(null), o = s(), f = t.idKey || "id", u = t.endPointOptions || {}, d = t.onQueryData || ((e) => e), m = (e, r) => typeof e == "string" ? e + "/{" + r + "}" : e, c = () => {
    const e = t.id, r = f;
    var y = m(t.endPoint, r);
    const g = i.getFormStore({}, y, r);
    var D = {
      options: {
        ...u,
        [r]: e
      }
    };
    g.get(D).then((F) => {
      const a = d(F);
      n.current && n.current.setData(a), o.current = a;
    });
  };
  return l(() => {
    c(), t.refresh() && c();
  }, [t.id]), { getData: () => o.current, formRef: n };
};
export {
  v as usePalmyraViewForm
};
