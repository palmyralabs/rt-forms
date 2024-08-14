import { useState as S, useRef as D } from "react";
import { NoopFormListener as P } from "./Noops.js";
const L = (e) => {
  const i = e.storeFactory, [d, c] = S(e.initialData == null ? null : e.initialData), r = e.formRef || D(null), t = e.formListener || P, m = e.endPointOptions || {}, o = () => r.current.getData();
  return { getData: o, saveData: (n) => {
    if (n || r && r.current) {
      const f = e.idKey;
      var u = e.endPoint;
      const l = i.getFormStore({}, u, f), s = n || o(), v = t.preProcessSaveData ? t.preProcessSaveData(s) : s;
      return l.post(v, { endPointVars: m }).then((a) => (c(a), t.onSaveSuccess && t.onSaveSuccess(a), Promise.resolve(a))).catch((a) => (t.onSaveFailure && t.onSaveFailure(a), Promise.reject(a)));
    } else
      return Promise.reject("invalid data");
  }, formRef: r };
};
export {
  L as usePalmyraNewForm
};
