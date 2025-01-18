import { jsx as r, jsxs as m } from "react/jsx-runtime";
import '../../../assets/CardLayout.css';/* empty css                         */
import { NoopEmptyChildCard as C, EmptyChildCard as y } from "./EmptyChildCard.js";
const g = (t) => {
  const { children: a, dataList: i, Child: n } = t;
  if (!i) {
    const d = t.Loading || C;
    return /* @__PURE__ */ r(d, {});
  }
  const l = t.childProps || {}, o = t.childKeyProvider || ((d, e) => e), h = t.preProcess || ((d, e) => d), s = t.EmptyChild || y;
  return /* @__PURE__ */ r("div", { children: i.length == 0 ? /* @__PURE__ */ r(s, {}) : /* @__PURE__ */ m("div", { className: "card-container", children: [
    t.title && /* @__PURE__ */ r("div", { className: "card-header", children: t.title }),
    a,
    /* @__PURE__ */ r("div", { className: "card-wrapper", children: i.map((d, e) => {
      const c = h(d, e);
      return /* @__PURE__ */ r(
        n,
        {
          ...l,
          data: c,
          index: e,
          elementCount: i.length
        },
        o(c, e)
      );
    }) })
  ] }) });
};
export {
  g as CardLayout
};
