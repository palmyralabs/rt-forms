import { getValueByKey as l } from "@palmyralabs/ts-utils";
const o = {
  "length.eq": ["length.errorMessage.equal", "length.errorMessage", "invalidMessage"],
  "length.min": ["length.errorMessage.minimum", "length.errorMessage", "invalidMessage"],
  "length.max": ["length.errorMessage.maximum", "length.errorMessage", "invalidMessage"],
  "range.start": ["range.errorMessage.start", "range.errorMessage", "invalidMessage"],
  "range.end": ["range.errorMessage.end", "range.errorMessage", "invalidMessage"],
  rule: ["validRule.errorMessage", "invalidMessage"],
  regex: ["regExp.errorMessage", "invalidMessage"],
  required: ["missingMessage"]
}, c = (r, e) => {
  const a = r.reason;
  if (!a)
    return "";
  switch (a) {
    case "rule":
      return i(r.reason, e);
    case "regex":
      return M(r, e);
  }
  const s = i(r.reason, e);
  if (s) return s;
  const n = t(a, e);
  return n || (e.invalidMessage ? e.invalidMessage : a);
}, t = (r, e) => {
  const a = o[r];
  for (const s in a) {
    const n = a[s], g = l(n, e);
    if (g && typeof g == "string")
      return g;
  }
}, i = (r, e) => {
  const a = typeof e.validRule;
  if (Array.isArray(e.validRule)) {
    const s = e.validRule.find((n) => n.rule == r);
    if (s && s.errorMessage)
      return s.errorMessage;
  } else if (a == "object") {
    let { rule: s, errorMessage: n } = e.validRule;
    if (n && (r == "rule" || r == s))
      return n;
  }
  return t(r, e);
}, M = (r, e) => t(r.reason, e);
export {
  c as getErrorMessage
};
