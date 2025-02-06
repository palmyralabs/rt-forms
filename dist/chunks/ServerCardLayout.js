import { jsx as C, Fragment as de } from "react/jsx-runtime";
import { useContext as le, useState as D, useCallback as ge, useEffect as N, forwardRef as T, useRef as x, useImperativeHandle as O } from "react";
import '../assets/FormGroup.css';import '../assets/FieldContainer.css';import '../assets/FieldGroupContainer.css';import '../assets/CardLayout.css';/* empty css           */
import { useKeyValue as me } from "../palmyra/utils/pubsub/PubSubHelper.js";
import { PalmyraForm as Z } from "../palmyra/form/PalmyraForm.js";
import { FieldGroupManagerContext as he, StoreFactoryContext as Fe } from "../palmyra/form/formContext.js";
import "@palmyralabs/ts-predicates";
import { hasDot as X, getValueByKey as ye, setValueByKey as b } from "@palmyralabs/ts-utils";
import { CardLayout as Pe } from "../palmyra/layout/card/CardLayout.js";
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
import { getSaveFormHandle as $ } from "../palmyra/form/formUtil.js";
/* empty css                    */
/* empty css               */
/* empty css          */
import { generatePredicate as ve, validate as q } from "../palmyra/form/validator/validatorHelper.js";
import { usePalmyraViewForm as Ve } from "../palmyra/form/useHelpers/usePalmyraViewForm.js";
import { usePalmyraNewForm as we } from "../palmyra/form/useHelpers/usePalmyraNewForm.js";
import { usePalmyraEditForm as Se } from "../palmyra/form/useHelpers/usePalmyraEditForm.js";
const Ee = (t, e, a) => {
  var Q, _;
  const r = le(he);
  if (!r)
    throw Error("useFieldManager must be called within the scope of <PalmyraForm>");
  const [n, c] = D({}), o = { ...e, ...n }, f = De(t, a), P = Ce(a), R = (l) => P(f(l)), B = ge(() => Re(t, a), [t])(), E = ve(o), A = r.getFieldRawData(f), I = Le(
    A,
    o,
    a,
    E,
    R,
    P
  ), [g, w] = D(I);
  N(() => {
    A != null && M();
  }, [n]);
  const m = g.value, d = g.error, Y = () => m, L = () => d != null && d.showError ? d : { status: !1, message: "" }, U = () => E, S = (l, y = !0, K = !0, W = !1) => {
    const F = typeof l == "function" ? l(m) : l, V = q(F, E, o);
    F === m && d && V.status == d.status && V.message == d.message || (r.setFieldValidity(t, !V.status), V.showError = K, e != null && e.readOnly && !W ? w((G) => ({ ...G, error: V })) : (w({ value: F, error: V }), y && F !== m && r.setFieldData(t, F)));
  }, M = () => {
    const l = q(m, E, o);
    d && d.showError && l.status == d.status && l.message == d.message || (l.showError = !0, w((y) => ({ ...y, error: l })));
  };
  N(() => {
    const { error: l, value: y } = g;
    r.setFieldData(t, y), r.setFieldValidity(t, !l.status);
  }, [g]);
  const v = {
    getValidator: U,
    getValue: Y,
    setValue: S,
    valueAccessor: R,
    valueWriter: B,
    rawValueAccessor: f,
    isValid: () => {
      var l;
      return g.error == null ? !q(m, E, o).status : !((l = g.error) != null && l.status);
    },
    getError: L,
    refreshError: M,
    mutateOptions: n,
    setMutateOptions: c,
    getFieldProps: () => {
      const {
        invalidMessage: l,
        missingMessage: y,
        validator: K,
        regExp: W,
        validRule: F,
        validFn: V,
        defaultValue: G,
        ...H
      } = o;
      return { ...H, ...n };
    }
  };
  return r.registerFieldManager(v, o), A == null && e.defaultValue && r.setFieldData(t, g.value), (Q = g.error) != null && Q.status && r.setFieldValidity(t, (_ = g.error) == null ? void 0 : _.status), v;
};
function De(t, e) {
  return e != null && e.fieldAccessor ? e.fieldAccessor : X(t) ? (r) => ye(t, r) : (r) => r == null ? void 0 : r[t];
}
function Ce(t) {
  if (t != null && t.parse) {
    const e = t.parse;
    return (a) => e(a);
  }
  return (e) => e ?? "";
}
function Re(t, e) {
  const a = e == null ? void 0 : e.format;
  return a ? e != null && e.fieldWriter ? (r, n) => e.fieldWriter(a(n), r) : X(t) ? (r, n) => b(t, r, a(n)) : (r, n) => b(t, r, a(n)) : e != null && e.fieldWriter ? (r, n) => e.fieldWriter(n, r) : X(t) ? (r, n) => b(t, r, n) : (r, n) => b(t, r, n);
}
const Le = (t, e, a, r, n, c) => {
  var o = null, f = void 0;
  return t == null ? e.defaultValue != null ? o = a != null && a.parse ? a.parse(e.defaultValue) : e.defaultValue : o = n({}) : o = c(t), f = q(o, r, e), f.status && (f.showError = t != null || e.defaultValue != null), { value: o, error: f };
}, st = T(function(e, a) {
  const r = e.storeFactory, { fetchData: n, saveData: c, formRef: o, refresh: f } = Se(e), P = a || x();
  return N(() => {
    n(), o.current.isValid() && e.onValidChange && e.onValidChange(!0);
  }, [o, e.id]), O(P, () => $(c, o, f)), /* @__PURE__ */ C(Z, { onValidChange: e.onValidChange, ref: o, storeFactory: r, children: e.children });
}), it = T(function(e, a) {
  const r = e.storeFactory, { saveData: n, formRef: c } = we(e), o = a || x();
  return O(o, () => $(n, c)), /* @__PURE__ */ C(
    Z,
    {
      onValidChange: e.onValidChange,
      formData: e.initialData,
      ref: c,
      storeFactory: r,
      children: e.children
    }
  );
}), lt = T(function(e, a) {
  const r = e.storeFactory, { formRef: n, refresh: c } = Ve(e), o = a || x();
  return N(() => {
    c();
  }, [e.endPoint]), O(o, () => $({}, n, c)), /* @__PURE__ */ C(Z, { ref: n, storeFactory: r, children: e.children });
}), ct = T(function(e, a) {
  const r = Ee(e.attribute, e), n = a || x(null), { getValue: c, setValue: o, isValid: f } = r;
  return O(n, () => ({
    getValue: c,
    setValue: o,
    isValid: f
  }), [r]), /* @__PURE__ */ C(de, {});
}), Me = 120;
function xe(t) {
  if (t.endPoint) {
    const e = le(Fe);
    if (!e)
      throw new Error("@palmyralabs/rt-forms - StoreFactoryContext is not available");
    return e.getGridStore(t.storeOptions, t.endPoint);
  } else
    throw new Error("Either store or endPoint must be provided");
}
const Ae = (t) => {
  var te, re, ne, ae, oe, se, ie;
  const { quickSearch: e, initialFetch: a = !0 } = t, r = x(null), n = t.store || xe(t), c = t.fetchAll != !1, o = ((te = t.defaultParams) == null ? void 0 : te.filter) || {}, f = ((re = t.defaultParams) == null ? void 0 : re.sort) || {}, P = t.pageSize ? t.pageSize : 15;
  var R = P instanceof Array ? P[0] : P;
  const B = ((ne = t.initParams) == null ? void 0 : ne.filter) || {}, E = ((ae = t.initParams) == null ? void 0 : ae.limit) || R, A = ((oe = t.initParams) == null ? void 0 : oe.offset) || 0, I = ((se = t.initParams) == null ? void 0 : se.sort) || {}, g = { ...B, ...o }, [w, m] = t.filterTopic ? me(t.filterTopic, g) : D(g), [d, Y] = D((ie = t.storeOptions) == null ? void 0 : ie.endPointOptions), [L, U] = D(I), [S, M] = D({ limit: E, offset: A, total: !0 }), [h, J] = D({ total: null, isLoading: !1, data: null }), v = (s) => {
    M((i) => ({ limit: i.limit, total: i.total, offset: s * i.limit }));
  }, Q = (s) => {
    const i = s > 0 || s == -1 ? s : 15;
    M((u) => {
      const j = Math.floor(u.offset / i) * i;
      return { limit: i, total: u.total, offset: j };
    });
  }, _ = () => w ? Object.keys(w).length == 0 : !1, l = (s, i) => {
    J((u) => (setTimeout(() => {
      t.onDataChange && t.onDataChange(s, u.data);
    }, 100), { data: s, total: i, isLoading: !1 }));
  }, y = () => l([], 0), K = () => l(void 0, null), W = () => p({}), F = () => Math.round(S.offset / S.limit), V = () => S, G = () => {
    J((s) => ({ ...s, isLoading: !0 }));
  };
  N(() => {
    (c || !_()) && k();
  }, [S, L, d]);
  const H = () => ({
    sortOrder: L && Object.keys(L).length > 0 ? L : f,
    total: !0,
    endPointVars: d,
    ...S,
    filter: { ...w, ...o }
  }), k = () => {
    const s = H();
    if (r.current != null) {
      const i = /* @__PURE__ */ new Date(), u = r.current, j = i.getTime() - u.getTime();
      if (j < Me) {
        h.isLoading || console.warn("ServerQueryManager: refresh called within short interval" + j);
        return;
      }
    } else if (!a) {
      r.current = new Date((/* @__PURE__ */ new Date()).getTime() - 6e4);
      return;
    }
    if (n)
      try {
        r.current = /* @__PURE__ */ new Date(), G(), n.query(s).then((i) => {
          l(i.result, i.total);
        }).catch((i) => {
          var u = i.response ? i.response : i;
          console.error("error while fetching", u), K();
        });
      } catch (i) {
        console.error(i), y();
      }
    else
      console.error("Store is not provided for the Grid"), y();
  }, ce = (s) => {
    const i = e;
    m(s ? (u) => (u[i] = s, { ...u }) : (u) => (delete u[i], { ...u })), v(0);
  }, p = (s) => {
    typeof s == "function" || s && Object.keys(s).length > 0 ? m(s) : m({}), v(0);
  }, ue = (s, i) => {
    m((u) => (u[s] = i, { ...u })), v(0);
  }, z = (s) => {
    U(s);
  }, fe = () => F() < ee() ? (v(F() + 1), !0) : !1, ee = () => Math.ceil((h == null ? void 0 : h.total) / (S.limit || 25));
  return {
    addFilter: ue,
    resetFilter: W,
    setFilter: p,
    setQuickSearch: ce,
    setSortColumns: z,
    setEndPointOptions: Y,
    getTotalPages: ee,
    refresh: k,
    setPageSize: Q,
    getPageNo: F,
    getQueryLimit: V,
    setQueryLimit: M,
    gotoPage: v,
    nextPage: fe,
    prevPage: () => {
      const s = F();
      return s > 0 ? (v(s - 1), !0) : !1;
    },
    export: (s) => {
      n.export ? n.export(s) : console.warn("Store does not implement export method");
    },
    getQueryRequest: H,
    setSortOptions: z,
    getCurrentFilter: () => w,
    getTotalRecords: () => h == null ? void 0 : h.total,
    getCurrentData: () => h == null ? void 0 : h.data,
    isLoading: h.isLoading
  };
}, ut = T(function(e, a) {
  const { Child: r, childProps: n } = e, c = a || x(null), o = Ae(e), f = e.listKeyProvider || ((P, R) => R);
  return O(c, () => ({
    ...o
  }), [o]), /* @__PURE__ */ C("div", { children: /* @__PURE__ */ C("div", { className: "card-page-container", children: /* @__PURE__ */ C(
    Pe,
    {
      Child: r,
      childKeyProvider: f,
      preProcess: e.preProcess,
      dataList: o.getCurrentData(),
      childProps: n,
      EmptyChild: e.EmptyChild,
      Loading: e.Loading,
      title: e.title
    }
  ) }) });
});
export {
  ct as H,
  st as P,
  ut as S,
  it as a,
  lt as b,
  Ae as c,
  Ee as u
};
