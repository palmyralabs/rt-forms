import { jsx as C, Fragment as ae } from "react/jsx-runtime";
import { useContext as te, useState as D, useCallback as oe, useEffect as T, forwardRef as O, useRef as L, useImperativeHandle as Q } from "react";
import '../assets/FormGroup.css';import '../assets/FieldContainer.css';import '../assets/FieldGroupContainer.css';import '../assets/CardLayout.css';/* empty css           */
import { useKeyValue as ne } from "../palmyra/utils/pubsub/PubSubHelper.js";
import { PalmyraForm as X } from "../palmyra/form/PalmyraForm.js";
import { FieldGroupManagerContext as se, StoreFactoryContext as ie } from "../palmyra/form/formContext.js";
import "@palmyralabs/ts-predicates";
import { hasDot as J, getValueByKey as le, setValueByKey as q } from "@palmyralabs/ts-utils";
import { CardLayout as ce } from "../palmyra/layout/card/CardLayout.js";
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
import { generatePredicate as ue, validate as B } from "../palmyra/form/validator/validatorHelper.js";
import { usePalmyraViewForm as de } from "../palmyra/form/useHelpers/usePalmyraViewForm.js";
import { usePalmyraNewForm as fe } from "../palmyra/form/useHelpers/usePalmyraNewForm.js";
import { usePalmyraEditForm as ge } from "../palmyra/form/useHelpers/usePalmyraEditForm.js";
const me = (t, e, n) => {
  var G, E;
  const r = te(se);
  if (!r)
    throw Error("useFieldManager must be called within the scope of <PalmyraForm>");
  const [a, c] = D({}), o = { ...e, ...a }, d = he(t, n), F = Fe(n), y = (l) => F(d(l)), M = oe(() => ye(t, n), [t])(), S = ue(o), R = r.getFieldRawData(d), I = ve(
    R,
    o,
    n,
    S,
    y,
    F
  ), [f, x] = D(I);
  T(() => {
    R != null && _();
  }, [a]);
  const m = f.value, g = f.error, h = () => m, p = () => g != null && g.showError ? g : { status: !1, message: "" }, V = () => S, Y = (l, P = !0, A = !0, N = !1) => {
    const w = typeof l == "function" ? l(m) : l, v = B(w, S, o);
    w === m && g && v.status == g.status && v.message == g.message || (r.setFieldValidity(t, !v.status), v.showError = A, e != null && e.readOnly && !N ? x((H) => ({ ...H, error: v })) : (x({ value: w, error: v }), P && w !== m && r.setFieldData(t, w)));
  }, _ = () => {
    const l = B(m, S, o);
    g && g.showError && l.status == g.status && l.message == g.message || (l.showError = !0, x((P) => ({ ...P, error: l })));
  };
  T(() => {
    const { error: l, value: P } = f;
    r.setFieldData(t, P), r.setFieldValidity(t, !l.status);
  }, [f]);
  const W = {
    getValidator: V,
    getValue: h,
    setValue: Y,
    valueAccessor: y,
    valueWriter: M,
    rawValueAccessor: d,
    isValid: () => {
      var l;
      return f.error == null ? !B(m, S, o).status : !((l = f.error) != null && l.status);
    },
    getError: p,
    refreshError: _,
    mutateOptions: a,
    setMutateOptions: c,
    getFieldProps: () => {
      const {
        invalidMessage: l,
        missingMessage: P,
        validator: A,
        regExp: N,
        validRule: w,
        validFn: v,
        defaultValue: H,
        ...j
      } = o;
      return { ...j, ...a };
    }
  };
  return r.registerFieldManager(W, o), R == null && e.defaultValue && r.setFieldData(t, f.value), (G = f.error) != null && G.status && r.setFieldValidity(t, (E = f.error) == null ? void 0 : E.status), W;
};
function he(t, e) {
  return e != null && e.fieldAccessor ? e.fieldAccessor : J(t) ? (r) => le(t, r) : (r) => r == null ? void 0 : r[t];
}
function Fe(t) {
  if (t != null && t.parse) {
    const e = t.parse;
    return (n) => e(n);
  }
  return (e) => e ?? "";
}
function ye(t, e) {
  const n = e == null ? void 0 : e.format;
  return n ? e != null && e.fieldWriter ? (r, a) => e.fieldWriter(n(a), r) : J(t) ? (r, a) => q(t, r, n(a)) : (r, a) => q(t, r, n(a)) : e != null && e.fieldWriter ? (r, a) => e.fieldWriter(a, r) : J(t) ? (r, a) => q(t, r, a) : (r, a) => q(t, r, a);
}
const ve = (t, e, n, r, a, c) => {
  var o = null, d = void 0;
  return t == null ? e.defaultValue != null ? o = n != null && n.parse ? n.parse(e.defaultValue) : e.defaultValue : o = a({}) : o = c(t), d = B(o, r, e), d.status && (d.showError = t != null || e.defaultValue != null), { value: o, error: d };
}, $e = O(function(e, n) {
  const r = e.storeFactory, { fetchData: a, saveData: c, formRef: o, refresh: d } = ge(e), F = n || L();
  return T(() => {
    a(), o.current.isValid() && e.onValidChange && e.onValidChange(!0);
  }, [o, e.id]), Q(F, () => Z(c, o, d)), /* @__PURE__ */ C(X, { onValidChange: e.onValidChange, ref: o, storeFactory: r, children: e.children });
}), ke = O(function(e, n) {
  const r = e.storeFactory, { saveData: a, formRef: c } = fe(e), o = n || L();
  return Q(o, () => Z(a, c)), /* @__PURE__ */ C(
    X,
    {
      onValidChange: e.onValidChange,
      formData: e.initialData,
      ref: c,
      storeFactory: r,
      children: e.children
    }
  );
}), ze = O(function(e, n) {
  const r = e.storeFactory, { formRef: a, refresh: c } = de(e), o = n || L();
  return T(() => {
    c();
  }, [e.endPoint]), Q(o, () => Z({}, a, c)), /* @__PURE__ */ C(X, { ref: a, storeFactory: r, children: e.children });
}), et = O(function(e, n) {
  const r = me(e.attribute, e), a = n || L(null), { getValue: c, setValue: o, isValid: d } = r;
  return Q(a, () => ({
    getValue: c,
    setValue: o,
    isValid: d
  }), [r]), /* @__PURE__ */ C(ae, {});
}), Pe = 120;
function Ve(t) {
  if (t.endPoint) {
    const e = te(ie);
    if (!e)
      throw new Error("@palmyralabs/rt-forms - StoreFactoryContext is not available");
    return e.getGridStore(t.storeOptions, t.endPoint);
  } else
    throw new Error("Either store or endPoint must be provided");
}
const we = (t) => {
  var k, z, ee;
  const { quickSearch: e, initialFetch: n = !0 } = t, r = L(null), a = t.store || Ve(t), c = t.fetchAll != !1, o = ((k = t.defaultParams) == null ? void 0 : k.filter) || {}, d = ((z = t.defaultParams) == null ? void 0 : z.sort) || {}, [F, y] = t.filterTopic ? ne(t.filterTopic, o) : D(o), M = t.pageSize ? t.pageSize : 15;
  var S = M instanceof Array ? M[0] : M;
  const [R, I] = D((ee = t.storeOptions) == null ? void 0 : ee.endPointOptions), [f, x] = D({}), [m, g] = D({ limit: S, offset: 0, total: !0 }), [h, p] = D({ total: null, isLoading: !1, data: null }), V = (s) => {
    g((i) => ({ limit: i.limit, total: i.total, offset: s * i.limit }));
  }, Y = (s) => {
    const i = s > 10 || s == -1 ? s : 15;
    g((u) => {
      const b = Math.floor(u.offset / i) * i;
      return { limit: i, total: u.total, offset: b };
    });
  }, _ = () => F ? Object.keys(F).length == 0 : !1, K = (s, i) => {
    p((u) => (setTimeout(() => {
      t.onDataChange && t.onDataChange(s, u.data);
    }, 100), { data: s, total: i, isLoading: !1 }));
  }, U = () => K([], 0), W = () => K(void 0, null), G = () => v({}), E = () => Math.round(m.offset / m.limit), l = () => m, P = () => {
    p((s) => ({ ...s, isLoading: !0 }));
  };
  T(() => {
    (c || !_()) && N();
  }, [m, f, R]);
  const A = () => ({
    sortOrder: f && Object.keys(f).length > 0 ? f : d,
    total: !0,
    endPointVars: R,
    ...m,
    filter: { ...F, ...o }
  }), N = () => {
    const s = A();
    if (r.current != null) {
      const i = /* @__PURE__ */ new Date(), u = r.current, b = i.getTime() - u.getTime();
      if (b < Pe) {
        h.isLoading || console.warn("ServerQueryManager: refresh called within short interval" + b);
        return;
      }
    } else if (!n) {
      r.current = new Date((/* @__PURE__ */ new Date()).getTime() - 6e4);
      return;
    }
    if (a)
      try {
        r.current = /* @__PURE__ */ new Date(), P(), a.query(s).then((i) => {
          K(i.result, i.total);
        }).catch((i) => {
          var u = i.response ? i.response : i;
          console.error("error while fetching", u), W();
        });
      } catch (i) {
        console.error(i), U();
      }
    else
      console.error("Store is not provided for the Grid"), U();
  }, w = (s) => {
    const i = e;
    y(s ? (u) => (u[i] = s, { ...u }) : (u) => (delete u[i], { ...u })), V(0);
  }, v = (s) => {
    typeof s == "function" || s && Object.keys(s).length > 0 ? y(s) : y({}), V(0);
  }, H = (s, i) => {
    y((u) => (u[s] = i, { ...u })), V(0);
  }, j = (s) => {
    x(s);
  }, re = () => E() < $() ? (V(E() + 1), !0) : !1, $ = () => Math.ceil((h == null ? void 0 : h.total) / (m.limit || 25));
  return {
    addFilter: H,
    resetFilter: G,
    setFilter: v,
    setQuickSearch: w,
    setSortColumns: j,
    setEndPointOptions: I,
    getTotalPages: $,
    refresh: N,
    setPageSize: Y,
    getPageNo: E,
    getQueryLimit: l,
    setQueryLimit: g,
    gotoPage: V,
    nextPage: re,
    prevPage: () => {
      const s = E();
      return s > 0 ? (V(s - 1), !0) : !1;
    },
    export: (s) => {
      a.export ? a.export(s) : console.warn("Store does not implement export method");
    },
    getQueryRequest: A,
    setSortOptions: j,
    getCurrentFilter: () => F,
    getTotalRecords: () => h == null ? void 0 : h.total,
    getCurrentData: () => h == null ? void 0 : h.data,
    isLoading: h.isLoading
  };
}, tt = O(function(e, n) {
  const { Child: r, childProps: a } = e, c = n || L(null), o = we(e), d = e.listKeyProvider || ((F, y) => y);
  return Q(c, () => ({
    ...o
  }), [o]), /* @__PURE__ */ C("div", { children: /* @__PURE__ */ C("div", { className: "card-page-container", children: /* @__PURE__ */ C(
    ce,
    {
      Child: r,
      childKeyProvider: d,
      preProcess: e.preProcess,
      dataList: o.getCurrentData(),
      childProps: a,
      EmptyChild: e.EmptyChild,
      Loading: e.Loading,
      title: e.title
    }
  ) }) });
});
export {
  et as H,
  $e as P,
  tt as S,
  ke as a,
  ze as b,
  we as c,
  me as u
};
