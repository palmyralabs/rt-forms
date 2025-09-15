import { getValueByKey as a } from "@palmyralabs/ts-utils";
class m {
  min = 0;
  max = 100;
  constructor(r) {
    this.min = r.min || this.min, this.max = r.max || this.max;
  }
  getFieldData = (r, t) => a(t.attribute, r);
  getRawdata = (r, t) => a(t.attribute, r);
  format(r) {
    if (r)
      return r[0] + "..." + r[1];
  }
  parse(r) {
    var t, e;
    if (r && typeof r == "string") {
      const i = r.split("...");
      t = this._parseNumber(i[0]), e = this._parseNumber(i[1]);
    }
    return [t, e];
  }
  _parseNumber(r) {
    if (r)
      return Number.parseInt(r);
  }
  convert(r) {
    return r;
  }
  getDefaultValue = (r) => r || this.min + "..." + this.max;
}
export {
  m as SliderRangeConverter
};
