import { jsx as a, Fragment as g, jsxs as m } from "react/jsx-runtime";
import { forwardRef as q, useRef as y, useState as C, useImperativeHandle as B, useEffect as P } from "react";
import { A as V, a as j } from "../../chunks/index.js";
import { F as $, a as G, b as H, A as U } from "../../chunks/AsyncTreeCrudDropDown.js";
import z from "react-accessible-treeview";
import J from "classnames";
import { ClickAwayListener as K } from "@mui/material";
const te = q(function(n, d) {
  const s = n.groupId, h = y(null), b = d || y(null);
  let w = { name: "", id: -1, parent: null, children: [], isBranch: !0 };
  const [p, I] = C([w]), [k, S] = C([]), A = n.storeFactory.getTreeStore({ endPointOptions: { groupId: s } }, n.endPoint);
  B(b, () => ({
    getValue() {
      return E();
    }
  }), [s, p, k]);
  const x = (r, c, e) => r.map((o) => (o.id === c && !o.loaded && (o.loaded = !0, o.children = e.filter((l) => c == l.parent).map((l) => l.id)), o)).concat(e), D = (r) => r.split(",").map((e) => parseInt(e)), O = (r, c) => r.map((t) => {
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
    A.getRoot().then((r) => {
      let c = r == null ? void 0 : r.result.filter((o) => o.mask == 2).map((o) => o.id);
      var e = O(r.result, -1);
      const t = x(p, -1, e);
      I(t), S(c);
    });
  }, [s]);
  const E = () => {
    const r = {}, c = {
      name: "root",
      children: [],
      id: -1
    };
    return p.forEach((e) => {
      var o, l, u;
      if (((o = e.metadata) == null ? void 0 : o.selected) == null)
        return;
      const t = e.parent > 0 ? e.parent : null;
      r[e.id] = {
        menuId: e.id,
        parent: t,
        name: e.name,
        mask: (l = e.metadata) == null ? void 0 : l.selected,
        menuCode: (u = e.metadata) == null ? void 0 : u.menuCode,
        children: []
      }, t == null && e.id > 0 && c.children.push(r[e.id]);
    }), p.forEach((e) => {
      const t = e.id, o = r[t];
      o && e.children && e.children.forEach((l) => {
        const u = r[l];
        u && o.children.push(u);
      });
    }), c;
  }, F = n.readOnly ? { color: "rgb( 230, 230, 230 )", backgroundColor: "white" } : { color: "rgb(44, 134, 213)", backgroundColor: "white" };
  return /* @__PURE__ */ a(g, { children: /* @__PURE__ */ m("div", { children: [
    /* @__PURE__ */ a(
      "div",
      {
        className: "visually-hidden",
        ref: h,
        role: "alert",
        "aria-live": "polite"
      }
    ),
    /* @__PURE__ */ a("div", { className: "checkbox", children: /* @__PURE__ */ a(
      z,
      {
        data: p,
        selectedIds: k,
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
          isHalfSelected: o,
          getNodeProps: l,
          level: u,
          handleSelect: R,
          handleExpand: T
        }) => {
          const N = o ? 1 : t ? 2 : 0;
          r.metadata ? r.metadata.selected = N : r.metadata = { selected: N };
          const L = (f, v) => f && v.children.length === 0 ? /* @__PURE__ */ m(g, { children: [
            /* @__PURE__ */ m(
              "span",
              {
                role: "alert",
                "aria-live": "assertive",
                className: "visually-hidden",
                children: [
                  "loading ",
                  v.name
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
          ] }) : /* @__PURE__ */ a(Q, { isOpen: f }), M = (f) => {
            n.readOnly || (R(f), f.stopPropagation);
          };
          return /* @__PURE__ */ m(
            "div",
            {
              ...l({ onClick: T }),
              children: [
                /* @__PURE__ */ a(
                  W,
                  {
                    className: "checkbox-icon",
                    onClick: M,
                    style: F,
                    variant: o ? "some" : t ? "all" : "none"
                  }
                ),
                /* @__PURE__ */ m("div", { className: "menu-list", children: [
                  /* @__PURE__ */ a("div", { className: "text-icon", children: /* @__PURE__ */ a("span", { className: "menu-name", children: r.name }) }),
                  /* @__PURE__ */ a("div", { children: c ? L(e, r) : /* @__PURE__ */ a(g, { children: n.fineGrained ? "" : /* @__PURE__ */ a(X, { element: r, isSelected: t }) }) })
                ] })
              ]
            }
          );
        }
      }
    ) })
  ] }) });
}), Q = (i) => {
  const { isOpen: n, className: d } = i, s = "arrow", h = J(
    s,
    { [`${s}--closed`]: !n },
    { [`${s}--open`]: n },
    d
  );
  return /* @__PURE__ */ a(j, { className: h });
}, W = ({ variant: i, ...n }) => {
  switch (i) {
    case "all":
      return /* @__PURE__ */ a(H, { style: { color: n.style.color, backgroundColor: n.style.backgroundColor }, ...n });
    case "none":
      return /* @__PURE__ */ a(
        G,
        {
          style: { color: "rgba(128, 128,128, 0.2)" },
          onClick: n.onClick,
          className: n.className
        }
      );
    case "some":
      return /* @__PURE__ */ a($, { style: { color: n.style.color, backgroundColor: n.style.backgroundColor }, ...n });
    default:
      return null;
  }
}, X = (i) => {
  const [n, d] = C(!1), s = () => {
    d(!n);
  }, h = () => {
  };
  return /* @__PURE__ */ a(g, { children: /* @__PURE__ */ m("div", { className: "crud-dropdown-container", children: [
    /* @__PURE__ */ a("span", { className: "crud-dropdown-text", onClick: s, children: "crud" }),
    n && /* @__PURE__ */ a(K, { onClickAway: () => {
      d(!1);
    }, children: /* @__PURE__ */ a("div", { children: /* @__PURE__ */ a(
      U,
      {
        isHalfSelected: i.isSelected,
        isSelected: i.isSelected,
        handleSelect: h
      }
    ) }) })
  ] }) });
};
export {
  te as AsyncTreeMenuEditor
};
