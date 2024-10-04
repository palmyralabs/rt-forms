import { jsx as i } from "react/jsx-runtime";
import { useEffect as e } from "react";
import "./formContext.js";
import { PalmyraForm as f } from "./PalmyraForm.js";
import "@palmyralabs/ts-predicates";
import "../../chunks/NoopConverter.js";
import "dayjs";
import '../../assets/CardLayout.css';import '../../assets/FieldContainer.css';import '../../assets/FieldGroupContainer.css';/* empty css                            */
/* empty css                               */
/* empty css                          */
/* empty css                      */
import "@tanstack/react-table";
import "../grid/base/utils/ColumnConverter.js";
import "../grid/utils/FormatterFactory.js";
import { usePalmyraViewForm as p } from "./useHelpers/usePalmyraViewForm.js";
const E = (r) => {
  const o = r.storeFactory, { formRef: m, refresh: t } = p(r);
  return e(() => {
    t();
  }, [r.endPoint]), /* @__PURE__ */ i(f, { ref: m, storeFactory: o, children: r.children });
};
export {
  E as PalmyraViewForm
};
