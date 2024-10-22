import { jsx as h } from "react/jsx-runtime";
import { forwardRef as w, useRef as F, useEffect as O, useImperativeHandle as D, useState as P, useContext as $ } from "react";
import '../assets/FieldContainer.css';import '../assets/FieldGroupContainer.css';import '../assets/CardLayout.css';/* empty css           */
import { useKeyValue as tt } from "../palmyra/utils/pubsub/PubSubHelper.js";
import { PalmyraForm as R } from "../palmyra/form/PalmyraForm.js";
import { StoreFactoryContext as et } from "../palmyra/form/formContext.js";
import "@palmyralabs/ts-predicates";
import "@palmyralabs/ts-utils";
import { CardLayout as rt } from "../palmyra/layout/card/CardLayout.js";
import "@tanstack/react-table";
import "../palmyra/grid/base/utils/ColumnConverter.js";
import "dayjs";
import "../palmyra/grid/utils/FormatterFactory.js";
import "react-accessible-treeview";
import "classnames";
import "./index.js";
import "react-router-dom";
import "../palmyra/menu/AsyncTreeMenuEditor.js";
import { getSaveFormHandle as V } from "../palmyra/form/formUtil.js";
/* empty css                    */
/* empty css               */
import { usePalmyraViewForm as ot } from "../palmyra/form/useHelpers/usePalmyraViewForm.js";
import { usePalmyraNewForm as nt } from "../palmyra/form/useHelpers/usePalmyraNewForm.js";
import { usePalmyraEditForm as at } from "../palmyra/form/useHelpers/usePalmyraEditForm.js";
const kt = w(function(t, u) {
  const s = t.storeFactory, { fetchData: i, saveData: c, formRef: a, refresh: y } = at(t), m = u || F();
  return O(() => {
    i(), a.current.isValid() && t.onValidChange && t.onValidChange(!0);
  }, [a, t.id]), D(m, () => V(c, a, y)), /* @__PURE__ */ h(R, { onValidChange: t.onValidChange, ref: a, storeFactory: s, children: t.children });
}), jt = w(function(t, u) {
  const s = t.storeFactory, { saveData: i, formRef: c } = nt(t), a = u || F();
  return D(a, () => V(i, c)), /* @__PURE__ */ h(
    R,
    {
      onValidChange: t.onValidChange,
      formData: t.initialData,
      ref: c,
      storeFactory: s,
      children: t.children
    }
  );
}), Kt = w(function(t, u) {
  const s = t.storeFactory, { formRef: i, refresh: c } = ot(t), a = u || F();
  return O(() => {
    c();
  }, [t.endPoint]), D(a, () => V({}, i, c)), /* @__PURE__ */ h(R, { ref: i, storeFactory: s, children: t.children });
});
function it(o) {
  if (o.endPoint) {
    const t = $(et);
    if (!t)
      throw new Error("@palmyralabs/rt-forms - StoreFactoryContext is not available");
    return t.getGridStore(o.storeOptions, o.endPoint);
  } else
    throw new Error("Either store or endPoint must be provided");
}
const st = (o) => {
  var z, A, G;
  const { quickSearch: t, initialFetch: u = !0 } = o, s = F(null), i = o.store || it(o), c = o.fetchAll != !1, a = ((z = o.defaultParams) == null ? void 0 : z.filter) || {}, y = ((A = o.defaultParams) == null ? void 0 : A.sort) || {}, [m, f] = o.filterTopic ? tt(o.filterTopic, a) : P(a), L = o.pageSize ? o.pageSize : 15;
  var _ = L instanceof Array ? L[0] : L;
  const [T, p] = P((G = o.storeOptions) == null ? void 0 : G.endPointOptions), [S, q] = P({}), [d, E] = P({ limit: _, offset: 0, total: !0 }), [l, N] = P({ total: null, isLoading: !1, data: null }), g = (e) => {
    E((r) => ({ limit: r.limit, total: r.total, offset: e * r.limit }));
  }, H = (e) => {
    const r = e > 10 || e == -1 ? e : 15;
    E((n) => {
      const v = Math.floor(n.offset / r) * r;
      return { limit: r, total: n.total, offset: v };
    });
  }, I = () => m ? Object.keys(m).length == 0 : !1, x = (e, r) => {
    N((n) => (setTimeout(() => {
      o.onDataChange && o.onDataChange(e, n.data);
    }, 100), { data: e, total: r, isLoading: !1 }));
  }, b = () => x([], 0), B = () => x(void 0, null), J = () => j({}), C = () => Math.round(d.offset / d.limit), U = () => d, W = () => {
    N((e) => ({ ...e, isLoading: !0 }));
  };
  O(() => {
    (c || !I()) && k();
  }, [d, S, T]);
  const Q = () => ({
    sortOrder: S && Object.keys(S).length > 0 ? S : y,
    total: !0,
    endPointVars: T,
    ...d,
    filter: { ...m, ...a }
  }), k = () => {
    const e = Q();
    if (s.current != null) {
      const r = /* @__PURE__ */ new Date(), n = s.current, v = r.getTime() - n.getTime();
      if (v < 200) {
        l.isLoading || console.warn("ServerQueryManager: refresh called within short interval" + v);
        return;
      }
    } else if (!u) {
      s.current = new Date((/* @__PURE__ */ new Date()).getTime() - 6e4);
      return;
    }
    if (i)
      try {
        s.current = /* @__PURE__ */ new Date(), W(), i.query(e).then((r) => {
          x(r.result, r.total);
        }).catch((r) => {
          var n = r.response ? r.response : r;
          console.error("error while fetching", n), B();
        });
      } catch (r) {
        console.error(r), b();
      }
    else
      console.error("Store is not provided for the Grid"), b();
  }, X = (e) => {
    const r = t;
    f(e ? (n) => (n[r] = e, { ...n }) : (n) => (delete n[r], { ...n })), g(0);
  }, j = (e) => {
    typeof e == "function" || e && Object.keys(e).length > 0 ? f(e) : f({}), g(0);
  }, Y = (e, r) => {
    f((n) => (n[e] = r, { ...n })), g(0);
  }, K = (e) => {
    q(e);
  }, Z = () => C() < M() ? (g(C() + 1), !0) : !1, M = () => Math.ceil((l == null ? void 0 : l.total) / (d.limit || 25));
  return {
    addFilter: Y,
    resetFilter: J,
    setFilter: j,
    setQuickSearch: X,
    setSortColumns: K,
    setEndPointOptions: p,
    getTotalPages: M,
    refresh: k,
    setPageSize: H,
    getPageNo: C,
    getQueryLimit: U,
    setQueryLimit: E,
    gotoPage: g,
    nextPage: Z,
    prevPage: () => {
      const e = C();
      return e > 0 ? (g(e - 1), !0) : !1;
    },
    export: (e) => {
      i.export ? i.export(e) : console.warn("Store does not implement export method");
    },
    getQueryRequest: Q,
    setSortOptions: K,
    getCurrentFilter: () => m,
    getTotalRecords: () => l == null ? void 0 : l.total,
    getCurrentData: () => l == null ? void 0 : l.data,
    isLoading: l.isLoading
  };
}, Mt = w(function(t, u) {
  const { Child: s, childProps: i } = t, c = u || F(null), a = st(t), y = t.listKeyProvider || ((m, f) => f);
  return D(c, () => ({
    ...a
  }), [a]), /* @__PURE__ */ h("div", { children: /* @__PURE__ */ h("div", { className: "card-page-container", children: /* @__PURE__ */ h(
    rt,
    {
      Child: s,
      childKeyProvider: y,
      preProcess: t.preProcess,
      dataList: a.getCurrentData(),
      childProps: i,
      EmptyChild: t.EmptyChild,
      Loading: t.Loading,
      title: t.title
    }
  ) }) });
});
export {
  kt as P,
  Mt as S,
  jt as a,
  Kt as b,
  st as u
};
