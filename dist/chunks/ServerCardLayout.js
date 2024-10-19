import { jsx as h } from "react/jsx-runtime";
import { forwardRef as v, useRef as F, useEffect as w, useImperativeHandle as E, useState as P, useContext as $ } from "react";
import '../assets/FieldContainer.css';import '../assets/FieldGroupContainer.css';import '../assets/CardLayout.css';/* empty css           */
import { useKeyValue as p } from "../palmyra/utils/pubsub/PubSubHelper.js";
import { PalmyraForm as D } from "../palmyra/form/PalmyraForm.js";
import { StoreFactoryContext as tt } from "../palmyra/form/formContext.js";
import "@palmyralabs/ts-predicates";
import "@palmyralabs/ts-utils";
import { CardLayout as et } from "../palmyra/layout/card/CardLayout.js";
import "@tanstack/react-table";
import "../palmyra/grid/base/utils/ColumnConverter.js";
import "dayjs";
import "../palmyra/grid/utils/FormatterFactory.js";
import "./index.js";
import "react-router-dom";
import "../palmyra/menu/AsyncTreeMenuEditor.js";
import "@mui/icons-material";
import { getSaveFormHandle as O } from "../palmyra/form/formUtil.js";
/* empty css                    */
/* empty css               */
import { usePalmyraViewForm as rt } from "../palmyra/form/useHelpers/usePalmyraViewForm.js";
import { usePalmyraNewForm as ot } from "../palmyra/form/useHelpers/usePalmyraNewForm.js";
import { usePalmyraEditForm as nt } from "../palmyra/form/useHelpers/usePalmyraEditForm.js";
const kt = v(function(t, i) {
  const f = t.storeFactory, { fetchData: s, saveData: c, formRef: n, refresh: l } = nt(t), g = i || F();
  return w(() => {
    s(), n.current.isValid() && t.onValidChange && t.onValidChange(!0), l();
  }, [n, t.id]), E(g, () => O(c, n, l)), /* @__PURE__ */ h(D, { onValidChange: t.onValidChange, ref: n, storeFactory: f, children: t.children });
}), Qt = v(function(t, i) {
  const f = t.storeFactory, { saveData: s, formRef: c } = ot(t), n = i || F();
  return E(n, () => O(s, c)), /* @__PURE__ */ h(
    D,
    {
      onValidChange: t.onValidChange,
      formData: t.initialData,
      ref: c,
      storeFactory: f,
      children: t.children
    }
  );
}), Tt = v(function(t, i) {
  const f = t.storeFactory, { formRef: s, refresh: c } = rt(t), n = i || F();
  return w(() => {
    c();
  }, [t.endPoint]), E(n, () => O({}, s, c)), /* @__PURE__ */ h(D, { ref: s, storeFactory: f, children: t.children });
});
function at(o) {
  if (o.endPoint) {
    const t = $(tt);
    if (!t)
      throw new Error("@palmyralabs/rt-forms - StoreFactoryContext is not available");
    return t.getGridStore(o.storeOptions, o.endPoint);
  } else
    throw new Error("Either store or endPoint must be provided");
}
const it = (o) => {
  var K, M, z;
  const { quickSearch: t } = o, i = o.store || at(o), f = o.fetchAll != !1, s = ((K = o.defaultParams) == null ? void 0 : K.filter) || {}, c = ((M = o.defaultParams) == null ? void 0 : M.sort) || {}, [n, l] = o.filterTopic ? p(o.filterTopic, s) : P(s), g = F(o.initialFetch == !1), y = o.pageSize ? o.pageSize : 15;
  var A = y instanceof Array ? y[0] : y;
  const [R, G] = P((z = o.storeOptions) == null ? void 0 : z.endPointOptions), [S, _] = P({}), [u, L] = P({ limit: A, offset: 0, total: !0 }), [m, V] = P({ total: null, isLoading: !1, data: null }), d = (e) => {
    L((r) => ({ limit: r.limit, total: r.total, offset: e * r.limit }));
  }, H = (e) => {
    const r = e > 10 || e == -1 ? e : 15;
    L((a) => {
      const Z = Math.floor(a.offset / r) * r;
      return { limit: r, total: a.total, offset: Z };
    });
  }, q = () => n ? Object.keys(n).length == 0 : !1, x = (e, r) => {
    V((a) => (setTimeout(() => {
      o.onDataChange && o.onDataChange(e, a.data);
    }, 100), { data: e, total: r, isLoading: !1 }));
  }, N = () => x([], 0), I = () => x(void 0, null), B = () => Q({}), C = () => Math.round(u.offset / u.limit), J = () => u, U = () => {
    V((e) => ({ ...e, isLoading: !0 }));
  };
  w(() => {
    if (g.current) {
      g.current = !1;
      return;
    }
    (f || !q()) && k();
  }, [u, S, R]);
  const b = () => ({
    sortOrder: S && Object.keys(S).length > 0 ? S : c,
    total: !0,
    endPointVars: R,
    ...u,
    filter: { ...n, ...s }
  }), k = () => {
    const e = b();
    if (i)
      try {
        U(), i.query(e).then((r) => {
          x(r.result, r.total);
        }).catch((r) => {
          var a = r.response ? r.response : r;
          console.error("error while fetching", a), I();
        });
      } catch (r) {
        console.error(r), N();
      }
    else
      console.error("Store is not provided for the Grid"), N();
  }, W = (e) => {
    const r = t;
    l(e ? (a) => (a[r] = e, { ...a }) : (a) => (delete a[r], { ...a })), d(0);
  }, Q = (e) => {
    typeof e == "function" || e && Object.keys(e).length > 0 ? l(e) : l({}), d(0);
  }, X = (e, r) => {
    l((a) => (a[e] = r, { ...a })), d(0);
  }, T = (e) => {
    _(e);
  }, Y = () => C() < j() ? (d(C() + 1), !0) : !1, j = () => Math.ceil((m == null ? void 0 : m.total) / (u.limit || 25));
  return {
    addFilter: X,
    resetFilter: B,
    setFilter: Q,
    setQuickSearch: W,
    setSortColumns: T,
    setEndPointOptions: G,
    getTotalPages: j,
    refresh: k,
    setPageSize: H,
    getPageNo: C,
    getQueryLimit: J,
    setQueryLimit: L,
    gotoPage: d,
    nextPage: Y,
    prevPage: () => {
      const e = C();
      return e > 0 ? (d(e - 1), !0) : !1;
    },
    export: (e) => {
      i.export ? i.export(e) : console.warn("Store does not implement export method");
    },
    getQueryRequest: b,
    setSortOptions: T,
    getCurrentFilter: () => n,
    getTotalRecords: () => m == null ? void 0 : m.total,
    getCurrentData: () => m == null ? void 0 : m.data,
    isLoading: m.isLoading
  };
}, jt = v(function(t, i) {
  const { Child: f, childProps: s } = t, c = i || F(null), n = it(t), l = t.listKeyProvider || ((g, y) => y);
  return E(c, () => ({
    ...n
  }), [n]), /* @__PURE__ */ h("div", { children: /* @__PURE__ */ h("div", { className: "card-page-container", children: /* @__PURE__ */ h(
    et,
    {
      Child: f,
      childKeyProvider: l,
      preProcess: t.preProcess,
      dataList: n.getCurrentData(),
      childProps: s,
      EmptyChild: t.EmptyChild,
      Loading: t.Loading,
      title: t.title
    }
  ) }) });
});
export {
  kt as P,
  jt as S,
  Qt as a,
  Tt as b,
  it as u
};
