import { getValueByKey as s } from "@palmyralabs/ts-utils";
const m = (e, t) => {
  const r = s(e.attribute, t);
  return o(e, r);
}, o = (e, t) => {
  switch (e.type || "string") {
    case "date":
      return c(t);
    case "radio":
    case "select":
    case "checkbox":
      return n(t, e);
    case "switch":
      return n(t, e);
    case "datetime":
      return u(t);
    case "serverlookup":
      return l(t);
    case "textarea":
      return i(t);
    case "password":
      return f(t);
    case "numbersOnly":
      return g(t);
    case "integer":
      return p(t);
    case "autoComplete":
      return d(t);
    default:
      return a(t);
  }
}, c = (e, t) => e, u = (e, t) => e, a = (e, t) => e instanceof Object ? JSON.stringify(e) : e, i = (e, t) => e, g = (e, t) => e, p = (e, t) => e, d = (e, t) => e, f = (e, t) => e, n = (e, t) => {
  var r = t.options;
  return r[e];
}, l = (e, t) => e;
export {
  o as formatValue,
  m as getDisplayValue
};
