import { jsx as t } from "react/jsx-runtime";
import { forwardRef as l, useRef as s, useImperativeHandle as u } from "react";
import '../../../assets/CardLayout.css';/* empty css                         */
import { CardLayout as m } from "./CardLayout.js";
import { useServerQuery as v } from "../../wire/ServerQueryManager.js";
const K = l(function(r, i) {
  const { Child: o, childProps: a } = r, d = i || s(null), e = v(r), n = r.listKeyProvider || ((f, c) => c);
  return u(d, () => ({
    ...e
  }), [e]), /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t("div", { className: "card-page-container", children: /* @__PURE__ */ t(
    m,
    {
      Child: o,
      childKeyProvider: n,
      preProcess: r.preProcess,
      dataList: e.getCurrentData(),
      childProps: a,
      EmptyChild: r.EmptyChild,
      Loading: r.Loading,
      title: r.title
    }
  ) }) });
});
export {
  K as ServerCardLayout
};
