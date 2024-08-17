import { jsx as i } from "react/jsx-runtime";
import { PalmyraForm as n } from "./PalmyraForm.js";
import { forwardRef as f, useRef as c, useImperativeHandle as d } from "react";
import { getSaveFormHandle as l } from "./formUtil.js";
import "../../chunks/NoopConverter.js";
import "dayjs";
import "./formContext.js";
import "@palmyralabs/ts-predicates";
import "../../chunks/ServerCardLayout.js";
import "../layout/card/CardLayout.js";
import { usePalmyraNewForm as s } from "./useHelpers/usePalmyraNewForm.js";
const N = f(function(r, t) {
  const e = r.storeFactory, { saveData: m, formRef: o } = s(r), a = t || c();
  return d(a, () => l(m, o)), /* @__PURE__ */ i(n, { onValidChange: r.onValidChange, ref: o, storeFactory: e, children: r.children });
});
export {
  N as NewForm
};
