import { useState as f, useEffect as m } from "react";
const F = (t) => {
  const r = t.storeFactory, [n, s] = f({}), i = t.idKey || "id", a = (e, o) => typeof e == "string" ? e + "/{" + o + "}" : e;
  return m(() => {
    const e = t.id, o = i;
    var c = a(t.endPoint, o);
    const d = r.getFormStore({}, c, o);
    var u = {
      options: {
        [o]: e
      }
    };
    d.get(u).then((y) => {
      s(y);
    });
  }, [t.id]), { data: n };
};
export {
  F as usePalmyraViewForm
};
