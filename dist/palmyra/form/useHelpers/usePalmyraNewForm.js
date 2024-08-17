import { useRef as d } from "react";
import { getHandlers as S } from "./utils.js";
const R = (e) => {
  const o = e.storeFactory, t = e.formRef || d(null), s = e.endPointOptions || {}, { onSaveFailure: c, onSaveSuccess: i, preSave: u } = S(e), a = () => t.current ? t.current.getData() : e.initialData, m = (n) => {
    t.current && t.current.setData(n);
  };
  return { getData: a, saveData: (n) => {
    if (n || t && t.current) {
      const l = "id";
      var f = e.endPoint;
      const v = o.getFormStore({}, f, l), D = n || a(), P = u(D);
      return v.post(P, { endPointVars: s }).then((r) => (m(r), i(r), Promise.resolve(r))).catch((r) => (c(r), Promise.reject(r)));
    } else
      return Promise.reject("invalid data");
  }, formRef: t };
};
export {
  R as usePalmyraNewForm
};
