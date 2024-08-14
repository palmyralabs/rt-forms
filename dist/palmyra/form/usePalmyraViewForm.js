import { useState as f, useEffect as g } from "react";
const D = (t) => {
  const r = t.storeFactory, [n, a] = f({}), s = t.idKey || "id", i = (e, o) => typeof e == "string" ? e + "/{" + o + "}" : e;
  return g(() => {
    const e = t.id, o = s;
    var c = i(t.endPoint, o);
    const d = r.getFormStore({}, c, o);
    var u = {
      options: {
        [o]: e
      }
    };
    d.get(u).then((y) => {
      a(y);
    });
  }, [t.id]), { getData: () => n };
};
export {
  D as usePalmyraViewForm
};
