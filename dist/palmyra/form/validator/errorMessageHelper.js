import { e as l } from "../../../chunks/accessor.js";
import "../../../chunks/NoopConverter.js";
import "dayjs";
const o = {
  "length.eq": ["length.errorMessage.equal", "length.errorMessage", "invalidMessage"],
  "length.min": ["length.errorMessage.minimum", "length.errorMessage", "invalidMessage"],
  "length.max": ["length.errorMessage.maximum", "length.errorMessage", "invalidMessage"],
  "range.start": ["range.errorMessage.start", "range.errorMessage", "invalidMessage"],
  "range.end": ["range.errorMessage.end", "length.errorMessage", "invalidMessage"],
  rule: ["validRule.errorMessage", "invalidMessage"],
  regex: ["regExp.errorMessage", "invalidMessage"],
  required: ["missingMessage"]
}, u = (n, e) => {
  const r = n.reason;
  if (!r)
    return "";
  const g = o[r];
  for (const s in g) {
    const i = g[s], a = l(i, e);
    if (a && typeof a == "string")
      return a;
  }
  if (e.invalidMessage)
    return e.invalidMessage;
  if (e.validRule) {
    let s = e.validRule.errorMessage;
    return s || (Object.entries(e.validRule).map(([a, t]) => {
      n.reason = t;
    }), r);
  }
  return r;
};
export {
  u as getErrorMessage
};
