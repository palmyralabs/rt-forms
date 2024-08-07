import { jsx as t, jsxs as m } from "react/jsx-runtime";
import { EmptyChildCard as y } from "./EmptyChildCard.js";
const v = (d) => {
  const { children: c, dataList: e, Child: l, childProps: s } = d, n = d.childKeyProvider || ((r, i) => i), o = d.preProcess || ((r) => r), h = d.EmptyChild ? d.EmptyChild : y;
  return /* @__PURE__ */ t("div", { children: !e || e.length == 0 ? /* @__PURE__ */ t(h, {}) : /* @__PURE__ */ m("div", { className: "card-container", children: [
    c,
    /* @__PURE__ */ t("div", { className: "card-wrapper", children: e.map((r, i) => {
      const a = o(r);
      return /* @__PURE__ */ t(
        l,
        {
          ...s,
          data: a
        },
        n(a, i)
      );
    }) })
  ] }) });
};
export {
  v as default
};
