import { getValueByKey as r } from "@palmyralabs/ts-utils";
class a {
  getFieldData = (t, e) => r(e.attribute, t);
  getRawdata = (t, e) => r(e.attribute, t);
  format = (t) => t;
  parse = (t) => t;
  convert = (t) => t;
  getDefaultValue = (t) => t || "";
}
const u = new a();
export {
  u as noopConverter
};
