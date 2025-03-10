import { jsx as C, Fragment as ft } from "react/jsx-runtime";
import { useContext as it, useState as D, useCallback as gt, useEffect as _, forwardRef as K, useRef as N, useImperativeHandle as W } from "react";
import '../assets/FormGroup.css';import '../assets/FieldContainer.css';import '../assets/FieldGroupContainer.css';import '../assets/CardLayout.css';/* empty css           */
import { useKeyValue as mt } from "../palmyra/utils/pubsub/PubSubHelper.js";
import { PalmyraForm as $ } from "../palmyra/form/PalmyraForm.js";
import { FieldGroupManagerContext as ht, StoreFactoryContext as Ft } from "../palmyra/form/formContext.js";
import "@palmyralabs/ts-predicates";
import { hasDot as Z, getValueByKey as vt, setValueByKey as q } from "@palmyralabs/ts-utils";
import { CardLayout as yt } from "../palmyra/layout/card/CardLayout.js";
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
import { getSaveFormHandle as k } from "../palmyra/form/formUtil.js";
/* empty css                    */
/* empty css               */
/* empty css          */
import { generatePredicate as Pt, validate as B } from "../palmyra/form/validator/validatorHelper.js";
import { usePalmyraViewForm as Vt } from "../palmyra/form/useHelpers/usePalmyraViewForm.js";
import { usePalmyraNewForm as wt } from "../palmyra/form/useHelpers/usePalmyraNewForm.js";
import { usePalmyraEditForm as Et } from "../palmyra/form/useHelpers/usePalmyraEditForm.js";
const St = (e, t, s) => {
  var H, x;
  const r = it(ht);
  if (!r)
    throw Error("useFieldManager must be called within the scope of <PalmyraForm>");
  const [a, c] = D({}), i = { ...t, ...a }, d = Dt(e, s), v = Ct(s), R = (l) => v(d(l)), I = gt(() => Rt(e, s), [e])(), E = Pt(i), Q = r.getFieldRawData(d), Y = Lt(
    Q,
    i,
    s,
    E,
    R,
    v
  ), [m, y] = D(Y);
  _(() => {
    Q != null && M();
  }, [a]);
  const h = m.value, f = m.error, U = () => h, L = () => f != null && f.showError ? f : { status: !1, message: "" }, J = () => E, V = (l, F = !0, A = !0, T = !1) => {
    const w = typeof l == "function" ? l(h) : l, P = B(w, E, i);
    w === h && f && P.status == f.status && P.message == f.message || (r.setFieldValidity(e, !P.status), P.showError = A, t != null && t.readOnly && !T ? y((O) => ({ ...O, error: P })) : (y({ value: w, error: P }), F && w !== h && r.setFieldData(e, w)));
  }, M = () => {
    const l = B(h, E, i);
    f && f.showError && l.status == f.status && l.message == f.message || (l.showError = !0, y((F) => ({ ...F, error: l })));
  }, g = (l, F) => {
    y((A) => ({ ...A, error: { status: !0, message: l, showError: !0 } }));
  };
  _(() => {
    const { error: l, value: F } = m;
    r.setFieldData(e, F), r.setFieldValidity(e, !l.status);
  }, [m]);
  const G = {
    getValidator: J,
    getValue: U,
    setValue: V,
    valueAccessor: R,
    valueWriter: I,
    rawValueAccessor: d,
    isValid: () => {
      var l;
      return m.error == null ? !B(h, E, i).status : !((l = m.error) != null && l.status);
    },
    getError: L,
    refreshError: M,
    mutateOptions: a,
    setMutateOptions: c,
    getFieldProps: () => {
      const {
        invalidMessage: l,
        missingMessage: F,
        validator: A,
        regExp: T,
        validRule: w,
        validFn: P,
        defaultValue: O,
        ...j
      } = i;
      return { ...j, ...a };
    },
    setError: g
  };
  return r.registerFieldManager(G, i), Q == null && t.defaultValue && r.setFieldData(e, m.value), (H = m.error) != null && H.status && r.setFieldValidity(e, (x = m.error) == null ? void 0 : x.status), G;
};
function Dt(e, t) {
  return t != null && t.fieldAccessor ? t.fieldAccessor : Z(e) ? (r) => vt(e, r) : (r) => r == null ? void 0 : r[e];
}
function Ct(e) {
  if (e != null && e.parse) {
    const t = e.parse;
    return (s) => t(s);
  }
  return (t) => t ?? "";
}
function Rt(e, t) {
  const s = t == null ? void 0 : t.format;
  return s ? t != null && t.fieldWriter ? (r, a) => t.fieldWriter(s(a), r) : Z(e) ? (r, a) => q(e, r, s(a)) : (r, a) => q(e, r, s(a)) : t != null && t.fieldWriter ? (r, a) => t.fieldWriter(a, r) : Z(e) ? (r, a) => q(e, r, a) : (r, a) => q(e, r, a);
}
const Lt = (e, t, s, r, a, c) => {
  var i = null, d = void 0;
  return e == null ? t.defaultValue != null ? i = s != null && s.parse ? s.parse(t.defaultValue) : t.defaultValue : i = a({}) : i = c(e), d = B(i, r, t), d.status && (d.showError = e != null || t.defaultValue != null), { value: i, error: d };
}, se = K(function(t, s) {
  const r = t.storeFactory, { fetchData: a, saveData: c, formRef: i, refresh: d } = Et(t), v = s || N();
  return _(() => {
    a(), i.current.isValid() && t.onValidChange && t.onValidChange(!0);
  }, [i, t.id]), W(v, () => k(c, i, d)), /* @__PURE__ */ C($, { onValidChange: t.onValidChange, ref: i, storeFactory: r, children: t.children });
}), ie = K(function(t, s) {
  const r = t.storeFactory, { saveData: a, formRef: c } = wt(t), i = s || N();
  return W(i, () => k(a, c)), /* @__PURE__ */ C(
    $,
    {
      onValidChange: t.onValidChange,
      formData: t.initialData,
      ref: c,
      storeFactory: r,
      children: t.children
    }
  );
}), le = K(function(t, s) {
  const r = t.storeFactory, { formRef: a, refresh: c } = Vt(t), i = s || N();
  return _(() => {
    c();
  }, [t.endPoint]), W(i, () => k({}, a, c)), /* @__PURE__ */ C($, { ref: a, storeFactory: r, children: t.children });
}), ce = K(function(t, s) {
  const r = St(t.attribute, t), a = s || N(null), { getValue: c, setValue: i, isValid: d } = r;
  return W(a, () => ({
    getValue: c,
    setValue: i,
    isValid: d
  }), [r]), /* @__PURE__ */ C(ft, {});
}), Mt = 120;
function xt(e) {
  if (e.endPoint) {
    const t = it(Ft);
    if (!t)
      throw new Error("@palmyralabs/rt-forms - StoreFactoryContext is not available");
    return t.getGridStore(e.storeOptions, e.endPoint);
  } else
    throw new Error("Either store or endPoint must be provided");
}
const At = (e) => {
  var tt, et, rt, at, nt, ot, st;
  const { quickSearch: t, initialFetch: s = !0 } = e, r = N(null), a = e.store || xt(e), c = e.fetchAll != !1, i = ((tt = e.defaultParams) == null ? void 0 : tt.filter) || {}, d = ((et = e.defaultParams) == null ? void 0 : et.sort) || {}, v = e.pageSize ? e.pageSize : 15;
  var R = v instanceof Array ? v[0] : v;
  const I = ((rt = e.initParams) == null ? void 0 : rt.filter) || {}, E = ((at = e.initParams) == null ? void 0 : at.limit) || R, Q = ((nt = e.initParams) == null ? void 0 : nt.offset) || 0, Y = ((ot = e.initParams) == null ? void 0 : ot.sort) || {}, m = { ...I, ...i }, [y, h] = e.filterTopic ? mt(e.filterTopic, m) : D(m), [f, U] = D((st = e.storeOptions) == null ? void 0 : st.endPointOptions), [L, J] = D(Y), [V, M] = D({ limit: E, offset: Q, total: !0 }), [g, X] = D({ total: null, isLoading: !1, data: null }), S = (n) => {
    M((o) => ({ limit: o.limit, total: o.total, offset: n * o.limit }));
  }, G = (n) => {
    const o = n > 0 || n == -1 ? n : 15;
    M((u) => {
      const b = Math.floor(u.offset / o) * o;
      return { limit: o, total: u.total, offset: b };
    });
  }, H = () => y ? Object.keys(y).length == 0 : !1, x = (n, o) => {
    X((u) => (setTimeout(() => {
      e.onDataChange && e.onDataChange(n, u.data);
    }, 100), { data: n, total: o, isLoading: !1 }));
  }, l = () => x([], 0), F = () => x(void 0, null), A = () => p({}), T = () => Math.round(V.offset / V.limit), w = () => V, P = () => {
    X((n) => ({ ...n, isLoading: !0 }));
  };
  _(() => {
    (c || !H()) && j();
  }, [V, L, f]);
  const O = () => ({
    sortOrder: L && Object.keys(L).length > 0 ? L : d,
    total: !0,
    endPointVars: f,
    ...V,
    filter: { ...y, ...i }
  }), j = () => {
    const n = O();
    if (r.current != null) {
      const o = /* @__PURE__ */ new Date(), u = r.current, b = o.getTime() - u.getTime();
      if (b < Mt) {
        g.isLoading || console.warn("ServerQueryManager: refresh called within short interval" + b);
        return;
      }
    } else if (!s) {
      r.current = new Date((/* @__PURE__ */ new Date()).getTime() - 6e4);
      return;
    }
    if (a)
      try {
        r.current = /* @__PURE__ */ new Date(), P(), a.query(n).then((o) => {
          x(o.result, o.total);
        }).catch((o) => {
          var u = o.response ? o.response : o;
          console.error("error while fetching", u), F();
        });
      } catch (o) {
        console.error(o), l();
      }
    else
      console.error("Store is not provided for the Grid"), l();
  }, lt = (n) => {
    const o = t;
    h(n ? (u) => (u[o] = n, { ...u }) : (u) => (delete u[o], { ...u })), S(0);
  }, p = (n) => {
    typeof n == "function" || n && Object.keys(n).length > 0 ? h(n) : h({}), S(0);
  }, ct = (n, o) => {
    h((u) => (u[n] = o, { ...u })), S(0);
  }, ut = (n) => {
    J(n);
  }, dt = () => {
    const n = T();
    if (n < z()) {
      const o = n + 1;
      return S(o), o;
    }
    return -1;
  }, z = () => Math.ceil((g == null ? void 0 : g.total) / (V.limit || 25));
  return {
    addFilter: ct,
    resetFilter: A,
    setFilter: p,
    setQuickSearch: lt,
    setSortColumns: ut,
    setEndPointOptions: U,
    getTotalPages: z,
    refresh: j,
    setPageSize: G,
    getPageNo: T,
    getQueryLimit: w,
    setQueryLimit: M,
    gotoPage: S,
    nextPage: dt,
    prevPage: () => {
      const n = T();
      if (n > 0) {
        const o = n - 1;
        return S(o), o;
      }
      return -1;
    },
    export: (n) => {
      a.export ? a.export(n) : console.warn("Store does not implement export method");
    },
    getQueryRequest: O,
    getCurrentFilter: () => y,
    getTotalRecords: () => g == null ? void 0 : g.total,
    getCurrentData: () => g == null ? void 0 : g.data,
    isLoading: g.isLoading
  };
}, ue = K(function(t, s) {
  const { Child: r, childProps: a } = t, c = s || N(null), i = At(t), d = t.listKeyProvider || ((v, R) => R);
  return W(c, () => ({
    ...i
  }), [i]), /* @__PURE__ */ C("div", { children: /* @__PURE__ */ C("div", { className: "card-page-container", children: /* @__PURE__ */ C(
    yt,
    {
      Child: r,
      childKeyProvider: d,
      preProcess: t.preProcess,
      dataList: i.getCurrentData(),
      childProps: a,
      EmptyChild: t.EmptyChild,
      Loading: t.Loading,
      title: t.title
    }
  ) }) });
});
export {
  ce as H,
  se as P,
  ue as S,
  ie as a,
  le as b,
  At as c,
  St as u
};
