import { jsx as n, Fragment as v, jsxs as c } from "react/jsx-runtime";
import { C as k } from "../../chunks/CheckBoxIcon.js";
import { forwardRef as C, useState as N, useEffect as m, useRef as x, useImperativeHandle as p } from "react";
import w, { ResponsiveMasonry as E } from "react-responsive-masonry";
import '../../assets/AclAPIEditor.css';const z = C(function(t, l) {
  const [a, i] = N(t.data);
  m(() => {
    i(t.data);
  }, [t.data]);
  const u = l || x(null);
  p(u, () => ({
    getValue() {
      return a;
    }
  }), [a]);
  const h = (e, o, s) => {
    i((r) => (r[e].permissions[o].mask = s ? 1 : 0, [...r]));
  };
  m(() => {
    const e = () => i([...a]);
    return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
  }, [a]);
  const f = { 450: 1, 750: 2, 900: 2, 1200: 3, 2e3: 5 };
  return /* @__PURE__ */ n(v, { children: /* @__PURE__ */ n(
    E,
    {
      columnsCountBreakPoints: t.columnsCountBreakPoints || f,
      children: /* @__PURE__ */ n(w, { gutter: t.gutter || "10px", children: a.map((e, o) => /* @__PURE__ */ c("div", { className: "parent-list", children: [
        /* @__PURE__ */ n("h3", { children: e.className }),
        e.permissions?.map((s, r) => {
          const d = s.mask > 0;
          return /* @__PURE__ */ c("div", { className: "child-list", children: [
            /* @__PURE__ */ n("div", { children: /* @__PURE__ */ n(
              k,
              {
                className: "checkbox-icon",
                onClick: () => h(o, r, !d),
                icons: t.icons,
                variant: d ? "all" : "none"
              }
            ) }),
            /* @__PURE__ */ c("div", { className: "api-label-field", children: [
              /* @__PURE__ */ c("span", { className: "operation-name-text", children: [
                " ",
                s.name
              ] }),
              /* @__PURE__ */ c("span", { className: "operation-code-text", children: [
                "(",
                s.code,
                ")"
              ] })
            ] })
          ] }, r);
        })
      ] }, e.className)) })
    }
  ) });
});
export {
  z as AclAPIEditor
};
