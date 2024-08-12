import { jsx as t } from "react/jsx-runtime";
import { forwardRef as s, useRef as l, useImperativeHandle as u } from "react";
import m from "./CardLayout.js";
import { useServerQuery as v } from "../../wire/ServerQueryManager.js";
const K = s(function(r, i) {
  const { Child: o, childProps: d } = r, a = i || l(null), e = v(r), c = r.listKeyProvider || ((f, n) => n);
  return u(a, () => ({
    ...e
  }), [e]), /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t("div", { className: "card-page-container", children: /* @__PURE__ */ t(
    m,
    {
      Child: o,
      childKeyProvider: c,
      preProcess: r.preProcess,
      dataList: e.getCurrentData(),
      childProps: d,
      EmptyChild: r.EmptyChild
    }
  ) }) });
});
export {
  K as ServerCardLayout
};
