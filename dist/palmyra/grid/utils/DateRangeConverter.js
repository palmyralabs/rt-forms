var l = Object.defineProperty;
var m = (t, e, r) => e in t ? l(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var s = (t, e, r) => m(t, typeof e != "symbol" ? e + "" : e, r);
import f from "dayjs";
import { getValueByKey as u } from "@palmyralabs/ts-utils";
function n(t) {
  return t ? f(t).isValid() : !1;
}
class _ {
  constructor(e, r) {
    s(this, "serverPattern");
    s(this, "getFieldData", (e, r) => u(r.attribute, e));
    s(this, "getRawdata", (e, r) => u(r.attribute, e));
    s(this, "getDefaultValue", (e) => e || "");
    this.serverPattern = e.serverPattern || e.displayPattern || r;
  }
  format(e) {
    if (e)
      return n(e.from) ? n(e.to) ? this._formatDate(e.from) + "..." + this._formatDate(e.to) : ">" + this._formatDate(e.from) : n(e.to) ? "<" + this._formatDate(e.to) : void 0;
  }
  _formatDate(e) {
    return f(e).format(this.serverPattern);
  }
  parse(e) {
    var r, i;
    if (e && typeof e == "string") {
      const o = e.charAt(0);
      if (o == ">")
        r = this._parseDate(e.slice(1));
      else if (o == "<")
        i = this._parseDate(e.slice(1));
      else {
        const a = e.split("...");
        r = this._parseDate(a[0]), a[1] && (i = this._parseDate(a[1]));
      }
    }
    return { from: r, to: i };
  }
  _parseDate(e) {
    if (e)
      return f(e, this.serverPattern).toDate();
  }
  convert(e) {
    return e;
  }
}
export {
  _ as DateRangeConverter
};
