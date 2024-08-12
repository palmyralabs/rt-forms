import { useState as f, useRef as S } from "react";
import { NoopFormListener as D } from "./Noops.js";
const y = (e) => {
  const s = e.storeFactory, [c, i] = f(e.initialData == null ? null : e.initialData), a = S(null), t = e.formListener || D;
  return { data: c, saveData: (o) => {
    if (o || a && a.current) {
      const m = e.idKey;
      var u = e.endPoint;
      const l = s.getFormStore({}, u, m), n = o || a.current.getData(), v = t.preProcessSaveData ? t.preProcessSaveData(n) : n;
      return l.post(v).then((r) => (i(r), t.onSaveSuccess && t.onSaveSuccess(r), Promise.resolve(r))).catch((r) => (t.onSaveFailure && t.onSaveFailure(r), Promise.reject(r)));
    } else
      return Promise.reject("invalid data");
  }, formRef: a };
};
export {
  y as usePalmyraNewForm
};
