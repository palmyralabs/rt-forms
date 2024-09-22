var s = Object.defineProperty;
var i = (e, r, t) => r in e ? s(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var n = (e, r, t) => i(e, typeof r != "symbol" ? r + "" : r, t);
import a from "dayjs";
class P {
  constructor(r, t) {
    n(this, "serverPattern");
    n(this, "displayPattern");
    n(this, "getDefaultValue", (r) => r || "");
    this.serverPattern = r.serverPattern || r.displayPattern || t, this.displayPattern = r.displayPattern || t;
  }
  format(r) {
    return r && a(r, this.serverPattern).format(this.displayPattern);
  }
  parse(r) {
    if (r) {
      if (r instanceof Date)
        return r;
      const t = Number(r);
      return !isNaN(t) && t.toString() === r.toString() ? new Date(t) : a(r, this.serverPattern).toDate();
    }
    return r;
  }
  convert(r) {
    const t = this.parse(r);
    return t && t instanceof Date && this.displayPattern ? a(t).format(this.displayPattern) : r;
  }
}
export {
  P as DateTimeConverter
};
