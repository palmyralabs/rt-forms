import { jsx as i, jsxs as m } from "react/jsx-runtime";
import '../../../assets/CardLayout.css';/* empty css                         */
import { NoopEmptyChildCard as C, EmptyChildCard as y } from "./EmptyChildCard.js";
const E = (d) => {
  const { children: c, dataList: t, Child: n, childProps: l } = d;
  if (!t) {
    const r = d.Loading || C;
    return /* @__PURE__ */ i(r, {});
  }
  const o = d.childKeyProvider || ((r, e) => e), s = d.preProcess || ((r) => r), h = d.EmptyChild || y;
  return /* @__PURE__ */ i("div", { children: t.length == 0 ? /* @__PURE__ */ i(h, {}) : /* @__PURE__ */ m("div", { className: "card-container", children: [
    d.title && /* @__PURE__ */ i("div", { className: "card-header", children: d.title }),
    c,
    /* @__PURE__ */ i("div", { className: "card-wrapper", children: t.map((r, e) => {
      const a = s(r);
      return /* @__PURE__ */ i(
        n,
        {
          ...l,
          data: a
        },
        o(a, e)
      );
    }) })
  ] }) });
};
export {
  E as CardLayout
};
