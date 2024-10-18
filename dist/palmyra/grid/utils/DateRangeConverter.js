var l = Object.defineProperty;
var m = (t, r, e) => r in t ? l(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e;
var s = (t, r, e) => m(t, typeof r != "symbol" ? r + "" : r, e);
import f from "dayjs";
import { getValueByKey as u } from "@palmyralabs/ts-utils";
function o(t) {
  return t ? f(t).isValid() : !1;
}
class _ {
  constructor(r, e) {
    s(this, "serverPattern");
    s(this, "getFieldData", (r, e) => u(e.attribute, r));
    s(this, "getRawdata", (r, e) => u(e.attribute, r));
    s(this, "getDefaultValue", (r) => r || "");
    this.serverPattern = r.serverPattern || r.displayPattern || e;
  }
  format(r) {
    if (r)
      return o(r.from) ? o(r.to) ? this._formatDate(r.from) + "..." + this._formatDate(r.to) : ">" + this._formatDate(r.from) : o(r.to) ? "<" + this._formatDate(r.to) : void 0;
  }
  _formatDate(r) {
    return f(r).format(this.serverPattern);
  }
  parse(r) {
    var e, i;
    if (r && typeof r == "string") {
      const n = r.charAt(0);
      if (n == ">")
        e = this._parseDate(r.slice(1));
      else if (n == "<")
        i = this._parseDate(r.slice(1));
      else {
        const a = r.split("...");
        e = this._parseDate(a[0]), a[1] && (i = this._parseDate(a[1]));
      }
    }
    return { from: e, to: i };
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
