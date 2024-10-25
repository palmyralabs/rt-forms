import { useEffect as A } from "react";
import { getValueAccessor as g } from "@palmyralabs/ts-utils";
import { getOptionIdKey as V, getOptionValueKey as F, generateFieldAccessor as K, generateFieldWriter as b } from "./ServerLookupCustomizer.js";
import { useServerQueryFieldManager as v } from "./useServerQueryFieldManager.js";
const I = (s, r) => {
  const n = g(V(s)), i = g(F(s)), o = (e) => typeof e == "object" ? n(e) : (console.error("getOptionKey", e), ""), c = (e) => typeof e == "object" ? i(e) : (e != "" && console.error("getOptionValue", e), ""), u = K(s), p = b(s, { getOptionKey: o, getOptionValue: c });
  var t = {
    fieldAccessor: u,
    fieldWriter: p
  };
  return r && (r.format && (t.format = r.format), r.parse && (t.parse = r.parse)), { customizer: t, optionIdAccessor: n, getOptionKey: o, getOptionValue: c };
}, L = (s, r, n) => {
  const { customizer: i, optionIdAccessor: o, getOptionKey: c, getOptionValue: u } = I(r, n), p = {
    fieldAccessor: i.fieldAccessor,
    fieldWriter: i.fieldWriter,
    optionIdAccessor: o,
    parse: i.parse,
    format: i.format
  }, t = v(s, r, p), e = () => {
    const {
      lookupOptions: f,
      storeOptions: l,
      queryOptions: d,
      displayAttribute: W,
      fetchDefault: j,
      defaultParams: z,
      ...O
    } = t.getFieldProps();
    return O;
  }, y = (f, l) => o(f) == o(l);
  function m(f, l) {
    return f.find((d) => {
      if (o(d) == l)
        return d;
    });
  }
  const a = t.getValue();
  return A(() => {
    a && typeof a == "object" && t.setOptions([a]);
  }, [a]), {
    ...t,
    hasValueInOptions: y,
    getOptionValue: u,
    getOptionByKey: m,
    getOptionKey: c,
    getFieldProps: e
  };
};
export {
  L as useServerLookupFieldManager
};
