import { useContext as x, useRef as K } from "react";
import { getHandlers as V } from "./utils.js";
import { StoreFactoryContext as j } from "../formContext.js";
const q = (t) => {
  const u = t.storeFactory || x(j), r = t.formRef || K(null), m = t.idKey || "id", v = t.mode != "save" ? "put" : "save", d = t.endPointOptions || {}, { onSaveFailure: y, onSaveSuccess: D, preSave: P } = V(t), l = t.onQueryData || ((e) => e), f = (e, n) => typeof e == "string" ? e + "/{" + n + "}" : e, S = () => {
    const e = t.id, n = m;
    var s = f(t.endPoint, n);
    const o = u.getFormStore({}, s, n);
    var c = {
      endPointVars: {
        ...d,
        [n]: e
      }
    };
    o.get(c).then((i) => {
      r.current && r.current.setData(l(i));
    });
  }, g = () => r.current ? r.current.getData() : {}, F = (e) => {
    r.current && r.current.setData(e);
  };
  return { getData: g, saveData: (e) => {
    if (e || r && r.current) {
      const o = t.idKey || "id";
      var n = f(t.endPoint, o);
      const c = u.getFormStore({}, n, o), i = t.id, h = e || r.current.getData(o), R = P(h);
      var s = {
        endPointVars: {
          ...d,
          [o]: i
        }
      };
      return c[v](R, s).then((a) => (t.refreshOnSaveResponse != !1 && F(a), D(a), Promise.resolve(a))).catch((a) => (y(a), Promise.reject(a)));
    } else
      return Promise.reject("invalid data");
  }, fetchData: S, formRef: r };
};
export {
  q as usePalmyraEditForm
};
