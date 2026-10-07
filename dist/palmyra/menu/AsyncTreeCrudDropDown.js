import { jsx as c, jsxs as l } from "react/jsx-runtime";
import { C as d, F as r } from "../../chunks/CheckBoxIcon.js";
const m = (a) => {
  const n = a.handleSelect, o = a.isHalfSelected, s = a.isSelected, i = { unchecked: r, ...a.icons };
  return /* @__PURE__ */ c("div", { className: "crud-dropdown-content", children: /* @__PURE__ */ l("div", { className: "crud-checkbox-list", children: [
    /* @__PURE__ */ l("div", { className: "crud-checkbox", children: [
      /* @__PURE__ */ c("div", { children: /* @__PURE__ */ c(
        d,
        {
          className: "checkbox-icon",
          icons: i,
          onClick: (e) => {
            n(e), e.stopPropagation();
          },
          variant: o ? "some" : s ? "all" : "none"
        }
      ) }),
      /* @__PURE__ */ c("div", { children: /* @__PURE__ */ c("span", { className: "crud-checkbox-label", children: "Create" }) })
    ] }),
    /* @__PURE__ */ l("div", { className: "crud-checkbox", children: [
      /* @__PURE__ */ c("div", { children: /* @__PURE__ */ c(
        d,
        {
          className: "checkbox-icon",
          icons: i,
          onClick: (e) => {
            n(e), e.stopPropagation();
          },
          variant: o ? "some" : s ? "all" : "none"
        }
      ) }),
      /* @__PURE__ */ c("div", { children: /* @__PURE__ */ c("span", { className: "crud-checkbox-label", children: "Update" }) })
    ] }),
    /* @__PURE__ */ l("div", { className: "crud-checkbox", children: [
      /* @__PURE__ */ c("div", { children: /* @__PURE__ */ c(
        d,
        {
          className: "checkbox-icon",
          icons: i,
          onClick: (e) => {
            n(e), e.stopPropagation();
          },
          variant: o ? "some" : s ? "all" : "none"
        }
      ) }),
      /* @__PURE__ */ c("div", { children: /* @__PURE__ */ c("span", { className: "crud-checkbox-label", children: "Delete" }) })
    ] })
  ] }) });
};
export {
  m as default
};
