import { jsx as i, jsxs as m } from "react/jsx-runtime";
import { NoopEmptyChildCard as C, EmptyChildCard as y } from "./EmptyChildCard.js";
const P = (d) => {
  const { children: e, dataList: t, Child: n, childProps: o } = d;
  if (!t) {
    const r = d.Loading || C;
    return /* @__PURE__ */ i(r, {});
  }
  const s = d.childKeyProvider || ((r, a) => a), l = d.preProcess || ((r) => r), h = d.EmptyChild || y;
  return /* @__PURE__ */ i("div", { children: t.length == 0 ? /* @__PURE__ */ i(h, {}) : /* @__PURE__ */ m("div", { className: "card-container", children: [
    e,
    /* @__PURE__ */ i("div", { className: "card-wrapper", children: t.map((r, a) => {
      const c = l(r);
      return /* @__PURE__ */ i(
        n,
        {
          ...o,
          data: c
        },
        s(c, a)
      );
    }) })
  ] }) });
};
export {
  P as CardLayout
};
