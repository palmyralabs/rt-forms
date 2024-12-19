import { jsx as n, Fragment as v, jsxs as p } from "react/jsx-runtime";
import { useRef as N, useState as P, useEffect as V } from "react";
import j from "react-accessible-treeview";
import B from "classnames";
import { A as M, I as U } from "../../chunks/index.js";
import { useNavigate as F } from "react-router-dom";
import { SimpleIconProvider as H } from "./IconProvider.js";
const E = "palmyra.rui.sidemenu.expanded", y = "palmyra.rui.sidemenu.expanded.selected";
function Q(f) {
  const o = F(), g = N(null);
  let m = { name: "", id: -1, parent: null, children: [], isBranch: !0 };
  const [i, A] = P({ data: [m], expandedIds: [], selectedId: [] }), b = f.store, l = N([]), w = (e, r, a) => e.map((s) => (s.id === r && !s.loaded && (s.loaded = !0, s.children = a.filter((d) => r == d.parent).map((d) => d.id)), s)).concat(a), T = (e) => e.split(",").map((a) => parseInt(a)), C = (e, r) => e && Array.isArray(e) ? e.map((t) => {
    const s = t.children || "";
    return {
      id: t.id,
      name: t.name,
      parent: t.parent ? t.parent : r,
      children: t.children ? T(t.children) : [],
      isBranch: s.length > 0,
      loaded: !0,
      metadata: {
        code: t.code,
        action: t.action,
        target: t.target
      }
    };
  }) : [];
  function I(e) {
    return typeof e == "number" ? e : parseInt(e);
  }
  V(() => {
    b.getRoot().then((e) => {
      var r = C(e.result, -1);
      const a = w(i.data, -1, r), t = (localStorage.getItem(E) || "").split(",");
      l.current = t.map((c) => I(c)).filter((c) => r.some((u) => u.id == c));
      const d = (localStorage.getItem(y) || "").split(",").map((c) => I(c)).filter((c) => r.some((u) => u.id == c));
      A({ data: a, expandedIds: l.current, selectedId: d });
    });
  }, []);
  const O = () => {
    localStorage.setItem(E, l.current.join());
  }, R = (e) => {
    localStorage.setItem(y, e);
  }, _ = (e) => {
    var r, a;
    if (!e.isBranch && ((r = e.metadata) != null && r.code)) {
      const t = e.metadata.code;
      o(t);
    } else if ((a = e.metadata) != null && a.target) {
      const t = e.metadata.target;
      o(t);
    }
  }, D = f.iconProvider || H;
  return /* @__PURE__ */ n(v, { children: /* @__PURE__ */ p("div", { className: "sidebar-asyn-menu", children: [
    /* @__PURE__ */ n(
      "div",
      {
        className: "visually-hidden",
        ref: g,
        role: "alert",
        "aria-live": "polite"
      }
    ),
    /* @__PURE__ */ n("div", { className: "checkbox", children: i.data.length > 1 && /* @__PURE__ */ n(
      j,
      {
        className: "async-tree-menu-container",
        data: i.data,
        "aria-label": "Checkbox tree",
        onExpand: (e) => {
          const r = e.isExpanded, a = e.element;
          if (r)
            a.id != "" && (l.current.includes(a.id) || l.current.push(a.id));
          else {
            const t = l.current.indexOf(a.id);
            t > -1 && l.current.splice(t, 1);
          }
          O();
        },
        onSelect: (e) => {
          const r = e.isSelected, a = e.element;
          r && !e.isHalfSelected && a.id !== "" && R(a.id);
        },
        propagateSelect: !1,
        togglableSelect: !0,
        multiSelect: !1,
        selectedIds: i.selectedId,
        expandedIds: i.expandedIds,
        propagateSelectUpwards: !0,
        nodeRenderer: ({
          element: e,
          isBranch: r,
          isExpanded: a,
          isSelected: t,
          isHalfSelected: s,
          getNodeProps: d,
          level: c,
          handleSelect: u,
          handleExpand: L
        }) => {
          const k = (h, S) => h && S.children.length === 0 ? /* @__PURE__ */ p(v, { children: [
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
              M,
              {
                "aria-hidden": !0,
                className: "loading-icon"
              }
            )
          ] }) : /* @__PURE__ */ n(K, { isOpen: h }), x = D.getIcon(e.metadata.code);
          return /* @__PURE__ */ n(
            "div",
            {
              ...d({ onClick: L }),
              style: { marginLeft: 5 * (c - 1) },
              children: /* @__PURE__ */ p(
                "div",
                {
                  className: t ? "async-tree-menu-selected-list" : "async-tree-menu-list",
                  onClick: (h) => {
                    t || u(h), _(e);
                  },
                  children: [
                    /* @__PURE__ */ p("div", { className: "async-tree-menu-list-text-container", children: [
                      /* @__PURE__ */ n("div", { className: "menu-icon", children: x && /* @__PURE__ */ n(x, {}) }),
                      /* @__PURE__ */ n("span", { className: "menu-name", children: e.name })
                    ] }),
                    /* @__PURE__ */ n("div", { className: "async-tree-menu-list-arrow-container", children: r && k(a, e) })
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
const K = (f) => {
  const { isOpen: o, className: g } = f, m = "arrow", i = B(
    m,
    { [`${m}--closed`]: !o },
    { [`${m}--open`]: o },
    g
  );
  return /* @__PURE__ */ n(U, { className: i });
};
export {
  Q as default
};
