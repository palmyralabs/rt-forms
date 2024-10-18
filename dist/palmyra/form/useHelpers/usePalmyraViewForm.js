import { useContext as P, useRef as i, useEffect as R } from "react";
import { StoreFactoryContext as h } from "../formContext.js";
const S = (t) => {
  const f = t.storeFactory || P(h), n = t.formRef || i(null), a = i(), d = t.idKey || "id", m = t.endPointOptions || {}, y = (e, r) => typeof e == "string" ? e + "/{" + r + "}" : e, c = () => {
    const e = t.id, r = d;
    var g = y(t.endPoint, r);
    const D = f.getFormStore({}, g, r);
    var F = {
      options: {
        ...m,
        [r]: e
      },
      errorHandler: t.onQueryFailure
    };
    return D.get(F).then((s) => {
      const u = t.onQueryData, o = u ? u(s) : s;
      return n.current && n.current.setData(o), a.current = o, Promise.resolve(o);
    });
  }, l = () => {
    c();
  };
  return R(() => {
    c();
  }, [t.id]), { getData: () => a.current, formRef: n, refresh: l };
};
export {
  S as usePalmyraViewForm
};
