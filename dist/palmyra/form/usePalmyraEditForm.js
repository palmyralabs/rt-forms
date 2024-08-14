import { useRef as D, useEffect as g } from "react";
import { NoopFormListener as l } from "./Noops.js";
const K = (e) => {
  const d = e.storeFactory, r = e.formRef || D(null), P = e.idKey || "id", o = e.formListener || l, f = e.endPointOptions || {}, m = (t, n) => typeof t == "string" ? t + "/{" + n + "}" : t;
  return g(() => {
    const t = e.id, n = P;
    var i = m(e.endPoint, n);
    const a = d.getFormStore({}, i, n);
    var c = {
      endPointVars: {
        ...f,
        [n]: t
      }
    };
    a.get(c).then((u) => {
      r.current.setData(u);
    });
  }, [e.id]), { getData: () => r.current.getData(), saveData: (t) => {
    if (t || r && r.current) {
      const a = e.idKey || "id";
      var n = m(e.endPoint, a);
      const c = d.getFormStore({}, n, a), u = e.id, v = t || r.current.getData(a), S = o.preProcessSaveData ? o.preProcessSaveData(v) : v;
      var i = {
        endPointVars: {
          ...f,
          [a]: u
        }
      };
      return c.put(S, i).then((s) => (r.current.setData(s), o.onSaveSuccess && o.onSaveSuccess(s), Promise.resolve(s))).catch((s) => (o.onSaveFailure && o.onSaveFailure(s), Promise.reject(s)));
    } else
      return Promise.reject("invalid data");
  }, formRef: r };
};
export {
  K as usePalmyraEditForm
};
