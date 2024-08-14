import { useRef as D, useEffect as l } from "react";
import { NoopFormListener as g } from "./Noops.js";
const K = (e) => {
  const d = e.storeFactory, t = e.formRef || D(null), P = e.idKey || "id", o = e.formListener || g, f = e.endPointOptions || {}, m = (r, n) => typeof r == "string" ? r + "/{" + n + "}" : r;
  return l(() => {
    const r = e.id, n = P;
    var i = m(e.endPoint, n);
    const a = d.getFormStore({}, i, n);
    var c = {
      endPointVars: {
        ...f,
        [n]: r
      }
    };
    a.get(c).then((u) => {
      t.current.setData(u);
    });
  }, [e.id]), { getData: () => t.current ? t.current.getData() : {}, saveData: (r) => {
    if (r || t && t.current) {
      const a = e.idKey || "id";
      var n = m(e.endPoint, a);
      const c = d.getFormStore({}, n, a), u = e.id, v = r || t.current.getData(a), S = o.preProcessSaveData ? o.preProcessSaveData(v) : v;
      var i = {
        endPointVars: {
          ...f,
          [a]: u
        }
      };
      return c.put(S, i).then((s) => (t.current.setData(s), o.onSaveSuccess && o.onSaveSuccess(s), Promise.resolve(s))).catch((s) => (o.onSaveFailure && o.onSaveFailure(s), Promise.reject(s)));
    } else
      return Promise.reject("invalid data");
  }, formRef: t };
};
export {
  K as usePalmyraEditForm
};
