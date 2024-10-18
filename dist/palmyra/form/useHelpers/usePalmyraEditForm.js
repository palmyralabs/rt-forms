import { useContext as R, useRef as x } from "react";
import { getHandlers as K } from "./utils.js";
import { StoreFactoryContext as Q } from "../formContext.js";
const O = (e) => {
  const d = e.storeFactory || R(Q), t = e.formRef || x(null), y = e.idKey || "id", P = e.mode != "save" ? "put" : "save", m = e.endPointOptions || {}, { onSaveFailure: D, onSaveSuccess: S, preSave: g } = K(e), l = (r, n) => typeof r == "string" ? r + "/{" + n + "}" : r, v = () => {
    const r = e.id, n = y;
    var u = l(e.endPoint, n);
    const a = d.getFormStore({}, u, n);
    var f = {
      endPointVars: {
        ...m,
        [n]: r
      },
      errorHandler: e.onQueryFailure
    };
    return a.get(f).then((s) => {
      const c = e.onQueryData, i = c ? c(s) : s;
      return t.current && t.current.setData(i), Promise.resolve(i);
    });
  }, F = () => t.current ? t.current.getData() : {}, h = (r) => {
    t.current && t.current.setData(r);
  };
  return { getData: F, saveData: (r) => {
    if (r || t && t.current) {
      const a = e.idKey || "id";
      var n = l(e.endPoint, a);
      const f = d.getFormStore({}, n, a), s = e.id, c = r || t.current.getData(), i = g(c);
      var u = {
        endPointVars: {
          ...m,
          [a]: s
        }
      };
      return f[P](i, u).then((o) => (e.refreshOnSaveResponse != !1 && h(o), S(o), Promise.resolve(o))).catch((o) => (D(o), Promise.reject(o)));
    } else
      return Promise.reject("invalid data");
  }, fetchData: v, formRef: t, refresh: () => {
    v();
  } };
};
export {
  O as usePalmyraEditForm
};
