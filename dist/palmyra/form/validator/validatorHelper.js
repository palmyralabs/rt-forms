import { getPredicate as l } from "@palmyralabs/ts-predicates";
import { getErrorMessage as u } from "./errorMessageHelper.js";
const p = (r) => l(f(r)), f = (r) => {
  var t = {};
  if (t.required = r.required == !0, r.range) {
    const e = r.range;
    t.range = { negate: !1 }, i(e, t.range, "start"), i(e, t.range, "end");
  }
  if (r.length) {
    const e = r.length;
    typeof e == "number" ? t.length = { is: e } : (t.length = {}, g(e.eq) ? t.length.is = e.eq : (i(e, t.length, "min"), i(e, t.length, "max")));
  }
  if (r.regExp) {
    const e = r.regExp;
    if (typeof e == "string" || typeof e.test == "function")
      t.regExp = e;
    else if (e.regex) {
      const s = e.regex;
      s && (t.regExp = s);
    }
  }
  if (r.validRule) {
    const e = r.validRule;
    typeof e == "string" ? t.rules = [e] : Array.isArray(e) ? t.rules = e.map((s) => s.rule) : typeof e == "object" && (e.rule ? t.rules = [e.rule] : Object.entries(e).map(([n, a]) => {
      t.rules = [n];
    }));
  }
  return t;
}, g = (r) => !isNaN(r), i = (r, t, e, s) => {
  const n = e, a = r[e];
  g(r[e]) && (t[n] = a);
}, m = (r, t, e) => {
  const s = t(r);
  return s.valid ? { status: !1, message: "" } : { status: !0, message: u(s, e) };
};
export {
  p as generatePredicate,
  m as validate
};
