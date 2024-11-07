import { jsx as i, jsxs as m } from "react/jsx-runtime";
import '../../../assets/CardLayout.css';/* empty css                         */
import { NoopEmptyChildCard as C, EmptyChildCard as y } from "./EmptyChildCard.js";
const E = (d) => {
  const { children: c, dataList: e, Child: l, childProps: n } = d;
  if (!e) {
    const r = d.Loading || C;
    return /* @__PURE__ */ i(r, {});
  }
  const o = d.childKeyProvider || ((r, t) => t), s = d.preProcess || ((r, t) => r), h = d.EmptyChild || y;
  return /* @__PURE__ */ i("div", { children: e.length == 0 ? /* @__PURE__ */ i(h, {}) : /* @__PURE__ */ m("div", { className: "card-container", children: [
    d.title && /* @__PURE__ */ i("div", { className: "card-header", children: d.title }),
    c,
    /* @__PURE__ */ i("div", { className: "card-wrapper", children: e.map((r, t) => {
      const a = s(r, t);
      return /* @__PURE__ */ i(
        l,
        {
          ...n,
          data: a,
          index: t
        },
        o(a, t)
      );
    }) })
  ] }) });
};
export {
  E as CardLayout
};
