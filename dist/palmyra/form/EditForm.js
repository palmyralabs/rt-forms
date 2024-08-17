import { jsx as n } from "react/jsx-runtime";
import { forwardRef as f, useRef as d, useEffect as c, useImperativeHandle as l } from "react";
import "./formContext.js";
import { PalmyraForm as u } from "./PalmyraForm.js";
import "@palmyralabs/ts-predicates";
import "../../chunks/NoopConverter.js";
import "dayjs";
import "../../chunks/ServerCardLayout.js";
import "../layout/card/CardLayout.js";
import { usePalmyraEditForm as h } from "./useHelpers/usePalmyraEditForm.js";
import { getSaveFormHandle as s } from "./formUtil.js";
const j = f(function(r, e) {
  const o = r.storeFactory, { fetchData: i, saveData: a, formRef: t } = h(r), m = e || d();
  return c(() => {
    i(), t.current.isValid() && r.onValidChange && r.onValidChange(!0);
  }, [t, r.id]), l(m, () => s(a, t)), /* @__PURE__ */ n(u, { onValidChange: r.onValidChange, ref: t, storeFactory: o, children: r.children });
});
export {
  j as EditForm
};
