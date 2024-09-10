import { jsxs as l, jsx as d } from "react/jsx-runtime";
const c = () => ({ getInvalidField: (e) => {
  const { fieldDef: t } = e;
  return /* @__PURE__ */ l("div", { children: [
    "invalid type " + t.type,
    " "
  ] });
}, getReactField: (e, t) => {
  const i = e.fieldDef;
  return /* @__PURE__ */ d(
    t,
    {
      ...i,
      label: e.title
    },
    i.title + i.attribute
  );
} });
export {
  c as useFieldGenrator
};
