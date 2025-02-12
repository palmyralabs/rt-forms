import { useState as a } from "react";
const u = ({ sortDisabled: t, onSortChange: o }) => {
  const [e, s] = a("");
  var r = e;
  return { sortColumn: () => {
    if (!(o === void 0 || t)) {
      switch (r) {
        case "asc":
          r = "desc";
          break;
        case "desc":
          r = "";
          break;
        default:
          r = "asc";
          break;
      }
      s(r);
    }
  }, order: r, sortOrder: e };
};
export {
  u as useSortColumn
};
