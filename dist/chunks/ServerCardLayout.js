import { jsx as C, Fragment as ne } from "react/jsx-runtime";
import { useContext as ee, useState as R, useCallback as se, useEffect as j, forwardRef as T, useRef as A, useImperativeHandle as N } from "react";
import '../assets/FormGroup.css';import '../assets/FieldContainer.css';import '../assets/FieldGroupContainer.css';import '../assets/CardLayout.css';/* empty css           */
import { useKeyValue as ie } from "../palmyra/utils/pubsub/PubSubHelper.js";
import { PalmyraForm as J } from "../palmyra/form/PalmyraForm.js";
import { FieldGroupManagerContext as le, StoreFactoryContext as ce } from "../palmyra/form/formContext.js";
import "@palmyralabs/ts-predicates";
import { hasDot as U, getValueByKey as ue, setValueByKey as G } from "@palmyralabs/ts-utils";
import { CardLayout as de } from "../palmyra/layout/card/CardLayout.js";
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
import { getSaveFormHandle as X } from "../palmyra/form/formUtil.js";
/* empty css                    */
/* empty css               */
/* empty css          */
import { generatePredicate as fe, validate as H } from "../palmyra/form/validator/validatorHelper.js";
import { usePalmyraViewForm as me } from "../palmyra/form/useHelpers/usePalmyraViewForm.js";
import { usePalmyraNewForm as ge } from "../palmyra/form/useHelpers/usePalmyraNewForm.js";
import { usePalmyraEditForm as he } from "../palmyra/form/useHelpers/usePalmyraEditForm.js";
const ve = (t, e, i) => {
  const r = ee(le);
  if (!r)
    throw Error("useFieldManager must be called within the scope of <PalmyraForm>");
  const [o, u] = R({}), s = { ...e, ...o }, d = Fe(t, i), F = ye(i), L = (l) => F(d(l)), p = se(() => Pe(t, i), [t])(), w = fe(s), O = r.getFieldRawData(d), b = Ve(
    O,
    s,
    i,
    w,
    L,
    F
  ), [m, y] = R(b);
  j(() => {
    O != null && x();
  }, [o]);
  const g = m.value, f = m.error, q = () => g, M = () => f != null && f.showError ? f : { status: !1, message: "" }, B = () => w, P = (l, h = !0, D = !0, _ = !1) => {
    const V = typeof l == "function" ? l(g) : l, v = H(V, w, s);
    V === g && f && v.status == f.status && v.message == f.message || (r.setFieldValidity(t, !v.status), v.showError = D, e?.readOnly && !_ ? y((K) => ({ ...K, error: v })) : (y({ value: V, error: v }), h && V !== g && r.setFieldData(t, V)));
  }, x = () => {
    const l = H(g, w, s);
    f && f.showError && l.status == f.status && l.message == f.message || (l.showError = !0, y((h) => ({ ...h, error: l })));
  }, E = (l, h) => {
    y((D) => ({ ...D, error: { status: !0, message: l, showError: !0 } }));
  };
  j(() => {
    const { error: l, value: h } = m;
    r.setFieldData(t, h), r.setFieldValidity(t, !l.status);
  }, [m]);
  const Q = {
    getValidator: B,
    getValue: q,
    setValue: P,
    valueAccessor: L,
    valueWriter: p,
    rawValueAccessor: d,
    isValid: () => m.error == null ? !H(g, w, s).status : !m.error?.status,
    getError: M,
    refreshError: x,
    mutateOptions: o,
    setMutateOptions: u,
    getFieldProps: () => {
      const {
        invalidMessage: l,
        missingMessage: h,
        validator: D,
        regExp: _,
        validRule: V,
        validFn: v,
        defaultValue: K,
        ...Y
      } = s;
      return { ...Y, ...o };
    },
    setError: E
  };
  return r.registerFieldManager(Q, s), O == null && e.defaultValue && r.setFieldData(t, m.value), m.error?.status && r.setFieldValidity(t, m.error?.status), Q;
};
function Fe(t, e) {
  return e?.fieldAccessor ? e.fieldAccessor : U(t) ? (r) => ue(t, r) : (r) => r?.[t];
}
function ye(t) {
  if (t?.parse) {
    const e = t.parse;
    return (i) => e(i);
  }
  return (e) => e ?? "";
}
function Pe(t, e) {
  const i = e?.format;
  return i ? e?.fieldWriter ? (r, o) => e.fieldWriter(i(o), r) : U(t) ? (r, o) => G(t, r, i(o)) : (r, o) => G(t, r, i(o)) : e?.fieldWriter ? (r, o) => e.fieldWriter(o, r) : U(t) ? (r, o) => G(t, r, o) : (r, o) => G(t, r, o);
}
const Ve = (t, e, i, r, o, u) => {
  var s = null, d = void 0;
  return t == null ? e.defaultValue != null ? s = i?.parse ? i.parse(e.defaultValue) : e.defaultValue : s = o({}) : s = u(t), d = H(s, r, e), d.status && (d.showError = t != null || e.defaultValue != null), { value: s, error: d };
}, ze = T(function(e, i) {
  const r = e.storeFactory, { fetchData: o, saveData: u, formRef: s, refresh: d } = he(e), F = i || A(null);
  return j(() => {
    o(), s.current.isValid() && e.onValidChange && e.onValidChange(!0);
  }, [s, e.id]), N(F, () => X(u, s, d)), /* @__PURE__ */ C(J, { onValidChange: e.onValidChange, ref: s, storeFactory: r, children: e.children });
}), et = T(function(e, i) {
  const r = e.storeFactory, { saveData: o, formRef: u } = ge(e), s = i || A(null);
  return N(s, () => X(o, u)), /* @__PURE__ */ C(
    J,
    {
      onValidChange: e.onValidChange,
      formData: e.initialData,
      ref: u,
      storeFactory: r,
      children: e.children
    }
  );
}), tt = T(function(e, i) {
  const r = e.storeFactory, { formRef: o, refresh: u } = me(e), s = i || A(null);
  return N(s, () => X({}, o, u)), /* @__PURE__ */ C(J, { ref: o, storeFactory: r, children: e.children });
}), rt = T(function(e, i) {
  const r = ve(e.attribute, e), o = i || A(null), { getValue: u, setValue: s, isValid: d } = r;
  return N(o, () => ({
    getValue: u,
    setValue: s,
    isValid: d
  }), [r]), /* @__PURE__ */ C(ne, {});
}), we = 120;
function Ee(t) {
  if (t.endPoint) {
    const e = ee(ce);
    if (!e)
      throw new Error("@palmyralabs/rt-forms - StoreFactoryContext is not available");
    return e.getGridStore(t.storeOptions, t.endPoint);
  } else
    throw new Error("Either store or endPoint must be provided");
}
const Se = (t) => {
  const { quickSearch: e, initialFetch: i = !0 } = t, r = A(null), o = t.store || Ee(t), u = t.fetchAll != !1, s = t.defaultParams?.filter || {}, d = t.defaultParams?.sort || {}, F = t.pageSize ? t.pageSize : 15;
  var L = F instanceof Array ? F[0] : F;
  const p = t.initParams?.filter || {}, w = t.initParams?.limit || L, O = t.initParams?.offset || 0, b = t.initParams?.sort || {}, m = { ...p, ...s }, [y, g] = t.filterTopic ? ie(t.filterTopic, m) : R(m), [f, q] = R(t.storeOptions?.endPointOptions), [M, B] = R(b), [P, x] = R({ limit: w, offset: O, total: !0 }), [E, I] = R({ total: null, isLoading: !1, data: null }), S = (a) => {
    x((n) => ({ limit: n.limit, total: n.total, offset: a * n.limit }));
  }, Q = (a) => {
    const n = a > 0 || a == -1 ? a : 15;
    x((c) => {
      const W = Math.floor(c.offset / n) * n;
      return { limit: n, total: c.total, offset: W };
    });
  }, l = () => y ? Object.keys(y).length == 0 : !1, h = (a, n) => {
    I((c) => (setTimeout(() => {
      t.onDataChange && t.onDataChange(a, c.data);
    }, 100), { data: a, total: n, isLoading: !1 }));
  }, D = () => h([], 0), _ = () => h(void 0, null), V = () => k({}), v = () => Math.round(P.offset / P.limit), K = () => P, Y = () => {
    I((a) => ({ ...a, isLoading: !0 }));
  };
  j(() => {
    (u || !l()) && $();
  }, [P, M, f]);
  const Z = () => ({
    sortOrder: M && Object.keys(M).length > 0 ? M : d,
    total: !0,
    endPointVars: f,
    ...P,
    filter: { ...y, ...s }
  }), $ = () => {
    const a = Z();
    if (r.current != null) {
      const n = /* @__PURE__ */ new Date(), c = r.current, W = n.getTime() - c.getTime();
      if (W < we) {
        E.isLoading || console.warn("ServerQueryManager: refresh called within short interval" + W);
        return;
      }
    } else if (!i) {
      r.current = new Date((/* @__PURE__ */ new Date()).getTime() - 6e4);
      return;
    }
    if (o)
      try {
        r.current = /* @__PURE__ */ new Date(), Y(), o.query(a).then((n) => {
          h(n.result, n.total);
        }).catch((n) => {
          var c = n.response ? n.response : n;
          console.error("error while fetching", c), _();
        });
      } catch (n) {
        console.error(n), D();
      }
    else
      console.error("Store is not provided for the Grid"), D();
  }, te = (a) => {
    const n = e;
    g(a ? (c) => (c[n] = a, { ...c }) : (c) => (delete c[n], { ...c })), S(0);
  }, k = (a) => {
    typeof a == "function" || a && Object.keys(a).length > 0 ? g(a) : g({}), S(0);
  }, re = (a, n) => {
    g((c) => (c[a] = n, { ...c })), S(0);
  }, oe = (a) => {
    B(a);
  }, ae = () => {
    const a = v();
    if (a < z()) {
      const n = a + 1;
      return S(n), n;
    }
    return -1;
  }, z = () => Math.ceil(E?.total / (P.limit || 25));
  return {
    addFilter: re,
    resetFilter: V,
    setFilter: k,
    setQuickSearch: te,
    setSortColumns: oe,
    setEndPointOptions: q,
    getTotalPages: z,
    refresh: $,
    setPageSize: Q,
    getPageNo: v,
    getQueryLimit: K,
    setQueryLimit: x,
    gotoPage: S,
    nextPage: ae,
    prevPage: () => {
      const a = v();
      if (a > 0) {
        const n = a - 1;
        return S(n), n;
      }
      return -1;
    },
    export: (a) => {
      o.export ? o.export(a) : console.warn("Store does not implement export method");
    },
    getQueryRequest: Z,
    getCurrentFilter: () => y,
    getTotalRecords: () => E?.total,
    getCurrentData: () => E?.data,
    isLoading: E.isLoading
  };
}, ot = T(function(e, i) {
  const { Child: r, childProps: o } = e, u = i || A(null), s = Se(e), d = e.listKeyProvider || ((F, L) => L);
  return N(u, () => ({
    ...s
  }), [s]), /* @__PURE__ */ C("div", { children: /* @__PURE__ */ C("div", { className: "card-page-container", children: /* @__PURE__ */ C(
    de,
    {
      Child: r,
      childKeyProvider: d,
      preProcess: e.preProcess,
      dataList: s.getCurrentData(),
      childProps: o,
      EmptyChild: e.EmptyChild,
      Loading: e.Loading,
      title: e.title
    }
  ) }) });
});
export {
  rt as H,
  ze as P,
  ot as S,
  et as a,
  tt as b,
  Se as c,
  ve as u
};
