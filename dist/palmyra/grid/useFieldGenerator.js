import { jsx as l, jsxs as d } from "react/jsx-runtime";
const c = () => ({ getInvalidField: (e) => {
  const { fieldDef: t } = e;
  return /* @__PURE__ */ d("div", { children: [
    "invalid type " + t.type,
    " "
  ] });
}, getReactField: (e, t) => {
  const i = e.fieldDef;
  return /* @__PURE__ */ l(
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
