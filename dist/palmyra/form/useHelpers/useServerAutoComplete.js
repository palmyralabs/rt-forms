import { useEffect as A } from "react";
import { getValueAccessor as O } from "@palmyralabs/ts-utils";
import { useServerQueryFieldManager as V } from "./useServerQueryFieldManager.js";
const b = (i, e) => {
  const n = i.queryOptions.queryAttribute || i.queryOptions.labelAttribute || "code", t = O(n), r = (s) => typeof s == "object" ? t(s) : s;
  var o = {};
  return e && (e.format && (o.format = e.format), e.parse && (o.parse = e.parse)), { customizer: o, optionValueAccessor: t, getOptionValue: r, optionKey: n };
}, h = (i, e, n) => {
  const { customizer: t, optionValueAccessor: r, getOptionValue: o, optionKey: s } = b(e, n), p = {
    fieldAccessor: t.fieldAccessor,
    fieldWriter: t.fieldWriter,
    optionIdAccessor: r,
    parse: t.parse,
    format: t.format
  }, u = V(i, e, p), d = () => {
    const {
      lookupOptions: a,
      storeOptions: c,
      queryOptions: l,
      displayAttribute: v,
      fetchDefault: q,
      defaultParams: z,
      ...g
    } = u.getFieldProps();
    return g;
  }, m = (a, c) => r(a) == r(c);
  function y(a, c) {
    return a.find((l) => {
      if (r(l) == c)
        return l;
    });
  }
  const f = u.getValue();
  return A(() => {
    f && u.setOptions([{ [s]: f }]);
  }, [f]), {
    ...u,
    hasValueInOptions: m,
    getOptionValue: o,
    getOptionByKey: y,
    getFieldProps: d
  };
};
export {
  h as useServerAutoComplete
};
