import { jsx as c, jsxs as r } from "react/jsx-runtime";
import { G as t } from "./iconBase.js";
function d(e) {
  return t({ tag: "svg", attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z" }, child: [] }] })(e);
}
function s(e) {
  return t({ tag: "svg", attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM92 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H92z" }, child: [] }] })(e);
}
function h(e) {
  return t({ tag: "svg", attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z" }, child: [] }] })(e);
}
function g(e) {
  return t({ tag: "svg", attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z" }, child: [] }] })(e);
}
const m = (e) => {
  const l = e.handleSelect, n = e.isHalfSelected, o = e.isSelected;
  return /* @__PURE__ */ c("div", { className: "crud-dropdown-content", children: /* @__PURE__ */ r("div", { className: "crud-checkbox-list", children: [
    /* @__PURE__ */ r("div", { className: "crud-checkbox", children: [
      /* @__PURE__ */ c("div", { children: /* @__PURE__ */ c(
        i,
        {
          className: "checkbox-icon",
          onClick: (a) => {
            l(a), a.stopPropagation();
          },
          variant: n ? "some" : o ? "all" : "none"
        }
      ) }),
      /* @__PURE__ */ c("div", { children: /* @__PURE__ */ c("span", { className: "crud-checkbox-label", children: "Create" }) })
    ] }),
    /* @__PURE__ */ r("div", { className: "crud-checkbox", children: [
      /* @__PURE__ */ c("div", { children: /* @__PURE__ */ c(
        i,
        {
          className: "checkbox-icon",
          onClick: (a) => {
            l(a), a.stopPropagation();
          },
          variant: n ? "some" : o ? "all" : "none"
        }
      ) }),
      /* @__PURE__ */ c("div", { children: /* @__PURE__ */ c("span", { className: "crud-checkbox-label", children: "Update" }) })
    ] }),
    /* @__PURE__ */ r("div", { className: "crud-checkbox", children: [
      /* @__PURE__ */ c("div", { children: /* @__PURE__ */ c(
        i,
        {
          className: "checkbox-icon",
          onClick: (a) => {
            l(a), a.stopPropagation();
          },
          variant: n ? "some" : o ? "all" : "none"
        }
      ) }),
      /* @__PURE__ */ c("div", { children: /* @__PURE__ */ c("span", { className: "crud-checkbox-label", children: "Delete" }) })
    ] })
  ] }) });
}, i = ({ variant: e, ...l }) => {
  switch (e) {
    case "all":
      return /* @__PURE__ */ c(d, { style: { color: "rgb(44, 134, 213)", backgroundColor: "white" }, ...l });
    case "none":
      return /* @__PURE__ */ c(h, { style: { color: "white", border: "1px solid rgba(128, 128,128, 0.2)" }, ...l });
    case "some":
      return /* @__PURE__ */ c(s, { style: { color: "rgb(44, 134, 213)", backgroundColor: "white" }, ...l });
    default:
      return null;
  }
};
export {
  m as A,
  s as F,
  g as a,
  d as b
};
