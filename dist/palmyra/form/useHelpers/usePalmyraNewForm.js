import { useContext as d, useRef as D } from "react";
import { getHandlers as S } from "./utils.js";
import { StoreFactoryContext as y } from "../formContext.js";
const j = (e) => {
  const a = e.storeFactory || d(y), t = e.formRef || D(null), s = e.endPointOptions || {}, { onSaveFailure: c, onSaveSuccess: i, preSave: u } = S(e), n = () => t.current ? t.current.getData() : e.initialData, f = (o) => {
    t.current && t.current.setData(o);
  };
  return { getData: n, saveData: (o) => {
    if (o || t && t.current) {
      var m = e.endPoint;
      const l = a.getFormStore({}, m, "id"), v = o || n(), P = u(v);
      return l.post(P, { endPointVars: s }).then((r) => (e.refreshOnSaveResponse != !1 && f(r), i(r), Promise.resolve(r))).catch((r) => (c(r), Promise.reject(r)));
    } else
      return Promise.reject("invalid data");
  }, formRef: t };
};
export {
  j as usePalmyraNewForm
};
