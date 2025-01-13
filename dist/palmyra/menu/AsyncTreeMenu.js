import { jsx as s, Fragment as x, jsxs as u } from "react/jsx-runtime";
import { useRef as E, useState as j, useEffect as B } from "react";
import M from "react-accessible-treeview";
import U from "classnames";
import { A as F, I as H } from "../../chunks/index.js";
import { useNavigate as K, useLocation as V } from "react-router-dom";
import { SimpleIconProvider as Y } from "./IconProvider.js";
const S = "palmyra.rui.sidemenu.expanded", $ = "palmyra.rui.sidemenu.expanded.selected";
function ee(p) {
  const l = K(), f = V(), m = E(null);
  let g = { name: "", id: -1, parent: null, children: [], isBranch: !0 };
  const [i, y] = j({ data: [g], expandedIds: [], selectedId: [] }), A = p.store, d = E([]), b = (e, r, t) => e.map((c) => (c.id === r && !c.loaded && (c.loaded = !0, c.children = t.filter((n) => r == n.parent).map((n) => n.id)), c)).concat(t), w = (e) => e.split(",").map((t) => parseInt(t)), C = (e, r) => e && Array.isArray(e) ? e.map((a) => {
    const c = a.children || "";
    return {
      id: a.id,
      name: a.name,
      parent: a.parent ? a.parent : r,
      children: a.children ? w(a.children) : [],
      isBranch: c.length > 0,
      loaded: !0,
      metadata: {
        code: a.code,
        action: a.action,
        target: a.target
      }
    };
  }) : [];
  function T(e) {
    return typeof e == "number" ? e : parseInt(e);
  }
  B(() => {
    A.getRoot().then((e) => {
      var r = C(e.result, -1);
      const t = b(i.data, -1, r), a = (localStorage.getItem(S) || "").split(",");
      d.current = a.map((n) => T(n)).filter((n) => r.some((o) => o.id == n));
      const c = r.filter((n) => {
        var o;
        return ((o = n.metadata) == null ? void 0 : o.target) === f.pathname;
      }).map((n) => n.id);
      y({ data: t, expandedIds: d.current, selectedId: c });
    });
  }, []);
  const L = () => {
    localStorage.setItem(S, d.current.join());
  }, R = (e) => {
    localStorage.setItem($, e);
  }, _ = (e) => {
    var r, t;
    if (!e.isBranch && ((r = e.metadata) != null && r.code)) {
      const a = e.metadata.code;
      l(a);
    } else if ((t = e.metadata) != null && t.target) {
      const a = e.metadata.target;
      l(a);
    }
  }, I = (e) => {
    d.current = d.current.filter((t) => t !== e), (i == null ? void 0 : i.data.filter((t) => t.parent === e)).forEach((t) => I(t.id));
  }, D = p.iconProvider || Y;
  return /* @__PURE__ */ s(x, { children: /* @__PURE__ */ u("div", { className: "sidebar-asyn-menu", children: [
    /* @__PURE__ */ s(
      "div",
      {
        className: "visually-hidden",
        ref: m,
        role: "alert",
        "aria-live": "polite"
      }
    ),
    /* @__PURE__ */ s("div", { className: "checkbox", children: i.data.length > 1 && /* @__PURE__ */ s(
      M,
      {
        className: "async-tree-menu-container",
        data: i.data,
        "aria-label": "Checkbox tree",
        onExpand: (e) => {
          const r = e.isExpanded, t = e.element;
          r ? t.id !== "" && !d.current.includes(t.id) && d.current.push(t.id) : I(t.id), L();
        },
        onSelect: (e) => {
          const r = e.isSelected, t = e.element;
          r && !e.isHalfSelected && t.id !== "" && R(t.id);
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
          isExpanded: t,
          isSelected: a,
          isHalfSelected: c,
          getNodeProps: n,
          level: o,
          handleSelect: O,
          handleExpand: k
        }) => {
          const P = (h, v) => h && v.children.length === 0 ? /* @__PURE__ */ u(x, { children: [
            /* @__PURE__ */ u(
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
            /* @__PURE__ */ s(
              F,
              {
                "aria-hidden": !0,
                className: "loading-icon"
              }
            )
          ] }) : /* @__PURE__ */ s(W, { isOpen: h }), N = D.getIcon(e.metadata.code);
          return /* @__PURE__ */ s(
            "div",
            {
              ...n({ onClick: k }),
              style: { marginLeft: 5 * (o - 1) },
              children: /* @__PURE__ */ u(
                "div",
                {
                  className: a ? "async-tree-menu-selected-list" : "async-tree-menu-list",
                  onClick: (h) => {
                    a || O(h), _(e);
                  },
                  children: [
                    /* @__PURE__ */ u("div", { className: "async-tree-menu-list-text-container", children: [
                      /* @__PURE__ */ s("div", { className: "menu-icon", children: N && /* @__PURE__ */ s(N, {}) }),
                      /* @__PURE__ */ s("span", { className: "menu-name", children: e.name })
                    ] }),
                    /* @__PURE__ */ s("div", { className: "async-tree-menu-list-arrow-container", children: r && P(t, e) })
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
const W = (p) => {
  const { isOpen: l, className: f } = p, m = "arrow", g = U(
    m,
    { [`${m}--closed`]: !l },
    { [`${m}--open`]: l },
    f
  );
  return /* @__PURE__ */ s(H, { className: g });
};
export {
  ee as default
};
