var s = Object.defineProperty;
var u = (e, r, t) => r in e ? s(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var i = (e, r, t) => u(e, typeof r != "symbol" ? r + "" : r, t);
import { e as n } from "../../../chunks/accessor.js";
import "../../../chunks/NoopConverter.js";
import "dayjs";
class b {
  constructor(r) {
    i(this, "min", 0);
    i(this, "max", 100);
    i(this, "getFieldData", (r, t) => n(t.attribute, r));
    i(this, "getRawdata", (r, t) => n(t.attribute, r));
    i(this, "getDefaultValue", (r) => r || this.min + "..." + this.max);
    this.min = r.min || this.min, this.max = r.max || this.max;
  }
  format(r) {
    if (r)
      return r[0] + "..." + r[1];
  }
  parse(r) {
    var t, m;
    if (r && typeof r == "string") {
      const a = r.split("...");
      t = this._parseNumber(a[0]), m = this._parseNumber(a[1]);
    }
    return [t, m];
  }
  _parseNumber(r) {
    if (r)
      return Number.parseInt(r);
  }
  convert(r) {
    return r;
  }
}
export {
  b as SliderRangeConverter
};
