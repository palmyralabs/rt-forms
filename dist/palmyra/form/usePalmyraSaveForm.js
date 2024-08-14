import { useRef as y, useEffect as D } from "react";
import { NoopFormListener as F } from "./Noops.js";
const L = (e) => {
  const m = e.storeFactory, n = e.formRef || y(null), P = e.idKey || "id", o = { ...F, ...e.formListener }, u = (t, s) => typeof t == "string" && e.id ? t + "/{" + s + "}" : t, d = () => n.current.getData(), v = (t) => n.current.setData(t);
  return D(() => {
    const t = e.id;
    if (t) {
      const r = P;
      var s = u(e.endPoint, r);
      const f = m.getFormStore({}, s, r);
      var i = {
        options: {
          [r]: t
        }
      };
      f.get(i).then((c) => {
        v(c);
      });
    }
  }, [e.id]), { getData: d, saveData: (t) => {
    if (t || n && n.current) {
      const r = e.idKey || "id";
      var s = u(e.endPoint, r);
      const f = m.getFormStore({}, s, r), c = t || d(), l = o.preProcessSaveData ? o.preProcessSaveData(c) : c, S = e.id;
      var i = S ? {
        endPointVars: {
          [r]: S
        }
      } : {};
      return f.save(l, i).then((a) => (v(a), o.onSaveSuccess && o.onSaveSuccess(a), Promise.resolve(a))).catch((a) => (o.onSaveFailure && o.onSaveFailure(a), Promise.reject(a)));
    } else
      return Promise.reject("invalid data");
  }, formRef: n };
};
export {
  L as usePalmyraSaveForm
};
