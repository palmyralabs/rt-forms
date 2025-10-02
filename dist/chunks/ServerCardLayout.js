import { jsx as C, Fragment as at } from "react/jsx-runtime";
import { useContext as tt, useState as D, useCallback as st, useEffect as H, forwardRef as T, useRef as A, useImperativeHandle as N } from "react";
import '../assets/FormGroup.css';import '../assets/FieldContainer.css';import '../assets/FieldGroupContainer.css';import '../assets/CardLayout.css';/* empty css           */
import { useKeyValue as it } from "../palmyra/utils/pubsub/PubSubHelper.js";
import { PalmyraForm as X } from "../palmyra/form/PalmyraForm.js";
import { FieldGroupManagerContext as lt, StoreFactoryContext as ct } from "../palmyra/form/formContext.js";
import "@palmyralabs/ts-predicates";
import { hasDot as J, getValueByKey as ut, setValueByKey as q } from "@palmyralabs/ts-utils";
import { CardLayout as ft } from "../palmyra/layout/card/CardLayout.js";
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
import { getSaveFormHandle as Z } from "../palmyra/form/formUtil.js";
/* empty css                    */
/* empty css               */
/* empty css          */
import { generatePredicate as dt, validate as G } from "../palmyra/form/validator/validatorHelper.js";
import { usePalmyraViewForm as mt } from "../palmyra/form/useHelpers/usePalmyraViewForm.js";
import { usePalmyraNewForm as gt } from "../palmyra/form/useHelpers/usePalmyraNewForm.js";
import { usePalmyraEditForm as ht } from "../palmyra/form/useHelpers/usePalmyraEditForm.js";
const vt = (t, e, i) => {
  const r = tt(lt);
  if (!r)
    throw Error("useFieldManager must be called within the scope of <PalmyraForm>");
  const [n, u] = D({}), s = { ...e, ...n }, f = Ft(t, i), F = yt(i), L = (l) => F(f(l)), j = st(() => Pt(t, i), [t])(), w = dt(s), O = r.getFieldRawData(f), b = Vt(
    O,
    s,
    i,
    w,
    L,
    F
  ), [m, y] = D(b);
  H(() => {
    O != null && x();
  }, [n]);
  const g = m.value, d = m.error, B = () => g, M = () => d != null && d.showError ? d : { status: !1, message: "" }, I = () => w, P = (l, h = !0, S = !0, _ = !1) => {
    const V = typeof l == "function" ? l(g) : l, v = G(V, w, s);
    V === g && d && v.status == d.status && v.message == d.message || (r.setFieldValidity(t, !v.status), v.showError = S, e?.readOnly && !_ ? y((K) => ({ ...K, error: v })) : (y({ value: V, error: v }), h && V !== g && r.setFieldData(t, V)));
  }, x = () => {
    const l = G(g, w, s);
    d && d.showError && l.status == d.status && l.message == d.message || (l.showError = !0, y((h) => ({ ...h, error: l })));
  }, E = (l, h) => {
    y((S) => ({ ...S, error: { status: !0, message: l, showError: !0 } }));
  };
  H(() => {
    const { error: l, value: h } = m;
    r.setFieldData(t, h), r.setFieldValidity(t, !l.status);
  }, [m]);
  const Q = {
    getValidator: I,
    getValue: B,
    setValue: P,
    valueAccessor: L,
    valueWriter: j,
    rawValueAccessor: f,
    isValid: () => m.error == null ? !G(g, w, s).status : !m.error?.status,
    getError: M,
    refreshError: x,
    mutateOptions: n,
    setMutateOptions: u,
    getFieldProps: () => {
      const {
        invalidMessage: l,
        missingMessage: h,
        validator: S,
        regExp: _,
        validRule: V,
        validFn: v,
        defaultValue: K,
        ...U
      } = s;
      return { ...U, ...n };
    },
    setError: E
  };
  return r.registerFieldManager(Q, s), O == null && e.defaultValue && r.setFieldData(t, m.value), m.error?.status && r.setFieldValidity(t, m.error?.status), Q;
};
function Ft(t, e) {
  return e?.fieldAccessor ? e.fieldAccessor : J(t) ? (r) => ut(t, r) : (r) => r?.[t];
}
function yt(t) {
  if (t?.parse) {
    const e = t.parse;
    return (i) => e(i);
  }
  return (e) => e ?? "";
}
function Pt(t, e) {
  const i = e?.format;
  return i ? e?.fieldWriter ? (r, n) => e.fieldWriter(i(n), r) : J(t) ? (r, n) => q(t, r, i(n)) : (r, n) => q(t, r, i(n)) : e?.fieldWriter ? (r, n) => e.fieldWriter(n, r) : J(t) ? (r, n) => q(t, r, n) : (r, n) => q(t, r, n);
}
const Vt = (t, e, i, r, n, u) => {
  var s = null, f = void 0;
  return t == null ? e.defaultValue != null ? s = i?.parse ? i.parse(e.defaultValue) : e.defaultValue : s = n({}) : s = u(t), f = G(s, r, e), f.status && (f.showError = t != null || e.defaultValue != null), { value: s, error: f };
}, zt = T(function(e, i) {
  const r = e.storeFactory, { fetchData: n, saveData: u, formRef: s, refresh: f } = ht(e), F = i || A(null);
  return H(() => {
    n(), s.current.isValid() && e.onValidChange && e.onValidChange(!0);
  }, [s, e.id]), N(F, () => Z(u, s, f)), /* @__PURE__ */ C(X, { onValidChange: e.onValidChange, ref: s, storeFactory: r, children: e.children });
}), te = T(function(e, i) {
  const r = e.storeFactory, { saveData: n, formRef: u } = gt(e), s = i || A(null);
  return N(s, () => Z(n, u)), /* @__PURE__ */ C(
    X,
    {
      onValidChange: e.onValidChange,
      formData: e.initialData,
      ref: u,
      storeFactory: r,
      children: e.children
    }
  );
}), ee = T(function(e, i) {
  const r = e.storeFactory, { formRef: n, refresh: u } = mt(e), s = i || A(null);
  return N(s, () => Z({}, n, u)), /* @__PURE__ */ C(X, { ref: n, storeFactory: r, children: e.children });
}), re = T(function(e, i) {
  const r = vt(e.attribute, e), n = i || A(null), { getValue: u, setValue: s, isValid: f } = r;
  return N(n, () => ({
    getValue: u,
    setValue: s,
    isValid: f
  }), [r]), /* @__PURE__ */ C(at, {});
}), wt = 120;
function Et(t) {
  if (t.endPoint) {
    const e = tt(ct);
    if (!e)
      throw new Error("@palmyralabs/rt-forms - StoreFactoryContext is not available");
    return e.getGridStore(t.storeOptions, t.endPoint);
  } else
    throw new Error("Either store or endPoint must be provided");
}
const Rt = (t) => {
  const { quickSearch: e, initialFetch: i = !0 } = t, r = A(null), n = t.store || Et(t), u = t.fetchAll != !1, s = t.defaultParams?.filter || {}, f = t.defaultParams?.sort || {}, F = t.pageSize ? t.pageSize : 15;
  var L = F instanceof Array ? F[0] : F;
  const j = t.initParams?.filter || {}, w = t.initParams?.limit || L, O = t.initParams?.offset || 0, b = t.initParams?.sort || {}, m = { ...j, ...s }, [y, g] = t.filterTopic ? it(t.filterTopic, m) : D(m), [d, B] = D(t.storeOptions?.endPointOptions), [M, I] = D(b), [P, x] = D({ limit: w, offset: O, total: !0 }), [E, Y] = D({ total: null, isLoading: !1, data: null }), R = (a) => {
    x((o) => ({ limit: o.limit, total: o.total, offset: a * o.limit }));
  }, Q = (a) => {
    const o = a > 0 || a == -1 ? a : 15;
    x((c) => {
      const W = Math.floor(c.offset / o) * o;
      return { limit: o, total: c.total, offset: W };
    });
  }, l = () => y ? Object.keys(y).length == 0 : !1, h = (a, o) => {
    Y((c) => (setTimeout(() => {
      t.onDataChange && t.onDataChange(a, c.data);
    }, 100), { data: a, total: o, isLoading: !1 }));
  }, S = () => h([], 0), _ = () => h(void 0, null), V = () => p({}), v = () => Math.round(P.offset / P.limit), K = () => P, U = () => {
    Y((a) => ({ ...a, isLoading: !0 }));
  };
  H(() => {
    (u || !l()) && k();
  }, [P, M, d]);
  const $ = () => {
    const o = {
      sortOrder: M && Object.keys(M).length > 0 ? M : f,
      total: !0,
      endPointVars: d,
      ...P,
      filter: { ...y, ...s }
    };
    return t.transformRequest && (o.transformRequest = t.transformRequest), t.transformResult && (o.transformResult = t.transformResult), o;
  }, k = () => {
    const a = $();
    if (r.current != null) {
      const o = /* @__PURE__ */ new Date(), c = r.current, W = o.getTime() - c.getTime();
      if (W < wt) {
        E.isLoading || console.warn("ServerQueryManager: refresh called within short interval" + W);
        return;
      }
    } else if (!i) {
      r.current = new Date((/* @__PURE__ */ new Date()).getTime() - 6e4);
      return;
    }
    if (n)
      try {
        r.current = /* @__PURE__ */ new Date(), U(), n.query(a).then((o) => {
          h(o.result, o.total);
        }).catch((o) => {
          var c = o.response ? o.response : o;
          console.error("error while fetching", c), _();
        });
      } catch (o) {
        console.error(o), S();
      }
    else
      console.error("Store is not provided for the Grid"), S();
  }, et = (a) => {
    const o = e;
    g(a ? (c) => (c[o] = a, { ...c }) : (c) => (delete c[o], { ...c })), R(0);
  }, p = (a) => {
    typeof a == "function" || a && Object.keys(a).length > 0 ? g(a) : g({}), R(0);
  }, rt = (a, o) => {
    g((c) => (c[a] = o, { ...c })), R(0);
  }, ot = (a) => {
    I(a);
  }, nt = () => {
    const a = v();
    if (a < z()) {
      const o = a + 1;
      return R(o), o;
    }
    return -1;
  }, z = () => Math.ceil(E?.total / (P.limit || 25));
  return {
    addFilter: rt,
    resetFilter: V,
    setFilter: p,
    setQuickSearch: et,
    setSortColumns: ot,
    setEndPointOptions: B,
    getTotalPages: z,
    refresh: k,
    setPageSize: Q,
    getPageNo: v,
    getQueryLimit: K,
    setQueryLimit: x,
    gotoPage: R,
    nextPage: nt,
    prevPage: () => {
      const a = v();
      if (a > 0) {
        const o = a - 1;
        return R(o), o;
      }
      return -1;
    },
    export: (a) => {
      n.export ? n.export(a) : console.warn("Store does not implement export method");
    },
    getQueryRequest: $,
    getCurrentFilter: () => y,
    getTotalRecords: () => E?.total,
    getCurrentData: () => E?.data,
    isLoading: E.isLoading
  };
}, oe = T(function(e, i) {
  const { Child: r, childProps: n } = e, u = i || A(null), s = Rt(e), f = e.listKeyProvider || ((F, L) => L);
  return N(u, () => ({
    ...s
  }), [s]), /* @__PURE__ */ C("div", { children: /* @__PURE__ */ C("div", { className: "card-page-container", children: /* @__PURE__ */ C(
    ft,
    {
      Child: r,
      childKeyProvider: f,
      preProcess: e.preProcess,
      dataList: s.getCurrentData(),
      childProps: n,
      EmptyChild: e.EmptyChild,
      Loading: e.Loading,
      title: e.title
    }
  ) }) });
});
export {
  re as H,
  zt as P,
  oe as S,
  te as a,
  ee as b,
  Rt as c,
  vt as u
};
