var l = Object.defineProperty;
var m = (e, r, t) => r in e ? l(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var s = (e, r, t) => m(e, typeof r != "symbol" ? r + "" : r, t);
import f from "dayjs";
import { e as u } from "../../../chunks/accessor.js";
import "../../../chunks/NoopConverter.js";
function o(e) {
  return e ? f(e).isValid() : !1;
}
class _ {
  constructor(r, t) {
    s(this, "serverPattern");
    s(this, "getFieldData", (r, t) => u(t.attribute, r));
    s(this, "getRawdata", (r, t) => u(t.attribute, r));
    s(this, "getDefaultValue", (r) => r || "");
    this.serverPattern = r.serverPattern || r.displayPattern || t;
  }
  format(r) {
    if (r)
      return o(r.from) ? o(r.to) ? this._formatDate(r.from) + "..." + this._formatDate(r.to) : ">" + this._formatDate(r.from) : o(r.to) ? "<" + this._formatDate(r.to) : void 0;
  }
  _formatDate(r) {
    return f(r).format(this.serverPattern);
  }
  parse(r) {
    var t, i;
    if (r && typeof r == "string") {
      const n = r.charAt(0);
      if (n == ">")
        t = this._parseDate(r.slice(1));
      else if (n == "<")
        i = this._parseDate(r.slice(1));
      else {
        const a = r.split("...");
        t = this._parseDate(a[0]), a[1] && (i = this._parseDate(a[1]));
      }
    }
    return { from: t, to: i };
  }
  _parseDate(r) {
    if (r)
      return f(r, this.serverPattern).toDate();
  }
  convert(r) {
    return r;
  }
}
export {
  _ as DateRangeConverter
};
