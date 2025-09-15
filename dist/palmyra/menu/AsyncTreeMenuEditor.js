import { jsx as a, Fragment as p, jsxs as h } from "react/jsx-runtime";
import { forwardRef as q, useRef as v, useState as k, useImperativeHandle as B, useEffect as P } from "react";
import { A as V, a as j } from "../../chunks/index.js";
import { F as $, c as G, b as U } from "../../chunks/index2.js";
import z from "react-accessible-treeview";
import H from "classnames";
const re = q(function(r, i) {
  const l = r.groupId, g = v(null), w = i || v(null);
  let y = { name: "", id: -1, parent: null, children: [], isBranch: !0 };
  const [u, I] = k([y]), [C, x] = k([]), O = r.storeFactory.getTreeStore({ endPointOptions: { groupId: l } }, r.endPoint);
  B(w, () => ({
    getValue() {
      return E();
    }
  }), [l, u, C]);
  const A = (n, c, e) => n.map((o) => (o.id === c && !o.loaded && (o.loaded = !0, o.children = e.filter((s) => c == s.parent).map((s) => s.id)), o)).concat(e), D = (n) => n.split(",").map((e) => parseInt(e)), S = (n, c) => n.map((t) => {
    const o = t.children || "";
    return {
      id: t.id,
      name: t.name,
      parent: t.parent ? t.parent : c,
      children: t.children ? D(t.children) : [],
      isBranch: o.length > 0,
      loaded: !0,
      metadata: { menuCode: t.code }
    };
  });
  P(() => {
    O.getRoot().then((n) => {
      let c = n?.result.filter((o) => o.mask == 2).map((o) => o.id);
      var e = S(n.result, -1);
      const t = A(u, -1, e);
      I(t), x(c);
    });
  }, [l]);
  const E = () => {
    const n = {}, c = {
      name: "root",
      children: [],
      id: -1
    };
    return u.forEach((e) => {
      if (e.metadata?.selected == null)
        return;
      const t = e.parent > 0 ? e.parent : null;
      n[e.id] = {
        menuId: e.id,
        parent: t,
        name: e.name,
        mask: e.metadata?.selected,
        menuCode: e.metadata?.menuCode,
        children: []
      }, t == null && e.id > 0 && c.children.push(n[e.id]);
    }), u.forEach((e) => {
      const t = e.id, o = n[t];
      o && e.children && e.children.forEach((s) => {
        const f = n[s];
        f && o.children.push(f);
      });
    }), c;
  }, F = r.readOnly ? { color: "rgb( 230, 230, 230 )", backgroundColor: "white" } : { color: "rgb(44, 134, 213)", backgroundColor: "white" };
  return /* @__PURE__ */ a(p, { children: /* @__PURE__ */ h("div", { children: [
    /* @__PURE__ */ a(
      "div",
      {
        className: "visually-hidden",
        ref: g,
        role: "alert",
        "aria-live": "polite"
      }
    ),
    /* @__PURE__ */ a("div", { className: "checkbox", children: /* @__PURE__ */ a(
      z,
      {
        data: u,
        selectedIds: C,
        "aria-label": "Checkbox tree",
        multiSelect: !0,
        propagateSelect: !0,
        togglableSelect: !0,
        propagateSelectUpwards: !0,
        nodeRenderer: ({
          element: n,
          isBranch: c,
          isExpanded: e,
          isSelected: t,
          isHalfSelected: o,
          getNodeProps: s,
          level: f,
          handleSelect: R,
          handleExpand: T
        }) => {
          const N = o ? 1 : t ? 2 : 0;
          n.metadata ? n.metadata.selected = N : n.metadata = { selected: N };
          const L = (m, b) => m && b.children.length === 0 ? /* @__PURE__ */ h(p, { children: [
            /* @__PURE__ */ h(
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
            /* @__PURE__ */ a(
              V,
              {
                "aria-hidden": !0,
                className: "loading-icon"
              }
            )
          ] }) : /* @__PURE__ */ a(J, { isOpen: m }), M = (m) => {
            r.readOnly || (R(m), m.stopPropagation);
          };
          return /* @__PURE__ */ h(
            "div",
            {
              ...s({ onClick: T }),
              children: [
                /* @__PURE__ */ a(
                  K,
                  {
                    className: "checkbox-icon",
                    onClick: M,
                    style: F,
                    variant: o ? "some" : t ? "all" : "none"
                  }
                ),
                /* @__PURE__ */ h("div", { className: "menu-list", children: [
                  /* @__PURE__ */ a("div", { className: "text-icon", children: /* @__PURE__ */ a("span", { className: "menu-name", children: n.name }) }),
                  /* @__PURE__ */ a("div", { children: c ? L(e, n) : /* @__PURE__ */ a(p, { children: r.fineGrained ? "" : /* @__PURE__ */ a(Q, { element: n, isSelected: t }) }) })
                ] })
              ]
            }
          );
        }
      }
    ) })
  ] }) });
}), J = (d) => {
  const { isOpen: r, className: i } = d, l = "arrow", g = H(
    l,
    { [`${l}--closed`]: !r },
    { [`${l}--open`]: r },
    i
  );
  return /* @__PURE__ */ a(j, { className: g });
}, K = ({ variant: d, ...r }) => {
  switch (d) {
    case "all":
      return /* @__PURE__ */ a(U, { style: { color: r.style.color, backgroundColor: r.style.backgroundColor }, ...r });
    case "none":
      return /* @__PURE__ */ a(
        G,
        {
          style: { color: "rgba(128, 128,128, 0.2)" },
          onClick: r.onClick,
          className: r.className
        }
      );
    case "some":
      return /* @__PURE__ */ a($, { style: { color: r.style.color, backgroundColor: r.style.backgroundColor }, ...r });
    default:
      return null;
  }
}, Q = (d) => {
  const [r, i] = k(!1);
  return /* @__PURE__ */ a(p, { children: /* @__PURE__ */ a("div", { className: "crud-dropdown-container", children: /* @__PURE__ */ a("span", { className: "crud-dropdown-text", onClick: () => {
    i(!r);
  }, children: "crud - under construction" }) }) });
};
export {
  re as AsyncTreeMenuEditor,
  K as CheckBoxIcon
};
