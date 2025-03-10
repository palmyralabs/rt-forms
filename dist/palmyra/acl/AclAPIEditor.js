import { jsx as F, Fragment as Ie, jsxs as B } from "react/jsx-runtime";
import { CheckBoxIcon as Me } from "../menu/AsyncTreeMenuEditor.js";
import Y, { useMemo as $e, useState as ye, useCallback as ke, useLayoutEffect as qe, useEffect as le, forwardRef as De, useRef as Ne, useImperativeHandle as Ye } from "react";
import { g as Le } from "../../chunks/_commonjsHelpers.js";
import '../../assets/AclAPIEditor.css';var J = { exports: {} }, X = { exports: {} }, C = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var be;
function We() {
  if (be) return C;
  be = 1;
  var r = typeof Symbol == "function" && Symbol.for, s = r ? Symbol.for("react.element") : 60103, f = r ? Symbol.for("react.portal") : 60106, i = r ? Symbol.for("react.fragment") : 60107, c = r ? Symbol.for("react.strict_mode") : 60108, a = r ? Symbol.for("react.profiler") : 60114, v = r ? Symbol.for("react.provider") : 60109, u = r ? Symbol.for("react.context") : 60110, _ = r ? Symbol.for("react.async_mode") : 60111, l = r ? Symbol.for("react.concurrent_mode") : 60111, m = r ? Symbol.for("react.forward_ref") : 60112, p = r ? Symbol.for("react.suspense") : 60113, P = r ? Symbol.for("react.suspense_list") : 60120, w = r ? Symbol.for("react.memo") : 60115, A = r ? Symbol.for("react.lazy") : 60116, x = r ? Symbol.for("react.block") : 60121, M = r ? Symbol.for("react.fundamental") : 60117, q = r ? Symbol.for("react.responder") : 60118, U = r ? Symbol.for("react.scope") : 60119;
  function I(n) {
    if (typeof n == "object" && n !== null) {
      var L = n.$$typeof;
      switch (L) {
        case s:
          switch (n = n.type, n) {
            case _:
            case l:
            case i:
            case a:
            case c:
            case p:
              return n;
            default:
              switch (n = n && n.$$typeof, n) {
                case u:
                case m:
                case A:
                case w:
                case v:
                  return n;
                default:
                  return L;
              }
          }
        case f:
          return L;
      }
    }
  }
  function j(n) {
    return I(n) === l;
  }
  return C.AsyncMode = _, C.ConcurrentMode = l, C.ContextConsumer = u, C.ContextProvider = v, C.Element = s, C.ForwardRef = m, C.Fragment = i, C.Lazy = A, C.Memo = w, C.Portal = f, C.Profiler = a, C.StrictMode = c, C.Suspense = p, C.isAsyncMode = function(n) {
    return j(n) || I(n) === _;
  }, C.isConcurrentMode = j, C.isContextConsumer = function(n) {
    return I(n) === u;
  }, C.isContextProvider = function(n) {
    return I(n) === v;
  }, C.isElement = function(n) {
    return typeof n == "object" && n !== null && n.$$typeof === s;
  }, C.isForwardRef = function(n) {
    return I(n) === m;
  }, C.isFragment = function(n) {
    return I(n) === i;
  }, C.isLazy = function(n) {
    return I(n) === A;
  }, C.isMemo = function(n) {
    return I(n) === w;
  }, C.isPortal = function(n) {
    return I(n) === f;
  }, C.isProfiler = function(n) {
    return I(n) === a;
  }, C.isStrictMode = function(n) {
    return I(n) === c;
  }, C.isSuspense = function(n) {
    return I(n) === p;
  }, C.isValidElementType = function(n) {
    return typeof n == "string" || typeof n == "function" || n === i || n === l || n === a || n === c || n === p || n === P || typeof n == "object" && n !== null && (n.$$typeof === A || n.$$typeof === w || n.$$typeof === v || n.$$typeof === u || n.$$typeof === m || n.$$typeof === M || n.$$typeof === q || n.$$typeof === U || n.$$typeof === x);
  }, C.typeOf = I, C;
}
var S = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ee;
function ze() {
  return Ee || (Ee = 1, process.env.NODE_ENV !== "production" && function() {
    var r = typeof Symbol == "function" && Symbol.for, s = r ? Symbol.for("react.element") : 60103, f = r ? Symbol.for("react.portal") : 60106, i = r ? Symbol.for("react.fragment") : 60107, c = r ? Symbol.for("react.strict_mode") : 60108, a = r ? Symbol.for("react.profiler") : 60114, v = r ? Symbol.for("react.provider") : 60109, u = r ? Symbol.for("react.context") : 60110, _ = r ? Symbol.for("react.async_mode") : 60111, l = r ? Symbol.for("react.concurrent_mode") : 60111, m = r ? Symbol.for("react.forward_ref") : 60112, p = r ? Symbol.for("react.suspense") : 60113, P = r ? Symbol.for("react.suspense_list") : 60120, w = r ? Symbol.for("react.memo") : 60115, A = r ? Symbol.for("react.lazy") : 60116, x = r ? Symbol.for("react.block") : 60121, M = r ? Symbol.for("react.fundamental") : 60117, q = r ? Symbol.for("react.responder") : 60118, U = r ? Symbol.for("react.scope") : 60119;
    function I(t) {
      return typeof t == "string" || typeof t == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      t === i || t === l || t === a || t === c || t === p || t === P || typeof t == "object" && t !== null && (t.$$typeof === A || t.$$typeof === w || t.$$typeof === v || t.$$typeof === u || t.$$typeof === m || t.$$typeof === M || t.$$typeof === q || t.$$typeof === U || t.$$typeof === x);
    }
    function j(t) {
      if (typeof t == "object" && t !== null) {
        var N = t.$$typeof;
        switch (N) {
          case s:
            var G = t.type;
            switch (G) {
              case _:
              case l:
              case i:
              case a:
              case c:
              case p:
                return G;
              default:
                var he = G && G.$$typeof;
                switch (he) {
                  case u:
                  case m:
                  case A:
                  case w:
                  case v:
                    return he;
                  default:
                    return N;
                }
            }
          case f:
            return N;
        }
      }
    }
    var n = _, L = l, K = u, Z = v, Q = s, ee = m, V = i, re = A, te = w, z = f, ne = a, D = c, W = p, H = !1;
    function oe(t) {
      return H || (H = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), e(t) || j(t) === _;
    }
    function e(t) {
      return j(t) === l;
    }
    function o(t) {
      return j(t) === u;
    }
    function E(t) {
      return j(t) === v;
    }
    function h(t) {
      return typeof t == "object" && t !== null && t.$$typeof === s;
    }
    function d(t) {
      return j(t) === m;
    }
    function g(t) {
      return j(t) === i;
    }
    function y(t) {
      return j(t) === A;
    }
    function b(t) {
      return j(t) === w;
    }
    function T(t) {
      return j(t) === f;
    }
    function R(t) {
      return j(t) === a;
    }
    function O(t) {
      return j(t) === c;
    }
    function k(t) {
      return j(t) === p;
    }
    S.AsyncMode = n, S.ConcurrentMode = L, S.ContextConsumer = K, S.ContextProvider = Z, S.Element = Q, S.ForwardRef = ee, S.Fragment = V, S.Lazy = re, S.Memo = te, S.Portal = z, S.Profiler = ne, S.StrictMode = D, S.Suspense = W, S.isAsyncMode = oe, S.isConcurrentMode = e, S.isContextConsumer = o, S.isContextProvider = E, S.isElement = h, S.isForwardRef = d, S.isFragment = g, S.isLazy = y, S.isMemo = b, S.isPortal = T, S.isProfiler = R, S.isStrictMode = O, S.isSuspense = k, S.isValidElementType = I, S.typeOf = j;
  }()), S;
}
var ge;
function we() {
  return ge || (ge = 1, process.env.NODE_ENV === "production" ? X.exports = We() : X.exports = ze()), X.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ie, Te;
function Fe() {
  if (Te) return ie;
  Te = 1;
  var r = Object.getOwnPropertySymbols, s = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
  function i(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function c() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var v = {}, u = 0; u < 10; u++)
        v["_" + String.fromCharCode(u)] = u;
      var _ = Object.getOwnPropertyNames(v).map(function(m) {
        return v[m];
      });
      if (_.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(m) {
        l[m] = m;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ie = c() ? Object.assign : function(a, v) {
    for (var u, _ = i(a), l, m = 1; m < arguments.length; m++) {
      u = Object(arguments[m]);
      for (var p in u)
        s.call(u, p) && (_[p] = u[p]);
      if (r) {
        l = r(u);
        for (var P = 0; P < l.length; P++)
          f.call(u, l[P]) && (_[l[P]] = u[l[P]]);
      }
    }
    return _;
  }, ie;
}
var ae, Oe;
function ve() {
  if (Oe) return ae;
  Oe = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ae = r, ae;
}
var se, Pe;
function xe() {
  return Pe || (Pe = 1, se = Function.call.bind(Object.prototype.hasOwnProperty)), se;
}
var ue, _e;
function Ue() {
  if (_e) return ue;
  _e = 1;
  var r = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var s = /* @__PURE__ */ ve(), f = {}, i = /* @__PURE__ */ xe();
    r = function(a) {
      var v = "Warning: " + a;
      typeof console < "u" && console.error(v);
      try {
        throw new Error(v);
      } catch {
      }
    };
  }
  function c(a, v, u, _, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var m in a)
        if (i(a, m)) {
          var p;
          try {
            if (typeof a[m] != "function") {
              var P = Error(
                (_ || "React class") + ": " + u + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw P.name = "Invariant Violation", P;
            }
            p = a[m](v, m, _, u, null, s);
          } catch (A) {
            p = A;
          }
          if (p && !(p instanceof Error) && r(
            (_ || "React class") + ": type specification of " + u + " `" + m + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in f)) {
            f[p.message] = !0;
            var w = l ? l() : "";
            r(
              "Failed " + u + " type: " + p.message + (w ?? "")
            );
          }
        }
    }
  }
  return c.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (f = {});
  }, ue = c, ue;
}
var ce, Ce;
function Be() {
  if (Ce) return ce;
  Ce = 1;
  var r = we(), s = Fe(), f = /* @__PURE__ */ ve(), i = /* @__PURE__ */ xe(), c = /* @__PURE__ */ Ue(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(u) {
    var _ = "Warning: " + u;
    typeof console < "u" && console.error(_);
    try {
      throw new Error(_);
    } catch {
    }
  });
  function v() {
    return null;
  }
  return ce = function(u, _) {
    var l = typeof Symbol == "function" && Symbol.iterator, m = "@@iterator";
    function p(e) {
      var o = e && (l && e[l] || e[m]);
      if (typeof o == "function")
        return o;
    }
    var P = "<<anonymous>>", w = {
      array: q("array"),
      bigint: q("bigint"),
      bool: q("boolean"),
      func: q("function"),
      number: q("number"),
      object: q("object"),
      string: q("string"),
      symbol: q("symbol"),
      any: U(),
      arrayOf: I,
      element: j(),
      elementType: n(),
      instanceOf: L,
      node: ee(),
      objectOf: Z,
      oneOf: K,
      oneOfType: Q,
      shape: re,
      exact: te
    };
    function A(e, o) {
      return e === o ? e !== 0 || 1 / e === 1 / o : e !== e && o !== o;
    }
    function x(e, o) {
      this.message = e, this.data = o && typeof o == "object" ? o : {}, this.stack = "";
    }
    x.prototype = Error.prototype;
    function M(e) {
      if (process.env.NODE_ENV !== "production")
        var o = {}, E = 0;
      function h(g, y, b, T, R, O, k) {
        if (T = T || P, O = O || b, k !== f) {
          if (_) {
            var t = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw t.name = "Invariant Violation", t;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var N = T + ":" + b;
            !o[N] && // Avoid spamming the console because they are often not actionable except for lib authors
            E < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + O + "` prop on `" + T + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), o[N] = !0, E++);
          }
        }
        return y[b] == null ? g ? y[b] === null ? new x("The " + R + " `" + O + "` is marked as required " + ("in `" + T + "`, but its value is `null`.")) : new x("The " + R + " `" + O + "` is marked as required in " + ("`" + T + "`, but its value is `undefined`.")) : null : e(y, b, T, R, O);
      }
      var d = h.bind(null, !1);
      return d.isRequired = h.bind(null, !0), d;
    }
    function q(e) {
      function o(E, h, d, g, y, b) {
        var T = E[h], R = D(T);
        if (R !== e) {
          var O = W(T);
          return new x(
            "Invalid " + g + " `" + y + "` of type " + ("`" + O + "` supplied to `" + d + "`, expected ") + ("`" + e + "`."),
            { expectedType: e }
          );
        }
        return null;
      }
      return M(o);
    }
    function U() {
      return M(v);
    }
    function I(e) {
      function o(E, h, d, g, y) {
        if (typeof e != "function")
          return new x("Property `" + y + "` of component `" + d + "` has invalid PropType notation inside arrayOf.");
        var b = E[h];
        if (!Array.isArray(b)) {
          var T = D(b);
          return new x("Invalid " + g + " `" + y + "` of type " + ("`" + T + "` supplied to `" + d + "`, expected an array."));
        }
        for (var R = 0; R < b.length; R++) {
          var O = e(b, R, d, g, y + "[" + R + "]", f);
          if (O instanceof Error)
            return O;
        }
        return null;
      }
      return M(o);
    }
    function j() {
      function e(o, E, h, d, g) {
        var y = o[E];
        if (!u(y)) {
          var b = D(y);
          return new x("Invalid " + d + " `" + g + "` of type " + ("`" + b + "` supplied to `" + h + "`, expected a single ReactElement."));
        }
        return null;
      }
      return M(e);
    }
    function n() {
      function e(o, E, h, d, g) {
        var y = o[E];
        if (!r.isValidElementType(y)) {
          var b = D(y);
          return new x("Invalid " + d + " `" + g + "` of type " + ("`" + b + "` supplied to `" + h + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return M(e);
    }
    function L(e) {
      function o(E, h, d, g, y) {
        if (!(E[h] instanceof e)) {
          var b = e.name || P, T = oe(E[h]);
          return new x("Invalid " + g + " `" + y + "` of type " + ("`" + T + "` supplied to `" + d + "`, expected ") + ("instance of `" + b + "`."));
        }
        return null;
      }
      return M(o);
    }
    function K(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), v;
      function o(E, h, d, g, y) {
        for (var b = E[h], T = 0; T < e.length; T++)
          if (A(b, e[T]))
            return null;
        var R = JSON.stringify(e, function(k, t) {
          var N = W(t);
          return N === "symbol" ? String(t) : t;
        });
        return new x("Invalid " + g + " `" + y + "` of value `" + String(b) + "` " + ("supplied to `" + d + "`, expected one of " + R + "."));
      }
      return M(o);
    }
    function Z(e) {
      function o(E, h, d, g, y) {
        if (typeof e != "function")
          return new x("Property `" + y + "` of component `" + d + "` has invalid PropType notation inside objectOf.");
        var b = E[h], T = D(b);
        if (T !== "object")
          return new x("Invalid " + g + " `" + y + "` of type " + ("`" + T + "` supplied to `" + d + "`, expected an object."));
        for (var R in b)
          if (i(b, R)) {
            var O = e(b, R, d, g, y + "." + R, f);
            if (O instanceof Error)
              return O;
          }
        return null;
      }
      return M(o);
    }
    function Q(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), v;
      for (var o = 0; o < e.length; o++) {
        var E = e[o];
        if (typeof E != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + H(E) + " at index " + o + "."
          ), v;
      }
      function h(d, g, y, b, T) {
        for (var R = [], O = 0; O < e.length; O++) {
          var k = e[O], t = k(d, g, y, b, T, f);
          if (t == null)
            return null;
          t.data && i(t.data, "expectedType") && R.push(t.data.expectedType);
        }
        var N = R.length > 0 ? ", expected one of type [" + R.join(", ") + "]" : "";
        return new x("Invalid " + b + " `" + T + "` supplied to " + ("`" + y + "`" + N + "."));
      }
      return M(h);
    }
    function ee() {
      function e(o, E, h, d, g) {
        return z(o[E]) ? null : new x("Invalid " + d + " `" + g + "` supplied to " + ("`" + h + "`, expected a ReactNode."));
      }
      return M(e);
    }
    function V(e, o, E, h, d) {
      return new x(
        (e || "React class") + ": " + o + " type `" + E + "." + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + d + "`."
      );
    }
    function re(e) {
      function o(E, h, d, g, y) {
        var b = E[h], T = D(b);
        if (T !== "object")
          return new x("Invalid " + g + " `" + y + "` of type `" + T + "` " + ("supplied to `" + d + "`, expected `object`."));
        for (var R in e) {
          var O = e[R];
          if (typeof O != "function")
            return V(d, g, y, R, W(O));
          var k = O(b, R, d, g, y + "." + R, f);
          if (k)
            return k;
        }
        return null;
      }
      return M(o);
    }
    function te(e) {
      function o(E, h, d, g, y) {
        var b = E[h], T = D(b);
        if (T !== "object")
          return new x("Invalid " + g + " `" + y + "` of type `" + T + "` " + ("supplied to `" + d + "`, expected `object`."));
        var R = s({}, E[h], e);
        for (var O in R) {
          var k = e[O];
          if (i(e, O) && typeof k != "function")
            return V(d, g, y, O, W(k));
          if (!k)
            return new x(
              "Invalid " + g + " `" + y + "` key `" + O + "` supplied to `" + d + "`.\nBad object: " + JSON.stringify(E[h], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(e), null, "  ")
            );
          var t = k(b, O, d, g, y + "." + O, f);
          if (t)
            return t;
        }
        return null;
      }
      return M(o);
    }
    function z(e) {
      switch (typeof e) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !e;
        case "object":
          if (Array.isArray(e))
            return e.every(z);
          if (e === null || u(e))
            return !0;
          var o = p(e);
          if (o) {
            var E = o.call(e), h;
            if (o !== e.entries) {
              for (; !(h = E.next()).done; )
                if (!z(h.value))
                  return !1;
            } else
              for (; !(h = E.next()).done; ) {
                var d = h.value;
                if (d && !z(d[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ne(e, o) {
      return e === "symbol" ? !0 : o ? o["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && o instanceof Symbol : !1;
    }
    function D(e) {
      var o = typeof e;
      return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : ne(o, e) ? "symbol" : o;
    }
    function W(e) {
      if (typeof e > "u" || e === null)
        return "" + e;
      var o = D(e);
      if (o === "object") {
        if (e instanceof Date)
          return "date";
        if (e instanceof RegExp)
          return "regexp";
      }
      return o;
    }
    function H(e) {
      var o = W(e);
      switch (o) {
        case "array":
        case "object":
          return "an " + o;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + o;
        default:
          return o;
      }
    }
    function oe(e) {
      return !e.constructor || !e.constructor.name ? P : e.constructor.name;
    }
    return w.checkPropTypes = c, w.resetWarningCache = c.resetWarningCache, w.PropTypes = w, w;
  }, ce;
}
var fe, Se;
function Ve() {
  if (Se) return fe;
  Se = 1;
  var r = /* @__PURE__ */ ve();
  function s() {
  }
  function f() {
  }
  return f.resetWarningCache = s, fe = function() {
    function i(v, u, _, l, m, p) {
      if (p !== r) {
        var P = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw P.name = "Invariant Violation", P;
      }
    }
    i.isRequired = i;
    function c() {
      return i;
    }
    var a = {
      array: i,
      bigint: i,
      bool: i,
      func: i,
      number: i,
      object: i,
      string: i,
      symbol: i,
      any: i,
      arrayOf: c,
      element: i,
      elementType: i,
      instanceOf: c,
      node: i,
      objectOf: c,
      oneOf: c,
      oneOfType: c,
      shape: c,
      exact: c,
      checkPropTypes: f,
      resetWarningCache: s
    };
    return a.PropTypes = a, a;
  }, fe;
}
var Re;
function He() {
  if (Re) return J.exports;
  if (Re = 1, process.env.NODE_ENV !== "production") {
    var r = we(), s = !0;
    J.exports = /* @__PURE__ */ Be()(r.isElement, s);
  } else
    J.exports = /* @__PURE__ */ Ve()();
  return J.exports;
}
var Ge = /* @__PURE__ */ He();
const $ = /* @__PURE__ */ Le(Ge);
function de() {
  return de = Object.assign || function(r) {
    for (var s = 1; s < arguments.length; s++) {
      var f = arguments[s];
      for (var i in f)
        Object.prototype.hasOwnProperty.call(f, i) && (r[i] = f[i]);
    }
    return r;
  }, de.apply(this, arguments);
}
function Je(r, s) {
  r.prototype = Object.create(s.prototype), r.prototype.constructor = r, pe(r, s);
}
function pe(r, s) {
  return pe = Object.setPrototypeOf || function(i, c) {
    return i.__proto__ = c, i;
  }, pe(r, s);
}
var me = /* @__PURE__ */ function(r) {
  Je(s, r);
  function s() {
    return r.apply(this, arguments) || this;
  }
  var f = s.prototype;
  return f.getColumns = function() {
    var c = this.props, a = c.children, v = c.columnsCount, u = Array.from({
      length: v
    }, function() {
      return [];
    });
    return Y.Children.forEach(a, function(_, l) {
      _ && Y.isValidElement(_) && u[l % v].push(_);
    }), u;
  }, f.renderColumns = function() {
    var c = this.props.gutter;
    return this.getColumns().map(function(a, v) {
      return /* @__PURE__ */ Y.createElement("div", {
        key: v,
        style: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignContent: "stretch",
          flex: 1,
          width: 0,
          gap: c
        }
      }, a.map(function(u) {
        return u;
      }));
    });
  }, f.render = function() {
    var c = this.props, a = c.gutter, v = c.className, u = c.style;
    return /* @__PURE__ */ Y.createElement("div", {
      style: de({
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "stretch",
        boxSizing: "border-box",
        width: "100%",
        gap: a
      }, u),
      className: v
    }, this.renderColumns());
  }, s;
}(Y.Component);
me.propTypes = process.env.NODE_ENV !== "production" ? {
  children: $.oneOfType([$.arrayOf($.node), $.node]).isRequired,
  columnsCount: $.number,
  gutter: $.string,
  className: $.string,
  style: $.object
} : {};
me.defaultProps = {
  columnsCount: 3,
  gutter: "0",
  className: null,
  style: {}
};
var Xe = 1, Ae = typeof window < "u" ? qe : le, Ke = function() {
  var s = ye(!1), f = s[0], i = s[1];
  return Ae(function() {
    i(!0);
  }, []), f;
}, Ze = function() {
  var s = Ke(), f = ye(0), i = f[0], c = f[1], a = ke(function() {
    s && c(window.innerWidth);
  }, [s]);
  return Ae(function() {
    if (s)
      return window.addEventListener("resize", a), a(), function() {
        return window.removeEventListener("resize", a);
      };
  }, [s, a]), i;
}, je = function(s) {
  var f = s.columnsCountBreakPoints, i = f === void 0 ? {
    350: 1,
    750: 2,
    900: 3
  } : f, c = s.children, a = s.className, v = a === void 0 ? null : a, u = s.style, _ = u === void 0 ? null : u, l = Ze(), m = $e(function() {
    var p = Object.keys(i).sort(function(w, A) {
      return w - A;
    }), P = p.length > 0 ? i[p[0]] : Xe;
    return p.forEach(function(w) {
      w < l && (P = i[w]);
    }), P;
  }, [l, i]);
  return /* @__PURE__ */ Y.createElement("div", {
    className: v,
    style: _
  }, Y.Children.map(c, function(p, P) {
    return Y.cloneElement(p, {
      key: P,
      columnsCount: m
    });
  }));
};
je.propTypes = process.env.NODE_ENV !== "production" ? {
  children: $.oneOfType([$.arrayOf($.node), $.node]).isRequired,
  columnsCountBreakPoints: $.object,
  className: $.string,
  style: $.object
} : {};
const Qe = { color: "rgb(44, 134, 213)", backgroundColor: "white" }, or = De(function(s, f) {
  const [i, c] = ye(s.data);
  le(() => {
    c(s.data);
  }, [s.data]);
  const a = f || Ne(null);
  Ye(a, () => ({
    getValue() {
      return i;
    }
  }), [i]);
  const v = (l, m, p) => {
    c((P) => (P[l].permissions[m].mask = p ? 1 : 0, [...P]));
  };
  le(() => {
    const l = () => c([...i]);
    return window.addEventListener("resize", l), () => window.removeEventListener("resize", l);
  }, [i]);
  const u = { 450: 1, 750: 2, 900: 2, 1200: 3, 2e3: 5 };
  return /* @__PURE__ */ F(Ie, { children: /* @__PURE__ */ F(
    je,
    {
      columnsCountBreakPoints: s.columnsCountBreakPoints || u,
      children: /* @__PURE__ */ F(me, { gutter: s.gutter || "10px", children: i.map((l, m) => {
        var p;
        return /* @__PURE__ */ B("div", { className: "parent-list", children: [
          /* @__PURE__ */ F("h3", { children: l.className }),
          (p = l.permissions) == null ? void 0 : p.map((P, w) => {
            const A = P.mask > 0;
            return /* @__PURE__ */ B("div", { className: "child-list", children: [
              /* @__PURE__ */ F("div", { children: /* @__PURE__ */ F(
                Me,
                {
                  className: "checkbox-icon",
                  onClick: () => v(m, w, !A),
                  style: Qe,
                  variant: A ? "all" : "none"
                }
              ) }),
              /* @__PURE__ */ B("div", { className: "api-label-field", children: [
                /* @__PURE__ */ B("span", { className: "operation-name-text", children: [
                  " ",
                  P.name
                ] }),
                /* @__PURE__ */ B("span", { className: "operation-code-text", children: [
                  "(",
                  P.code,
                  ")"
                ] })
              ] })
            ] }, w);
          })
        ] }, l.className);
      }) })
    }
  ) });
});
export {
  or as AclAPIEditor
};
