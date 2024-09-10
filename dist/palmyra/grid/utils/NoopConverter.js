var n = Object.defineProperty;
var u = (o, t, r) => t in o ? n(o, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[t] = r;
var e = (o, t, r) => u(o, typeof t != "symbol" ? t + "" : t, r);
import { e as a } from "../../../chunks/accessor.js";
import "../../../chunks/NoopConverter.js";
import "dayjs";
class p {
  constructor() {
    e(this, "getFieldData", (t, r) => a(r.attribute, t));
    e(this, "getRawdata", (t, r) => a(r.attribute, t));
    e(this, "format", (t) => t);
    e(this, "parse", (t) => t);
    e(this, "convert", (t) => t);
    e(this, "getDefaultValue", (t) => t || "");
  }
}
const c = new p();
export {
  c as noopConverter
};
