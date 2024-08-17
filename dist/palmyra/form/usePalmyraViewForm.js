import { useRef as g, useState as P, useEffect as l } from "react";
const R = (t) => {
  const n = t.storeFactory, r = t.formRef || g(null), [s, a] = P({}), i = t.idKey || "id", c = t.endPointOptions || {}, d = (e, o) => typeof e == "string" ? e + "/{" + o + "}" : e;
  return l(() => {
    const e = t.id, o = i;
    var f = d(t.endPoint, o);
    const u = n.getFormStore({}, f, o);
    var m = {
      options: {
        ...c,
        [o]: e
      }
    };
    u.get(m).then((y) => {
      a(y);
    });
  }, [t.id]), { getData: () => s, formRef: r };
};
export {
  R as usePalmyraViewForm
};
