import { jsx as n, Fragment as x, jsxs as p } from "react/jsx-runtime";
import { useRef as E, useState as V, useEffect as j } from "react";
import B from "react-accessible-treeview";
import M from "classnames";
import { A as U, I as F } from "../../chunks/index.js";
import { useNavigate as H } from "react-router-dom";
import { SimpleIconProvider as K } from "./IconProvider.js";
const y = "palmyra.rui.sidemenu.expanded", A = "palmyra.rui.sidemenu.expanded.selected";
function Q(h) {
  const o = H(), g = E(null);
  let m = { name: "", id: -1, parent: null, children: [], isBranch: !0 };
  const [i, b] = V({ data: [m], expandedIds: [], selectedId: [] }), w = h.store, l = E([]), C = (e, a, t) => e.map((s) => (s.id === a && !s.loaded && (s.loaded = !0, s.children = t.filter((d) => a == d.parent).map((d) => d.id)), s)).concat(t), T = (e) => e.split(",").map((t) => parseInt(t)), R = (e, a) => e && Array.isArray(e) ? e.map((r) => {
    const s = r.children || "";
    return {
      id: r.id,
      name: r.name,
      parent: r.parent ? r.parent : a,
      children: r.children ? T(r.children) : [],
      isBranch: s.length > 0,
      loaded: !0,
      metadata: {
        code: r.code,
        action: r.action,
        target: r.target
      }
    };
  }) : [];
  function I(e) {
    return typeof e == "number" ? e : parseInt(e);
  }
  j(() => {
    w.getRoot().then((e) => {
      var a = R(e.result, -1);
      const t = C(i.data, -1, a), r = (localStorage.getItem(y) || "").split(",");
      l.current = r.map((c) => I(c)).filter((c) => a.some((u) => u.id == c));
      const d = (localStorage.getItem(A) || "").split(",").map((c) => I(c)).filter((c) => a.some((u) => u.id == c));
      b({ data: t, expandedIds: l.current, selectedId: d });
    });
  }, []);
  const _ = () => {
    localStorage.setItem(y, l.current.join());
  }, D = (e) => {
    localStorage.setItem(A, e);
  }, L = (e) => {
    if (!e.isBranch && e.metadata?.code) {
      const a = e.metadata.code;
      o(a);
    } else if (e.metadata?.target) {
      const a = e.metadata.target;
      o(a);
    }
  }, N = (e) => {
    l.current = l.current.filter((t) => t !== e), (i?.data.filter((t) => t.parent === e)).forEach((t) => N(t.id));
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
    /* @__PURE__ */ n("div", { className: "checkbox", children: i.data.length > 1 && /* @__PURE__ */ n(
      B,
      {
        className: "async-tree-menu-container",
        data: i.data,
        "aria-label": "Checkbox tree",
        onExpand: (e) => {
          const a = e.isExpanded, t = e.element;
          a ? t.id !== "" && !l.current.includes(t.id) && l.current.push(t.id) : N(t.id), _();
        },
        onSelect: (e) => {
          const a = e.isSelected, t = e.element;
          a && !e.isHalfSelected && t.id !== "" && D(t.id);
        },
        propagateSelect: !1,
        togglableSelect: !0,
        multiSelect: !1,
        selectedIds: i.selectedId,
        expandedIds: i.expandedIds,
        propagateSelectUpwards: !0,
        nodeRenderer: ({
          element: e,
          isBranch: a,
          isExpanded: t,
          isSelected: r,
          isHalfSelected: s,
          getNodeProps: d,
          level: c,
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
              ...d({ onClick: k }),
              style: { marginLeft: 5 * (c - 1) },
              children: /* @__PURE__ */ p(
                "div",
                {
                  className: r ? "async-tree-menu-selected-list" : "async-tree-menu-list",
                  onClick: (f) => {
                    r || u(f), L(e);
                  },
                  children: [
                    /* @__PURE__ */ p("div", { className: "async-tree-menu-list-text-container", children: [
                      /* @__PURE__ */ n("div", { className: "menu-icon", children: v && /* @__PURE__ */ n(v, {}) }),
                      /* @__PURE__ */ n("span", { className: "menu-name", children: e.name })
                    ] }),
                    /* @__PURE__ */ n("div", { className: "async-tree-menu-list-arrow-container", children: a && P(t, e) })
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
  const { isOpen: o, className: g } = h, m = "arrow", i = M(
    m,
    { [`${m}--closed`]: !o },
    { [`${m}--open`]: o },
    g
  );
  return /* @__PURE__ */ n(F, { className: i });
};
export {
  Q as default
};
