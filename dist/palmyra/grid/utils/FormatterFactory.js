import { DateTimeConverter as r } from "./DateConverter.js";
import { DateRangeConverter as t } from "./DateRangeConverter.js";
import { noopConverter as n } from "./NoopConverter.js";
import a from "dayjs";
var o = require("dayjs/plugin/customParseFormat");
a.extend(o);
const d = (e, m) => {
  switch (e.type) {
    case "date":
      return new r(e, "YYYY-MM-DD");
    case "datetime":
      return new r(e, "YYYY-MM-DDTHH:mm:ss");
    case "dateRange":
      return new t(e, "YYYY-MM-DD");
    case "sliderRange":
      return new SliderRangeConverter(e);
    default:
      return n;
  }
};
export {
  d as getFormatConverter
};
