import { useRef as K } from "react";
import { getHandlers as V } from "./utils.js";
const Q = (t) => {
  const u = t.storeFactory, r = t.formRef || K(null), m = t.idKey || "id", v = t.mode != "save" ? "put" : "save", d = t.endPointOptions || {}, { onSaveFailure: D, onSaveSuccess: P, preSave: l } = V(t), y = t.onQueryData || ((e) => e), f = (e, n) => typeof e == "string" ? e + "/{" + n + "}" : e, g = () => {
    const e = t.id, n = m;
    var s = f(t.endPoint, n);
    const a = u.getFormStore({}, s, n);
    var c = {
      endPointVars: {
        ...d,
        [n]: e
      }
    };
    a.get(c).then((i) => {
      r.current && r.current.setData(y(i));
    });
  }, S = () => r.current ? r.current.getData() : {}, F = (e) => {
    r.current && r.current.setData(e);
  };
  return { getData: S, saveData: (e) => {
    if (e || r && r.current) {
      const a = t.idKey || "id";
      var n = f(t.endPoint, a);
      const c = u.getFormStore({}, n, a), i = t.id, h = e || r.current.getData(a), R = l(h);
      var s = {
        endPointVars: {
          ...d,
          [a]: i
        }
      };
      return c[v](R, s).then((o) => (t.refreshOnSaveResponse != !1 && F(o), P(o), Promise.resolve(o))).catch((o) => (D(o), Promise.reject(o)));
    } else
      return Promise.reject("invalid data");
  }, fetchData: g, formRef: r };
};
export {
  Q as usePalmyraEditForm
};
