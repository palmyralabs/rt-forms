import { jsx as n, Fragment as x, jsxs as p } from "react/jsx-runtime";
import { useRef as E, useState as V, useEffect as j } from "react";
import B from "react-accessible-treeview";
import M from "classnames";
import { A as U, I as F } from "../../chunks/index.js";
import { useNavigate as H } from "react-router-dom";
import { SimpleIconProvider as K } from "./IconProvider.js";
const y = "palmyra.rui.sidemenu.expanded", A = "palmyra.rui.sidemenu.expanded.selected";
function Q(h) {
  const d = H(), g = E(null);
  let m = { name: "", id: -1, parent: null, children: [], isBranch: !0 };
  const [s, b] = V({ data: [m], expandedIds: [], selectedId: [] }), w = h.store, l = E([]), C = (e, r, t) => e.map((c) => (c.id === r && !c.loaded && (c.loaded = !0, c.children = t.filter((o) => r == o.parent).map((o) => o.id)), c)).concat(t), T = (e) => e.split(",").map((t) => parseInt(t)), R = (e, r) => e && Array.isArray(e) ? e.map((a) => {
    const c = a.children || "";
    return {
      id: a.id,
      name: a.name,
      parent: a.parent ? a.parent : r,
      children: a.children ? T(a.children) : [],
      isBranch: c.length > 0,
      loaded: !0,
      metadata: {
        code: a.code,
        action: a.action,
        target: a.target
      }
    };
  }) : [];
  function I(e) {
    return typeof e == "number" ? e : parseInt(e);
  }
  j(() => {
    w.getRoot().then((e) => {
      var r = R(e.result, -1);
      const t = C(s.data, -1, r), a = (localStorage.getItem(y) || "").split(",");
      l.current = a.map((i) => I(i)).filter((i) => r.some((u) => u.id == i));
      const o = (localStorage.getItem(A) || "").split(",").map((i) => I(i)).filter((i) => r.some((u) => u.id == i));
      b({ data: t, expandedIds: l.current, selectedId: o });
    });
  }, []);
  const _ = () => {
    localStorage.setItem(y, l.current.join());
  }, D = (e) => {
    localStorage.setItem(A, e);
  }, L = (e) => {
    var r, t;
    if (!e.isBranch && ((r = e.metadata) != null && r.code)) {
      const a = e.metadata.code;
      d(a);
    } else if ((t = e.metadata) != null && t.target) {
      const a = e.metadata.target;
      d(a);
    }
  }, N = (e) => {
    l.current = l.current.filter((t) => t !== e), (s == null ? void 0 : s.data.filter((t) => t.parent === e)).forEach((t) => N(t.id));
  }, O = h.iconProvider || K;
  return /* @__PURE__ */ n(x, { children: /* @__PURE__ */ p("div", { className: "sidebar-asyn-menu", children: [
    /* @__PURE__ */ n(
      "div",
      {
        className: "visually-hidden",
        ref: g,
        role: "alert",
        "aria-live": "polite"
      }
    ),
    /* @__PURE__ */ n("div", { className: "checkbox", children: s.data.length > 1 && /* @__PURE__ */ n(
      B,
      {
        className: "async-tree-menu-container",
        data: s.data,
        "aria-label": "Checkbox tree",
        onExpand: (e) => {
          const r = e.isExpanded, t = e.element;
          r ? t.id !== "" && !l.current.includes(t.id) && l.current.push(t.id) : N(t.id), _();
        },
        onSelect: (e) => {
          const r = e.isSelected, t = e.element;
          r && !e.isHalfSelected && t.id !== "" && D(t.id);
        },
        propagateSelect: !1,
        togglableSelect: !0,
        multiSelect: !1,
        selectedIds: s.selectedId,
        expandedIds: s.expandedIds,
        propagateSelectUpwards: !0,
        nodeRenderer: ({
          element: e,
          isBranch: r,
          isExpanded: t,
          isSelected: a,
          isHalfSelected: c,
          getNodeProps: o,
          level: i,
          handleSelect: u,
          handleExpand: k
        }) => {
          const P = (f, S) => f && S.children.length === 0 ? /* @__PURE__ */ p(x, { children: [
            /* @__PURE__ */ p(
              "span",
              {
                role: "alert",
                "aria-live": "assertive",
                className: "visually-hidden",
                children: [
                  "loading ",
                  S.name
                ]
              }
            ),
            /* @__PURE__ */ n(
              U,
              {
                "aria-hidden": !0,
                className: "loading-icon"
              }
            )
          ] }) : /* @__PURE__ */ n(Y, { isOpen: f }), v = O.getIcon(e.metadata.code);
          return /* @__PURE__ */ n(
            "div",
            {
              ...o({ onClick: k }),
              style: { marginLeft: 5 * (i - 1) },
              children: /* @__PURE__ */ p(
                "div",
                {
                  className: a ? "async-tree-menu-selected-list" : "async-tree-menu-list",
                  onClick: (f) => {
                    a || u(f), L(e);
                  },
                  children: [
                    /* @__PURE__ */ p("div", { className: "async-tree-menu-list-text-container", children: [
                      /* @__PURE__ */ n("div", { className: "menu-icon", children: v && /* @__PURE__ */ n(v, {}) }),
                      /* @__PURE__ */ n("span", { className: "menu-name", children: e.name })
                    ] }),
                    /* @__PURE__ */ n("div", { className: "async-tree-menu-list-arrow-container", children: r && P(t, e) })
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
const Y = (h) => {
  const { isOpen: d, className: g } = h, m = "arrow", s = M(
    m,
    { [`${m}--closed`]: !d },
    { [`${m}--open`]: d },
    g
  );
  return /* @__PURE__ */ n(F, { className: s });
};
export {
  Q as default
};
