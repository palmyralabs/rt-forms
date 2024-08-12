import { e as t } from "../../../chunks/accessor.js";
import "../../../chunks/NoopConverter.js";
import "dayjs";
const o = {
  "length.eq": ["length.errorMessage.equal", "length.errorMessage", "invalidMessage"],
  "length.min": ["length.errorMessage.minimum", "length.errorMessage", "invalidMessage"],
  "length.max": ["length.errorMessage.maximum", "length.errorMessage", "invalidMessage"],
  "range.start": ["range.errorMessage.start", "range.errorMessage", "invalidMessage"],
  "range.end": ["range.errorMessage.end", "length.errorMessage", "invalidMessage"],
  regex: ["regExp.errorMessage", "invalidMessage"],
  required: ["missingMessage"]
}, d = (s, e) => {
  const n = s.reason;
  if (!n)
    return "";
  const a = o[n];
  for (const g in a) {
    const i = a[g], r = t(i, e);
    if (r && typeof r == "string")
      return r;
  }
  return e.invalidMessage ? e.invalidMessage : s.reason;
};
export {
  d as getErrorMessage
};
