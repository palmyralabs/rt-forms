import { jsx as R, Fragment as dt } from "react/jsx-runtime";
import { useContext as lt, useState as C, useCallback as gt, useEffect as _, forwardRef as K, useRef as T, useImperativeHandle as W } from "react";
import '../assets/FormGroup.css';import '../assets/FieldContainer.css';import '../assets/FieldGroupContainer.css';import '../assets/CardLayout.css';/* empty css           */
import { useKeyValue as mt } from "../palmyra/utils/pubsub/PubSubHelper.js";
import { PalmyraForm as $ } from "../palmyra/form/PalmyraForm.js";
import { FieldGroupManagerContext as ht, StoreFactoryContext as Ft } from "../palmyra/form/formContext.js";
import "@palmyralabs/ts-predicates";
import { hasDot as Z, getValueByKey as yt, setValueByKey as q } from "@palmyralabs/ts-utils";
import { CardLayout as vt } from "../palmyra/layout/card/CardLayout.js";
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
const St = (e, t, o) => {
  var H, A;
  const r = lt(ht);
  if (!r)
    throw Error("useFieldManager must be called within the scope of <PalmyraForm>");
  const [a, c] = C({}), n = { ...t, ...a }, f = Dt(e, o), y = Ct(o), L = (l) => y(f(l)), I = gt(() => Rt(e, o), [e])(), E = Pt(n), O = r.getFieldRawData(f), Y = Lt(
    O,
    n,
    o,
    E,
    L,
    y
  ), [m, v] = C(Y);
  _(() => {
    O != null && x();
  }, [a]);
  const h = m.value, d = m.error, U = () => h, M = () => d != null && d.showError ? d : { status: !1, message: "" }, J = () => E, V = (l, F = !0, N = !0, D = !1) => {
    const w = typeof l == "function" ? l(h) : l, P = B(w, E, n);
    w === h && d && P.status == d.status && P.message == d.message || (r.setFieldValidity(e, !P.status), P.showError = N, t != null && t.readOnly && !D ? v((Q) => ({ ...Q, error: P })) : (v({ value: w, error: P }), F && w !== h && r.setFieldData(e, w)));
  }, x = () => {
    const l = B(h, E, n);
    d && d.showError && l.status == d.status && l.message == d.message || (l.showError = !0, v((F) => ({ ...F, error: l })));
  }, g = (l, F) => {
    v((N) => ({ ...N, error: { status: !0, message: l, showError: !0 } }));
  };
  _(() => {
    const { error: l, value: F } = m;
    r.setFieldData(e, F), r.setFieldValidity(e, !l.status);
  }, [m]);
  const G = {
    getValidator: J,
    getValue: U,
    setValue: V,
    valueAccessor: L,
    valueWriter: I,
    rawValueAccessor: f,
    isValid: () => {
      var l;
      return m.error == null ? !B(h, E, n).status : !((l = m.error) != null && l.status);
    },
    getError: M,
    refreshError: x,
    mutateOptions: a,
    setMutateOptions: c,
    getFieldProps: () => {
      const {
        invalidMessage: l,
        missingMessage: F,
        validator: N,
        regExp: D,
        validRule: w,
        validFn: P,
        defaultValue: Q,
        ...j
      } = n;
      return { ...j, ...a };
    },
    setError: g
  };
  return r.registerFieldManager(G, n), O == null && t.defaultValue && r.setFieldData(e, m.value), (H = m.error) != null && H.status && r.setFieldValidity(e, (A = m.error) == null ? void 0 : A.status), G;
};
function Dt(e, t) {
  return t != null && t.fieldAccessor ? t.fieldAccessor : Z(e) ? (r) => yt(e, r) : (r) => r == null ? void 0 : r[e];
}
function Ct(e) {
  if (e != null && e.parse) {
    const t = e.parse;
    return (o) => t(o);
  }
  return (t) => t ?? "";
}
function Rt(e, t) {
  const o = t == null ? void 0 : t.format;
  return o ? t != null && t.fieldWriter ? (r, a) => t.fieldWriter(o(a), r) : Z(e) ? (r, a) => q(e, r, o(a)) : (r, a) => q(e, r, o(a)) : t != null && t.fieldWriter ? (r, a) => t.fieldWriter(a, r) : Z(e) ? (r, a) => q(e, r, a) : (r, a) => q(e, r, a);
}
const Lt = (e, t, o, r, a, c) => {
  var n = null, f = void 0;
  return e == null ? t.defaultValue != null ? n = o != null && o.parse ? o.parse(t.defaultValue) : t.defaultValue : n = a({}) : n = c(e), f = B(n, r, t), f.status && (f.showError = e != null || t.defaultValue != null), { value: n, error: f };
}, se = K(function(t, o) {
  const r = t.storeFactory, { fetchData: a, saveData: c, formRef: n, refresh: f } = Et(t), y = o || T();
  return _(() => {
    a(), n.current.isValid() && t.onValidChange && t.onValidChange(!0);
  }, [n, t.id]), W(y, () => k(c, n, f)), /* @__PURE__ */ R($, { onValidChange: t.onValidChange, ref: n, storeFactory: r, children: t.children });
}), ie = K(function(t, o) {
  const r = t.storeFactory, { saveData: a, formRef: c } = wt(t), n = o || T();
  return W(n, () => k(a, c)), /* @__PURE__ */ R(
    $,
    {
      onValidChange: t.onValidChange,
      formData: t.initialData,
      ref: c,
      storeFactory: r,
      children: t.children
    }
  );
}), le = K(function(t, o) {
  const r = t.storeFactory, { formRef: a, refresh: c } = Vt(t), n = o || T();
  return _(() => {
    c();
  }, [t.endPoint]), W(n, () => k({}, a, c)), /* @__PURE__ */ R($, { ref: a, storeFactory: r, children: t.children });
}), ce = K(function(t, o) {
  const r = St(t.attribute, t), a = o || T(null), { getValue: c, setValue: n, isValid: f } = r;
  return W(a, () => ({
    getValue: c,
    setValue: n,
    isValid: f
  }), [r]), /* @__PURE__ */ R(dt, {});
}), Mt = 120;
function xt(e) {
  if (e.endPoint) {
    const t = lt(Ft);
    if (!t)
      throw new Error("@palmyralabs/rt-forms - StoreFactoryContext is not available");
    return t.getGridStore(e.storeOptions, e.endPoint);
  } else
    throw new Error("Either store or endPoint must be provided");
}
const At = (e) => {
  var et, rt, at, ot, nt, st, it;
  const { quickSearch: t, initialFetch: o = !0 } = e, r = T(null), a = e.store || xt(e), c = e.fetchAll != !1, n = ((et = e.defaultParams) == null ? void 0 : et.filter) || {}, f = ((rt = e.defaultParams) == null ? void 0 : rt.sort) || {}, y = e.pageSize ? e.pageSize : 15;
  var L = y instanceof Array ? y[0] : y;
  const I = ((at = e.initParams) == null ? void 0 : at.filter) || {}, E = ((ot = e.initParams) == null ? void 0 : ot.limit) || L, O = ((nt = e.initParams) == null ? void 0 : nt.offset) || 0, Y = ((st = e.initParams) == null ? void 0 : st.sort) || {}, m = { ...I, ...n }, [v, h] = e.filterTopic ? mt(e.filterTopic, m) : C(m), [d, U] = C((it = e.storeOptions) == null ? void 0 : it.endPointOptions), [M, J] = C(Y), [V, x] = C({ limit: E, offset: O, total: !0 }), [g, X] = C({ total: null, isLoading: !1, data: null }), S = (s) => {
    x((i) => ({ limit: i.limit, total: i.total, offset: s * i.limit }));
  }, G = (s) => {
    const i = s > 0 || s == -1 ? s : 15;
    x((u) => {
      const b = Math.floor(u.offset / i) * i;
      return { limit: i, total: u.total, offset: b };
    });
  }, H = () => v ? Object.keys(v).length == 0 : !1, A = (s, i) => {
    X((u) => (setTimeout(() => {
      e.onDataChange && e.onDataChange(s, u.data);
    }, 100), { data: s, total: i, isLoading: !1 }));
  }, l = () => A([], 0), F = () => A(void 0, null), N = () => p({}), D = () => Math.round(V.offset / V.limit), w = () => V, P = () => {
    X((s) => ({ ...s, isLoading: !0 }));
  };
  _(() => {
    (c || !H()) && j();
  }, [V, M, d]);
  const Q = () => ({
    sortOrder: M && Object.keys(M).length > 0 ? M : f,
    total: !0,
    endPointVars: d,
    ...V,
    filter: { ...v, ...n }
  }), j = () => {
    const s = Q();
    if (r.current != null) {
      const i = /* @__PURE__ */ new Date(), u = r.current, b = i.getTime() - u.getTime();
      if (b < Mt) {
        g.isLoading || console.warn("ServerQueryManager: refresh called within short interval" + b);
        return;
      }
    } else if (!o) {
      r.current = new Date((/* @__PURE__ */ new Date()).getTime() - 6e4);
      return;
    }
    if (a)
      try {
        r.current = /* @__PURE__ */ new Date(), P(), a.query(s).then((i) => {
          A(i.result, i.total);
        }).catch((i) => {
          var u = i.response ? i.response : i;
          console.error("error while fetching", u), F();
        });
      } catch (i) {
        console.error(i), l();
      }
    else
      console.error("Store is not provided for the Grid"), l();
  }, ct = (s) => {
    const i = t;
    h(s ? (u) => (u[i] = s, { ...u }) : (u) => (delete u[i], { ...u })), S(0);
  }, p = (s) => {
    typeof s == "function" || s && Object.keys(s).length > 0 ? h(s) : h({}), S(0);
  }, ut = (s, i) => {
    h((u) => (u[s] = i, { ...u })), S(0);
  }, z = (s) => {
    J(s);
  }, ft = () => D() < tt() ? (S(D() + 1), !0) : !1, tt = () => Math.ceil((g == null ? void 0 : g.total) / (V.limit || 25));
  return {
    addFilter: ut,
    resetFilter: N,
    setFilter: p,
    setQuickSearch: ct,
    setSortColumns: z,
    setEndPointOptions: U,
    getTotalPages: tt,
    refresh: j,
    setPageSize: G,
    getPageNo: D,
    getQueryLimit: w,
    setQueryLimit: x,
    gotoPage: S,
    nextPage: ft,
    prevPage: () => {
      const s = D();
      return s > 0 ? (S(s - 1), !0) : !1;
    },
    export: (s) => {
      a.export ? a.export(s) : console.warn("Store does not implement export method");
    },
    getQueryRequest: Q,
    setSortOptions: z,
    getCurrentFilter: () => v,
    getTotalRecords: () => g == null ? void 0 : g.total,
    getCurrentData: () => g == null ? void 0 : g.data,
    isLoading: g.isLoading
  };
}, ue = K(function(t, o) {
  const { Child: r, childProps: a } = t, c = o || T(null), n = At(t), f = t.listKeyProvider || ((y, L) => L);
  return W(c, () => ({
    ...n
  }), [n]), /* @__PURE__ */ R("div", { children: /* @__PURE__ */ R("div", { className: "card-page-container", children: /* @__PURE__ */ R(
    vt,
    {
      Child: r,
      childKeyProvider: f,
      preProcess: t.preProcess,
      dataList: n.getCurrentData(),
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
