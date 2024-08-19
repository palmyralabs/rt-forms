import { useContext as S, useRef as d } from "react";
import { getHandlers as F } from "./utils.js";
import { StoreFactoryContext as y } from "../formContext.js";
const j = (e) => {
  const a = e.storeFactory || S(y), t = e.formRef || d(null), s = e.endPointOptions || {}, { onSaveFailure: c, onSaveSuccess: i, preSave: u } = F(e), o = () => t.current ? t.current.getData() : e.initialData, f = (n) => {
    t.current && t.current.setData(n);
  };
  return { getData: o, saveData: (n) => {
    if (n || t && t.current) {
      const l = "id";
      var m = e.endPoint;
      const v = a.getFormStore({}, m, l), D = n || o(), P = u(D);
      return v.post(P, { endPointVars: s }).then((r) => (e.refreshOnSaveResponse != !1 && f(r), i(r), Promise.resolve(r))).catch((r) => (c(r), Promise.reject(r)));
    } else
      return Promise.reject("invalid data");
  }, formRef: t };
};
export {
  j as usePalmyraNewForm
};
