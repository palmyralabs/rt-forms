import { useRef as D } from "react";
import { NoopFormListener as P } from "./Noops.js";
const y = (e) => {
  const c = e.storeFactory, t = e.formRef || D(null), r = e.formListener || P, i = e.endPointOptions || {}, n = () => t.current ? t.current.getData() : e.initialData, u = (a) => {
    t.current && t.current.setData(a);
  };
  return { getData: n, saveData: (a) => {
    if (a || t && t.current) {
      const f = e.idKey;
      var m = e.endPoint;
      const v = c.getFormStore({}, m, f), s = a || n(), l = r.preProcessSaveData ? r.preProcessSaveData(s) : s;
      return v.post(l, { endPointVars: i }).then((o) => (u(o), r.onSaveSuccess && r.onSaveSuccess(o), Promise.resolve(o))).catch((o) => (r.onSaveFailure && r.onSaveFailure(o), Promise.reject(o)));
    } else
      return Promise.reject("invalid data");
  }, formRef: t };
};
export {
  y as usePalmyraNewForm
};
