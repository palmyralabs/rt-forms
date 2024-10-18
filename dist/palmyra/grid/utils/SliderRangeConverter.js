var m = Object.defineProperty;
var u = (e, r, t) => r in e ? m(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var i = (e, r, t) => u(e, typeof r != "symbol" ? r + "" : r, t);
import { getValueByKey as s } from "@palmyralabs/ts-utils";
class h {
  constructor(r) {
    i(this, "min", 0);
    i(this, "max", 100);
    i(this, "getFieldData", (r, t) => s(t.attribute, r));
    i(this, "getRawdata", (r, t) => s(t.attribute, r));
    i(this, "getDefaultValue", (r) => r || this.min + "..." + this.max);
    this.min = r.min || this.min, this.max = r.max || this.max;
  }
  format(r) {
    if (r)
      return r[0] + "..." + r[1];
  }
  parse(r) {
    var t, a;
    if (r && typeof r == "string") {
      const n = r.split("...");
      t = this._parseNumber(n[0]), a = this._parseNumber(n[1]);
    }
    return [t, a];
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
  h as SliderRangeConverter
};
