import { useState as a } from "react";
const u = ({ sortDisabled: t, onSortChange: s }) => {
  const [e, o] = a("");
  var r = e;
  return { sortColumn: () => {
    if (!(s === void 0 || t)) {
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
      o(r);
    }
  }, order: r, sortOrder: e };
};
export {
  u as useSortColumn
};
