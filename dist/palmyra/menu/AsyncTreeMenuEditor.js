import { jsx as a, Fragment as f, jsxs as h } from "react/jsx-runtime";
import { forwardRef as V, useRef as x, useState as I, useImperativeHandle as j, useEffect as F } from "react";
import { A as $, I as G } from "../../chunks/index.js";
import U from "react-accessible-treeview";
import q from "classnames";
import "../../chunks/iconBase.js";
import { C as z } from "../../chunks/CheckBoxIcon.js";
const ee = V(function(o, s) {
  const l = o.groupId, d = x(null), g = s || x(null);
  let O = { name: "", id: -1, parent: null, children: [], isBranch: !0 };
  const [u, y] = I([O]), [w, b] = I([]), A = o.storeFactory.getTreeStore({ endPointOptions: { groupId: l } }, o.endPoint);
  j(g, () => ({
    getValue() {
      return R();
    }
  }), [l, u, w]);
  const D = (n, c, e) => n.map((r) => (r.id === c && !r.loaded && (r.loaded = !0, r.children = e.filter((i) => c == i.parent).map((i) => i.id)), r)).concat(e), E = (n) => n.split(",").map((e) => parseInt(e)), L = (n, c) => n.map((t) => {
    const r = t.children || "";
    return {
      id: t.id,
      name: t.name,
      parent: t.parent ? t.parent : c,
      children: t.children ? E(t.children) : [],
      isBranch: r.length > 0,
      loaded: !0,
      metadata: { menuCode: t.code }
    };
  });
  F(() => {
    A.getRoot().then((n) => {
      let c = n?.result.filter((r) => r.mask == 2).map((r) => r.id);
      var e = L(n.result, -1);
      const t = D(u, -1, e);
      y(t), b(c);
    });
  }, [l]);
  const R = () => {
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
      const t = e.id, r = n[t];
      r && e.children && e.children.forEach((i) => {
        const N = n[i];
        N && r.children.push(N);
      });
    }), c;
  }, v = o.icons, T = v?.loading || $;
  return /* @__PURE__ */ a(f, { children: /* @__PURE__ */ h("div", { children: [
    /* @__PURE__ */ a(
      "div",
      {
        className: "visually-hidden",
        ref: d,
        role: "alert",
        "aria-live": "polite"
      }
    ),
    /* @__PURE__ */ a("div", { className: "checkbox", children: /* @__PURE__ */ a(
      U,
      {
        data: u,
        selectedIds: w,
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
          isHalfSelected: r,
          getNodeProps: i,
          level: N,
          handleSelect: S,
          handleExpand: B
        }) => {
          const C = r ? 1 : t ? 2 : 0;
          n.metadata ? n.metadata.selected = C : n.metadata = { selected: C };
          const M = (m, k) => m && k.children.length === 0 ? /* @__PURE__ */ h(f, { children: [
            /* @__PURE__ */ h(
              "span",
              {
                role: "alert",
                "aria-live": "assertive",
                className: "visually-hidden",
                children: [
                  "loading ",
                  k.name
                ]
              }
            ),
            /* @__PURE__ */ a(
              T,
              {
                "aria-hidden": !0,
                className: "loading-icon"
              }
            )
          ] }) : /* @__PURE__ */ a(H, { isOpen: m, icon: v?.arrow }), P = (m) => {
            o.readOnly || (S(m), m.stopPropagation);
          };
          return /* @__PURE__ */ h(
            "div",
            {
              ...i({ onClick: B }),
              children: [
                /* @__PURE__ */ a(
                  z,
                  {
                    className: "checkbox-icon",
                    onClick: P,
                    icons: v,
                    readOnly: o.readOnly,
                    variant: r ? "some" : t ? "all" : "none"
                  }
                ),
                /* @__PURE__ */ h("div", { className: "menu-list", children: [
                  /* @__PURE__ */ a("div", { className: "text-icon", children: /* @__PURE__ */ a("span", { className: "menu-name", children: n.name }) }),
                  /* @__PURE__ */ a("div", { children: c ? M(e, n) : /* @__PURE__ */ a(f, { children: o.fineGrained ? "" : /* @__PURE__ */ a(J, { element: n, isSelected: t }) }) })
                ] })
              ]
            }
          );
        }
      }
    ) })
  ] }) });
}), H = (p) => {
  const { isOpen: o, className: s } = p, l = p.icon || G, d = "arrow", g = q(
    d,
    { [`${d}--closed`]: !o },
    { [`${d}--open`]: o },
    s
  );
  return /* @__PURE__ */ a(l, { className: g });
}, J = (p) => {
  const [o, s] = I(!1);
  return /* @__PURE__ */ a(f, { children: /* @__PURE__ */ a("div", { className: "crud-dropdown-container", children: /* @__PURE__ */ a("span", { className: "crud-dropdown-text", onClick: () => {
    s(!o);
  }, children: "crud - under construction" }) }) });
};
export {
  ee as AsyncTreeMenuEditor,
  z as CheckBoxIcon
};
