import { useRef as D, useState as P, useEffect as l } from "react";
const S = (t) => {
  const n = t.storeFactory, r = t.formRef || D(null), [a, s] = P({}), i = t.idKey || "id", c = t.endPointOptions || {}, d = t.onQueryData || ((e) => e), f = (e, o) => typeof e == "string" ? e + "/{" + o + "}" : e;
  return l(() => {
    const e = t.id, o = i;
    var u = f(t.endPoint, o);
    const y = n.getFormStore({}, u, o);
    var m = {
      options: {
        ...c,
        [o]: e
      }
    };
    y.get(m).then((g) => {
      s(d(g));
    });
  }, [t.id]), { getData: () => a, formRef: r };
};
export {
  S as usePalmyraViewForm
};
