import { jsx as l, jsxs as c } from "react/jsx-runtime";
import { CheckBoxIcon as f } from "../menu/AsyncTreeMenuEditor.js";
import { forwardRef as p, useState as k, useEffect as N, useRef as v, useImperativeHandle as x } from "react";
import '../../assets/AclAPIEditor.css';const A = { color: "rgb(44, 134, 213)", backgroundColor: "white" }, E = p(function(s, o) {
  const [n, i] = k(s.data);
  N(() => {
    i(s.data);
  }, [s.data]);
  const u = o || v(null);
  x(u, () => ({
    getValue() {
      return n;
    }
  }), [n]);
  const h = (a, r, t) => {
    i((e) => (e[a].permissions[r].mask = t ? 1 : 0, [...e]));
  };
  return /* @__PURE__ */ l("div", { className: "apilist-container", children: n.map((a, r) => {
    var t;
    return /* @__PURE__ */ c("div", { className: "parent-list", children: [
      /* @__PURE__ */ l("h3", { children: a.className }),
      (t = a.permissions) == null ? void 0 : t.map((e, m) => {
        const d = e.mask > 0;
        return /* @__PURE__ */ c("div", { className: "child-list", children: [
          /* @__PURE__ */ l(
            f,
            {
              className: "checkbox-icon",
              onClick: () => h(r, m, !d),
              style: A,
              variant: d ? "all" : "none"
            }
          ),
          /* @__PURE__ */ c("span", { children: [
            e.code,
            " ",
            /* @__PURE__ */ c("span", { className: "operation-text", children: [
              "(",
              e.name,
              ")"
            ] })
          ] })
        ] }, m);
      })
    ] }, a.className);
  }) });
});
export {
  E as AclAPIEditor
};
