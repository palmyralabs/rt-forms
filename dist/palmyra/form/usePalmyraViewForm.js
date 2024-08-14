import { useState as g, useEffect as m } from "react";
const D = (t) => {
  const n = t.storeFactory, [r, s] = g({}), a = t.idKey || "id", i = t.endPointOptions || {}, c = (e, o) => typeof e == "string" ? e + "/{" + o + "}" : e;
  return m(() => {
    const e = t.id, o = a;
    var d = c(t.endPoint, o);
    const u = n.getFormStore({}, d, o);
    var y = {
      options: {
        ...i,
        [o]: e
      }
    };
    u.get(y).then((f) => {
      s(f);
    });
  }, [t.id]), { getData: () => r };
};
export {
  D as usePalmyraViewForm
};
