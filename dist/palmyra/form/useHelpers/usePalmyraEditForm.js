import { useContext as R, useRef as x } from "react";
import { getHandlers as K } from "./utils.js";
import { StoreFactoryContext as V } from "../formContext.js";
const q = (e) => {
  const d = e.storeFactory || R(V), t = e.formRef || x(null), P = e.idKey || "id", y = e.mode != "save" ? "put" : "save", m = e.endPointOptions || {}, { onSaveFailure: D, onSaveSuccess: S, preSave: g } = K(e), v = (r, n) => typeof r == "string" ? r + "/{" + n + "}" : r, l = () => {
    const r = e.id, n = P;
    var u = v(e.endPoint, n);
    const a = d.getFormStore({}, u, n);
    var f = {
      endPointVars: {
        ...m,
        [n]: r
      }
    };
    return a.get(f).then((s) => {
      const c = e.onQueryData, i = c ? c(s) : s;
      return t.current && t.current.setData(i), Promise.resolve(i);
    });
  }, h = () => t.current ? t.current.getData() : {}, F = (r) => {
    t.current && t.current.setData(r);
  };
  return { getData: h, saveData: (r) => {
    if (r || t && t.current) {
      const a = e.idKey || "id";
      var n = v(e.endPoint, a);
      const f = d.getFormStore({}, n, a), s = e.id, c = r || t.current.getData(), i = g(c);
      var u = {
        endPointVars: {
          ...m,
          [a]: s
        }
      };
      return f[y](i, u).then((o) => (e.refreshOnSaveResponse != !1 && F(o), S(o), Promise.resolve(o))).catch((o) => (D(o), Promise.reject(o)));
    } else
      return Promise.reject("invalid data");
  }, fetchData: l, formRef: t, refresh: () => {
    l();
  } };
};
export {
  q as usePalmyraEditForm
};
