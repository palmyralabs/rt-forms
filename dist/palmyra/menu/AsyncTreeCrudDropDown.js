import { jsx as e, jsxs as o } from "react/jsx-runtime";
import { F as i, a as d, b as t } from "../../chunks/index2.js";
const b = (l) => {
  const a = l.handleSelect, n = l.isHalfSelected, r = l.isSelected;
  return /* @__PURE__ */ e("div", { className: "crud-dropdown-content", children: /* @__PURE__ */ o("div", { className: "crud-checkbox-list", children: [
    /* @__PURE__ */ o("div", { className: "crud-checkbox", children: [
      /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
        s,
        {
          className: "checkbox-icon",
          onClick: (c) => {
            a(c), c.stopPropagation();
          },
          variant: n ? "some" : r ? "all" : "none"
        }
      ) }),
      /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { className: "crud-checkbox-label", children: "Create" }) })
    ] }),
    /* @__PURE__ */ o("div", { className: "crud-checkbox", children: [
      /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
        s,
        {
          className: "checkbox-icon",
          onClick: (c) => {
            a(c), c.stopPropagation();
          },
          variant: n ? "some" : r ? "all" : "none"
        }
      ) }),
      /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { className: "crud-checkbox-label", children: "Update" }) })
    ] }),
    /* @__PURE__ */ o("div", { className: "crud-checkbox", children: [
      /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
        s,
        {
          className: "checkbox-icon",
          onClick: (c) => {
            a(c), c.stopPropagation();
          },
          variant: n ? "some" : r ? "all" : "none"
        }
      ) }),
      /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { className: "crud-checkbox-label", children: "Delete" }) })
    ] })
  ] }) });
}, s = ({ variant: l, ...a }) => {
  switch (l) {
    case "all":
      return /* @__PURE__ */ e(t, { style: { color: "rgb(44, 134, 213)", backgroundColor: "white" }, ...a });
    case "none":
      return /* @__PURE__ */ e(d, { style: { color: "white", border: "1px solid rgba(128, 128,128, 0.2)" }, ...a });
    case "some":
      return /* @__PURE__ */ e(i, { style: { color: "rgb(44, 134, 213)", backgroundColor: "white" }, ...a });
    default:
      return null;
  }
};
export {
  b as default
};
