import { useState as v, useRef as S } from "react";
import { NoopFormListener as D } from "./Noops.js";
const g = (e) => {
  const c = e.storeFactory, [P, i] = v(e.initialData == null ? null : e.initialData), a = e.formRef || S(null), t = e.formListener || D, o = () => a.current.getData();
  return { getData: o, saveData: (n) => {
    if (n || a && a.current) {
      const u = e.idKey;
      var m = e.endPoint;
      const f = c.getFormStore({}, m, u), s = n || o(), l = t.preProcessSaveData ? t.preProcessSaveData(s) : s;
      return f.post(l).then((r) => (i(r), t.onSaveSuccess && t.onSaveSuccess(r), Promise.resolve(r))).catch((r) => (t.onSaveFailure && t.onSaveFailure(r), Promise.reject(r)));
    } else
      return Promise.reject("invalid data");
  }, formRef: a };
};
export {
  g as usePalmyraNewForm
};
