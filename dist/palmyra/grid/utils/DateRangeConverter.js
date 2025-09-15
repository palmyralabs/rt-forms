import o from "dayjs";
import { getValueByKey as n } from "@palmyralabs/ts-utils";
function a(t) {
  return t ? o(t).isValid() : !1;
}
class m {
  serverPattern;
  constructor(r, e) {
    this.serverPattern = r.serverPattern || r.displayPattern || e;
  }
  getFieldData = (r, e) => n(e.attribute, r);
  getRawdata = (r, e) => n(e.attribute, r);
  format(r) {
    if (r)
      return a(r.from) ? a(r.to) ? this._formatDate(r.from) + "..." + this._formatDate(r.to) : ">" + this._formatDate(r.from) : a(r.to) ? "<" + this._formatDate(r.to) : void 0;
  }
  _formatDate(r) {
    return o(r).format(this.serverPattern);
  }
  parse(r) {
    var e, s;
    if (r && typeof r == "string") {
      const f = r.charAt(0);
      if (f == ">")
        e = this._parseDate(r.slice(1));
      else if (f == "<")
        s = this._parseDate(r.slice(1));
      else {
        const i = r.split("...");
        e = this._parseDate(i[0]), i[1] && (s = this._parseDate(i[1]));
      }
    }
    return { from: e, to: s };
  }
  _parseDate(r) {
    if (r)
      return o(r, this.serverPattern).toDate();
  }
  convert(r) {
    return r;
  }
  getDefaultValue = (r) => r || "";
}
export {
  m as DateRangeConverter
};
