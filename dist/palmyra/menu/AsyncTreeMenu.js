import { jsx as i, Fragment as v, jsxs as u } from "react/jsx-runtime";
import { useRef as x, useState as P, useEffect as j } from "react";
import B from "react-accessible-treeview";
import M from "classnames";
import { A as U, I as F } from "../../chunks/index.js";
import { useNavigate as H, useLocation as K } from "react-router-dom";
import { SimpleIconProvider as V } from "./IconProvider.js";
const E = "palmyra.rui.sidemenu.expanded", Y = "palmyra.rui.sidemenu.expanded.selected";
function Z(p) {
  const l = H(), h = K(), m = x(null);
  let g = { name: "", id: -1, parent: null, children: [], isBranch: !0 };
  const [d, S] = P({ data: [g], expandedIds: [], selectedId: [] }), y = p.store, o = x([]), A = (e, r, a) => e.map((s) => (s.id === r && !s.loaded && (s.loaded = !0, s.children = a.filter((n) => r == n.parent).map((n) => n.id)), s)).concat(a), b = (e) => e.split(",").map((a) => parseInt(a)), w = (e, r) => e && Array.isArray(e) ? e.map((t) => {
    const s = t.children || "";
    return {
      id: t.id,
      name: t.name,
      parent: t.parent ? t.parent : r,
      children: t.children ? b(t.children) : [],
      isBranch: s.length > 0,
      loaded: !0,
      metadata: {
        code: t.code,
        action: t.action,
        target: t.target
      }
    };
  }) : [];
  function C(e) {
    return typeof e == "number" ? e : parseInt(e);
  }
  j(() => {
    y.getRoot().then((e) => {
      var r = w(e.result, -1);
      const a = A(d.data, -1, r), t = (localStorage.getItem(E) || "").split(",");
      o.current = t.map((n) => C(n)).filter((n) => r.some((c) => c.id == n));
      const s = r.filter((n) => {
        var c;
        return ((c = n.metadata) == null ? void 0 : c.target) === h.pathname;
      }).map((n) => n.id);
      S({ data: a, expandedIds: o.current, selectedId: s });
    });
  }, [h.pathname]);
  const T = () => {
    localStorage.setItem(E, o.current.join());
  }, L = (e) => {
    localStorage.setItem(Y, e);
  }, R = (e) => {
    var r, a;
    if (!e.isBranch && ((r = e.metadata) != null && r.code)) {
      const t = e.metadata.code;
      l(t);
    } else if ((a = e.metadata) != null && a.target) {
      const t = e.metadata.target;
      l(t);
    }
  }, _ = p.iconProvider || V;
  return /* @__PURE__ */ i(v, { children: /* @__PURE__ */ u("div", { className: "sidebar-asyn-menu", children: [
    /* @__PURE__ */ i(
      "div",
      {
        className: "visually-hidden",
        ref: m,
        role: "alert",
        "aria-live": "polite"
      }
    ),
    /* @__PURE__ */ i("div", { className: "checkbox", children: d.data.length > 1 && /* @__PURE__ */ i(
      B,
      {
        className: "async-tree-menu-container",
        data: d.data,
        "aria-label": "Checkbox tree",
        onExpand: (e) => {
          const r = e.isExpanded, a = e.element;
          if (r)
            a.id !== "" && !o.current.includes(a.id) && o.current.push(a.id);
          else {
            const t = (s) => {
              o.current = o.current.filter((c) => c !== s), (d == null ? void 0 : d.data.filter((c) => c.parent === s)).forEach((c) => t(c.id));
            };
            t(a.id);
          }
          T();
        },
        onSelect: (e) => {
          const r = e.isSelected, a = e.element;
          r && !e.isHalfSelected && a.id !== "" && L(a.id);
        },
        propagateSelect: !1,
        togglableSelect: !0,
        multiSelect: !1,
        selectedIds: d.selectedId,
        expandedIds: d.expandedIds,
        propagateSelectUpwards: !0,
        nodeRenderer: ({
          element: e,
          isBranch: r,
          isExpanded: a,
          isSelected: t,
          isHalfSelected: s,
          getNodeProps: n,
          level: c,
          handleSelect: D,
          handleExpand: O
        }) => {
          const k = (f, N) => f && N.children.length === 0 ? /* @__PURE__ */ u(v, { children: [
            /* @__PURE__ */ u(
              "span",
              {
                role: "alert",
                "aria-live": "assertive",
                className: "visually-hidden",
                children: [
                  "loading ",
                  N.name
                ]
              }
            ),
            /* @__PURE__ */ i(
              U,
              {
                "aria-hidden": !0,
                className: "loading-icon"
              }
            )
          ] }) : /* @__PURE__ */ i($, { isOpen: f }), I = _.getIcon(e.metadata.code);
          return /* @__PURE__ */ i(
            "div",
            {
              ...n({ onClick: O }),
              style: { marginLeft: 5 * (c - 1) },
              children: /* @__PURE__ */ u(
                "div",
                {
                  className: t ? "async-tree-menu-selected-list" : "async-tree-menu-list",
                  onClick: (f) => {
                    t || D(f), R(e);
                  },
                  children: [
                    /* @__PURE__ */ u("div", { className: "async-tree-menu-list-text-container", children: [
                      /* @__PURE__ */ i("div", { className: "menu-icon", children: I && /* @__PURE__ */ i(I, {}) }),
                      /* @__PURE__ */ i("span", { className: "menu-name", children: e.name })
                    ] }),
                    /* @__PURE__ */ i("div", { className: "async-tree-menu-list-arrow-container", children: r && k(a, e) })
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
const $ = (p) => {
  const { isOpen: l, className: h } = p, m = "arrow", g = M(
    m,
    { [`${m}--closed`]: !l },
    { [`${m}--open`]: l },
    h
  );
  return /* @__PURE__ */ i(F, { className: g });
};
export {
  Z as default
};
