import { jsx as t } from "react/jsx-runtime";
import "react";
import "./formContext.js";
import { PalmyraForm as i } from "./PalmyraForm.js";
import "@palmyralabs/ts-predicates";
import "../../chunks/NoopConverter.js";
import "dayjs";
import "../../chunks/ServerCardLayout.js";
import '../../assets/FieldContainer.css';import '../../assets/FieldGroupContainer.css';/* empty css                               */
/* empty css                          */
import "../layout/card/CardLayout.js";
import "@tanstack/react-table";
import "../grid/base/utils/ColumnConverter.js";
import { usePalmyraViewForm as e } from "./useHelpers/usePalmyraViewForm.js";
const x = (r) => {
  const o = r.storeFactory, { formRef: m } = e(r);
  return /* @__PURE__ */ t(i, { ref: m, storeFactory: o, children: r.children });
};
export {
  x as PalmyraViewForm
};
