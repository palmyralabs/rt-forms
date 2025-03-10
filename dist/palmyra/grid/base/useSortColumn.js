import { useState as u } from "react";
const m = ({ sortDisabled: o, onSortChange: t, initMode: s = "" }) => {
  const c = s == "desc" || s == "asc" ? s : "", [e, a] = u(c);
  var r = e;
  return { sortColumn: () => {
    if (!(t === void 0 || o)) {
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
      a(r);
    }
  }, order: r, sortOrder: e };
};
export {
  m as useSortColumn
};
