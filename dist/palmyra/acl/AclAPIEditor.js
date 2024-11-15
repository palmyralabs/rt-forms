import { jsx as F, Fragment as je, jsxs as B } from "react/jsx-runtime";
import { CheckBoxIcon as Ie } from "../menu/AsyncTreeMenuEditor.js";
import Y, { useMemo as Me, useState as ye, useCallback as $e, useLayoutEffect as ke, useEffect as fe, forwardRef as De, useRef as qe, useImperativeHandle as Ne } from "react";
import { g as Ye } from "../../chunks/_commonjsHelpers.js";
import '../../assets/AclAPIEditor.css';var le = { exports: {} }, J = { exports: {} }, P = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var be;
function Le() {
  if (be) return P;
  be = 1;
  var t = typeof Symbol == "function" && Symbol.for, s = t ? Symbol.for("react.element") : 60103, f = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107, c = t ? Symbol.for("react.strict_mode") : 60108, a = t ? Symbol.for("react.profiler") : 60114, v = t ? Symbol.for("react.provider") : 60109, u = t ? Symbol.for("react.context") : 60110, C = t ? Symbol.for("react.async_mode") : 60111, l = t ? Symbol.for("react.concurrent_mode") : 60111, m = t ? Symbol.for("react.forward_ref") : 60112, p = t ? Symbol.for("react.suspense") : 60113, _ = t ? Symbol.for("react.suspense_list") : 60120, w = t ? Symbol.for("react.memo") : 60115, A = t ? Symbol.for("react.lazy") : 60116, x = t ? Symbol.for("react.block") : 60121, M = t ? Symbol.for("react.fundamental") : 60117, D = t ? Symbol.for("react.responder") : 60118, U = t ? Symbol.for("react.scope") : 60119;
  function I(n) {
    if (typeof n == "object" && n !== null) {
      var L = n.$$typeof;
      switch (L) {
        case s:
          switch (n = n.type, n) {
            case C:
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
  return P.AsyncMode = C, P.ConcurrentMode = l, P.ContextConsumer = u, P.ContextProvider = v, P.Element = s, P.ForwardRef = m, P.Fragment = i, P.Lazy = A, P.Memo = w, P.Portal = f, P.Profiler = a, P.StrictMode = c, P.Suspense = p, P.isAsyncMode = function(n) {
    return j(n) || I(n) === C;
  }, P.isConcurrentMode = j, P.isContextConsumer = function(n) {
    return I(n) === u;
  }, P.isContextProvider = function(n) {
    return I(n) === v;
  }, P.isElement = function(n) {
    return typeof n == "object" && n !== null && n.$$typeof === s;
  }, P.isForwardRef = function(n) {
    return I(n) === m;
  }, P.isFragment = function(n) {
    return I(n) === i;
  }, P.isLazy = function(n) {
    return I(n) === A;
  }, P.isMemo = function(n) {
    return I(n) === w;
  }, P.isPortal = function(n) {
    return I(n) === f;
  }, P.isProfiler = function(n) {
    return I(n) === a;
  }, P.isStrictMode = function(n) {
    return I(n) === c;
  }, P.isSuspense = function(n) {
    return I(n) === p;
  }, P.isValidElementType = function(n) {
    return typeof n == "string" || typeof n == "function" || n === i || n === l || n === a || n === c || n === p || n === _ || typeof n == "object" && n !== null && (n.$$typeof === A || n.$$typeof === w || n.$$typeof === v || n.$$typeof === u || n.$$typeof === m || n.$$typeof === M || n.$$typeof === D || n.$$typeof === U || n.$$typeof === x);
  }, P.typeOf = I, P;
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
function We() {
  return Ee || (Ee = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, s = t ? Symbol.for("react.element") : 60103, f = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107, c = t ? Symbol.for("react.strict_mode") : 60108, a = t ? Symbol.for("react.profiler") : 60114, v = t ? Symbol.for("react.provider") : 60109, u = t ? Symbol.for("react.context") : 60110, C = t ? Symbol.for("react.async_mode") : 60111, l = t ? Symbol.for("react.concurrent_mode") : 60111, m = t ? Symbol.for("react.forward_ref") : 60112, p = t ? Symbol.for("react.suspense") : 60113, _ = t ? Symbol.for("react.suspense_list") : 60120, w = t ? Symbol.for("react.memo") : 60115, A = t ? Symbol.for("react.lazy") : 60116, x = t ? Symbol.for("react.block") : 60121, M = t ? Symbol.for("react.fundamental") : 60117, D = t ? Symbol.for("react.responder") : 60118, U = t ? Symbol.for("react.scope") : 60119;
    function I(r) {
      return typeof r == "string" || typeof r == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      r === i || r === l || r === a || r === c || r === p || r === _ || typeof r == "object" && r !== null && (r.$$typeof === A || r.$$typeof === w || r.$$typeof === v || r.$$typeof === u || r.$$typeof === m || r.$$typeof === M || r.$$typeof === D || r.$$typeof === U || r.$$typeof === x);
    }
    function j(r) {
      if (typeof r == "object" && r !== null) {
        var N = r.$$typeof;
        switch (N) {
          case s:
            var G = r.type;
            switch (G) {
              case C:
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
    var n = C, L = l, X = u, K = v, Z = s, Q = m, V = i, ee = A, re = w, z = f, te = a, q = c, W = p, H = !1;
    function ne(r) {
      return H || (H = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), e(r) || j(r) === C;
    }
    function e(r) {
      return j(r) === l;
    }
    function o(r) {
      return j(r) === u;
    }
    function E(r) {
      return j(r) === v;
    }
    function h(r) {
      return typeof r == "object" && r !== null && r.$$typeof === s;
    }
    function d(r) {
      return j(r) === m;
    }
    function g(r) {
      return j(r) === i;
    }
    function y(r) {
      return j(r) === A;
    }
    function b(r) {
      return j(r) === w;
    }
    function T(r) {
      return j(r) === f;
    }
    function R(r) {
      return j(r) === a;
    }
    function O(r) {
      return j(r) === c;
    }
    function k(r) {
      return j(r) === p;
    }
    S.AsyncMode = n, S.ConcurrentMode = L, S.ContextConsumer = X, S.ContextProvider = K, S.Element = Z, S.ForwardRef = Q, S.Fragment = V, S.Lazy = ee, S.Memo = re, S.Portal = z, S.Profiler = te, S.StrictMode = q, S.Suspense = W, S.isAsyncMode = ne, S.isConcurrentMode = e, S.isContextConsumer = o, S.isContextProvider = E, S.isElement = h, S.isForwardRef = d, S.isFragment = g, S.isLazy = y, S.isMemo = b, S.isPortal = T, S.isProfiler = R, S.isStrictMode = O, S.isSuspense = k, S.isValidElementType = I, S.typeOf = j;
  }()), S;
}
var ge;
function Re() {
  return ge || (ge = 1, process.env.NODE_ENV === "production" ? J.exports = Le() : J.exports = We()), J.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var oe, Te;
function ze() {
  if (Te) return oe;
  Te = 1;
  var t = Object.getOwnPropertySymbols, s = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
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
      var C = Object.getOwnPropertyNames(v).map(function(m) {
        return v[m];
      });
      if (C.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(m) {
        l[m] = m;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return oe = c() ? Object.assign : function(a, v) {
    for (var u, C = i(a), l, m = 1; m < arguments.length; m++) {
      u = Object(arguments[m]);
      for (var p in u)
        s.call(u, p) && (C[p] = u[p]);
      if (t) {
        l = t(u);
        for (var _ = 0; _ < l.length; _++)
          f.call(u, l[_]) && (C[l[_]] = u[l[_]]);
      }
    }
    return C;
  }, oe;
}
var ie, Oe;
function ve() {
  if (Oe) return ie;
  Oe = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ie = t, ie;
}
var ae, _e;
function we() {
  return _e || (_e = 1, ae = Function.call.bind(Object.prototype.hasOwnProperty)), ae;
}
var se, Ce;
function Fe() {
  if (Ce) return se;
  Ce = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var s = ve(), f = {}, i = we();
    t = function(a) {
      var v = "Warning: " + a;
      typeof console < "u" && console.error(v);
      try {
        throw new Error(v);
      } catch {
      }
    };
  }
  function c(a, v, u, C, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var m in a)
        if (i(a, m)) {
          var p;
          try {
            if (typeof a[m] != "function") {
              var _ = Error(
                (C || "React class") + ": " + u + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw _.name = "Invariant Violation", _;
            }
            p = a[m](v, m, C, u, null, s);
          } catch (A) {
            p = A;
          }
          if (p && !(p instanceof Error) && t(
            (C || "React class") + ": type specification of " + u + " `" + m + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in f)) {
            f[p.message] = !0;
            var w = l ? l() : "";
            t(
              "Failed " + u + " type: " + p.message + (w ?? "")
            );
          }
        }
    }
  }
  return c.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (f = {});
  }, se = c, se;
}
var ue, Pe;
function Ue() {
  if (Pe) return ue;
  Pe = 1;
  var t = Re(), s = ze(), f = ve(), i = we(), c = Fe(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(u) {
    var C = "Warning: " + u;
    typeof console < "u" && console.error(C);
    try {
      throw new Error(C);
    } catch {
    }
  });
  function v() {
    return null;
  }
  return ue = function(u, C) {
    var l = typeof Symbol == "function" && Symbol.iterator, m = "@@iterator";
    function p(e) {
      var o = e && (l && e[l] || e[m]);
      if (typeof o == "function")
        return o;
    }
    var _ = "<<anonymous>>", w = {
      array: D("array"),
      bigint: D("bigint"),
      bool: D("boolean"),
      func: D("function"),
      number: D("number"),
      object: D("object"),
      string: D("string"),
      symbol: D("symbol"),
      any: U(),
      arrayOf: I,
      element: j(),
      elementType: n(),
      instanceOf: L,
      node: Q(),
      objectOf: K,
      oneOf: X,
      oneOfType: Z,
      shape: ee,
      exact: re
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
        if (T = T || _, O = O || b, k !== f) {
          if (C) {
            var r = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw r.name = "Invariant Violation", r;
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
    function D(e) {
      function o(E, h, d, g, y, b) {
        var T = E[h], R = q(T);
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
          var T = q(b);
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
          var b = q(y);
          return new x("Invalid " + d + " `" + g + "` of type " + ("`" + b + "` supplied to `" + h + "`, expected a single ReactElement."));
        }
        return null;
      }
      return M(e);
    }
    function n() {
      function e(o, E, h, d, g) {
        var y = o[E];
        if (!t.isValidElementType(y)) {
          var b = q(y);
          return new x("Invalid " + d + " `" + g + "` of type " + ("`" + b + "` supplied to `" + h + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return M(e);
    }
    function L(e) {
      function o(E, h, d, g, y) {
        if (!(E[h] instanceof e)) {
          var b = e.name || _, T = ne(E[h]);
          return new x("Invalid " + g + " `" + y + "` of type " + ("`" + T + "` supplied to `" + d + "`, expected ") + ("instance of `" + b + "`."));
        }
        return null;
      }
      return M(o);
    }
    function X(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), v;
      function o(E, h, d, g, y) {
        for (var b = E[h], T = 0; T < e.length; T++)
          if (A(b, e[T]))
            return null;
        var R = JSON.stringify(e, function(k, r) {
          var N = W(r);
          return N === "symbol" ? String(r) : r;
        });
        return new x("Invalid " + g + " `" + y + "` of value `" + String(b) + "` " + ("supplied to `" + d + "`, expected one of " + R + "."));
      }
      return M(o);
    }
    function K(e) {
      function o(E, h, d, g, y) {
        if (typeof e != "function")
          return new x("Property `" + y + "` of component `" + d + "` has invalid PropType notation inside objectOf.");
        var b = E[h], T = q(b);
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
    function Z(e) {
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
          var k = e[O], r = k(d, g, y, b, T, f);
          if (r == null)
            return null;
          r.data && i(r.data, "expectedType") && R.push(r.data.expectedType);
        }
        var N = R.length > 0 ? ", expected one of type [" + R.join(", ") + "]" : "";
        return new x("Invalid " + b + " `" + T + "` supplied to " + ("`" + y + "`" + N + "."));
      }
      return M(h);
    }
    function Q() {
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
    function ee(e) {
      function o(E, h, d, g, y) {
        var b = E[h], T = q(b);
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
    function re(e) {
      function o(E, h, d, g, y) {
        var b = E[h], T = q(b);
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
          var r = k(b, O, d, g, y + "." + O, f);
          if (r)
            return r;
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
    function te(e, o) {
      return e === "symbol" ? !0 : o ? o["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && o instanceof Symbol : !1;
    }
    function q(e) {
      var o = typeof e;
      return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : te(o, e) ? "symbol" : o;
    }
    function W(e) {
      if (typeof e > "u" || e === null)
        return "" + e;
      var o = q(e);
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
    function ne(e) {
      return !e.constructor || !e.constructor.name ? _ : e.constructor.name;
    }
    return w.checkPropTypes = c, w.resetWarningCache = c.resetWarningCache, w.PropTypes = w, w;
  }, ue;
}
var ce, Se;
function Be() {
  if (Se) return ce;
  Se = 1;
  var t = ve();
  function s() {
  }
  function f() {
  }
  return f.resetWarningCache = s, ce = function() {
    function i(v, u, C, l, m, p) {
      if (p !== t) {
        var _ = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw _.name = "Invariant Violation", _;
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
  }, ce;
}
if (process.env.NODE_ENV !== "production") {
  var Ve = Re(), He = !0;
  le.exports = Ue()(Ve.isElement, He);
} else
  le.exports = Be()();
var Ge = le.exports;
const $ = /* @__PURE__ */ Ye(Ge);
function de() {
  return de = Object.assign || function(t) {
    for (var s = 1; s < arguments.length; s++) {
      var f = arguments[s];
      for (var i in f)
        Object.prototype.hasOwnProperty.call(f, i) && (t[i] = f[i]);
    }
    return t;
  }, de.apply(this, arguments);
}
function Je(t, s) {
  t.prototype = Object.create(s.prototype), t.prototype.constructor = t, pe(t, s);
}
function pe(t, s) {
  return pe = Object.setPrototypeOf || function(i, c) {
    return i.__proto__ = c, i;
  }, pe(t, s);
}
var me = /* @__PURE__ */ function(t) {
  Je(s, t);
  function s() {
    return t.apply(this, arguments) || this;
  }
  var f = s.prototype;
  return f.getColumns = function() {
    var c = this.props, a = c.children, v = c.columnsCount, u = Array.from({
      length: v
    }, function() {
      return [];
    });
    return Y.Children.forEach(a, function(C, l) {
      C && Y.isValidElement(C) && u[l % v].push(C);
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
var Xe = 1, xe = typeof window < "u" ? ke : fe, Ke = function() {
  var s = ye(!1), f = s[0], i = s[1];
  return xe(function() {
    i(!0);
  }, []), f;
}, Ze = function() {
  var s = Ke(), f = ye(0), i = f[0], c = f[1], a = $e(function() {
    s && c(window.innerWidth);
  }, [s]);
  return xe(function() {
    if (s)
      return window.addEventListener("resize", a), a(), function() {
        return window.removeEventListener("resize", a);
      };
  }, [s, a]), i;
}, Ae = function(s) {
  var f = s.columnsCountBreakPoints, i = f === void 0 ? {
    350: 1,
    750: 2,
    900: 3
  } : f, c = s.children, a = s.className, v = a === void 0 ? null : a, u = s.style, C = u === void 0 ? null : u, l = Ze(), m = Me(function() {
    var p = Object.keys(i).sort(function(w, A) {
      return w - A;
    }), _ = p.length > 0 ? i[p[0]] : Xe;
    return p.forEach(function(w) {
      w < l && (_ = i[w]);
    }), _;
  }, [l, i]);
  return /* @__PURE__ */ Y.createElement("div", {
    className: v,
    style: C
  }, Y.Children.map(c, function(p, _) {
    return Y.cloneElement(p, {
      key: _,
      columnsCount: m
    });
  }));
};
Ae.propTypes = process.env.NODE_ENV !== "production" ? {
  children: $.oneOfType([$.arrayOf($.node), $.node]).isRequired,
  columnsCountBreakPoints: $.object,
  className: $.string,
  style: $.object
} : {};
const Qe = { color: "rgb(44, 134, 213)", backgroundColor: "white" }, or = De(function(s, f) {
  const [i, c] = ye(s.data);
  fe(() => {
    c(s.data);
  }, [s.data]);
  const a = f || qe(null);
  Ne(a, () => ({
    getValue() {
      return i;
    }
  }), [i]);
  const v = (l, m, p) => {
    c((_) => (_[l].permissions[m].mask = p ? 1 : 0, [..._]));
  };
  fe(() => {
    const l = () => c([...i]);
    return window.addEventListener("resize", l), () => window.removeEventListener("resize", l);
  }, [i]);
  const u = { 450: 1, 750: 2, 900: 2, 1200: 3, 2e3: 5 };
  return /* @__PURE__ */ F(je, { children: /* @__PURE__ */ F(
    Ae,
    {
      columnsCountBreakPoints: s.columnsCountBreakPoints || u,
      children: /* @__PURE__ */ F(me, { gutter: s.gutter || "10px", children: i.map((l, m) => {
        var p;
        return /* @__PURE__ */ B("div", { className: "parent-list", children: [
          /* @__PURE__ */ F("h3", { children: l.className }),
          (p = l.permissions) == null ? void 0 : p.map((_, w) => {
            const A = _.mask > 0;
            return /* @__PURE__ */ B("div", { className: "child-list", children: [
              /* @__PURE__ */ F("div", { children: /* @__PURE__ */ F(
                Ie,
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
                  _.name
                ] }),
                /* @__PURE__ */ B("span", { className: "operation-code-text", children: [
                  "(",
                  _.code,
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
