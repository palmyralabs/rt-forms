import { D as $, U as k, k as C, R as m, t as D, E as I } from "../../../chunks/SimplePredicates.js";
import { getErrorMessage as P } from "./errorMessageHelper.js";
const N = (e) => {
  const t = e.is, n = e.min, r = e.max;
  if (t)
    return Y(t);
  if (n)
    return r ? U(n, r) : T(n);
  if (r)
    return W(r);
  throw Error("one or more parameters must be provided : is, min or max");
}, U = (e, t) => (n) => b(n) ? { valid: !1, reason: "length.invalid", value: n } : n.length <= t ? e <= n.length ? { valid: !0 } : { valid: !1, reason: "length.min", value: n.length } : { valid: !1, reason: "length.max", value: n.length }, Y = (e) => (t) => b(t) ? { valid: !1, reason: "length.invalid", value: t } : t.length == e ? { valid: !0 } : { valid: !1, reason: "length.eq", value: t.length }, T = (e) => (t) => b(t) ? { valid: !1, reason: "length.invalid", value: t } : e <= t.length ? { valid: !0 } : { valid: !1, reason: "length.min", value: t.length }, W = (e) => (t) => b(t) ? { valid: !1, reason: "length.invalid", value: t } : t.length <= e ? { valid: !0 } : { valid: !1, reason: "length.max", value: t.length }, b = (e) => e == null || e == null, L = (e) => {
  const t = e.start, n = e.end;
  if (n)
    return t ? Z(t, n) : X(n);
  if (t)
    return B(t);
  throw Error("one or more parameters must be provided : start or end");
}, Z = (e, t) => (n) => {
  if (e)
    if (t) {
      if (n >= e && n <= t)
        return { valid: !0 };
      if (n < e)
        return { valid: !1, reason: "range.start", value: n };
      if (n > t)
        return { valid: !1, reason: "range.end", value: n };
    } else
      return { valid: !1, reason: "range.end", value: n };
  else
    return { valid: !1, reason: "range.end", value: n };
}, X = (e) => (t) => t <= e ? { valid: !0 } : { valid: !1, reason: "range.end", value: t }, B = (e) => (t) => e <= t ? { valid: !0 } : { valid: !1, reason: "range.start", value: t }, G = (e) => {
  const t = H(e);
  return (n) => t(n) ? { valid: !0 } : {
    valid: !1,
    reason: "regex",
    value: n
  };
}, H = (e) => {
  if (typeof e == "string") {
    const t = new RegExp(e);
    return (n) => t.test(n);
  } else
    return (t) => e.test(t);
}, J = (e) => /^(?:[A-Za-z]:\/)?[\w\/]+\w+$/.test(e), Q = (e) => /^(102[4-9]|10[3-9]\d|1[1-9]\d{2}|[2-9]\d{3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/.test(e);
function V(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en-US", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  m(e);
  var r = e, a = n.ignore;
  if (a)
    if (a instanceof RegExp)
      r = r.replace(a, "");
    else if (typeof a == "string")
      r = r.replace(new RegExp("[".concat(a.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, "\\$&"), "]"), "g"), "");
    else
      throw new Error("ignore should be instance of a String or RegExp");
  if (t in D)
    return D[t].test(r);
  throw new Error("Invalid locale '".concat(t, "'"));
}
function x() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  for (var n in t)
    typeof e[n] > "u" && (e[n] = t[n]);
  return e;
}
function K(e, t) {
  return nt(e) || et(e, t) || R(e, t) || tt();
}
function tt() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function et(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, a, i, l, o = [], s = !0, c = !1;
    try {
      if (i = (n = n.call(e)).next, t !== 0) for (; !(s = (r = i.call(n)).done) && (o.push(r.value), o.length !== t); s = !0) ;
    } catch (f) {
      c = !0, a = f;
    } finally {
      try {
        if (!s && n.return != null && (l = n.return(), Object(l) !== l)) return;
      } finally {
        if (c) throw a;
      }
    }
    return o;
  }
}
function nt(e) {
  if (Array.isArray(e)) return e;
}
function rt(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = R(e)) || t) {
      n && (e = n);
      var r = 0, a = function() {
      };
      return { s: a, n: function() {
        return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
      }, e: function(s) {
        throw s;
      }, f: a };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i = !0, l = !1, o;
  return { s: function() {
    n = n.call(e);
  }, n: function() {
    var s = n.next();
    return i = s.done, s;
  }, e: function(s) {
    l = !0, o = s;
  }, f: function() {
    try {
      !i && n.return != null && n.return();
    } finally {
      if (l) throw o;
    }
  } };
}
function R(e, t) {
  if (e) {
    if (typeof e == "string") return S(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return S(e, t);
  }
}
function S(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var q = {
  format: "YYYY/MM/DD",
  delimiters: ["/", "-"],
  strictMode: !1
};
function at(e) {
  return /(^(y{4}|y{2})[.\/-](m{1,2})[.\/-](d{1,2})$)|(^(m{1,2})[.\/-](d{1,2})[.\/-]((y{4}|y{2})$))|(^(d{1,2})[.\/-](m{1,2})[.\/-]((y{4}|y{2})$))/gi.test(e);
}
function it(e, t) {
  for (var n = [], r = Math.min(e.length, t.length), a = 0; a < r; a++)
    n.push([e[a], t[a]]);
  return n;
}
function ot(e, t) {
  if (typeof t == "string" ? t = x({
    format: t
  }, q) : t = x(t, q), typeof e == "string" && at(t.format)) {
    var n = t.delimiters.find(function(p) {
      return t.format.indexOf(p) !== -1;
    }), r = t.strictMode ? n : t.delimiters.find(function(p) {
      return e.indexOf(p) !== -1;
    }), a = it(e.split(r), t.format.toLowerCase().split(n)), i = {}, l = rt(a), o;
    try {
      for (l.s(); !(o = l.n()).done; ) {
        var s = K(o.value, 2), c = s[0], f = s[1];
        if (c.length !== f.length)
          return !1;
        i[f.charAt(0)] = c;
      }
    } catch (p) {
      l.e(p);
    } finally {
      l.f();
    }
    var d = i.y;
    if (d.startsWith("-"))
      return !1;
    if (i.y.length === 2) {
      var y = parseInt(i.y, 10);
      if (isNaN(y))
        return !1;
      var _ = (/* @__PURE__ */ new Date()).getFullYear() % 100;
      y < _ ? d = "20".concat(i.y) : d = "19".concat(i.y);
    }
    var v = i.m;
    i.m.length === 1 && (v = "0".concat(i.m));
    var A = i.d;
    return i.d.length === 1 && (A = "0".concat(i.d)), new Date("".concat(d, "-").concat(v, "-").concat(A, "T00:00:00.000Z")).getUTCDate() === +i.d;
  }
  return t.strictMode ? !1 : Object.prototype.toString.call(e) === "[object Date]" && isFinite(e);
}
var lt = {
  hourFormat: "hour24",
  mode: "default"
}, ut = {
  hour24: {
    default: /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/,
    withSeconds: /^([01]?[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/
  },
  hour12: {
    default: /^(0?[1-9]|1[0-2]):([0-5][0-9]) (A|P)M$/,
    withSeconds: /^(0?[1-9]|1[0-2]):([0-5][0-9]):([0-5][0-9]) (A|P)M$/
  }
};
function st(e, t) {
  return t = x(t, lt), typeof e != "string" ? !1 : ut[t.hourFormat][t.mode].test(e);
}
function E(e) {
  "@babel/helpers - typeof";
  return E = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, E(e);
}
function F(e, t) {
  m(e);
  var n, r;
  E(t) === "object" ? (n = t.min || 0, r = t.max) : (n = arguments[1], r = arguments[2]);
  var a = encodeURI(e).split(/%..|./).length - 1;
  return a >= n && (typeof r > "u" || a <= r);
}
var ct = {
  require_tld: !0,
  allow_underscores: !1,
  allow_trailing_dot: !1,
  allow_numeric_tld: !1,
  allow_wildcard: !1,
  ignore_max_length: !1
};
function j(e, t) {
  m(e), t = x(t, ct), t.allow_trailing_dot && e[e.length - 1] === "." && (e = e.substring(0, e.length - 1)), t.allow_wildcard === !0 && e.indexOf("*.") === 0 && (e = e.substring(2));
  var n = e.split("."), r = n[n.length - 1];
  return t.require_tld && (n.length < 2 || !t.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(r) || /\s/.test(r)) || !t.allow_numeric_tld && /^\d+$/.test(r) ? !1 : n.every(function(a) {
    return !(a.length > 63 && !t.ignore_max_length || !/^[a-z_\u00a1-\uffff0-9-]+$/i.test(a) || /[\uff01-\uff5e]/.test(a) || /^-|-$/.test(a) || !t.allow_underscores && /_/.test(a));
  });
}
var O = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])", g = "(".concat(O, "[.]){3}").concat(O), ft = new RegExp("^".concat(g, "$")), u = "(?:[0-9a-fA-F]{1,4})", gt = new RegExp("^(" + "(?:".concat(u, ":){7}(?:").concat(u, "|:)|") + "(?:".concat(u, ":){6}(?:").concat(g, "|:").concat(u, "|:)|") + "(?:".concat(u, ":){5}(?::").concat(g, "|(:").concat(u, "){1,2}|:)|") + "(?:".concat(u, ":){4}(?:(:").concat(u, "){0,1}:").concat(g, "|(:").concat(u, "){1,3}|:)|") + "(?:".concat(u, ":){3}(?:(:").concat(u, "){0,2}:").concat(g, "|(:").concat(u, "){1,4}|:)|") + "(?:".concat(u, ":){2}(?:(:").concat(u, "){0,3}:").concat(g, "|(:").concat(u, "){1,5}|:)|") + "(?:".concat(u, ":){1}(?:(:").concat(u, "){0,4}:").concat(g, "|(:").concat(u, "){1,6}|:)|") + "(?::((?::".concat(u, "){0,5}:").concat(g, "|(?::").concat(u, "){1,7}|:))") + ")(%[0-9a-zA-Z-.:]{1,})?$");
function h(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return m(e), t = String(t), t ? t === "4" ? ft.test(e) : t === "6" ? gt.test(e) : !1 : h(e, 4) || h(e, 6);
}
var dt = {
  allow_display_name: !1,
  allow_underscores: !1,
  require_display_name: !1,
  allow_utf8_local_part: !0,
  require_tld: !0,
  blacklisted_chars: "",
  ignore_max_length: !1,
  host_blacklist: [],
  host_whitelist: []
}, vt = /^([^\x00-\x1F\x7F-\x9F\cX]+)</i, ht = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i, mt = /^[a-z\d]+$/, pt = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i, xt = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A1-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i, yt = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i, _t = 254;
function wt(e) {
  var t = e.replace(/^"(.+)"$/, "$1");
  if (!t.trim())
    return !1;
  var n = /[\.";<>]/.test(t);
  if (n) {
    if (t === e)
      return !1;
    var r = t.split('"').length === t.split('\\"').length;
    if (!r)
      return !1;
  }
  return !0;
}
function bt(e, t) {
  if (m(e), t = x(t, dt), t.require_display_name || t.allow_display_name) {
    var n = e.match(vt);
    if (n) {
      var r = n[1];
      if (e = e.replace(r, "").replace(/(^<|>$)/g, ""), r.endsWith(" ") && (r = r.slice(0, -1)), !wt(r))
        return !1;
    } else if (t.require_display_name)
      return !1;
  }
  if (!t.ignore_max_length && e.length > _t)
    return !1;
  var a = e.split("@"), i = a.pop(), l = i.toLowerCase();
  if (t.host_blacklist.includes(l) || t.host_whitelist.length > 0 && !t.host_whitelist.includes(l))
    return !1;
  var o = a.join("@");
  if (t.domain_specific_validation && (l === "gmail.com" || l === "googlemail.com")) {
    o = o.toLowerCase();
    var s = o.split("+")[0];
    if (!F(s.replace(/\./g, ""), {
      min: 6,
      max: 30
    }))
      return !1;
    for (var c = s.split("."), f = 0; f < c.length; f++)
      if (!mt.test(c[f]))
        return !1;
  }
  if (t.ignore_max_length === !1 && (!F(o, {
    max: 64
  }) || !F(i, {
    max: 254
  })))
    return !1;
  if (!j(i, {
    require_tld: t.require_tld,
    ignore_max_length: t.ignore_max_length,
    allow_underscores: t.allow_underscores
  })) {
    if (!t.allow_ip_domain)
      return !1;
    if (!h(i)) {
      if (!i.startsWith("[") || !i.endsWith("]"))
        return !1;
      var d = i.slice(1, -1);
      if (d.length === 0 || !h(d))
        return !1;
    }
  }
  if (o[0] === '"')
    return o = o.slice(1, o.length - 1), t.allow_utf8_local_part ? yt.test(o) : pt.test(o);
  for (var y = t.allow_utf8_local_part ? xt : ht, _ = o.split("."), v = 0; v < _.length; v++)
    if (!y.test(_[v]))
      return !1;
  return !(t.blacklisted_chars && o.search(new RegExp("[".concat(t.blacklisted_chars, "]+"), "g")) !== -1);
}
var Ft = /^(?:[-+]?(?:0|[1-9][0-9]*))$/, $t = /^[-+]?[0-9]+$/;
function Et(e, t) {
  m(e), t = t || {};
  var n = t.allow_leading_zeroes === !1 ? Ft : $t, r = !t.hasOwnProperty("min") || e >= t.min, a = !t.hasOwnProperty("max") || e <= t.max, i = !t.hasOwnProperty("lt") || e < t.lt, l = !t.hasOwnProperty("gt") || e > t.gt;
  return n.test(e) && r && a && i && l;
}
function At(e) {
  return Et(e, {
    allow_leading_zeroes: !1,
    min: 0,
    max: 65535
  });
}
const Dt = {
  string: $,
  alphabets: V,
  date: ot,
  time: st,
  number: k,
  email: bt,
  port: At,
  ipv4: (e) => h(e, 4),
  ipv6: (e) => h(e, 6),
  fqdn: j,
  folder: J,
  portRange: Q,
  float: C
}, M = (e) => {
  const t = St(e);
  return (n) => n != null && t(n) ? { valid: !0 } : {
    valid: !1,
    reason: e,
    value: n
  };
}, St = (e) => {
  if (e) {
    const t = Dt[e];
    if (!t)
      throw new Error("no validator found for rule " + e);
    return t || $;
  }
  return $;
}, qt = (e) => {
  let t = [];
  const n = e.required;
  if (e.length && t.push(N(e.length)), e.range && t.push(L(e.range)), e.regExp && t.push(G(e.regExp)), e.rules) {
    const a = e.rules;
    if (a instanceof Array && a.length > 0)
      for (var r of a)
        t.push(M(r));
    else {
      const i = a;
      t.push(M(i));
    }
  }
  return (a) => {
    if (I(a))
      return n ? { valid: !1, reason: "required", value: a } : { valid: !0 };
    for (var i of t) {
      const l = i.call(null, a);
      if (!l.valid)
        return l;
    }
    return { valid: !0 };
  };
}, jt = (e) => qt(Ot(e)), Ot = (e) => {
  var t = {};
  if (t.required = e.required == !0, e.range) {
    const n = e.range;
    t.range = { negate: !1 }, w(n, t.range, "start"), w(n, t.range, "end");
  }
  if (e.length) {
    const n = e.length;
    typeof n == "number" ? t.length = { is: n } : (t.length = {}, z(n.eq) ? t.length.is = n.eq : (w(n, t.length, "min"), w(n, t.length, "max")));
  }
  if (e.regExp) {
    const n = e.regExp;
    if (typeof n == "string" || typeof n.test == "function")
      t.regExp = n;
    else if (n.regex) {
      const r = n.regex;
      r && (t.regExp = r);
    }
  }
  if (e.validRule) {
    const n = e.validRule;
    typeof n == "string" ? t.rules = [n] : Array.isArray(n) ? t.rules = n.map((r) => r.rule) : typeof n == "object" && (n.rule ? t.rules = [n.rule] : Object.entries(n).map(([a, i]) => {
      t.rules = [a];
    }));
  }
  return t;
}, z = (e) => !isNaN(e), w = (e, t, n, r) => {
  const a = n, i = e[n];
  z(e[n]) && (t[a] = i);
}, zt = (e, t, n) => {
  const r = t(e);
  return r.valid ? { status: !1, message: "" } : { status: !0, message: P(r, n) };
};
export {
  jt as generatePredicate,
  zt as validate
};
