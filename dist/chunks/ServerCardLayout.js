import { jsx as h } from "react/jsx-runtime";
import { forwardRef as v, useRef as F, useEffect as E, useImperativeHandle as w, useState as P, useContext as Z } from "react";
import '../assets/FieldContainer.css';import '../assets/FieldGroupContainer.css';import '../assets/CardLayout.css';/* empty css           */
import { useKeyValue as $ } from "../palmyra/utils/pubsub/PubSubHelper.js";
import { PalmyraForm as x } from "../palmyra/form/PalmyraForm.js";
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
import { getSaveFormHandle as O } from "../palmyra/form/formUtil.js";
/* empty css                    */
/* empty css               */
import { usePalmyraViewForm as rt } from "../palmyra/form/useHelpers/usePalmyraViewForm.js";
import { usePalmyraNewForm as ot } from "../palmyra/form/useHelpers/usePalmyraNewForm.js";
import { usePalmyraEditForm as nt } from "../palmyra/form/useHelpers/usePalmyraEditForm.js";
const Qt = v(function(t, s) {
  const c = t.storeFactory, { fetchData: m, saveData: i, formRef: a, refresh: u } = nt(t), f = s || F();
  return E(() => {
    m(), a.current.isValid() && t.onValidChange && t.onValidChange(!0);
  }, [a, t.id]), w(f, () => O(i, a, u)), /* @__PURE__ */ h(x, { onValidChange: t.onValidChange, ref: a, storeFactory: c, children: t.children });
}), kt = v(function(t, s) {
  const c = t.storeFactory, { saveData: m, formRef: i } = ot(t), a = s || F();
  return w(a, () => O(m, i)), /* @__PURE__ */ h(
    x,
    {
      onValidChange: t.onValidChange,
      formData: t.initialData,
      ref: i,
      storeFactory: c,
      children: t.children
    }
  );
}), Mt = v(function(t, s) {
  const c = t.storeFactory, { formRef: m, refresh: i } = rt(t), a = s || F();
  return E(() => {
    i();
  }, [t.endPoint]), w(a, () => O({}, m, i)), /* @__PURE__ */ h(x, { ref: m, storeFactory: c, children: t.children });
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
  var j, K, z;
  const { quickSearch: t } = o, s = F(null), c = o.store || at(o), m = o.fetchAll != !1, i = ((j = o.defaultParams) == null ? void 0 : j.filter) || {}, a = ((K = o.defaultParams) == null ? void 0 : K.sort) || {}, [u, f] = o.filterTopic ? $(o.filterTopic, i) : P(i), y = o.pageSize ? o.pageSize : 15;
  var A = y instanceof Array ? y[0] : y;
  const [R, G] = P((z = o.storeOptions) == null ? void 0 : z.endPointOptions), [S, _] = P({}), [d, D] = P({ limit: A, offset: 0, total: !0 }), [l, V] = P({ total: null, isLoading: !1, data: null }), g = (e) => {
    D((r) => ({ limit: r.limit, total: r.total, offset: e * r.limit }));
  }, p = (e) => {
    const r = e > 10 || e == -1 ? e : 15;
    D((n) => {
      const Y = Math.floor(n.offset / r) * r;
      return { limit: r, total: n.total, offset: Y };
    });
  }, q = () => u ? Object.keys(u).length == 0 : !1, L = (e, r) => {
    V((n) => (setTimeout(() => {
      o.onDataChange && o.onDataChange(e, n.data);
    }, 100), { data: e, total: r, isLoading: !1 }));
  }, T = () => L([], 0), H = () => L(void 0, null), I = () => Q({}), C = () => Math.round(d.offset / d.limit), B = () => d, J = () => {
    V((e) => ({ ...e, isLoading: !0 }));
  };
  E(() => {
    (m || !q()) && b();
  }, [d, S, R]);
  const N = () => ({
    sortOrder: S && Object.keys(S).length > 0 ? S : a,
    total: !0,
    endPointVars: R,
    ...d,
    filter: { ...u, ...i }
  }), b = () => {
    const e = N();
    if (s.current != null) {
      const r = /* @__PURE__ */ new Date(), n = s.current;
      if (n.getTime() - r.getTime() < 200) {
        l.isLoading || console.warn("ServerQueryManager: refresh called within short interval" + (n.getTime() - r.getTime()));
        return;
      }
    }
    if (c)
      try {
        s.current = /* @__PURE__ */ new Date(), J(), c.query(e).then((r) => {
          L(r.result, r.total);
        }).catch((r) => {
          var n = r.response ? r.response : r;
          console.error("error while fetching", n), H();
        });
      } catch (r) {
        console.error(r), T();
      }
    else
      console.error("Store is not provided for the Grid"), T();
  }, U = (e) => {
    const r = t;
    f(e ? (n) => (n[r] = e, { ...n }) : (n) => (delete n[r], { ...n })), g(0);
  }, Q = (e) => {
    typeof e == "function" || e && Object.keys(e).length > 0 ? f(e) : f({}), g(0);
  }, W = (e, r) => {
    f((n) => (n[e] = r, { ...n })), g(0);
  }, k = (e) => {
    _(e);
  }, X = () => C() < M() ? (g(C() + 1), !0) : !1, M = () => Math.ceil((l == null ? void 0 : l.total) / (d.limit || 25));
  return {
    addFilter: W,
    resetFilter: I,
    setFilter: Q,
    setQuickSearch: U,
    setSortColumns: k,
    setEndPointOptions: G,
    getTotalPages: M,
    refresh: b,
    setPageSize: p,
    getPageNo: C,
    getQueryLimit: B,
    setQueryLimit: D,
    gotoPage: g,
    nextPage: X,
    prevPage: () => {
      const e = C();
      return e > 0 ? (g(e - 1), !0) : !1;
    },
    export: (e) => {
      c.export ? c.export(e) : console.warn("Store does not implement export method");
    },
    getQueryRequest: N,
    setSortOptions: k,
    getCurrentFilter: () => u,
    getTotalRecords: () => l == null ? void 0 : l.total,
    getCurrentData: () => l == null ? void 0 : l.data,
    isLoading: l.isLoading
  };
}, jt = v(function(t, s) {
  const { Child: c, childProps: m } = t, i = s || F(null), a = it(t), u = t.listKeyProvider || ((f, y) => y);
  return w(i, () => ({
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
