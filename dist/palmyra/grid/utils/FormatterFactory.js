import { DateTimeConverter as t } from "./DateConverter.js";
import { DateRangeConverter as r } from "./DateRangeConverter.js";
import { noopConverter as n } from "./NoopConverter.js";
const i = (e, a) => {
  switch (e.type) {
    case "date":
      return new t(e, "YYYY-MM-DD");
    case "datetime":
      return new t(e, "YYYY-MM-DDTHH:mm:ss");
    case "dateRange":
      return new r(e, "YYYY-MM-DD");
    case "sliderRange":
      return new SliderRangeConverter(e);
    default:
      return n;
  }
};
export {
  i as getFormatConverter
};
