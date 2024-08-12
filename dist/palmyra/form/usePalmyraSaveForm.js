import { useState as y, useRef as F, useEffect as D } from "react";
import { NoopFormListener as g } from "./Noops.js";
const j = (e) => {
  const d = e.storeFactory, [S, f] = y(null), s = F(null), l = e.idKey || "id", o = { ...g, ...e.formListener }, m = (t, n) => typeof t == "string" && e.id ? t + "/{" + n + "}" : t;
  return D(() => {
    const t = e.id;
    if (t) {
      const r = l;
      var n = m(e.endPoint, r);
      const u = d.getFormStore({}, n, r);
      var c = {
        options: {
          [r]: t
        }
      };
      u.get(c).then((i) => {
        f(i);
      });
    }
  }, [e.id]), { data: S, saveData: (t) => {
    if (t || s && s.current) {
      const r = e.idKey || "id";
      var n = m(e.endPoint, r);
      const u = d.getFormStore({}, n, r), i = t || s.current.getData(r), P = o.preProcessSaveData ? o.preProcessSaveData(i) : i, v = e.id;
      var c = v ? {
        endPointVars: {
          [r]: v
        }
      } : {};
      return u.save(P, c).then((a) => (f(a), o.onSaveSuccess && o.onSaveSuccess(a), Promise.resolve(a))).catch((a) => (o.onSaveFailure && o.onSaveFailure(a), Promise.reject(a)));
    } else
      return Promise.reject("invalid data");
  }, formRef: s };
};
export {
  j as usePalmyraSaveForm
};
