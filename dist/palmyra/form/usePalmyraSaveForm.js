import { useRef as D, useEffect as F } from "react";
import { NoopFormListener as g } from "./Noops.js";
const R = (e) => {
  const f = e.storeFactory, n = e.formRef || D(null), l = e.idKey || "id", d = e.endPointOptions || {}, o = { ...g, ...e.formListener }, m = (t, s) => typeof t == "string" && e.id ? t + "/{" + s + "}" : t, v = () => n.current ? n.current.getData() : {}, S = (t) => n.current.setData(t);
  return F(() => {
    const t = e.id;
    if (t) {
      const r = l;
      var s = m(e.endPoint, r);
      const u = f.getFormStore({}, s, r);
      var c = {
        options: {
          [r]: t
        },
        endPointVars: d
      };
      u.get(c).then((i) => {
        S(i);
      });
    }
  }, [e.id]), { getData: v, saveData: (t) => {
    if (t || n && n.current) {
      const r = e.idKey || "id";
      var s = m(e.endPoint, r);
      const u = f.getFormStore({}, s, r), i = t || v(), y = o.preProcessSaveData ? o.preProcessSaveData(i) : i, P = e.id;
      var c = P ? {
        endPointVars: {
          ...d,
          [r]: P
        }
      } : {};
      return u.save(y, c).then((a) => (S(a), o.onSaveSuccess && o.onSaveSuccess(a), Promise.resolve(a))).catch((a) => (o.onSaveFailure && o.onSaveFailure(a), Promise.reject(a)));
    } else
      return Promise.reject("invalid data");
  }, formRef: n };
};
export {
  R as usePalmyraSaveForm
};
