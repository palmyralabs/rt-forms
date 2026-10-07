import { jsx as n, Fragment as y, jsxs as p } from "react/jsx-runtime";
import { useRef as A, useState as B, useEffect as M } from "react";
import U from "react-accessible-treeview";
import F from "classnames";
import "../../chunks/iconBase.js";
import { useNavigate as H } from "react-router-dom";
import { A as K, a as Y } from "../../chunks/index.js";
import { SimpleIconProvider as $ } from "./IconProvider.js";
const b = "palmyra.rui.sidemenu.expanded", w = "palmyra.rui.sidemenu.expanded.selected";
function te(d) {
  const m = H(), f = A(null);
  let g = { name: "", id: -1, parent: null, children: [], isBranch: !0 };
  const [s, I] = B({ data: [g], expandedIds: [], selectedId: [] }), C = d.store, o = A([]), T = (e, a, t) => e.map((c) => (c.id === a && !c.loaded && (c.loaded = !0, c.children = t.filter((l) => a == l.parent).map((l) => l.id)), c)).concat(t), L = (e) => e.split(",").map((t) => parseInt(t)), R = (e, a) => e && Array.isArray(e) ? e.map((r) => {
    const c = r.children || "";
    return {
      id: r.id,
      name: r.name,
      parent: r.parent ? r.parent : a,
      children: r.children ? L(r.children) : [],
      isBranch: c.length > 0,
      loaded: !0,
      metadata: {
        code: r.code,
        action: r.action,
        target: r.target
      }
    };
  }) : [];
  function N(e) {
    return typeof e == "number" ? e : parseInt(e);
  }
  M(() => {
    C.getRoot().then((e) => {
      var a = R(e.result, -1);
      const t = T(s.data, -1, a), r = (localStorage.getItem(b) || "").split(",");
      o.current = r.map((i) => N(i)).filter((i) => a.some((u) => u.id == i));
      const l = (localStorage.getItem(w) || "").split(",").map((i) => N(i)).filter((i) => a.some((u) => u.id == i));
      I({ data: t, expandedIds: o.current, selectedId: l });
    });
  }, []);
  const _ = () => {
    localStorage.setItem(b, o.current.join());
  }, D = (e) => {
    localStorage.setItem(w, e);
  }, O = (e) => {
    if (!e.isBranch && e.metadata?.code) {
      const a = e.metadata.code;
      m(a);
    } else if (e.metadata?.target) {
      const a = e.metadata.target;
      m(a);
    }
  }, v = (e) => {
    o.current = o.current.filter((t) => t !== e), (s?.data.filter((t) => t.parent === e)).forEach((t) => v(t.id));
  }, k = d.iconProvider || $, S = d.icons, P = S?.loading || K;
  return /* @__PURE__ */ n(y, { children: /* @__PURE__ */ p("div", { className: "sidebar-asyn-menu", children: [
    /* @__PURE__ */ n(
      "div",
      {
        className: "visually-hidden",
        ref: f,
        role: "alert",
        "aria-live": "polite"
      }
    ),
    /* @__PURE__ */ n("div", { className: "checkbox", children: s.data.length > 1 && /* @__PURE__ */ n(
      U,
      {
        className: "async-tree-menu-container",
        data: s.data,
        "aria-label": "Checkbox tree",
        onExpand: (e) => {
          const a = e.isExpanded, t = e.element;
          a ? t.id !== "" && !o.current.includes(t.id) && o.current.push(t.id) : v(t.id), _();
        },
        onSelect: (e) => {
          const a = e.isSelected, t = e.element;
          a && !e.isHalfSelected && t.id !== "" && D(t.id);
        },
        propagateSelect: !1,
        togglableSelect: !0,
        multiSelect: !1,
        selectedIds: s.selectedId,
        expandedIds: s.expandedIds,
        propagateSelectUpwards: !0,
        nodeRenderer: ({
          element: e,
          isBranch: a,
          isExpanded: t,
          isSelected: r,
          isHalfSelected: c,
          getNodeProps: l,
          level: i,
          handleSelect: u,
          handleExpand: V
        }) => {
          const j = (h, E) => h && E.children.length === 0 ? /* @__PURE__ */ p(y, { children: [
            /* @__PURE__ */ p(
              "span",
              {
                role: "alert",
                "aria-live": "assertive",
                className: "visually-hidden",
                children: [
                  "loading ",
                  E.name
                ]
              }
            ),
            /* @__PURE__ */ n(
              P,
              {
                "aria-hidden": !0,
                className: "loading-icon"
              }
            )
          ] }) : /* @__PURE__ */ n(W, { isOpen: h, icon: S?.arrow }), x = k.getIcon(e.metadata.code);
          return /* @__PURE__ */ n(
            "div",
            {
              ...l({ onClick: V }),
              style: { marginLeft: 5 * (i - 1) },
              children: /* @__PURE__ */ p(
                "div",
                {
                  className: r ? "async-tree-menu-selected-list" : "async-tree-menu-list",
                  onClick: (h) => {
                    r || u(h), O(e);
                  },
                  children: [
                    /* @__PURE__ */ p("div", { className: "async-tree-menu-list-text-container", children: [
                      /* @__PURE__ */ n("div", { className: "menu-icon", children: x && /* @__PURE__ */ n(x, {}) }),
                      /* @__PURE__ */ n("span", { className: "menu-name", children: e.name })
                    ] }),
                    /* @__PURE__ */ n("div", { className: "async-tree-menu-list-arrow-container", children: a && j(t, e) })
                  ]
                }
              )
            }
          );
        }
      }
    ) })
  ] }) });
}
const W = (d) => {
  const { isOpen: m, className: f } = d, g = d.icon || Y, s = "arrow", I = F(
    s,
    { [`${s}--closed`]: !m },
    { [`${s}--open`]: m },
    f
  );
  return /* @__PURE__ */ n(g, { className: I });
};
export {
  te as default
};
