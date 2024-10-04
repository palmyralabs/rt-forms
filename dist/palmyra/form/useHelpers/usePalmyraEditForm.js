import { useContext as x, useRef as K } from "react";
import { getHandlers as V } from "./utils.js";
import { StoreFactoryContext as j } from "../formContext.js";
const H = (t) => {
  const u = t.storeFactory || x(j), r = t.formRef || K(null), v = t.idKey || "id", y = t.mode != "save" ? "put" : "save", f = t.endPointOptions || {}, { onSaveFailure: D, onSaveSuccess: P, preSave: l } = V(t), S = t.onQueryData || ((e) => e), d = (e, n) => typeof e == "string" ? e + "/{" + n + "}" : e, m = () => {
    const e = t.id, n = v;
    var s = d(t.endPoint, n);
    const o = u.getFormStore({}, s, n);
    var c = {
      endPointVars: {
        ...f,
        [n]: e
      }
    };
    o.get(c).then((i) => {
      r.current && r.current.setData(S(i));
    });
  }, g = () => r.current ? r.current.getData() : {}, h = (e) => {
    r.current && r.current.setData(e);
  };
  return { getData: g, saveData: (e) => {
    if (e || r && r.current) {
      const o = t.idKey || "id";
      var n = d(t.endPoint, o);
      const c = u.getFormStore({}, n, o), i = t.id, F = e || r.current.getData(o), R = l(F);
      var s = {
        endPointVars: {
          ...f,
          [o]: i
        }
      };
      return c[y](R, s).then((a) => (t.refreshOnSaveResponse != !1 && h(a), P(a), Promise.resolve(a))).catch((a) => (D(a), Promise.reject(a)));
    } else
      return Promise.reject("invalid data");
  }, fetchData: m, formRef: r, refresh: () => {
    m();
  } };
};
export {
  H as usePalmyraEditForm
};
