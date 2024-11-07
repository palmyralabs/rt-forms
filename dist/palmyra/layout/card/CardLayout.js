import { jsx as r, jsxs as m } from "react/jsx-runtime";
import '../../../assets/CardLayout.css';/* empty css                         */
import { NoopEmptyChildCard as C, EmptyChildCard as y } from "./EmptyChildCard.js";
const g = (t) => {
  const { children: c, dataList: i, Child: n, childProps: l } = t;
  if (!i) {
    const d = t.Loading || C;
    return /* @__PURE__ */ r(d, {});
  }
  const o = t.childKeyProvider || ((d, e) => e), h = t.preProcess || ((d, e) => d), s = t.EmptyChild || y;
  return /* @__PURE__ */ r("div", { children: i.length == 0 ? /* @__PURE__ */ r(s, {}) : /* @__PURE__ */ m("div", { className: "card-container", children: [
    t.title && /* @__PURE__ */ r("div", { className: "card-header", children: t.title }),
    c,
    /* @__PURE__ */ r("div", { className: "card-wrapper", children: i.map((d, e) => {
      const a = h(d, e);
      return /* @__PURE__ */ r(
        n,
        {
          ...l,
          data: a,
          index: e,
          elementCount: i.length
        },
        o(a, e)
      );
    }) })
  ] }) });
};
export {
  g as CardLayout
};
