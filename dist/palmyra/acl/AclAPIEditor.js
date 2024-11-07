import { jsx as s, jsxs as o } from "react/jsx-runtime";
import { CheckBoxIcon as f } from "../menu/AsyncTreeMenuEditor.js";
import { forwardRef as k, useState as p, useEffect as v, useRef as N, useImperativeHandle as x } from "react";
import '../../assets/AclAPIEditor.css';const A = { color: "rgb(44, 134, 213)", backgroundColor: "white" }, E = k(function(c, l) {
  const [r, i] = p(c.data);
  v(() => {
    i(c.data);
  }, [c.data]);
  const u = l || N(null);
  x(u, () => ({
    getValue() {
      return r;
    }
  }), [r]);
  const h = (t, n, a) => {
    i((e) => (e[t].permissions[n].mask = a ? 1 : 0, [...e]));
  };
  return /* @__PURE__ */ s("div", { className: "apilist-container", children: r.map((t, n) => {
    var a;
    return /* @__PURE__ */ o("div", { children: [
      /* @__PURE__ */ s("h3", { children: t.className }),
      (a = t.permissions) == null ? void 0 : a.map((e, d) => {
        const m = e.mask > 0;
        return /* @__PURE__ */ o("div", { className: "child-list", children: [
          /* @__PURE__ */ s(
            f,
            {
              className: "checkbox-icon",
              onClick: () => h(n, d, !m),
              style: A,
              variant: m ? "all" : "none"
            }
          ),
          /* @__PURE__ */ o("p", { children: [
            e.code,
            " / ",
            e.operations
          ] })
        ] }, d);
      })
    ] }, t.className);
  }) });
});
export {
  E as AclAPIEditor
};
