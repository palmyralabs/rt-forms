import { c as r } from "../../../chunks/customParseFormat.js";
import { DateTimeConverter as t } from "./DateConverter.js";
import { DateRangeConverter as n } from "./DateRangeConverter.js";
import { noopConverter as a } from "./NoopConverter.js";
import o from "dayjs";
o.extend(r);
const f = (e, m) => {
  switch (e.type) {
    case "date":
      return new t(e, "YYYY-MM-DD");
    case "datetime":
      return new t(e, "YYYY-MM-DDTHH:mm:ss");
    case "dateRange":
      return new n(e, "YYYY-MM-DD");
    case "sliderRange":
      return new SliderRangeConverter(e);
    default:
      return a;
  }
};
export {
  f as getFormatConverter
};
