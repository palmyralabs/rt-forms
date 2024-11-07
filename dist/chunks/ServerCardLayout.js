import { jsx as h } from "react/jsx-runtime";
import { forwardRef as D, useRef as F, useEffect as x, useImperativeHandle as E, useState as P, useContext as $ } from "react";
import '../assets/FieldContainer.css';import '../assets/FieldGroupContainer.css';import '../assets/CardLayout.css';/* empty css           */
import { useKeyValue as tt } from "../palmyra/utils/pubsub/PubSubHelper.js";
import { PalmyraForm as V } from "../palmyra/form/PalmyraForm.js";
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
import "../palmyra/acl/AclAPIEditor.js";
import { getSaveFormHandle as O } from "../palmyra/form/formUtil.js";
/* empty css                    */
/* empty css               */
import { usePalmyraViewForm as ot } from "../palmyra/form/useHelpers/usePalmyraViewForm.js";
import { usePalmyraNewForm as nt } from "../palmyra/form/useHelpers/usePalmyraNewForm.js";
import { usePalmyraEditForm as at } from "../palmyra/form/useHelpers/usePalmyraEditForm.js";
const Mt = D(function(t, u) {
  const s = t.storeFactory, { fetchData: i, saveData: c, formRef: a, refresh: y } = at(t), m = u || F();
  return x(() => {
    i(), a.current.isValid() && t.onValidChange && t.onValidChange(!0);
  }, [a, t.id]), E(m, () => O(c, a, y)), /* @__PURE__ */ h(V, { onValidChange: t.onValidChange, ref: a, storeFactory: s, children: t.children });
}), jt = D(function(t, u) {
  const s = t.storeFactory, { saveData: i, formRef: c } = nt(t), a = u || F();
  return E(a, () => O(i, c)), /* @__PURE__ */ h(
    V,
    {
      onValidChange: t.onValidChange,
      formData: t.initialData,
      ref: c,
      storeFactory: s,
      children: t.children
    }
  );
}), At = D(function(t, u) {
  const s = t.storeFactory, { formRef: i, refresh: c } = ot(t), a = u || F();
  return x(() => {
    c();
  }, [t.endPoint]), E(a, () => O({}, i, c)), /* @__PURE__ */ h(V, { ref: i, storeFactory: s, children: t.children });
}), it = 120;
function st(o) {
  if (o.endPoint) {
    const t = $(et);
    if (!t)
      throw new Error("@palmyralabs/rt-forms - StoreFactoryContext is not available");
    return t.getGridStore(o.storeOptions, o.endPoint);
  } else
    throw new Error("Either store or endPoint must be provided");
}
const ct = (o) => {
  var A, K, p;
  const { quickSearch: t, initialFetch: u = !0 } = o, s = F(null), i = o.store || st(o), c = o.fetchAll != !1, a = ((A = o.defaultParams) == null ? void 0 : A.filter) || {}, y = ((K = o.defaultParams) == null ? void 0 : K.sort) || {}, [m, f] = o.filterTopic ? tt(o.filterTopic, a) : P(a), w = o.pageSize ? o.pageSize : 15;
  var z = w instanceof Array ? w[0] : w;
  const [N, G] = P((p = o.storeOptions) == null ? void 0 : p.endPointOptions), [S, q] = P({}), [d, L] = P({ limit: z, offset: 0, total: !0 }), [l, T] = P({ total: null, isLoading: !1, data: null }), g = (e) => {
    L((r) => ({ limit: r.limit, total: r.total, offset: e * r.limit }));
  }, H = (e) => {
    const r = e > 10 || e == -1 ? e : 15;
    L((n) => {
      const v = Math.floor(n.offset / r) * r;
      return { limit: r, total: n.total, offset: v };
    });
  }, I = () => m ? Object.keys(m).length == 0 : !1, R = (e, r) => {
    T((n) => (setTimeout(() => {
      o.onDataChange && o.onDataChange(e, n.data);
    }, 100), { data: e, total: r, isLoading: !1 }));
  }, Q = () => R([], 0), Y = () => R(void 0, null), U = () => k({}), C = () => Math.round(d.offset / d.limit), B = () => d, J = () => {
    T((e) => ({ ...e, isLoading: !0 }));
  };
  x(() => {
    (c || !I()) && _();
  }, [d, S, N]);
  const b = () => ({
    sortOrder: S && Object.keys(S).length > 0 ? S : y,
    total: !0,
    endPointVars: N,
    ...d,
    filter: { ...m, ...a }
  }), _ = () => {
    const e = b();
    if (s.current != null) {
      const r = /* @__PURE__ */ new Date(), n = s.current, v = r.getTime() - n.getTime();
      if (v < it) {
        l.isLoading || console.warn("ServerQueryManager: refresh called within short interval" + v);
        return;
      }
    } else if (!u) {
      s.current = new Date((/* @__PURE__ */ new Date()).getTime() - 6e4);
      return;
    }
    if (i)
      try {
        s.current = /* @__PURE__ */ new Date(), J(), i.query(e).then((r) => {
          R(r.result, r.total);
        }).catch((r) => {
          var n = r.response ? r.response : r;
          console.error("error while fetching", n), Y();
        });
      } catch (r) {
        console.error(r), Q();
      }
    else
      console.error("Store is not provided for the Grid"), Q();
  }, W = (e) => {
    const r = t;
    f(e ? (n) => (n[r] = e, { ...n }) : (n) => (delete n[r], { ...n })), g(0);
  }, k = (e) => {
    typeof e == "function" || e && Object.keys(e).length > 0 ? f(e) : f({}), g(0);
  }, X = (e, r) => {
    f((n) => (n[e] = r, { ...n })), g(0);
  }, M = (e) => {
    q(e);
  }, Z = () => C() < j() ? (g(C() + 1), !0) : !1, j = () => Math.ceil((l == null ? void 0 : l.total) / (d.limit || 25));
  return {
    addFilter: X,
    resetFilter: U,
    setFilter: k,
    setQuickSearch: W,
    setSortColumns: M,
    setEndPointOptions: G,
    getTotalPages: j,
    refresh: _,
    setPageSize: H,
    getPageNo: C,
    getQueryLimit: B,
    setQueryLimit: L,
    gotoPage: g,
    nextPage: Z,
    prevPage: () => {
      const e = C();
      return e > 0 ? (g(e - 1), !0) : !1;
    },
    export: (e) => {
      i.export ? i.export(e) : console.warn("Store does not implement export method");
    },
    getQueryRequest: b,
    setSortOptions: M,
    getCurrentFilter: () => m,
    getTotalRecords: () => l == null ? void 0 : l.total,
    getCurrentData: () => l == null ? void 0 : l.data,
    isLoading: l.isLoading
  };
}, Kt = D(function(t, u) {
  const { Child: s, childProps: i } = t, c = u || F(null), a = ct(t), y = t.listKeyProvider || ((m, f) => f);
  return E(c, () => ({
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
  Mt as P,
  Kt as S,
  jt as a,
  At as b,
  ct as u
};
