import { g as St } from "./_commonjsHelpers.js";
import le, { useRef as Ie, useReducer as Lt, useEffect as ae } from "react";
import { G as Xe } from "./iconBase.js";
import '../assets/index.css';var gt = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(t) {
  (function() {
    var e = {}.hasOwnProperty;
    function n() {
      for (var a = "", o = 0; o < arguments.length; o++) {
        var c = arguments[o];
        c && (a = i(a, r(c)));
      }
      return a;
    }
    function r(a) {
      if (typeof a == "string" || typeof a == "number")
        return a;
      if (typeof a != "object")
        return "";
      if (Array.isArray(a))
        return n.apply(null, a);
      if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]"))
        return a.toString();
      var o = "";
      for (var c in a)
        e.call(a, c) && a[c] && (o = i(o, c));
      return o;
    }
    function i(a, o) {
      return o ? a ? a + " " + o : a + o : a;
    }
    t.exports ? (n.default = n, t.exports = n) : window.classNames = n;
  })();
})(gt);
var kt = gt.exports;
const Ae = /* @__PURE__ */ St(kt);
var Ve = { exports: {} }, Oe = { exports: {} }, F = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var st;
function Ut() {
  if (st) return F;
  st = 1;
  var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, n = t ? Symbol.for("react.portal") : 60106, r = t ? Symbol.for("react.fragment") : 60107, i = t ? Symbol.for("react.strict_mode") : 60108, a = t ? Symbol.for("react.profiler") : 60114, o = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, d = t ? Symbol.for("react.async_mode") : 60111, b = t ? Symbol.for("react.concurrent_mode") : 60111, w = t ? Symbol.for("react.forward_ref") : 60112, I = t ? Symbol.for("react.suspense") : 60113, A = t ? Symbol.for("react.suspense_list") : 60120, E = t ? Symbol.for("react.memo") : 60115, _ = t ? Symbol.for("react.lazy") : 60116, h = t ? Symbol.for("react.block") : 60121, W = t ? Symbol.for("react.fundamental") : 60117, D = t ? Symbol.for("react.responder") : 60118, z = t ? Symbol.for("react.scope") : 60119;
  function j(s) {
    if (typeof s == "object" && s !== null) {
      var M = s.$$typeof;
      switch (M) {
        case e:
          switch (s = s.type, s) {
            case d:
            case b:
            case r:
            case a:
            case i:
            case I:
              return s;
            default:
              switch (s = s && s.$$typeof, s) {
                case c:
                case w:
                case _:
                case E:
                case o:
                  return s;
                default:
                  return M;
              }
          }
        case n:
          return M;
      }
    }
  }
  function P(s) {
    return j(s) === b;
  }
  return F.AsyncMode = d, F.ConcurrentMode = b, F.ContextConsumer = c, F.ContextProvider = o, F.Element = e, F.ForwardRef = w, F.Fragment = r, F.Lazy = _, F.Memo = E, F.Portal = n, F.Profiler = a, F.StrictMode = i, F.Suspense = I, F.isAsyncMode = function(s) {
    return P(s) || j(s) === d;
  }, F.isConcurrentMode = P, F.isContextConsumer = function(s) {
    return j(s) === c;
  }, F.isContextProvider = function(s) {
    return j(s) === o;
  }, F.isElement = function(s) {
    return typeof s == "object" && s !== null && s.$$typeof === e;
  }, F.isForwardRef = function(s) {
    return j(s) === w;
  }, F.isFragment = function(s) {
    return j(s) === r;
  }, F.isLazy = function(s) {
    return j(s) === _;
  }, F.isMemo = function(s) {
    return j(s) === E;
  }, F.isPortal = function(s) {
    return j(s) === n;
  }, F.isProfiler = function(s) {
    return j(s) === a;
  }, F.isStrictMode = function(s) {
    return j(s) === i;
  }, F.isSuspense = function(s) {
    return j(s) === I;
  }, F.isValidElementType = function(s) {
    return typeof s == "string" || typeof s == "function" || s === r || s === b || s === a || s === i || s === I || s === A || typeof s == "object" && s !== null && (s.$$typeof === _ || s.$$typeof === E || s.$$typeof === o || s.$$typeof === c || s.$$typeof === w || s.$$typeof === W || s.$$typeof === D || s.$$typeof === z || s.$$typeof === h);
  }, F.typeOf = j, F;
}
var Y = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ot;
function Nt() {
  return ot || (ot = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, n = t ? Symbol.for("react.portal") : 60106, r = t ? Symbol.for("react.fragment") : 60107, i = t ? Symbol.for("react.strict_mode") : 60108, a = t ? Symbol.for("react.profiler") : 60114, o = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, d = t ? Symbol.for("react.async_mode") : 60111, b = t ? Symbol.for("react.concurrent_mode") : 60111, w = t ? Symbol.for("react.forward_ref") : 60112, I = t ? Symbol.for("react.suspense") : 60113, A = t ? Symbol.for("react.suspense_list") : 60120, E = t ? Symbol.for("react.memo") : 60115, _ = t ? Symbol.for("react.lazy") : 60116, h = t ? Symbol.for("react.block") : 60121, W = t ? Symbol.for("react.fundamental") : 60117, D = t ? Symbol.for("react.responder") : 60118, z = t ? Symbol.for("react.scope") : 60119;
    function j(f) {
      return typeof f == "string" || typeof f == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      f === r || f === b || f === a || f === i || f === I || f === A || typeof f == "object" && f !== null && (f.$$typeof === _ || f.$$typeof === E || f.$$typeof === o || f.$$typeof === c || f.$$typeof === w || f.$$typeof === W || f.$$typeof === D || f.$$typeof === z || f.$$typeof === h);
    }
    function P(f) {
      if (typeof f == "object" && f !== null) {
        var J = f.$$typeof;
        switch (J) {
          case e:
            var ye = f.type;
            switch (ye) {
              case d:
              case b:
              case r:
              case a:
              case i:
              case I:
                return ye;
              default:
                var be = ye && ye.$$typeof;
                switch (be) {
                  case c:
                  case w:
                  case _:
                  case E:
                  case o:
                    return be;
                  default:
                    return J;
                }
            }
          case n:
            return J;
        }
      }
    }
    var s = d, M = b, k = c, V = o, N = e, G = w, q = r, U = _, L = E, C = n, B = a, $ = i, K = I, se = !1;
    function oe(f) {
      return se || (se = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), l(f) || P(f) === d;
    }
    function l(f) {
      return P(f) === b;
    }
    function v(f) {
      return P(f) === c;
    }
    function y(f) {
      return P(f) === o;
    }
    function u(f) {
      return typeof f == "object" && f !== null && f.$$typeof === e;
    }
    function p(f) {
      return P(f) === w;
    }
    function S(f) {
      return P(f) === r;
    }
    function g(f) {
      return P(f) === _;
    }
    function m(f) {
      return P(f) === E;
    }
    function O(f) {
      return P(f) === n;
    }
    function x(f) {
      return P(f) === a;
    }
    function T(f) {
      return P(f) === i;
    }
    function R(f) {
      return P(f) === I;
    }
    Y.AsyncMode = s, Y.ConcurrentMode = M, Y.ContextConsumer = k, Y.ContextProvider = V, Y.Element = N, Y.ForwardRef = G, Y.Fragment = q, Y.Lazy = U, Y.Memo = L, Y.Portal = C, Y.Profiler = B, Y.StrictMode = $, Y.Suspense = K, Y.isAsyncMode = oe, Y.isConcurrentMode = l, Y.isContextConsumer = v, Y.isContextProvider = y, Y.isElement = u, Y.isForwardRef = p, Y.isFragment = S, Y.isLazy = g, Y.isMemo = m, Y.isPortal = O, Y.isProfiler = x, Y.isStrictMode = T, Y.isSuspense = R, Y.isValidElementType = j, Y.typeOf = P;
  }()), Y;
}
var lt;
function mt() {
  return lt || (lt = 1, process.env.NODE_ENV === "production" ? Oe.exports = Ut() : Oe.exports = Nt()), Oe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ue, ct;
function $t() {
  if (ct) return Ue;
  ct = 1;
  var t = Object.getOwnPropertySymbols, e = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var o = {}, c = 0; c < 10; c++)
        o["_" + String.fromCharCode(c)] = c;
      var d = Object.getOwnPropertyNames(o).map(function(w) {
        return o[w];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var b = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(w) {
        b[w] = w;
      }), Object.keys(Object.assign({}, b)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ue = i() ? Object.assign : function(a, o) {
    for (var c, d = r(a), b, w = 1; w < arguments.length; w++) {
      c = Object(arguments[w]);
      for (var I in c)
        e.call(c, I) && (d[I] = c[I]);
      if (t) {
        b = t(c);
        for (var A = 0; A < b.length; A++)
          n.call(c, b[A]) && (d[b[A]] = c[b[A]]);
      }
    }
    return d;
  }, Ue;
}
var Ne, dt;
function Je() {
  if (dt) return Ne;
  dt = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ne = t, Ne;
}
var $e, ut;
function It() {
  return ut || (ut = 1, $e = Function.call.bind(Object.prototype.hasOwnProperty)), $e;
}
var Fe, ft;
function Ft() {
  if (ft) return Fe;
  ft = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var e = Je(), n = {}, r = It();
    t = function(a) {
      var o = "Warning: " + a;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function i(a, o, c, d, b) {
    if (process.env.NODE_ENV !== "production") {
      for (var w in a)
        if (r(a, w)) {
          var I;
          try {
            if (typeof a[w] != "function") {
              var A = Error(
                (d || "React class") + ": " + c + " type `" + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[w] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw A.name = "Invariant Violation", A;
            }
            I = a[w](o, w, d, c, null, e);
          } catch (_) {
            I = _;
          }
          if (I && !(I instanceof Error) && t(
            (d || "React class") + ": type specification of " + c + " `" + w + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof I + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), I instanceof Error && !(I.message in n)) {
            n[I.message] = !0;
            var E = b ? b() : "";
            t(
              "Failed " + c + " type: " + I.message + (E ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Fe = i, Fe;
}
var Ye, pt;
function Yt() {
  if (pt) return Ye;
  pt = 1;
  var t = mt(), e = $t(), n = Je(), r = It(), i = Ft(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(c) {
    var d = "Warning: " + c;
    typeof console < "u" && console.error(d);
    try {
      throw new Error(d);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return Ye = function(c, d) {
    var b = typeof Symbol == "function" && Symbol.iterator, w = "@@iterator";
    function I(l) {
      var v = l && (b && l[b] || l[w]);
      if (typeof v == "function")
        return v;
    }
    var A = "<<anonymous>>", E = {
      array: D("array"),
      bigint: D("bigint"),
      bool: D("boolean"),
      func: D("function"),
      number: D("number"),
      object: D("object"),
      string: D("string"),
      symbol: D("symbol"),
      any: z(),
      arrayOf: j,
      element: P(),
      elementType: s(),
      instanceOf: M,
      node: G(),
      objectOf: V,
      oneOf: k,
      oneOfType: N,
      shape: U,
      exact: L
    };
    function _(l, v) {
      return l === v ? l !== 0 || 1 / l === 1 / v : l !== l && v !== v;
    }
    function h(l, v) {
      this.message = l, this.data = v && typeof v == "object" ? v : {}, this.stack = "";
    }
    h.prototype = Error.prototype;
    function W(l) {
      if (process.env.NODE_ENV !== "production")
        var v = {}, y = 0;
      function u(S, g, m, O, x, T, R) {
        if (O = O || A, T = T || m, R !== n) {
          if (d) {
            var f = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw f.name = "Invariant Violation", f;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var J = O + ":" + m;
            !v[J] && // Avoid spamming the console because they are often not actionable except for lib authors
            y < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + T + "` prop on `" + O + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), v[J] = !0, y++);
          }
        }
        return g[m] == null ? S ? g[m] === null ? new h("The " + x + " `" + T + "` is marked as required " + ("in `" + O + "`, but its value is `null`.")) : new h("The " + x + " `" + T + "` is marked as required in " + ("`" + O + "`, but its value is `undefined`.")) : null : l(g, m, O, x, T);
      }
      var p = u.bind(null, !1);
      return p.isRequired = u.bind(null, !0), p;
    }
    function D(l) {
      function v(y, u, p, S, g, m) {
        var O = y[u], x = $(O);
        if (x !== l) {
          var T = K(O);
          return new h(
            "Invalid " + S + " `" + g + "` of type " + ("`" + T + "` supplied to `" + p + "`, expected ") + ("`" + l + "`."),
            { expectedType: l }
          );
        }
        return null;
      }
      return W(v);
    }
    function z() {
      return W(o);
    }
    function j(l) {
      function v(y, u, p, S, g) {
        if (typeof l != "function")
          return new h("Property `" + g + "` of component `" + p + "` has invalid PropType notation inside arrayOf.");
        var m = y[u];
        if (!Array.isArray(m)) {
          var O = $(m);
          return new h("Invalid " + S + " `" + g + "` of type " + ("`" + O + "` supplied to `" + p + "`, expected an array."));
        }
        for (var x = 0; x < m.length; x++) {
          var T = l(m, x, p, S, g + "[" + x + "]", n);
          if (T instanceof Error)
            return T;
        }
        return null;
      }
      return W(v);
    }
    function P() {
      function l(v, y, u, p, S) {
        var g = v[y];
        if (!c(g)) {
          var m = $(g);
          return new h("Invalid " + p + " `" + S + "` of type " + ("`" + m + "` supplied to `" + u + "`, expected a single ReactElement."));
        }
        return null;
      }
      return W(l);
    }
    function s() {
      function l(v, y, u, p, S) {
        var g = v[y];
        if (!t.isValidElementType(g)) {
          var m = $(g);
          return new h("Invalid " + p + " `" + S + "` of type " + ("`" + m + "` supplied to `" + u + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return W(l);
    }
    function M(l) {
      function v(y, u, p, S, g) {
        if (!(y[u] instanceof l)) {
          var m = l.name || A, O = oe(y[u]);
          return new h("Invalid " + S + " `" + g + "` of type " + ("`" + O + "` supplied to `" + p + "`, expected ") + ("instance of `" + m + "`."));
        }
        return null;
      }
      return W(v);
    }
    function k(l) {
      if (!Array.isArray(l))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), o;
      function v(y, u, p, S, g) {
        for (var m = y[u], O = 0; O < l.length; O++)
          if (_(m, l[O]))
            return null;
        var x = JSON.stringify(l, function(R, f) {
          var J = K(f);
          return J === "symbol" ? String(f) : f;
        });
        return new h("Invalid " + S + " `" + g + "` of value `" + String(m) + "` " + ("supplied to `" + p + "`, expected one of " + x + "."));
      }
      return W(v);
    }
    function V(l) {
      function v(y, u, p, S, g) {
        if (typeof l != "function")
          return new h("Property `" + g + "` of component `" + p + "` has invalid PropType notation inside objectOf.");
        var m = y[u], O = $(m);
        if (O !== "object")
          return new h("Invalid " + S + " `" + g + "` of type " + ("`" + O + "` supplied to `" + p + "`, expected an object."));
        for (var x in m)
          if (r(m, x)) {
            var T = l(m, x, p, S, g + "." + x, n);
            if (T instanceof Error)
              return T;
          }
        return null;
      }
      return W(v);
    }
    function N(l) {
      if (!Array.isArray(l))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var v = 0; v < l.length; v++) {
        var y = l[v];
        if (typeof y != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + se(y) + " at index " + v + "."
          ), o;
      }
      function u(p, S, g, m, O) {
        for (var x = [], T = 0; T < l.length; T++) {
          var R = l[T], f = R(p, S, g, m, O, n);
          if (f == null)
            return null;
          f.data && r(f.data, "expectedType") && x.push(f.data.expectedType);
        }
        var J = x.length > 0 ? ", expected one of type [" + x.join(", ") + "]" : "";
        return new h("Invalid " + m + " `" + O + "` supplied to " + ("`" + g + "`" + J + "."));
      }
      return W(u);
    }
    function G() {
      function l(v, y, u, p, S) {
        return C(v[y]) ? null : new h("Invalid " + p + " `" + S + "` supplied to " + ("`" + u + "`, expected a ReactNode."));
      }
      return W(l);
    }
    function q(l, v, y, u, p) {
      return new h(
        (l || "React class") + ": " + v + " type `" + y + "." + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + p + "`."
      );
    }
    function U(l) {
      function v(y, u, p, S, g) {
        var m = y[u], O = $(m);
        if (O !== "object")
          return new h("Invalid " + S + " `" + g + "` of type `" + O + "` " + ("supplied to `" + p + "`, expected `object`."));
        for (var x in l) {
          var T = l[x];
          if (typeof T != "function")
            return q(p, S, g, x, K(T));
          var R = T(m, x, p, S, g + "." + x, n);
          if (R)
            return R;
        }
        return null;
      }
      return W(v);
    }
    function L(l) {
      function v(y, u, p, S, g) {
        var m = y[u], O = $(m);
        if (O !== "object")
          return new h("Invalid " + S + " `" + g + "` of type `" + O + "` " + ("supplied to `" + p + "`, expected `object`."));
        var x = e({}, y[u], l);
        for (var T in x) {
          var R = l[T];
          if (r(l, T) && typeof R != "function")
            return q(p, S, g, T, K(R));
          if (!R)
            return new h(
              "Invalid " + S + " `" + g + "` key `" + T + "` supplied to `" + p + "`.\nBad object: " + JSON.stringify(y[u], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(l), null, "  ")
            );
          var f = R(m, T, p, S, g + "." + T, n);
          if (f)
            return f;
        }
        return null;
      }
      return W(v);
    }
    function C(l) {
      switch (typeof l) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !l;
        case "object":
          if (Array.isArray(l))
            return l.every(C);
          if (l === null || c(l))
            return !0;
          var v = I(l);
          if (v) {
            var y = v.call(l), u;
            if (v !== l.entries) {
              for (; !(u = y.next()).done; )
                if (!C(u.value))
                  return !1;
            } else
              for (; !(u = y.next()).done; ) {
                var p = u.value;
                if (p && !C(p[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function B(l, v) {
      return l === "symbol" ? !0 : v ? v["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && v instanceof Symbol : !1;
    }
    function $(l) {
      var v = typeof l;
      return Array.isArray(l) ? "array" : l instanceof RegExp ? "object" : B(v, l) ? "symbol" : v;
    }
    function K(l) {
      if (typeof l > "u" || l === null)
        return "" + l;
      var v = $(l);
      if (v === "object") {
        if (l instanceof Date)
          return "date";
        if (l instanceof RegExp)
          return "regexp";
      }
      return v;
    }
    function se(l) {
      var v = K(l);
      switch (v) {
        case "array":
        case "object":
          return "an " + v;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + v;
        default:
          return v;
      }
    }
    function oe(l) {
      return !l.constructor || !l.constructor.name ? A : l.constructor.name;
    }
    return E.checkPropTypes = i, E.resetWarningCache = i.resetWarningCache, E.PropTypes = E, E;
  }, Ye;
}
var ze, ht;
function zt() {
  if (ht) return ze;
  ht = 1;
  var t = Je();
  function e() {
  }
  function n() {
  }
  return n.resetWarningCache = e, ze = function() {
    function r(o, c, d, b, w, I) {
      if (I !== t) {
        var A = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw A.name = "Invariant Violation", A;
      }
    }
    r.isRequired = r;
    function i() {
      return r;
    }
    var a = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: i,
      element: r,
      elementType: r,
      instanceOf: i,
      node: r,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: n,
      resetWarningCache: e
    };
    return a.PropTypes = a, a;
  }, ze;
}
if (process.env.NODE_ENV !== "production") {
  var Bt = mt(), qt = !0;
  Ve.exports = Yt()(Bt.isElement, qt);
} else
  Ve.exports = zt()();
var Vt = Ve.exports;
const X = /* @__PURE__ */ St(Vt);
function Ze(t) {
  return (Ze = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  })(t);
}
function Be(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Et(t, e) {
  return function(n) {
    if (Array.isArray(n)) return n;
  }(t) || function(n, r) {
    var i = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (i != null) {
      var a, o, c = [], d = !0, b = !1;
      try {
        for (i = i.call(n); !(d = (a = i.next()).done) && (c.push(a.value), !r || c.length !== r); d = !0) ;
      } catch (w) {
        b = !0, o = w;
      } finally {
        try {
          d || i.return == null || i.return();
        } finally {
          if (b) throw o;
        }
      }
      return c;
    }
  }(t, e) || Qe(t, e) || function() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function ie(t) {
  return function(e) {
    if (Array.isArray(e)) return He(e);
  }(t) || function(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
  }(t) || Qe(t) || function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function Qe(t, e) {
  if (t) {
    if (typeof t == "string") return He(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? He(t, e) : void 0;
  }
}
function He(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function ne(t, e) {
  var n = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (!n) {
    if (Array.isArray(t) || (n = Qe(t)) || e) {
      n && (t = n);
      var r = 0, i = function() {
      };
      return { s: i, n: function() {
        return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
      }, e: function(d) {
        throw d;
      }, f: i };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a, o = !0, c = !1;
  return { s: function() {
    n = n.call(t);
  }, n: function() {
    var d = n.next();
    return o = d.done, d;
  }, e: function(d) {
    c = !0, a = d;
  }, f: function() {
    try {
      o || n.return == null || n.return();
    } finally {
      if (c) throw a;
    }
  } };
}
function et(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") {
    var i = 0;
    for (r = Object.getOwnPropertySymbols(t); i < r.length; i++) e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  }
  return n;
}
var vt = { root: "tree", node: "tree-node", branch: "tree-node__branch", branchWrapper: "tree-branch-wrapper", leafListItem: "tree-leaf-list-item", leaf: "tree-node__leaf", nodeGroup: "tree-node-group" }, ce = { select: "SELECT", focus: "FOCUS", exclusiveSelect: "EXCLUSIVE_SELECT" }, Ht = Object.freeze(Object.values(ce)), Kt = Object.freeze(Object.values({ check: "check", select: "select" })), tt = "COLLAPSE", Pe = "COLLAPSE_MANY", Ce = "EXPAND", _e = "EXPAND_MANY", nt = "HALF_SELECT", Ee = "SELECT", wt = "DESELECT", Re = "TOGGLE", je = "TOGGLE_SELECT", ue = "SELECT_MANY", Tt = "EXCLUSIVE_CHANGE_SELECT_MANY", te = "FOCUS", Ot = "CLEAR_FOCUS", xt = "BLUR", Gt = "DISABLE", Xt = "ENABLE", At = "CLEAR_MANUALLY_TOGGLED", Ct = "CONTROLLED_SELECT_MANY", _t = "UPDATE_TREE_STATE_WHEN_DATA_CHANGED", Se = function() {
}, qe = function() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
  return function(r) {
    for (var i = 0, a = e; i < a.length; i++) {
      var o = a[i];
      if (o && o(r), r.defaultPrevented) break;
    }
  };
}, he = function(t, e) {
  var n, r = /* @__PURE__ */ new Set(), i = ne(t);
  try {
    for (i.s(); !(n = i.n()).done; ) {
      var a = n.value;
      e.has(a) || r.add(a);
    }
  } catch (o) {
    i.e(o);
  } finally {
    i.f();
  }
  return r;
}, xe = function(t, e) {
  return new Set([].concat(ie(he(t, e)), ie(he(e, t))));
}, yt = function(t) {
  var e = Ie();
  return ae(function() {
    e.current = t;
  }, [t]), e.current;
}, Q = function(t, e) {
  var n;
  return !!(!((n = H(t, e).children) === null || n === void 0) && n.length);
}, fe = function(t, e) {
  return H(t, e).parent;
}, Jt = function(t, e, n) {
  for (var r = e, i = []; ; ) {
    var a = fe(t, r);
    if (a === 0 || a == null || a != null && n.has(a)) break;
    i.push(a), r = a;
  }
  return i;
}, ge = function(t, e, n) {
  var r = [];
  return function i(a, o) {
    var c = H(a, o);
    if (c.children != null) {
      var d, b = ne(c.children.filter(function(I) {
        return !n.has(I);
      }));
      try {
        for (b.s(); !(d = b.n()).done; ) {
          var w = d.value;
          r.push(w), i(a, w);
        }
      } catch (I) {
        b.e(I);
      } finally {
        b.f();
      }
    }
  }(t, e), r;
}, jt = function(t, e) {
  var n = H(t, e);
  return n.children == null ? [] : n.children;
}, Pt = function(t, e, n) {
  var r = fe(t, e);
  if (r != null) {
    var i = H(t, r), a = i.children.indexOf(e) + n;
    if (i.children[a]) return i.children[a];
  }
  return null;
}, Ke = function(t, e, n) {
  var r = H(t, e);
  for (re(t).id === e && (r = H(t, H(t, e).children[H(t, e).children.length - 1])); n.has(r.id) && Q(t, r.id); ) r = H(t, r.children[r.children.length - 1]);
  return r.id;
}, Ge = function(t, e, n) {
  if (e === re(t).children[0]) return null;
  var r = Pt(t, e, -1);
  return r == null ? fe(t, e) : Ke(t, r, n);
}, me = function(t, e, n) {
  var r = H(t, e).id;
  if (Q(t, r) && n.has(r)) return H(t, r).children[0];
  for (; ; ) {
    var i = Pt(t, r, 1);
    if (i != null) return i;
    if ((r = fe(t, r)) == null) return null;
  }
}, Rt = function(t) {
  var e = t.data, n = t.expandedIds, r = t.from, i = t.to, a = [], o = e.length, c = 0, d = r;
  if (a.push(r), r < i) for (; c < o && ((d = me(e, d, n)) != null && a.push(d), d != null && d !== i); ) c += 1;
  else if (r > i) for (; c < o && ((d = Ge(e, d, n)) != null && a.push(d), d != null && d !== i); ) c += 1;
  return a;
}, Zt = function(t) {
  var e = t.isSelected, n = t.isDisabled, r = t.multiSelect;
  return n || r ? e : !!e || void 0;
}, Qt = function(t) {
  var e = t.isSelected, n = t.isDisabled, r = t.isHalfSelected, i = t.multiSelect;
  return n ? e : r ? "mixed" : i ? e : !!e || void 0;
}, ve = function(t, e, n) {
  return e.concat.apply(e, ie(e.filter(function(r) {
    return Q(t, r);
  }).map(function(r) {
    return ge(t, r, n);
  })));
}, en = function(t, e, n) {
  e != null ? window.navigator.userAgent.match(/Trident/) ? setTimeout(function() {
    return !e.contains(document.activeElement) && n();
  }, 0) : !e.contains(t.nativeEvent.relatedTarget) && n() : console.warn("ref not set on <ul>");
}, tn = function(t, e, n) {
  var r = jt(t, e);
  return Q(t, e) && !n.has(e) && r.length === 1 && r.every(function(i) {
    return n.has(i);
  });
}, Wt = function(t, e, n, r) {
  var i = function(o, c, d) {
    return Q(o, c) && d.has(c) && ge(o, c, /* @__PURE__ */ new Set()).some(function(b) {
      return d.has(b);
    });
  }(t, e, n), a = function(o, c, d) {
    var b = jt(o, c);
    return Q(o, c) && d.has(c) && b.length === 1 && b.every(function(w) {
      return d.has(w);
    });
  }(t, e, n);
  return function(o, c, d, b) {
    var w = ge(o, c, /* @__PURE__ */ new Set());
    return Q(o, c) && d.has(c) && w.every(function(I) {
      return d.has(I);
    }) && w.every(function(I) {
      return !b.has(I);
    });
  }(t, e, n, r) ? je : i && !a ? nt : je;
}, re = function(t) {
  var e = t.find(function(n) {
    return n.parent === null;
  });
  if (!e) throw Error("TreeView data must contain parent node.");
  return e;
}, H = function(t, e) {
  var n = t.find(function(r) {
    return r.id === e;
  });
  if (n == null) throw Error("Node with id=".concat(e, " doesn't exist in the tree."));
  return n;
}, bt = function(t) {
  var e = Array.from(new Set(t));
  return t.length !== e.length;
}, nn = function(t, e) {
  switch (e.type) {
    case tt:
      var n = new Set(t.expandedIds);
      return n.delete(e.id), Object.assign(Object.assign({}, t), { expandedIds: n, tabbableId: e.id, isFocused: !0, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case Pe:
      var r, i = new Set(t.expandedIds), a = ne(e.ids);
      try {
        for (a.s(); !(r = a.n()).done; ) {
          var o = r.value;
          i.delete(o);
        }
      } catch (K) {
        a.e(K);
      } finally {
        a.f();
      }
      return Object.assign(Object.assign({}, t), { expandedIds: i, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case Ce:
      var c = new Set(t.expandedIds);
      return c.add(e.id), Object.assign(Object.assign({}, t), { expandedIds: c, tabbableId: e.id, isFocused: !0, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case _e:
      var d = new Set([].concat(ie(t.expandedIds), ie(e.ids)));
      return Object.assign(Object.assign({}, t), { expandedIds: d, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case Re:
      var b = new Set(t.expandedIds);
      return t.expandedIds.has(e.id) ? b.delete(e.id) : b.add(e.id), Object.assign(Object.assign({}, t), { expandedIds: b, tabbableId: e.id, isFocused: !0, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case nt:
      if (t.disabledIds.has(e.id)) return t;
      var w = new Set(t.halfSelectedIds), I = new Set(t.selectedIds);
      return w.add(e.id), I.delete(e.id), Object.assign(Object.assign({}, t), { selectedIds: I, halfSelectedIds: w, tabbableId: e.keepFocus ? t.tabbableId : e.id, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled, lastUserSelect: e.NotUserAction ? t.lastUserSelect : e.id });
    case Ee:
      if (!e.NotUserAction && t.disabledIds.has(e.id)) return t;
      var A;
      e.multiSelect ? (A = new Set(t.selectedIds)).add(e.id) : (A = /* @__PURE__ */ new Set()).add(e.id);
      var E = new Set(t.halfSelectedIds);
      return E.delete(e.id), Object.assign(Object.assign({}, t), { selectedIds: A, halfSelectedIds: E, tabbableId: e.keepFocus ? t.tabbableId : e.id, isFocused: e.NotUserAction !== !0, lastUserSelect: e.NotUserAction ? t.lastUserSelect : e.id, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
    case wt:
      if (!e.NotUserAction && t.disabledIds.has(e.id)) return t;
      var _, h = new Set(t.selectedIds);
      return h.delete(e.id), e.multiSelect ? (_ = new Set(t.halfSelectedIds)).delete(e.id) : _ = /* @__PURE__ */ new Set(), Object.assign(Object.assign({}, t), { selectedIds: h, halfSelectedIds: _, tabbableId: e.keepFocus ? t.tabbableId : e.id, isFocused: !0, lastUserSelect: e.NotUserAction ? t.lastUserSelect : e.id, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
    case je:
      if (t.disabledIds.has(e.id)) return t;
      var W, D = t.selectedIds.has(e.id);
      e.multiSelect ? (W = new Set(t.selectedIds), D ? W.delete(e.id) : W.add(e.id)) : (W = /* @__PURE__ */ new Set(), D || W.add(e.id));
      var z = new Set(t.halfSelectedIds);
      return z.delete(e.id), Object.assign(Object.assign({}, t), { selectedIds: W, halfSelectedIds: z, tabbableId: e.id, isFocused: !0, lastUserSelect: e.NotUserAction ? t.lastUserSelect : e.id, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
    case ue:
      var j, P = e.ids.filter(function(K) {
        return !t.disabledIds.has(K);
      });
      if (e.multiSelect) {
        j = e.select ? new Set([].concat(ie(t.selectedIds), ie(P))) : he(t.selectedIds, new Set(P));
        var s = he(t.halfSelectedIds, j);
        return Object.assign(Object.assign({}, t), { selectedIds: j, halfSelectedIds: s, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
      }
      return t;
    case Tt:
      var M, k = e.ids.filter(function(K) {
        return !t.disabledIds.has(K);
      });
      if (e.multiSelect) {
        M = e.select ? new Set(k) : he(t.selectedIds, new Set(k));
        var V = he(t.halfSelectedIds, M);
        return Object.assign(Object.assign({}, t), { selectedIds: M, halfSelectedIds: V, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
      }
      return t;
    case Ct:
      var N, G = t.lastInteractedWith, q = t.tabbableId;
      if (e.multiSelect) N = new Set(e.ids), e.ids.length && (G = e.ids[e.ids.length - 1], q = e.ids[e.ids.length - 1]);
      else {
        N = /* @__PURE__ */ new Set(), e.ids.length > 1 && console.warn("Tree in singleSelect mode, only the first item from selectedIds will be selected.");
        var U = e.ids[0];
        U && N.add(U), G = U ?? G, q = U ?? G;
      }
      var L = new Set(t.halfSelectedIds);
      e.ids.every(function(K) {
        return L.delete(K);
      });
      var C = new Set(e.ids);
      return Object.assign(Object.assign({}, t), { selectedIds: N, halfSelectedIds: L, controlledIds: C, isFocused: !0, lastAction: e.type, tabbableId: q, lastInteractedWith: G });
    case te:
      return Object.assign(Object.assign({}, t), { tabbableId: e.id, isFocused: !0, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case xt:
      return Object.assign(Object.assign({}, t), { isFocused: !1 });
    case Ot:
      return Object.assign(Object.assign({}, t), { isFocused: !1, lastInteractedWith: null, tabbableId: e.id });
    case Gt:
      var B = new Set(t.disabledIds);
      return B.add(e.id), Object.assign(Object.assign({}, t), { disabledIds: B });
    case Xt:
      var $ = new Set(t.disabledIds);
      return $.delete(e.id), Object.assign(Object.assign({}, t), { disabledIds: $ });
    case At:
      return Object.assign(Object.assign({}, t), { lastManuallyToggled: null });
    case _t:
      return Object.assign(Object.assign({}, t), { tabbableId: e.tabbableId, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled, lastUserSelect: e.lastUserSelect });
    default:
      throw new Error("Invalid action passed to the reducer");
  }
}, Mt = function(t) {
  var e = t.element, n = t.dispatch, r = t.data, i = t.selectedIds, a = t.tabbableId, o = t.isFocused, c = t.expandedIds, d = t.disabledIds, b = t.halfSelectedIds, w = t.lastUserSelect, I = t.nodeRefs, A = t.leafRefs, E = t.baseClassNames, _ = t.nodeRenderer, h = t.nodeAction, W = t.setsize, D = t.posinset, z = t.level, j = t.propagateCollapse, P = t.propagateSelect, s = t.multiSelect, M = t.togglableSelect, k = t.clickAction, V = t.state, N = function(C) {
    if (!(C.ctrlKey || C.altKey || C.shiftKey)) if (c.has(e.id) && j) {
      var B = [e.id].concat(ie(ge(r, e.id, /* @__PURE__ */ new Set())));
      n({ type: Pe, ids: B, lastInteractedWith: e.id });
    } else n({ type: Re, id: e.id, lastInteractedWith: e.id });
  }, G = function() {
    return n({ type: te, id: e.id, lastInteractedWith: e.id });
  }, q = function(C) {
    if (C.shiftKey) {
      var B = Rt({ data: r, expandedIds: c, from: w, to: e.id }).filter(function($) {
        return !d.has($);
      });
      B = P ? ve(r, B, d) : B, n({ type: Tt, select: !0, multiSelect: s, ids: B, lastInteractedWith: e.id, lastManuallyToggled: e.id });
    } else C.ctrlKey || k === ce.select ? (n({ type: M ? Wt(r, e.id, i, d) : Ee, id: e.id, multiSelect: s, lastInteractedWith: e.id, lastManuallyToggled: e.id }), P && !d.has(e.id) && n({ type: ue, ids: ve(r, [e.id], d), select: !M || !i.has(e.id), multiSelect: s, lastInteractedWith: e.id, lastManuallyToggled: e.id })) : k === ce.exclusiveSelect ? n({ type: M ? je : Ee, id: e.id, multiSelect: !1, lastInteractedWith: e.id, lastManuallyToggled: e.id }) : k === ce.focus && n({ type: te, id: e.id, lastInteractedWith: e.id });
  }, U = function(C) {
    var B;
    return Ae(C, (Be(B = {}, "".concat(C, "--expanded"), c.has(e.id)), Be(B, "".concat(C, "--selected"), i.has(e.id)), Be(B, "".concat(C, "--focused"), a === e.id && o), B));
  }, L = h === "select" ? { "aria-selected": Zt({ isSelected: i.has(e.id), isDisabled: d.has(e.id), multiSelect: s }) } : { "aria-checked": Qt({ isSelected: i.has(e.id), isDisabled: d.has(e.id), isHalfSelected: b.has(e.id), multiSelect: s }) };
  return Q(r, e.id) || e.isBranch ? le.createElement("li", Object.assign({ role: "treeitem", "aria-expanded": c.has(e.id), "aria-setsize": W, "aria-posinset": D, "aria-level": z, "aria-disabled": d.has(e.id), tabIndex: a === e.id ? 0 : -1, ref: function(C) {
    (I == null ? void 0 : I.current) != null && C != null && (I.current[e.id] = C);
  }, className: E.branchWrapper }, L), le.createElement(le.Fragment, null, _({ element: e, isBranch: !0, isSelected: i.has(e.id), isHalfSelected: b.has(e.id), isExpanded: c.has(e.id), isDisabled: d.has(e.id), dispatch: n, getNodeProps: function() {
    var C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, B = C.onClick;
    return { onClick: B == null ? qe(q, N, G) : qe(B, G), className: Ae(U(E.node), E.branch), ref: function($) {
      (A == null ? void 0 : A.current) != null && (A.current[e.id] = $);
    } };
  }, setsize: W, posinset: D, level: z, handleSelect: q, handleExpand: N, treeState: V }), le.createElement(rn, Object.assign({ getClasses: U }, function(C) {
    return C.setsize, C.posinset, et(C, ["setsize", "posinset"]);
  }(t))))) : le.createElement("li", { role: "none", className: U(E.leafListItem) }, _({ element: e, isBranch: !1, isSelected: i.has(e.id), isHalfSelected: !1, isExpanded: !1, isDisabled: d.has(e.id), dispatch: n, getNodeProps: function() {
    var C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, B = C.onClick;
    return Object.assign({ role: "treeitem", tabIndex: a === e.id ? 0 : -1, onClick: qe(B ?? q, G), ref: function($) {
      (I == null ? void 0 : I.current) != null && (A == null ? void 0 : A.current) != null && (I.current[e.id] = $, A.current[e.id] = $);
    }, className: Ae(U(E.node), E.leaf), "aria-setsize": W, "aria-posinset": D, "aria-level": z, disabled: d.has(e.id), "aria-disabled": d.has(e.id) }, L);
  }, setsize: W, posinset: D, level: z, handleSelect: q, handleExpand: Se, treeState: V }));
}, rn = function(t) {
  var e = t.data, n = t.element, r = t.expandedIds, i = t.getClasses, a = t.baseClassNames, o = t.level, c = et(t, ["data", "element", "expandedIds", "getClasses", "baseClassNames", "level"]);
  return le.createElement("ul", { role: "group", className: i(a.nodeGroup) }, r.has(n.id) && n.children.length > 0 && n.children.map(function(d, b) {
    return le.createElement(Mt, Object.assign({ data: e, expandedIds: r, baseClassNames: a, key: "".concat(d, "-").concat(Ze(d)), element: H(e, d), setsize: n.children.length, posinset: b + 1, level: o + 1 }, c));
  }));
}, an = function(t) {
  var e = t.data, n = t.controlledSelectedIds, r = t.controlledExpandedIds, i = t.defaultExpandedIds, a = t.defaultSelectedIds, o = t.defaultDisabledIds, c = t.nodeRefs, d = t.leafRefs, b = t.onSelect, w = t.onNodeSelect, I = t.onExpand, A = t.onLoadData, E = t.togglableSelect, _ = t.multiSelect, h = t.propagateSelect, W = t.propagateSelectUpwards, D = t.treeRef, z = t.focusedId, j = re(e), P = Et(Lt(nn, { selectedIds: new Set(n || a), controlledIds: new Set(n), tabbableId: j.children[0], isFocused: !1, expandedIds: new Set(r || i), halfSelectedIds: /* @__PURE__ */ new Set(), lastUserSelect: j.children[0], lastInteractedWith: null, lastManuallyToggled: null, disabledIds: new Set(o) }), 2), s = P[0], M = P[1], k = s.selectedIds, V = s.expandedIds, N = s.disabledIds, G = s.tabbableId, q = s.halfSelectedIds, U = s.lastAction, L = s.lastInteractedWith, C = s.lastManuallyToggled, B = yt(k) || /* @__PURE__ */ new Set(), $ = xe(k, B);
  ae(function() {
    var y;
    if (b != null && b !== Se) {
      var u, p = ne($);
      try {
        for (p.s(); !(u = p.n()).done; ) {
          var S = u.value, g = Q(e, S) || !!(!((y = H(e, G)) === null || y === void 0) && y.isBranch);
          b({ element: H(e, S), isBranch: g, isExpanded: !!g && V.has(S), isSelected: k.has(S), isDisabled: N.has(S), isHalfSelected: !!g && q.has(S), treeState: s });
        }
      } catch (m) {
        p.e(m);
      } finally {
        p.f();
      }
    }
  }, [e, k, V, N, q, $, b, s]), ae(function() {
    w != null && w !== Se && C != null && $.size && (w({ element: H(e, C), isSelected: k.has(C), isBranch: Q(e, C), treeState: s }), M({ type: At }));
  }, [C, k, $]);
  var K = yt(V) || /* @__PURE__ */ new Set();
  ae(function() {
    var y = xe(V, K);
    if (I != null && I !== Se) {
      var u, p = ne(y);
      try {
        for (p.s(); !(u = p.n()).done; ) {
          var S = u.value;
          I({ element: H(e, S), isExpanded: V.has(S), isSelected: k.has(S), isDisabled: N.has(S), isHalfSelected: q.has(S), treeState: s });
        }
      } catch (g) {
        p.e(g);
      } finally {
        p.f();
      }
    }
  }, [e, k, V, N, q, K, I, s]);
  var se, oe, l = (se = e, oe = Ie(), ae(function() {
    oe.current = se;
  }), oe.current || /* @__PURE__ */ new Map());
  ae(function() {
    var y = xe(V, K);
    if (A) {
      var u, p = ne(y);
      try {
        for (p.s(); !(u = p.n()).done; ) {
          var S = u.value;
          A({ element: H(e, S), isExpanded: V.has(S), isSelected: k.has(S), isDisabled: N.has(S), isHalfSelected: q.has(S), treeState: s });
        }
      } catch (x) {
        p.e(x);
      } finally {
        p.f();
      }
      if (l !== e && E && h) {
        var g, m = ne(V);
        try {
          for (m.s(); !(g = m.n()).done; ) {
            var O = g.value;
            k.has(O) && M({ type: ue, ids: ve(e, [O], N), select: !0, multiSelect: _, lastInteractedWith: O });
          }
        } catch (x) {
          m.e(x);
        } finally {
          m.f();
        }
      }
    }
  }, [e, k, V, N, q, K, A, s]), ae(function() {
    if (l !== e) {
      var y = re(e);
      y.children.length && M({ type: _t, tabbableId: e.find(function(u) {
        return u.id === s.tabbableId;
      }) ? s.tabbableId : y.children[0], lastInteractedWith: e.find(function(u) {
        return u.id === s.lastInteractedWith;
      }) ? s.lastInteractedWith : null, lastManuallyToggled: e.find(function(u) {
        return u.id === s.lastManuallyToggled;
      }) ? s.lastManuallyToggled : null, lastUserSelect: e.find(function(u) {
        return u.id === s.lastUserSelect;
      }) ? s.lastUserSelect : y.children[0] });
    }
  }, [e]);
  var v = xe(new Set(n), k);
  return ae(function() {
    if (n) {
      v.size && M({ type: Ct, ids: n, multiSelect: _ });
      var y, u = ne(n);
      try {
        for (u.s(); !(y = u.n()).done; ) {
          var p = y.value;
          h && !N.has(p) && M({ type: ue, ids: ve(e, [p], N), select: !0, multiSelect: _, lastInteractedWith: p });
        }
      } catch (S) {
        u.e(S);
      } finally {
        u.f();
      }
    }
  }, [n]), ae(function() {
    var y = new Set(r), u = he(y, K), p = he(K, y);
    if (p.size) {
      var S, g = ne(p);
      try {
        for (g.s(); !(S = g.n()).done; ) {
          var m = S.value;
          if (Q(e, m) || H(e, m).isBranch) {
            var O = [m].concat(ie(ge(e, m, /* @__PURE__ */ new Set())));
            M({ type: Pe, ids: O, lastInteractedWith: m });
          }
        }
      } catch (J) {
        g.e(J);
      } finally {
        g.f();
      }
    }
    if (u.size) {
      var x, T = ne(u);
      try {
        for (T.s(); !(x = T.n()).done; ) {
          var R = x.value;
          if (Q(e, R) || H(e, R).isBranch) {
            var f = fe(e, R);
            M(f ? { type: _e, ids: [R, f], lastInteractedWith: R } : { type: Ce, id: R, lastInteractedWith: R });
          }
        }
      } catch (J) {
        T.e(J);
      } finally {
        T.f();
      }
    }
  }, [r]), ae(function() {
    if (W) {
      var y = new Set(ie($));
      L && U !== te && U !== tt && U !== Ce && U !== Re && y.add(L);
      var u = [];
      y.forEach(function(ee) {
        e.find(function(Me) {
          return Me.id === ee;
        }) || u.push(ee);
      }), u.forEach(function(ee) {
        return y.delete(ee);
      });
      var p, S = function(ee, Me, De, we, rt, Dt) {
        var at, pe = { every: /* @__PURE__ */ new Set(), some: /* @__PURE__ */ new Set(), none: /* @__PURE__ */ new Set() }, Te = ne(Me);
        try {
          for (Te.s(); !(at = Te.n()).done; ) for (var Le = at.value; ; ) {
            var de = fe(ee, Le);
            if (de === 0 || de == null || de != null && we.has(de)) break;
            var ke = H(ee, de).children.filter(function(Z) {
              return !we.has(Z);
            });
            if (ke.length === 0) break;
            if (ke.some(function(Z) {
              return De.has(Z) || pe.some.has(Z) && !pe.none.has(Z) || rt.has(Z) && !pe.none.has(Z);
            })) ke.every(function(Z) {
              return De.has(Z);
            }) ? pe.every.add(de) : pe.some.add(de);
            else {
              var it = Jt(ee, Le, we).find(function(Z) {
                return De.has(Z);
              });
              if (!Dt && it) {
                ge(ee, it, we).forEach(function(Z) {
                  rt.has(Z) && pe.none.add(Z);
                });
                break;
              }
              pe.none.add(de);
            }
            Le = de;
          }
        } catch (Z) {
          Te.e(Z);
        } finally {
          Te.f();
        }
        return pe;
      }(e, y, k, N, q, _), g = S.every, m = S.some, O = S.none, x = ne(g);
      try {
        for (x.s(); !(p = x.n()).done; ) {
          var T = p.value;
          k.has(T) || M({ type: Ee, id: T, multiSelect: _ || tn(e, T, k), keepFocus: !0, NotUserAction: !0, lastInteractedWith: L });
        }
      } catch (ee) {
        x.e(ee);
      } finally {
        x.f();
      }
      var R, f = ne(m);
      try {
        for (f.s(); !(R = f.n()).done; ) {
          var J = R.value;
          q.has(J) || M({ type: nt, id: J, lastInteractedWith: L, keepFocus: !0, NotUserAction: !0 });
        }
      } catch (ee) {
        f.e(ee);
      } finally {
        f.f();
      }
      var ye, be = ne(O);
      try {
        for (be.s(); !(ye = be.n()).done; ) {
          var We = ye.value;
          (k.has(We) || q.has(We)) && M({ type: wt, id: We, multiSelect: _, keepFocus: !0, NotUserAction: !0, lastInteractedWith: L, lastManuallyToggled: C });
        }
      } catch (ee) {
        be.e(ee);
      } finally {
        be.f();
      }
    }
  }, [e, _, W, k, V, N, q, U, B, $, L, v]), ae(function() {
    if (L != null && G != null && (c == null ? void 0 : c.current) != null && (d == null ? void 0 : d.current) != null && ((D == null ? void 0 : D.current) == null || document.activeElement && D.current.contains(document.activeElement) || z)) {
      var y = c.current[G];
      (function(u) {
        u != null && u.scrollIntoView && u.scrollIntoView({ block: "nearest" });
      })(d.current[L]), function(u) {
        u != null && u.focus && u.focus({ preventScroll: !0 });
      }(y);
    }
  }, [G, c, d, L]), ae(function() {
    if (z || M({ type: Ot, id: j.children[0] }), z && e.find(function(u) {
      return u.id === z;
    })) {
      var y = function u(p, S) {
        var g = fe(p, S), m = g && (Q(p, g) || H(p, g).isBranch);
        return g && m ? [g].concat(ie(u(p, g))) : [];
      }(e, z);
      y.length && M({ type: _e, ids: y, lastInteractedWith: z }), M({ type: te, id: z, lastInteractedWith: z });
    }
  }, [z]), [s, M];
}, sn = le.forwardRef(function(t, e) {
  var n = t.data, r = t.selectedIds, i = t.nodeRenderer, a = t.onSelect, o = a === void 0 ? Se : a, c = t.onNodeSelect, d = c === void 0 ? Se : c, b = t.onExpand, w = b === void 0 ? Se : b, I = t.onLoadData, A = t.className, E = A === void 0 ? "" : A, _ = t.multiSelect, h = _ !== void 0 && _, W = t.propagateSelect, D = W !== void 0 && W, z = t.propagateSelectUpwards, j = z !== void 0 && z, P = t.propagateCollapse, s = P !== void 0 && P, M = t.expandOnKeyboardSelect, k = M !== void 0 && M, V = t.togglableSelect, N = V !== void 0 && V, G = t.defaultExpandedIds, q = G === void 0 ? [] : G, U = t.defaultSelectedIds, L = U === void 0 ? [] : U, C = t.defaultDisabledIds, B = C === void 0 ? [] : C, $ = t.clickAction, K = $ === void 0 ? ce.select : $, se = t.nodeAction, oe = se === void 0 ? "select" : se, l = t.expandedIds, v = t.focusedId, y = t.onBlur, u = et(t, ["data", "selectedIds", "nodeRenderer", "onSelect", "onNodeSelect", "onExpand", "onLoadData", "className", "multiSelect", "propagateSelect", "propagateSelectUpwards", "propagateCollapse", "expandOnKeyboardSelect", "togglableSelect", "defaultExpandedIds", "defaultSelectedIds", "defaultDisabledIds", "clickAction", "nodeAction", "expandedIds", "focusedId", "onBlur"]);
  (function(T) {
    if (bt(T.map(function(R) {
      return R.id;
    }))) throw Error("Multiple TreeView nodes have the same ID. IDs must be unique.");
    if (T.forEach(function(R) {
      if (R.id === R.parent) throw Error("Node with id=".concat(R.id, " has parent reference to itself."));
      if (bt(R.children)) throw Error("Node with id=".concat(R.id, " contains duplicate ids in its children."));
    }), T.filter(function(R) {
      return R.parent === null;
    }).length === 0) throw Error("TreeView must have one root node.");
    if (T.filter(function(R) {
      return R.parent === null;
    }).length > 1) throw Error("TreeView can have only one root node.");
    re(T).children.length || console.warn("TreeView have no nodes to display.");
  })(n);
  var p = Ie({}), S = Ie({}), g = Ie(null);
  e != null && (g = e);
  var m = Et(an({ data: n, controlledSelectedIds: r, controlledExpandedIds: l, defaultExpandedIds: q, defaultSelectedIds: L, defaultDisabledIds: B, nodeRefs: p, leafRefs: S, onSelect: o, onNodeSelect: d, onExpand: w, onLoadData: I, togglableSelect: N, multiSelect: h, propagateSelect: D, propagateSelectUpwards: j, treeRef: g, focusedId: v }), 2), O = m[0], x = m[1];
  return D = D && h, le.createElement("ul", Object.assign({ className: Ae(vt.root, E), role: "tree", "aria-multiselectable": oe === "select" ? h : void 0, ref: g, onBlur: function(T) {
    en(T, g.current, function() {
      y && y({ treeState: O, dispatch: x }), x({ type: xt });
    });
  }, onKeyDown: on({ data: n, tabbableId: O.tabbableId, expandedIds: O.expandedIds, selectedIds: O.selectedIds, disabledIds: O.disabledIds, halfSelectedIds: O.halfSelectedIds, clickAction: K, dispatch: x, propagateCollapse: s, propagateSelect: D, multiSelect: h, expandOnKeyboardSelect: k, togglableSelect: N }) }, u), re(n).children.map(function(T, R) {
    return le.createElement(Mt, Object.assign({ key: "".concat(T, "-").concat(Ze(T)), data: n, element: H(n, T), setsize: re(n).children.length, posinset: R + 1, level: 1 }, O, { state: O, dispatch: x, nodeRefs: p, leafRefs: S, baseClassNames: vt, nodeRenderer: i, propagateCollapse: s, propagateSelect: D, propagateSelectUpwards: j, multiSelect: h, togglableSelect: N, clickAction: K, nodeAction: oe }));
  }));
}), on = function(t) {
  var e = t.data, n = t.expandedIds, r = t.selectedIds, i = t.disabledIds, a = t.tabbableId, o = t.dispatch, c = t.propagateCollapse, d = t.propagateSelect, b = t.multiSelect, w = t.expandOnKeyboardSelect, I = t.togglableSelect, A = t.clickAction;
  return function(E) {
    var _ = H(e, a), h = _.id;
    if (E.ctrlKey) {
      if (E.key === "a" && A !== ce.focus) {
        E.preventDefault();
        var W = e.filter(function(L) {
          return L.parent !== null;
        }).map(function(L) {
          return L.id;
        }).filter(function(L) {
          return !i.has(L);
        });
        o({ type: ue, multiSelect: b, select: Array.from(r).filter(function(L) {
          return !i.has(L);
        }).length !== W.length, ids: W, lastInteractedWith: _.id });
      } else if (E.shiftKey && (E.key === "Home" || E.key === "End") && A !== ce.focus) {
        var D = E.key === "Home" ? re(e).children[0] : Ke(e, h, n), z = Rt({ data: e, expandedIds: n, from: h, to: D }).filter(function(L) {
          return !i.has(L);
        });
        o({ type: ue, multiSelect: b, select: !0, ids: d ? ve(e, z, i) : z }), o({ type: te, id: D, lastInteractedWith: D });
      }
    } else {
      if (E.shiftKey) switch (E.key) {
        case "ArrowUp":
          E.preventDefault();
          var j = Ge(e, h, n);
          return void (j == null || i.has(j) || (A !== ce.focus && o({ type: ue, ids: d ? ve(e, [j], i) : [j], select: !0, multiSelect: b, lastInteractedWith: j, lastManuallyToggled: j }), o({ type: te, id: j, lastInteractedWith: j })));
        case "ArrowDown":
          E.preventDefault();
          var P = me(e, h, n);
          return void (P == null || i.has(P) || (A !== ce.focus && o({ type: ue, ids: d ? ve(e, [P], i) : [P], multiSelect: b, select: !0, lastInteractedWith: P, lastManuallyToggled: P }), o({ type: te, id: P, lastInteractedWith: P })));
      }
      switch (E.key) {
        case "ArrowDown":
          E.preventDefault();
          var s = me(e, h, n);
          return void (s != null && o({ type: te, id: s, lastInteractedWith: s }));
        case "ArrowUp":
          E.preventDefault();
          var M = Ge(e, h, n);
          return void (M != null && o({ type: te, id: M, lastInteractedWith: M }));
        case "ArrowLeft":
          if (E.preventDefault(), (Q(e, h) || _.isBranch) && n.has(a)) if (c) {
            var k = [h].concat(ie(ge(e, h, /* @__PURE__ */ new Set())));
            o({ type: Pe, ids: k, lastInteractedWith: _.id });
          } else o({ type: tt, id: h, lastInteractedWith: h });
          else if (!re(e).children.includes(h)) {
            var V = fe(e, h);
            if (V == null) throw new Error("parentId of root element is null");
            o({ type: te, id: V, lastInteractedWith: V });
          }
          return;
        case "ArrowRight":
          return E.preventDefault(), void ((Q(e, h) || _.isBranch) && (n.has(a) ? o({ type: te, id: _.children[0], lastInteractedWith: _.children[0] }) : o({ type: Ce, id: h, lastInteractedWith: h })));
        case "Home":
          E.preventDefault(), o({ type: te, id: re(e).children[0], lastInteractedWith: re(e).children[0] });
          break;
        case "End":
          E.preventDefault();
          var N = Ke(e, re(e).id, n);
          return void o({ type: te, id: N, lastInteractedWith: N });
        case "*":
          E.preventDefault();
          var G = fe(e, h);
          if (G == null) throw new Error("parentId of element is null");
          var q = H(e, G).children.filter(function(L) {
            return Q(e, L) || H(e, L).isBranch;
          });
          return void o({ type: _e, ids: q, lastInteractedWith: h });
        case "Enter":
        case " ":
        case "Spacebar":
          return E.preventDefault(), A === ce.focus ? void 0 : (o({ type: I ? Wt(e, h, r, i) : Ee, id: h, multiSelect: b, lastInteractedWith: h, lastManuallyToggled: h }), d && !i.has(_.id) && o({ type: ue, ids: ve(e, [h], i), select: !I || !r.has(h), multiSelect: b, lastInteractedWith: h, lastManuallyToggled: h }), void (w && o({ type: Re, id: h, lastInteractedWith: h })));
        default:
          if (E.key.length === 1) for (var U = me(e, h, n); U !== h; ) if (U != null) {
            if (H(e, U).name[0].toLowerCase() === E.key.toLowerCase()) return void o({ type: te, id: U, lastInteractedWith: h });
            U = me(e, U, n);
          } else U = re(e).children[0];
          return;
      }
    }
  };
};
sn.propTypes = { data: X.array.isRequired, onSelect: X.func, onNodeSelect: X.func, onExpand: X.func, className: X.string, nodeRenderer: X.func.isRequired, defaultExpandedIds: X.array, defaultSelectedIds: X.array, expandedIds: X.array, selectedIds: X.array, defaultDisabledIds: X.array, propagateCollapse: X.bool, propagateSelect: X.bool, propagateSelectUpwards: X.bool, multiSelect: X.bool, expandOnKeyboardSelect: X.bool, togglableSelect: X.bool, nodeAction: X.oneOf(Kt), clickAction: X.oneOf(Ht), onBlur: X.func, onLoadData: X.func, focusedId: X.oneOfType([X.string, X.number]) };
function un(t) {
  return Xe({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" }, child: [] }] })(t);
}
function fn(t) {
  return Xe({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" }, child: [] }] })(t);
}
function pn(t) {
  return Xe({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M192 128l128 128-128 128z" }, child: [] }] })(t);
}
export {
  un as A,
  fn as I,
  pn as a,
  Ae as c,
  sn as f
};
