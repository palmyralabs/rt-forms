import { getPredicate as l } from "@palmyralabs/ts-predicates";
import { getErrorMessage as f } from "./errorMessageHelper.js";
const p = (r) => l(u(r)), u = (r) => {
  var t = {};
  if (t.required = r.required == !0, r.range) {
    const e = r.range;
    t.range = { negate: !1 }, n(e, t.range, "start"), n(e, t.range, "end");
  }
  if (r.length) {
    const e = r.length;
    typeof e == "number" ? t.length = { is: e } : (t.length = {}, g(e.eq) ? t.length.is = e.eq : (n(e, t.length, "min"), n(e, t.length, "max")));
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
    typeof e == "string" ? t.rules = [e] : Array.isArray(e) ? t.rules = e.map((s) => s.rule) : typeof e == "object" && (t.rules = [e.rule]);
  }
  return t;
}, g = (r) => !isNaN(r), n = (r, t, e, s) => {
  const i = e, a = r[e];
  g(r[e]) && (t[i] = a);
}, d = (r, t, e) => {
  const s = t(r);
  return s.valid ? { status: !1, message: "" } : { status: !0, message: f(s, e) };
};
export {
  p as generatePredicate,
  d as validate
};
