import { jsx as t } from "react/jsx-runtime";
import "react";
import "./formContext.js";
import { PalmyraForm as i } from "./PalmyraForm.js";
import "@palmyralabs/ts-predicates";
import "../../chunks/NoopConverter.js";
import "dayjs";
import "../../chunks/ServerCardLayout.js";
import "../layout/card/CardLayout.js";
import { usePalmyraViewForm as e } from "./useHelpers/usePalmyraViewForm.js";
const d = (r) => {
  const o = r.storeFactory, { formRef: m } = e(r);
  return /* @__PURE__ */ t(i, { ref: m, storeFactory: o, children: r.children });
};
export {
  d as PalmyraViewForm
};
