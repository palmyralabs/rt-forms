import { jsx as C, Fragment as dt } from "react/jsx-runtime";
import { useContext as it, useState as D, useCallback as gt, useEffect as B, forwardRef as _, useRef as N, useImperativeHandle as K } from "react";
import '../assets/FormGroup.css';import '../assets/FieldContainer.css';import '../assets/FieldGroupContainer.css';import '../assets/CardLayout.css';/* empty css           */
import { useKeyValue as mt } from "../palmyra/utils/pubsub/PubSubHelper.js";
import { PalmyraForm as Z } from "../palmyra/form/PalmyraForm.js";
import { FieldGroupManagerContext as ht, StoreFactoryContext as Ft } from "../palmyra/form/formContext.js";
import "@palmyralabs/ts-predicates";
import { hasDot as X, getValueByKey as vt, setValueByKey as b } from "@palmyralabs/ts-utils";
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
import { getSaveFormHandle as $ } from "../palmyra/form/formUtil.js";
/* empty css                    */
/* empty css               */
/* empty css          */
import { generatePredicate as Pt, validate as q } from "../palmyra/form/validator/validatorHelper.js";
import { usePalmyraViewForm as Vt } from "../palmyra/form/useHelpers/usePalmyraViewForm.js";
import { usePalmyraNewForm as wt } from "../palmyra/form/useHelpers/usePalmyraNewForm.js";
import { usePalmyraEditForm as Et } from "../palmyra/form/useHelpers/usePalmyraEditForm.js";
const St = (e, t, s) => {
  var G, x;
  const r = it(ht);
  if (!r)
    throw Error("useFieldManager must be called within the scope of <PalmyraForm>");
  const [a, u] = D({}), i = { ...t, ...a }, f = Dt(e, s), v = Ct(s), R = (l) => v(f(l)), I = gt(() => Rt(e, s), [e])(), E = Pt(i), Q = r.getFieldRawData(f), Y = Lt(
    Q,
    i,
    s,
    E,
    R,
    v
  ), [m, y] = D(Y);
  B(() => {
    Q != null && M();
  }, [a]);
  const h = m.value, d = m.error, U = () => h, L = () => d != null && d.showError ? d : { status: !1, message: "" }, p = () => E, V = (l, F = !0, A = !0, T = !1) => {
    const w = typeof l == "function" ? l(h) : l, P = q(w, E, i);
    w === h && d && P.status == d.status && P.message == d.message || (r.setFieldValidity(e, !P.status), P.showError = A, t != null && t.readOnly && !T ? y((O) => ({ ...O, error: P })) : (y({ value: w, error: P }), F && w !== h && r.setFieldData(e, w)));
  }, M = () => {
    const l = q(h, E, i);
    d && d.showError && l.status == d.status && l.message == d.message || (l.showError = !0, y((F) => ({ ...F, error: l })));
  }, g = (l, F) => {
    y((A) => ({ ...A, error: { status: !0, message: l, showError: !0 } }));
  };
  B(() => {
    const { error: l, value: F } = m;
    r.setFieldData(e, F), r.setFieldValidity(e, !l.status);
  }, [m]);
  const W = {
    getValidator: p,
    getValue: U,
    setValue: V,
    valueAccessor: R,
    valueWriter: I,
    rawValueAccessor: f,
    isValid: () => {
      var l;
      return m.error == null ? !q(h, E, i).status : !((l = m.error) != null && l.status);
    },
    getError: L,
    refreshError: M,
    mutateOptions: a,
    setMutateOptions: u,
    getFieldProps: () => {
      const {
        invalidMessage: l,
        missingMessage: F,
        validator: A,
        regExp: T,
        validRule: w,
        validFn: P,
        defaultValue: O,
        ...H
      } = i;
      return { ...H, ...a };
    },
    setError: g
  };
  return r.registerFieldManager(W, i), Q == null && t.defaultValue && r.setFieldData(e, m.value), (G = m.error) != null && G.status && r.setFieldValidity(e, (x = m.error) == null ? void 0 : x.status), W;
};
function Dt(e, t) {
  return t != null && t.fieldAccessor ? t.fieldAccessor : X(e) ? (r) => vt(e, r) : (r) => r == null ? void 0 : r[e];
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
  return s ? t != null && t.fieldWriter ? (r, a) => t.fieldWriter(s(a), r) : X(e) ? (r, a) => b(e, r, s(a)) : (r, a) => b(e, r, s(a)) : t != null && t.fieldWriter ? (r, a) => t.fieldWriter(a, r) : X(e) ? (r, a) => b(e, r, a) : (r, a) => b(e, r, a);
}
const Lt = (e, t, s, r, a, u) => {
  var i = null, f = void 0;
  return e == null ? t.defaultValue != null ? i = s != null && s.parse ? s.parse(t.defaultValue) : t.defaultValue : i = a({}) : i = u(e), f = q(i, r, t), f.status && (f.showError = e != null || t.defaultValue != null), { value: i, error: f };
}, se = _(function(t, s) {
  const r = t.storeFactory, { fetchData: a, saveData: u, formRef: i, refresh: f } = Et(t), v = s || N();
  return B(() => {
    a(), i.current.isValid() && t.onValidChange && t.onValidChange(!0);
  }, [i, t.id]), K(v, () => $(u, i, f)), /* @__PURE__ */ C(Z, { onValidChange: t.onValidChange, ref: i, storeFactory: r, children: t.children });
}), ie = _(function(t, s) {
  const r = t.storeFactory, { saveData: a, formRef: u } = wt(t), i = s || N();
  return K(i, () => $(a, u)), /* @__PURE__ */ C(
    Z,
    {
      onValidChange: t.onValidChange,
      formData: t.initialData,
      ref: u,
      storeFactory: r,
      children: t.children
    }
  );
}), le = _(function(t, s) {
  const r = t.storeFactory, { formRef: a, refresh: u } = Vt(t), i = s || N();
  return K(i, () => $({}, a, u)), /* @__PURE__ */ C(Z, { ref: a, storeFactory: r, children: t.children });
}), ce = _(function(t, s) {
  const r = St(t.attribute, t), a = s || N(null), { getValue: u, setValue: i, isValid: f } = r;
  return K(a, () => ({
    getValue: u,
    setValue: i,
    isValid: f
  }), [r]), /* @__PURE__ */ C(dt, {});
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
  var tt, et, rt, at, ot, nt, st;
  const { quickSearch: t, initialFetch: s = !0 } = e, r = N(null), a = e.store || xt(e), u = e.fetchAll != !1, i = ((tt = e.defaultParams) == null ? void 0 : tt.filter) || {}, f = ((et = e.defaultParams) == null ? void 0 : et.sort) || {}, v = e.pageSize ? e.pageSize : 15;
  var R = v instanceof Array ? v[0] : v;
  const I = ((rt = e.initParams) == null ? void 0 : rt.filter) || {}, E = ((at = e.initParams) == null ? void 0 : at.limit) || R, Q = ((ot = e.initParams) == null ? void 0 : ot.offset) || 0, Y = ((nt = e.initParams) == null ? void 0 : nt.sort) || {}, m = { ...I, ...i }, [y, h] = e.filterTopic ? mt(e.filterTopic, m) : D(m), [d, U] = D((st = e.storeOptions) == null ? void 0 : st.endPointOptions), [L, p] = D(Y), [V, M] = D({ limit: E, offset: Q, total: !0 }), [g, J] = D({ total: null, isLoading: !1, data: null }), S = (o) => {
    M((n) => ({ limit: n.limit, total: n.total, offset: o * n.limit }));
  }, W = (o) => {
    const n = o > 0 || o == -1 ? o : 15;
    M((c) => {
      const j = Math.floor(c.offset / n) * n;
      return { limit: n, total: c.total, offset: j };
    });
  }, G = () => y ? Object.keys(y).length == 0 : !1, x = (o, n) => {
    J((c) => (setTimeout(() => {
      e.onDataChange && e.onDataChange(o, c.data);
    }, 100), { data: o, total: n, isLoading: !1 }));
  }, l = () => x([], 0), F = () => x(void 0, null), A = () => k({}), T = () => Math.round(V.offset / V.limit), w = () => V, P = () => {
    J((o) => ({ ...o, isLoading: !0 }));
  };
  B(() => {
    (u || !G()) && H();
  }, [V, L, d]);
  const O = () => ({
    sortOrder: L && Object.keys(L).length > 0 ? L : f,
    total: !0,
    endPointVars: d,
    ...V,
    filter: { ...y, ...i }
  }), H = () => {
    const o = O();
    if (r.current != null) {
      const n = /* @__PURE__ */ new Date(), c = r.current, j = n.getTime() - c.getTime();
      if (j < Mt) {
        g.isLoading || console.warn("ServerQueryManager: refresh called within short interval" + j);
        return;
      }
    } else if (!s) {
      r.current = new Date((/* @__PURE__ */ new Date()).getTime() - 6e4);
      return;
    }
    if (a)
      try {
        r.current = /* @__PURE__ */ new Date(), P(), a.query(o).then((n) => {
          x(n.result, n.total);
        }).catch((n) => {
          var c = n.response ? n.response : n;
          console.error("error while fetching", c), F();
        });
      } catch (n) {
        console.error(n), l();
      }
    else
      console.error("Store is not provided for the Grid"), l();
  }, lt = (o) => {
    const n = t;
    h(o ? (c) => (c[n] = o, { ...c }) : (c) => (delete c[n], { ...c })), S(0);
  }, k = (o) => {
    typeof o == "function" || o && Object.keys(o).length > 0 ? h(o) : h({}), S(0);
  }, ct = (o, n) => {
    h((c) => (c[o] = n, { ...c })), S(0);
  }, ut = (o) => {
    p(o);
  }, ft = () => {
    const o = T();
    if (o < z()) {
      const n = o + 1;
      return S(n), n;
    }
    return -1;
  }, z = () => Math.ceil((g == null ? void 0 : g.total) / (V.limit || 25));
  return {
    addFilter: ct,
    resetFilter: A,
    setFilter: k,
    setQuickSearch: lt,
    setSortColumns: ut,
    setEndPointOptions: U,
    getTotalPages: z,
    refresh: H,
    setPageSize: W,
    getPageNo: T,
    getQueryLimit: w,
    setQueryLimit: M,
    gotoPage: S,
    nextPage: ft,
    prevPage: () => {
      const o = T();
      if (o > 0) {
        const n = o - 1;
        return S(n), n;
      }
      return -1;
    },
    export: (o) => {
      a.export ? a.export(o) : console.warn("Store does not implement export method");
    },
    getQueryRequest: O,
    getCurrentFilter: () => y,
    getTotalRecords: () => g == null ? void 0 : g.total,
    getCurrentData: () => g == null ? void 0 : g.data,
    isLoading: g.isLoading
  };
}, ue = _(function(t, s) {
  const { Child: r, childProps: a } = t, u = s || N(null), i = At(t), f = t.listKeyProvider || ((v, R) => R);
  return K(u, () => ({
    ...i
  }), [i]), /* @__PURE__ */ C("div", { children: /* @__PURE__ */ C("div", { className: "card-page-container", children: /* @__PURE__ */ C(
    yt,
    {
      Child: r,
      childKeyProvider: f,
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
