import { jsx as o, Fragment as g, jsxs as p } from "react/jsx-runtime";
import { forwardRef as q, useRef as v, useState as k, useImperativeHandle as B, useEffect as P } from "react";
import { A as V, a as j } from "../../chunks/index.js";
import { F as $, c as G, b as U } from "../../chunks/index2.js";
import z from "react-accessible-treeview";
import H from "classnames";
const re = q(function(n, i) {
  const s = n.groupId, f = v(null), w = i || v(null);
  let y = { name: "", id: -1, parent: null, children: [], isBranch: !0 };
  const [m, I] = k([y]), [C, x] = k([]), O = n.storeFactory.getTreeStore({ endPointOptions: { groupId: s } }, n.endPoint);
  B(w, () => ({
    getValue() {
      return E();
    }
  }), [s, m, C]);
  const A = (r, c, e) => r.map((a) => (a.id === c && !a.loaded && (a.loaded = !0, a.children = e.filter((l) => c == l.parent).map((l) => l.id)), a)).concat(e), D = (r) => r.split(",").map((e) => parseInt(e)), S = (r, c) => r.map((t) => {
    const a = t.children || "";
    return {
      id: t.id,
      name: t.name,
      parent: t.parent ? t.parent : c,
      children: t.children ? D(t.children) : [],
      isBranch: a.length > 0,
      loaded: !0,
      metadata: { menuCode: t.code }
    };
  });
  P(() => {
    O.getRoot().then((r) => {
      let c = r == null ? void 0 : r.result.filter((a) => a.mask == 2).map((a) => a.id);
      var e = S(r.result, -1);
      const t = A(m, -1, e);
      I(t), x(c);
    });
  }, [s]);
  const E = () => {
    const r = {}, c = {
      name: "root",
      children: [],
      id: -1
    };
    return m.forEach((e) => {
      var a, l, d;
      if (((a = e.metadata) == null ? void 0 : a.selected) == null)
        return;
      const t = e.parent > 0 ? e.parent : null;
      r[e.id] = {
        menuId: e.id,
        parent: t,
        name: e.name,
        mask: (l = e.metadata) == null ? void 0 : l.selected,
        menuCode: (d = e.metadata) == null ? void 0 : d.menuCode,
        children: []
      }, t == null && e.id > 0 && c.children.push(r[e.id]);
    }), m.forEach((e) => {
      const t = e.id, a = r[t];
      a && e.children && e.children.forEach((l) => {
        const d = r[l];
        d && a.children.push(d);
      });
    }), c;
  }, F = n.readOnly ? { color: "rgb( 230, 230, 230 )", backgroundColor: "white" } : { color: "rgb(44, 134, 213)", backgroundColor: "white" };
  return /* @__PURE__ */ o(g, { children: /* @__PURE__ */ p("div", { children: [
    /* @__PURE__ */ o(
      "div",
      {
        className: "visually-hidden",
        ref: f,
        role: "alert",
        "aria-live": "polite"
      }
    ),
    /* @__PURE__ */ o("div", { className: "checkbox", children: /* @__PURE__ */ o(
      z,
      {
        data: m,
        selectedIds: C,
        "aria-label": "Checkbox tree",
        multiSelect: !0,
        propagateSelect: !0,
        togglableSelect: !0,
        propagateSelectUpwards: !0,
        nodeRenderer: ({
          element: r,
          isBranch: c,
          isExpanded: e,
          isSelected: t,
          isHalfSelected: a,
          getNodeProps: l,
          level: d,
          handleSelect: R,
          handleExpand: T
        }) => {
          const N = a ? 1 : t ? 2 : 0;
          r.metadata ? r.metadata.selected = N : r.metadata = { selected: N };
          const L = (h, b) => h && b.children.length === 0 ? /* @__PURE__ */ p(g, { children: [
            /* @__PURE__ */ p(
              "span",
              {
                role: "alert",
                "aria-live": "assertive",
                className: "visually-hidden",
                children: [
                  "loading ",
                  b.name
                ]
              }
            ),
            /* @__PURE__ */ o(
              V,
              {
                "aria-hidden": !0,
                className: "loading-icon"
              }
            )
          ] }) : /* @__PURE__ */ o(J, { isOpen: h }), M = (h) => {
            n.readOnly || (R(h), h.stopPropagation);
          };
          return /* @__PURE__ */ p(
            "div",
            {
              ...l({ onClick: T }),
              children: [
                /* @__PURE__ */ o(
                  K,
                  {
                    className: "checkbox-icon",
                    onClick: M,
                    style: F,
                    variant: a ? "some" : t ? "all" : "none"
                  }
                ),
                /* @__PURE__ */ p("div", { className: "menu-list", children: [
                  /* @__PURE__ */ o("div", { className: "text-icon", children: /* @__PURE__ */ o("span", { className: "menu-name", children: r.name }) }),
                  /* @__PURE__ */ o("div", { children: c ? L(e, r) : /* @__PURE__ */ o(g, { children: n.fineGrained ? "" : /* @__PURE__ */ o(Q, { element: r, isSelected: t }) }) })
                ] })
              ]
            }
          );
        }
      }
    ) })
  ] }) });
}), J = (u) => {
  const { isOpen: n, className: i } = u, s = "arrow", f = H(
    s,
    { [`${s}--closed`]: !n },
    { [`${s}--open`]: n },
    i
  );
  return /* @__PURE__ */ o(j, { className: f });
}, K = ({ variant: u, ...n }) => {
  switch (u) {
    case "all":
      return /* @__PURE__ */ o(U, { style: { color: n.style.color, backgroundColor: n.style.backgroundColor }, ...n });
    case "none":
      return /* @__PURE__ */ o(
        G,
        {
          style: { color: "rgba(128, 128,128, 0.2)" },
          onClick: n.onClick,
          className: n.className
        }
      );
    case "some":
      return /* @__PURE__ */ o($, { style: { color: n.style.color, backgroundColor: n.style.backgroundColor }, ...n });
    default:
      return null;
  }
}, Q = (u) => {
  const [n, i] = k(!1);
  return /* @__PURE__ */ o(g, { children: /* @__PURE__ */ o("div", { className: "crud-dropdown-container", children: /* @__PURE__ */ o("span", { className: "crud-dropdown-text", onClick: () => {
    i(!n);
  }, children: "crud - under construction" }) }) });
};
export {
  re as AsyncTreeMenuEditor
};
