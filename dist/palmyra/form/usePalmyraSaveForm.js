import { useRef as D, useEffect as F } from "react";
import { NoopFormListener as g } from "./Noops.js";
const R = (e) => {
  const d = e.storeFactory, a = e.formRef || D(null), l = e.idKey || "id", m = e.endPointOptions || {}, o = { ...g, ...e.formListener }, u = (t, s) => typeof t == "string" && e.id ? t + "/{" + s + "}" : t, v = () => a.current.getData(), S = (t) => a.current.setData(t);
  return F(() => {
    const t = e.id;
    if (t) {
      const r = l;
      var s = u(e.endPoint, r);
      const f = d.getFormStore({}, s, r);
      var c = {
        options: {
          [r]: t
        },
        endPointVars: m
      };
      f.get(c).then((i) => {
        S(i);
      });
    }
  }, [e.id]), { getData: v, saveData: (t) => {
    if (t || a && a.current) {
      const r = e.idKey || "id";
      var s = u(e.endPoint, r);
      const f = d.getFormStore({}, s, r), i = t || v(), y = o.preProcessSaveData ? o.preProcessSaveData(i) : i, P = e.id;
      var c = P ? {
        endPointVars: {
          ...m,
          [r]: P
        }
      } : {};
      return f.save(y, c).then((n) => (S(n), o.onSaveSuccess && o.onSaveSuccess(n), Promise.resolve(n))).catch((n) => (o.onSaveFailure && o.onSaveFailure(n), Promise.reject(n)));
    } else
      return Promise.reject("invalid data");
  }, formRef: a };
};
export {
  R as usePalmyraSaveForm
};
