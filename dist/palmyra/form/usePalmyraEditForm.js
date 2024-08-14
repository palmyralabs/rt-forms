import { useRef as S, useEffect as D } from "react";
import { NoopFormListener as g } from "./Noops.js";
const E = (e) => {
  const d = e.storeFactory, r = e.formRef || S(null), v = e.idKey || "id", n = e.formListener || g, f = (t, o) => typeof t == "string" ? t + "/{" + o + "}" : t;
  return D(() => {
    const t = e.id, o = v;
    var c = f(e.endPoint, o);
    const a = d.getFormStore({}, c, o);
    var i = {
      endPointVars: {
        [o]: t
      }
    };
    a.get(i).then((u) => {
      r.current.setData(u);
    });
  }, [e.id]), { getData: () => r.current.getData(), saveData: (t) => {
    if (t || r && r.current) {
      const a = e.idKey || "id";
      var o = f(e.endPoint, a);
      const i = d.getFormStore({}, o, a), u = e.id, m = t || r.current.getData(a), P = n.preProcessSaveData ? n.preProcessSaveData(m) : m;
      var c = {
        endPointVars: {
          [a]: u
        }
      };
      return i.put(P, c).then((s) => (r.current.setData(s), n.onSaveSuccess && n.onSaveSuccess(s), Promise.resolve(s))).catch((s) => (n.onSaveFailure && n.onSaveFailure(s), Promise.reject(s)));
    } else
      return Promise.reject("invalid data");
  }, formRef: r };
};
export {
  E as usePalmyraEditForm
};