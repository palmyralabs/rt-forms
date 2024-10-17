import { useContext as R, useRef as x } from "react";
import { getHandlers as K } from "./utils.js";
import { StoreFactoryContext as V } from "../formContext.js";
const Q = (t) => {
  const f = t.storeFactory || R(V), e = t.formRef || x(null), l = t.idKey || "id", P = t.mode != "save" ? "put" : "save", m = t.endPointOptions || {}, { onSaveFailure: y, onSaveSuccess: D, preSave: S } = K(t), v = (r, n) => typeof r == "string" ? r + "/{" + n + "}" : r, g = () => {
    const r = t.id, n = l;
    var u = v(t.endPoint, n);
    const a = f.getFormStore({}, u, n);
    var d = {
      endPointVars: {
        ...m,
        [n]: r
      }
    };
    return a.get(d).then((s) => {
      const c = t.onQueryData, i = c ? c(s) : s;
      return e.current && e.current.setData(i), Promise.resolve(i);
    });
  }, F = () => e.current ? e.current.getData() : {}, h = (r) => {
    e.current && e.current.setData(r);
  };
  return { getData: F, saveData: (r) => {
    if (r || e && e.current) {
      const a = t.idKey || "id";
      var n = v(t.endPoint, a);
      const d = f.getFormStore({}, n, a), s = t.id, c = r || e.current.getData(), i = S(c);
      var u = {
        endPointVars: {
          ...m,
          [a]: s
        }
      };
      return d[P](i, u).then((o) => (t.refreshOnSaveResponse != !1 && h(o), D(o), Promise.resolve(o))).catch((o) => (y(o), Promise.reject(o)));
    } else
      return Promise.reject("invalid data");
  }, fetchData: g, formRef: e };
};
export {
  Q as usePalmyraEditForm
};
