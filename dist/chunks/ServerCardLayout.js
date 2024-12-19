import { jsx as C, Fragment as ae } from "react/jsx-runtime";
import { useContext as te, useState as D, useCallback as oe, useEffect as T, forwardRef as O, useRef as L, useImperativeHandle as Q } from "react";
import '../assets/FormGroup.css';import '../assets/FieldContainer.css';import '../assets/FieldGroupContainer.css';import '../assets/CardLayout.css';/* empty css           */
import { useKeyValue as ne } from "../palmyra/utils/pubsub/PubSubHelper.js";
import { PalmyraForm as J } from "../palmyra/form/PalmyraForm.js";
import { FieldGroupManagerContext as se, StoreFactoryContext as ie } from "../palmyra/form/formContext.js";
import "@palmyralabs/ts-predicates";
import { hasDot as U, getValueByKey as le, setValueByKey as b } from "@palmyralabs/ts-utils";
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
import { getSaveFormHandle as X } from "../palmyra/form/formUtil.js";
/* empty css                    */
/* empty css               */
/* empty css          */
import { generatePredicate as ue, validate as q } from "../palmyra/form/validator/validatorHelper.js";
import { usePalmyraViewForm as de } from "../palmyra/form/useHelpers/usePalmyraViewForm.js";
import { usePalmyraNewForm as fe } from "../palmyra/form/useHelpers/usePalmyraNewForm.js";
import { usePalmyraEditForm as ge } from "../palmyra/form/useHelpers/usePalmyraEditForm.js";
const me = (t, e, n) => {
  var G, E;
  const r = te(se);
  if (!r)
    throw Error("useFieldManager must be called within the scope of <PalmyraForm>");
  const [a, c] = D({}), o = { ...e, ...a }, d = he(t, n), F = Fe(n), y = (l) => F(d(l)), M = oe(() => ye(t, n), [t])(), S = ue(o), R = r.getFieldRawData(d), B = ve(
    R,
    o,
    n,
    S,
    y,
    F
  ), [f, x] = D(B);
  T(() => {
    R != null && _();
  }, [a]);
  const m = f.value, g = f.error, h = () => m, p = () => g != null && g.showError ? g : { status: !1, message: "" }, w = () => S, I = (l, v = !0, A = !0) => {
    const P = typeof l == "function" ? l(m) : l, V = q(P, S, o);
    P === m && g && V.status == g.status && V.message == g.message || (r.setFieldValidity(t, !V.status), V.showError = A, e != null && e.readOnly ? x((N) => ({ ...N, error: V })) : (x({ value: P, error: V }), v && P !== m && r.setFieldData(t, P)));
  }, _ = () => {
    const l = q(m, S, o);
    g && g.showError && l.status == g.status && l.message == g.message || (l.showError = !0, x((v) => ({ ...v, error: l })));
  };
  T(() => {
    const { error: l, value: v } = f;
    r.setFieldData(t, v), r.setFieldValidity(t, !l.status);
  }, [f]);
  const W = {
    getValidator: w,
    getValue: h,
    setValue: I,
    valueAccessor: y,
    valueWriter: M,
    rawValueAccessor: d,
    isValid: () => {
      var l;
      return f.error == null ? !q(m, S, o).status : !((l = f.error) != null && l.status);
    },
    getError: p,
    refreshError: _,
    mutateOptions: a,
    setMutateOptions: c,
    getFieldProps: () => {
      const {
        invalidMessage: l,
        missingMessage: v,
        validator: A,
        regExp: P,
        validRule: V,
        validFn: N,
        defaultValue: Z,
        ...H
      } = o;
      return { ...H, ...a };
    }
  };
  return r.registerFieldManager(W, o), R == null && e.defaultValue && r.setFieldData(t, f.value), (G = f.error) != null && G.status && r.setFieldValidity(t, (E = f.error) == null ? void 0 : E.status), W;
};
function he(t, e) {
  return e != null && e.fieldAccessor ? e.fieldAccessor : U(t) ? (r) => le(t, r) : (r) => r == null ? void 0 : r[t];
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
  return n ? e != null && e.fieldWriter ? (r, a) => e.fieldWriter(n(a), r) : U(t) ? (r, a) => b(t, r, n(a)) : (r, a) => b(t, r, n(a)) : e != null && e.fieldWriter ? (r, a) => e.fieldWriter(a, r) : U(t) ? (r, a) => b(t, r, a) : (r, a) => b(t, r, a);
}
const ve = (t, e, n, r, a, c) => {
  var o = null, d = void 0;
  return t == null ? e.defaultValue != null ? o = n != null && n.parse ? n.parse(e.defaultValue) : e.defaultValue : o = a({}) : o = c(t), d = q(o, r, e), d.status && (d.showError = t != null || e.defaultValue != null), { value: o, error: d };
}, $e = O(function(e, n) {
  const r = e.storeFactory, { fetchData: a, saveData: c, formRef: o, refresh: d } = ge(e), F = n || L();
  return T(() => {
    a(), o.current.isValid() && e.onValidChange && e.onValidChange(!0);
  }, [o, e.id]), Q(F, () => X(c, o, d)), /* @__PURE__ */ C(J, { onValidChange: e.onValidChange, ref: o, storeFactory: r, children: e.children });
}), ke = O(function(e, n) {
  const r = e.storeFactory, { saveData: a, formRef: c } = fe(e), o = n || L();
  return Q(o, () => X(a, c)), /* @__PURE__ */ C(
    J,
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
  }, [e.endPoint]), Q(o, () => X({}, a, c)), /* @__PURE__ */ C(J, { ref: a, storeFactory: r, children: e.children });
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
  const [R, B] = D((ee = t.storeOptions) == null ? void 0 : ee.endPointOptions), [f, x] = D({}), [m, g] = D({ limit: S, offset: 0, total: !0 }), [h, p] = D({ total: null, isLoading: !1, data: null }), w = (s) => {
    g((i) => ({ limit: i.limit, total: i.total, offset: s * i.limit }));
  }, I = (s) => {
    const i = s > 10 || s == -1 ? s : 15;
    g((u) => {
      const j = Math.floor(u.offset / i) * i;
      return { limit: i, total: u.total, offset: j };
    });
  }, _ = () => F ? Object.keys(F).length == 0 : !1, K = (s, i) => {
    p((u) => (setTimeout(() => {
      t.onDataChange && t.onDataChange(s, u.data);
    }, 100), { data: s, total: i, isLoading: !1 }));
  }, Y = () => K([], 0), W = () => K(void 0, null), G = () => N({}), E = () => Math.round(m.offset / m.limit), l = () => m, v = () => {
    p((s) => ({ ...s, isLoading: !0 }));
  };
  T(() => {
    (c || !_()) && P();
  }, [m, f, R]);
  const A = () => ({
    sortOrder: f && Object.keys(f).length > 0 ? f : d,
    total: !0,
    endPointVars: R,
    ...m,
    filter: { ...F, ...o }
  }), P = () => {
    const s = A();
    if (r.current != null) {
      const i = /* @__PURE__ */ new Date(), u = r.current, j = i.getTime() - u.getTime();
      if (j < Pe) {
        h.isLoading || console.warn("ServerQueryManager: refresh called within short interval" + j);
        return;
      }
    } else if (!n) {
      r.current = new Date((/* @__PURE__ */ new Date()).getTime() - 6e4);
      return;
    }
    if (a)
      try {
        r.current = /* @__PURE__ */ new Date(), v(), a.query(s).then((i) => {
          K(i.result, i.total);
        }).catch((i) => {
          var u = i.response ? i.response : i;
          console.error("error while fetching", u), W();
        });
      } catch (i) {
        console.error(i), Y();
      }
    else
      console.error("Store is not provided for the Grid"), Y();
  }, V = (s) => {
    const i = e;
    y(s ? (u) => (u[i] = s, { ...u }) : (u) => (delete u[i], { ...u })), w(0);
  }, N = (s) => {
    typeof s == "function" || s && Object.keys(s).length > 0 ? y(s) : y({}), w(0);
  }, Z = (s, i) => {
    y((u) => (u[s] = i, { ...u })), w(0);
  }, H = (s) => {
    x(s);
  }, re = () => E() < $() ? (w(E() + 1), !0) : !1, $ = () => Math.ceil((h == null ? void 0 : h.total) / (m.limit || 25));
  return {
    addFilter: Z,
    resetFilter: G,
    setFilter: N,
    setQuickSearch: V,
    setSortColumns: H,
    setEndPointOptions: B,
    getTotalPages: $,
    refresh: P,
    setPageSize: I,
    getPageNo: E,
    getQueryLimit: l,
    setQueryLimit: g,
    gotoPage: w,
    nextPage: re,
    prevPage: () => {
      const s = E();
      return s > 0 ? (w(s - 1), !0) : !1;
    },
    export: (s) => {
      a.export ? a.export(s) : console.warn("Store does not implement export method");
    },
    getQueryRequest: A,
    setSortOptions: H,
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
