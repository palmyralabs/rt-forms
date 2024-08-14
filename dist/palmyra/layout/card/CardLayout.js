import { jsx as t, jsxs as m } from "react/jsx-runtime";
import { EmptyChildCard as y } from "./EmptyChildCard.js";
const v = (r) => {
  const { children: a, dataList: i, Child: l, childProps: n } = r, s = r.childKeyProvider || ((d, c) => c), o = r.preProcess || ((d) => d), h = r.EmptyChild ? r.EmptyChild : y;
  return /* @__PURE__ */ t("div", { children: !i || i.length == 0 ? /* @__PURE__ */ t(h, {}) : /* @__PURE__ */ m("div", { className: "card-container", children: [
    a,
    /* @__PURE__ */ t("div", { className: "card-wrapper", children: i.map((d, c) => {
      const e = o(d);
      return /* @__PURE__ */ t(
        l,
        {
          ...n,
          data: e
        },
        s(e, c)
      );
    }) })
  ] }) });
};
export {
  v as CardLayout
};
