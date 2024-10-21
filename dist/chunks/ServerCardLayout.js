import { jsx as h } from "react/jsx-runtime";
import { forwardRef as w, useRef as F, useEffect as x, useImperativeHandle as D, useState as P, useContext as Z } from "react";
import '../assets/FieldContainer.css';import '../assets/FieldGroupContainer.css';import '../assets/CardLayout.css';/* empty css           */
import { useKeyValue as $ } from "../palmyra/utils/pubsub/PubSubHelper.js";
import { PalmyraForm as O } from "../palmyra/form/PalmyraForm.js";
import { StoreFactoryContext as tt } from "../palmyra/form/formContext.js";
import "@palmyralabs/ts-predicates";
import "@palmyralabs/ts-utils";
import { CardLayout as et } from "../palmyra/layout/card/CardLayout.js";
import "@tanstack/react-table";
import "../palmyra/grid/base/utils/ColumnConverter.js";
import "dayjs";
import "../palmyra/grid/utils/FormatterFactory.js";
import "react-accessible-treeview";
import "classnames";
import "./index.js";
import "react-router-dom";
import "../palmyra/menu/AsyncTreeMenuEditor.js";
import { getSaveFormHandle as R } from "../palmyra/form/formUtil.js";
/* empty css                    */
/* empty css               */
import { usePalmyraViewForm as rt } from "../palmyra/form/useHelpers/usePalmyraViewForm.js";
import { usePalmyraNewForm as ot } from "../palmyra/form/useHelpers/usePalmyraNewForm.js";
import { usePalmyraEditForm as nt } from "../palmyra/form/useHelpers/usePalmyraEditForm.js";
const Qt = w(function(t, s) {
  const c = t.storeFactory, { fetchData: m, saveData: i, formRef: a, refresh: u } = nt(t), f = s || F();
  return x(() => {
    m(), a.current.isValid() && t.onValidChange && t.onValidChange(!0);
  }, [a, t.id]), D(f, () => R(i, a, u)), /* @__PURE__ */ h(O, { onValidChange: t.onValidChange, ref: a, storeFactory: c, children: t.children });
}), kt = w(function(t, s) {
  const c = t.storeFactory, { saveData: m, formRef: i } = ot(t), a = s || F();
  return D(a, () => R(m, i)), /* @__PURE__ */ h(
    O,
    {
      onValidChange: t.onValidChange,
      formData: t.initialData,
      ref: i,
      storeFactory: c,
      children: t.children
    }
  );
}), Mt = w(function(t, s) {
  const c = t.storeFactory, { formRef: m, refresh: i } = rt(t), a = s || F();
  return x(() => {
    i();
  }, [t.endPoint]), D(a, () => R({}, m, i)), /* @__PURE__ */ h(O, { ref: m, storeFactory: c, children: t.children });
});
function at(o) {
  if (o.endPoint) {
    const t = Z(tt);
    if (!t)
      throw new Error("@palmyralabs/rt-forms - StoreFactoryContext is not available");
    return t.getGridStore(o.storeOptions, o.endPoint);
  } else
    throw new Error("Either store or endPoint must be provided");
}
const it = (o) => {
  var K, z, A;
  const { quickSearch: t } = o, s = F(null), c = o.store || at(o), m = o.fetchAll != !1, i = ((K = o.defaultParams) == null ? void 0 : K.filter) || {}, a = ((z = o.defaultParams) == null ? void 0 : z.sort) || {}, [u, f] = o.filterTopic ? $(o.filterTopic, i) : P(i), y = o.pageSize ? o.pageSize : 15;
  var G = y instanceof Array ? y[0] : y;
  const [V, _] = P((A = o.storeOptions) == null ? void 0 : A.endPointOptions), [S, p] = P({}), [d, L] = P({ limit: G, offset: 0, total: !0 }), [l, N] = P({ total: null, isLoading: !1, data: null }), g = (e) => {
    L((r) => ({ limit: r.limit, total: r.total, offset: e * r.limit }));
  }, q = (e) => {
    const r = e > 10 || e == -1 ? e : 15;
    L((n) => {
      const v = Math.floor(n.offset / r) * r;
      return { limit: r, total: n.total, offset: v };
    });
  }, H = () => u ? Object.keys(u).length == 0 : !1, E = (e, r) => {
    N((n) => (setTimeout(() => {
      o.onDataChange && o.onDataChange(e, n.data);
    }, 100), { data: e, total: r, isLoading: !1 }));
  }, T = () => E([], 0), I = () => E(void 0, null), B = () => k({}), C = () => Math.round(d.offset / d.limit), J = () => d, U = () => {
    N((e) => ({ ...e, isLoading: !0 }));
  };
  x(() => {
    (m || !H()) && Q();
  }, [d, S, V]);
  const b = () => ({
    sortOrder: S && Object.keys(S).length > 0 ? S : a,
    total: !0,
    endPointVars: V,
    ...d,
    filter: { ...u, ...i }
  }), Q = () => {
    const e = b();
    if (s.current != null) {
      const r = /* @__PURE__ */ new Date(), n = s.current, v = r.getTime() - n.getTime();
      if (v < 200) {
        l.isLoading || console.warn("ServerQueryManager: refresh called within short interval" + v);
        return;
      }
    }
    if (c)
      try {
        s.current = /* @__PURE__ */ new Date(), U(), c.query(e).then((r) => {
          E(r.result, r.total);
        }).catch((r) => {
          var n = r.response ? r.response : r;
          console.error("error while fetching", n), I();
        });
      } catch (r) {
        console.error(r), T();
      }
    else
      console.error("Store is not provided for the Grid"), T();
  }, W = (e) => {
    const r = t;
    f(e ? (n) => (n[r] = e, { ...n }) : (n) => (delete n[r], { ...n })), g(0);
  }, k = (e) => {
    typeof e == "function" || e && Object.keys(e).length > 0 ? f(e) : f({}), g(0);
  }, X = (e, r) => {
    f((n) => (n[e] = r, { ...n })), g(0);
  }, M = (e) => {
    p(e);
  }, Y = () => C() < j() ? (g(C() + 1), !0) : !1, j = () => Math.ceil((l == null ? void 0 : l.total) / (d.limit || 25));
  return {
    addFilter: X,
    resetFilter: B,
    setFilter: k,
    setQuickSearch: W,
    setSortColumns: M,
    setEndPointOptions: _,
    getTotalPages: j,
    refresh: Q,
    setPageSize: q,
    getPageNo: C,
    getQueryLimit: J,
    setQueryLimit: L,
    gotoPage: g,
    nextPage: Y,
    prevPage: () => {
      const e = C();
      return e > 0 ? (g(e - 1), !0) : !1;
    },
    export: (e) => {
      c.export ? c.export(e) : console.warn("Store does not implement export method");
    },
    getQueryRequest: b,
    setSortOptions: M,
    getCurrentFilter: () => u,
    getTotalRecords: () => l == null ? void 0 : l.total,
    getCurrentData: () => l == null ? void 0 : l.data,
    isLoading: l.isLoading
  };
}, jt = w(function(t, s) {
  const { Child: c, childProps: m } = t, i = s || F(null), a = it(t), u = t.listKeyProvider || ((f, y) => y);
  return D(i, () => ({
    ...a
  }), [a]), /* @__PURE__ */ h("div", { children: /* @__PURE__ */ h("div", { className: "card-page-container", children: /* @__PURE__ */ h(
    et,
    {
      Child: c,
      childKeyProvider: u,
      preProcess: t.preProcess,
      dataList: a.getCurrentData(),
      childProps: m,
      EmptyChild: t.EmptyChild,
      Loading: t.Loading,
      title: t.title
    }
  ) }) });
});
export {
  Qt as P,
  jt as S,
  kt as a,
  Mt as b,
  it as u
};
