var o = Object.defineProperty;
var u = (a, t, e) => t in a ? o(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e;
var r = (a, t, e) => u(a, typeof t != "symbol" ? t + "" : t, e);
import { getValueByKey as n } from "@palmyralabs/ts-utils";
class l {
  constructor() {
    r(this, "getFieldData", (t, e) => n(e.attribute, t));
    r(this, "getRawdata", (t, e) => n(e.attribute, t));
    r(this, "format", (t) => t);
    r(this, "parse", (t) => t);
    r(this, "convert", (t) => t);
    r(this, "getDefaultValue", (t) => t || "");
  }
}
const i = new l();
export {
  i as noopConverter
};
