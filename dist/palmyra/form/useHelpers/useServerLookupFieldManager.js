import { useEffect as A } from "react";
import { getValueAccessor as g } from "@palmyralabs/ts-utils";
import { getOptionIdKey as V, getOptionValueKey as F, generateFieldAccessor as K, generateFieldWriter as b } from "./ServerLookupCustomizer.js";
import { useServerQueryFieldManager as v } from "./useServerQueryFieldManager.js";
const I = (o, r) => {
  const i = g(V(o)), n = g(F(o)), s = (e) => typeof e == "object" ? i(e) : (e != "" && console.warn("getOptionKey", e), e), c = (e) => typeof e == "object" ? n(e) : (e != "" && console.warn("getOptionValue", e), e), u = K(o), p = b(o, { getOptionKey: s, getOptionValue: c });
  var t = {
    fieldAccessor: u,
    fieldWriter: p
  };
  return r && (r.format && (t.format = r.format), r.parse && (t.parse = r.parse)), { customizer: t, optionIdAccessor: i, getOptionKey: s, getOptionValue: c };
}, w = (o, r, i) => {
  const { customizer: n, optionIdAccessor: s, getOptionKey: c, getOptionValue: u } = I(r, i), p = {
    fieldAccessor: n.fieldAccessor,
    fieldWriter: n.fieldWriter,
    optionIdAccessor: s,
    parse: n.parse,
    format: n.format
  }, t = v(o, r, p), e = () => {
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
  }, y = (f, l) => s(f) == s(l);
  function m(f, l) {
    return f.find((d) => {
      if (s(d) == l)
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
  w as useServerLookupFieldManager
};
