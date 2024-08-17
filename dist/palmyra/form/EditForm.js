import { jsx as f } from "react/jsx-runtime";
import { forwardRef as n, useRef as c, useEffect as d, useImperativeHandle as l } from "react";
import "../../chunks/NoopConverter.js";
import "dayjs";
import "./formContext.js";
import { PalmyraForm as s } from "./PalmyraForm.js";
import "@palmyralabs/ts-predicates";
import "../../chunks/ServerCardLayout.js";
import "../layout/card/CardLayout.js";
import { usePalmyraEditForm as u } from "./useHelpers/usePalmyraEditForm.js";
import { getSaveFormHandle as F } from "./formUtil.js";
const V = n(function(r, o) {
  const e = r.storeFactory, { fetchData: m, saveData: i, formRef: t } = u(r), a = o || c();
  return d(() => {
    m();
  }, [t, r.id]), l(a, () => F(i, t)), /* @__PURE__ */ f(s, { onValidChange: r.onValidChange, ref: t, storeFactory: e, children: r.children });
});
export {
  V as EditForm
};
