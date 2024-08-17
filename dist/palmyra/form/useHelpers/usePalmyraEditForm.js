import { useRef as F } from "react";
import { getHandlers as h } from "./utils.js";
const Q = (t) => {
  const u = t.storeFactory, r = t.formRef || F(null), m = t.idKey || "id", v = t.mode != "save" ? "put" : "save", d = t.endPointOptions || {}, { onSaveFailure: D, onSaveSuccess: P, preSave: y } = h(t), g = t.onQueryData || ((e) => e), f = (e, n) => typeof e == "string" ? e + "/{" + n + "}" : e;
  return { getData: () => r.current ? r.current.getData() : {}, saveData: (e) => {
    if (e || r && r.current) {
      const a = t.idKey || "id";
      var n = f(t.endPoint, a);
      const s = u.getFormStore({}, n, a), i = t.id, l = e || r.current.getData(a), S = y(l);
      var c = {
        endPointVars: {
          ...d,
          [a]: i
        }
      };
      return s[v](S, c).then((o) => (r.current.setData(o), P(o), Promise.resolve(o))).catch((o) => (D(o), Promise.reject(o)));
    } else
      return Promise.reject("invalid data");
  }, fetchData: () => {
    const e = t.id, n = m;
    var c = f(t.endPoint, n);
    const a = u.getFormStore({}, c, n);
    var s = {
      endPointVars: {
        ...d,
        [n]: e
      }
    };
    a.get(s).then((i) => {
      r.current && r.current.setData(g(i));
    });
  }, formRef: r };
};
export {
  Q as usePalmyraEditForm
};
