import { getErrorMessage as X } from "./errorMessageHelper.js";
const tt = (e) => {
  const t = e.is, n = e.min, r = e.max;
  if (t)
    return nt(t);
  if (n)
    return r ? et(n, r) : rt(n);
  if (r)
    return at(r);
  throw Error("one or more parameters must be provided : is, min or max");
}, et = (e, t) => (n) => A(n) ? { valid: !1, reason: "length.invalid", value: n } : n.length <= t ? e <= n.length ? { valid: !0 } : { valid: !1, reason: "length.min", value: n.length } : { valid: !1, reason: "length.max", value: n.length }, nt = (e) => (t) => A(t) ? { valid: !1, reason: "length.invalid", value: t } : t.length == e ? { valid: !0 } : { valid: !1, reason: "length.eq", value: t.length }, rt = (e) => (t) => A(t) ? { valid: !1, reason: "length.invalid", value: t } : e <= t.length ? { valid: !0 } : { valid: !1, reason: "length.min", value: t.length }, at = (e) => (t) => A(t) ? { valid: !1, reason: "length.invalid", value: t } : t.length <= e ? { valid: !0 } : { valid: !1, reason: "length.max", value: t.length }, A = (e) => e == null || e == null, it = (e) => {
  const t = e.start, n = e.end;
  if (n)
    return t ? ot(t, n) : lt(n);
  if (t)
    return ut(t);
  throw Error("one or more parameters must be provided : start or end");
}, ot = (e, t) => (n) => {
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
}, lt = (e) => (t) => t <= e ? { valid: !0 } : { valid: !1, reason: "range.end", value: t }, ut = (e) => (t) => e <= t ? { valid: !0 } : { valid: !1, reason: "range.start", value: t }, st = (e) => {
  const t = ct(e);
  return (n) => t(n) ? { valid: !0 } : {
    valid: !1,
    reason: "regex",
    value: n
  };
}, ct = (e) => {
  if (typeof e == "string") {
    const t = new RegExp(e);
    return (n) => t.test(n);
  } else
    return (t) => e.test(t);
};
function U(e) {
  "@babel/helpers - typeof";
  return U = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, U(e);
}
function h(e) {
  var t = typeof e == "string" || e instanceof String;
  if (!t) {
    var n = U(e);
    throw e === null ? n = "null" : n === "object" && (n = e.constructor.name), new TypeError("Expected a string but received a ".concat(n));
  }
}
var f = {
  "en-US": /^[A-Z]+$/i,
  "az-AZ": /^[A-VXYZÇƏĞİıÖŞÜ]+$/i,
  "bg-BG": /^[А-Я]+$/i,
  "cs-CZ": /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
  "da-DK": /^[A-ZÆØÅ]+$/i,
  "de-DE": /^[A-ZÄÖÜß]+$/i,
  "el-GR": /^[Α-ώ]+$/i,
  "es-ES": /^[A-ZÁÉÍÑÓÚÜ]+$/i,
  "fa-IR": /^[ابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]+$/i,
  "fi-FI": /^[A-ZÅÄÖ]+$/i,
  "fr-FR": /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
  "it-IT": /^[A-ZÀÉÈÌÎÓÒÙ]+$/i,
  "ja-JP": /^[ぁ-んァ-ヶｦ-ﾟ一-龠ー・。、]+$/i,
  "nb-NO": /^[A-ZÆØÅ]+$/i,
  "nl-NL": /^[A-ZÁÉËÏÓÖÜÚ]+$/i,
  "nn-NO": /^[A-ZÆØÅ]+$/i,
  "hu-HU": /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
  "pl-PL": /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
  "pt-PT": /^[A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,
  "ru-RU": /^[А-ЯЁ]+$/i,
  "kk-KZ": /^[А-ЯЁ\u04D8\u04B0\u0406\u04A2\u0492\u04AE\u049A\u04E8\u04BA]+$/i,
  "sl-SI": /^[A-ZČĆĐŠŽ]+$/i,
  "sk-SK": /^[A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
  "sr-RS@latin": /^[A-ZČĆŽŠĐ]+$/i,
  "sr-RS": /^[А-ЯЂЈЉЊЋЏ]+$/i,
  "sv-SE": /^[A-ZÅÄÖ]+$/i,
  "th-TH": /^[ก-๐\s]+$/i,
  "tr-TR": /^[A-ZÇĞİıÖŞÜ]+$/i,
  "uk-UA": /^[А-ЩЬЮЯЄIЇҐі]+$/i,
  "vi-VN": /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i,
  "ko-KR": /^[ㄱ-ㅎㅏ-ㅣ가-힣]*$/,
  "ku-IQ": /^[ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
  he: /^[א-ת]+$/,
  fa: /^['آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی']+$/i,
  bn: /^['ঀঁংঃঅআইঈউঊঋঌএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহ়ঽািীুূৃৄেৈোৌ্ৎৗড়ঢ়য়ৠৡৢৣৰৱ৲৳৴৵৶৷৸৹৺৻']+$/,
  eo: /^[ABCĈD-GĜHĤIJĴK-PRSŜTUŬVZ]+$/i,
  "hi-IN": /^[\u0900-\u0961]+[\u0972-\u097F]*$/i,
  "si-LK": /^[\u0D80-\u0DFF]+$/
}, s = {
  "en-US": ".",
  ar: "٫"
}, j = ["AU", "GB", "HK", "IN", "NZ", "ZA", "ZM"];
for (var F, S = 0; S < j.length; S++)
  F = "en-".concat(j[S]), f[F] = f["en-US"], s[F] = s["en-US"];
var q = ["AE", "BH", "DZ", "EG", "IQ", "JO", "KW", "LB", "LY", "MA", "QM", "QA", "SA", "SD", "SY", "TN", "YE"];
for (var E, R = 0; R < q.length; R++)
  E = "ar-".concat(q[R]), f[E] = f.ar, s[E] = s.ar;
var L = ["IR", "AF"];
for (var C, Z = 0; Z < L.length; Z++)
  C = "fa-".concat(L[Z]), s[C] = s.ar;
var B = ["BD", "IN"];
for (var D, I = 0; I < B.length; I++)
  D = "bn-".concat(B[I]), f[D] = f.bn, s[D] = s["en-US"];
var z = ["ar-EG", "ar-LB", "ar-LY"], K = ["bg-BG", "cs-CZ", "da-DK", "de-DE", "el-GR", "en-ZM", "eo", "es-ES", "fr-CA", "fr-FR", "id-ID", "it-IT", "ku-IQ", "hi-IN", "hu-HU", "nb-NO", "nn-NO", "nl-NL", "pl-PL", "pt-PT", "ru-RU", "kk-KZ", "si-LK", "sl-SI", "sr-RS@latin", "sr-RS", "sv-SE", "tr-TR", "uk-UA", "vi-VN"];
for (var P = 0; P < z.length; P++)
  s[z[P]] = s["en-US"];
for (var O = 0; O < K.length; O++)
  s[K[O]] = ",";
f["fr-CA"] = f["fr-FR"];
f["pt-BR"] = f["pt-PT"];
s["pt-BR"] = s["pt-PT"];
f["pl-Pl"] = f["pl-PL"];
s["pl-Pl"] = s["pl-PL"];
f["fa-AF"] = f.fa;
function ft(e, t) {
  return h(e), new RegExp("^[+-]?([0-9]*[".concat({}.locale ? s[t.locale] : ".", "])?[0-9]+$")).test(e);
}
function gt(e, t) {
  h(e), t = t || {};
  var n = new RegExp("^(?:[-+])?(?:[0-9]+)?(?:\\".concat(t.locale ? s[t.locale] : ".", "[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$"));
  if (e === "" || e === "." || e === "," || e === "-" || e === "+")
    return !1;
  var r = parseFloat(e.replace(",", "."));
  return n.test(e) && (!t.hasOwnProperty("min") || r >= t.min) && (!t.hasOwnProperty("max") || r <= t.max) && (!t.hasOwnProperty("lt") || r < t.lt) && (!t.hasOwnProperty("gt") || r > t.gt);
}
const dt = (e) => e == null || e == null ? !0 : typeof e == "string" || e instanceof Array ? e.length == 0 : typeof e == "object" ? Object.keys(e).length == 0 : !1, k = () => !0, vt = (e) => {
  const t = typeof e == "number" ? e.toString() : e;
  return ft(t);
}, ht = (e) => {
  const t = typeof e == "number" ? e.toString() : e;
  return gt(t);
}, pt = (e) => /^(?:[A-Za-z]:\/)?[\w\/]+\w+$/.test(e), mt = (e) => /^(102[4-9]|10[3-9]\d|1[1-9]\d{2}|[2-9]\d{3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/.test(e);
function yt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en-US", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  h(e);
  var r = e, a = n.ignore;
  if (a)
    if (a instanceof RegExp)
      r = r.replace(a, "");
    else if (typeof a == "string")
      r = r.replace(new RegExp("[".concat(a.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, "\\$&"), "]"), "g"), "");
    else
      throw new Error("ignore should be instance of a String or RegExp");
  if (t in f)
    return f[t].test(r);
  throw new Error("Invalid locale '".concat(t, "'"));
}
function $() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  for (var n in t)
    typeof e[n] > "u" && (e[n] = t[n]);
  return e;
}
function xt(e, t) {
  return bt(e) || _t(e, t) || W(e, t) || $t();
}
function $t() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _t(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, a, i, l, o = [], c = !0, g = !1;
    try {
      if (i = (n = n.call(e)).next, t !== 0) for (; !(c = (r = i.call(n)).done) && (o.push(r.value), o.length !== t); c = !0) ;
    } catch (d) {
      g = !0, a = d;
    } finally {
      try {
        if (!c && n.return != null && (l = n.return(), Object(l) !== l)) return;
      } finally {
        if (g) throw a;
      }
    }
    return o;
  }
}
function bt(e) {
  if (Array.isArray(e)) return e;
}
function wt(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = W(e)) || t) {
      n && (e = n);
      var r = 0, a = function() {
      };
      return { s: a, n: function() {
        return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
      }, e: function(c) {
        throw c;
      }, f: a };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i = !0, l = !1, o;
  return { s: function() {
    n = n.call(e);
  }, n: function() {
    var c = n.next();
    return i = c.done, c;
  }, e: function(c) {
    l = !0, o = c;
  }, f: function() {
    try {
      !i && n.return != null && n.return();
    } finally {
      if (l) throw o;
    }
  } };
}
function W(e, t) {
  if (e) {
    if (typeof e == "string") return Y(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Y(e, t);
  }
}
function Y(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var G = {
  format: "YYYY/MM/DD",
  delimiters: ["/", "-"],
  strictMode: !1
};
function At(e) {
  return /(^(y{4}|y{2})[.\/-](m{1,2})[.\/-](d{1,2})$)|(^(m{1,2})[.\/-](d{1,2})[.\/-]((y{4}|y{2})$))|(^(d{1,2})[.\/-](m{1,2})[.\/-]((y{4}|y{2})$))/gi.test(e);
}
function Ft(e, t) {
  for (var n = [], r = Math.min(e.length, t.length), a = 0; a < r; a++)
    n.push([e[a], t[a]]);
  return n;
}
function St(e, t) {
  if (typeof t == "string" ? t = $({
    format: t
  }, G) : t = $(t, G), typeof e == "string" && At(t.format)) {
    var n = t.delimiters.find(function(x) {
      return t.format.indexOf(x) !== -1;
    }), r = t.strictMode ? n : t.delimiters.find(function(x) {
      return e.indexOf(x) !== -1;
    }), a = Ft(e.split(r), t.format.toLowerCase().split(n)), i = {}, l = wt(a), o;
    try {
      for (l.s(); !(o = l.n()).done; ) {
        var c = xt(o.value, 2), g = c[0], d = c[1];
        if (g.length !== d.length)
          return !1;
        i[d.charAt(0)] = g;
      }
    } catch (x) {
      l.e(x);
    } finally {
      l.f();
    }
    var p = i.y;
    if (p.startsWith("-"))
      return !1;
    if (i.y.length === 2) {
      var _ = parseInt(i.y, 10);
      if (isNaN(_))
        return !1;
      var b = (/* @__PURE__ */ new Date()).getFullYear() % 100;
      _ < b ? p = "20".concat(i.y) : p = "19".concat(i.y);
    }
    var m = i.m;
    i.m.length === 1 && (m = "0".concat(i.m));
    var T = i.d;
    return i.d.length === 1 && (T = "0".concat(i.d)), new Date("".concat(p, "-").concat(m, "-").concat(T, "T00:00:00.000Z")).getUTCDate() === +i.d;
  }
  return t.strictMode ? !1 : Object.prototype.toString.call(e) === "[object Date]" && isFinite(e);
}
var Et = {
  hourFormat: "hour24",
  mode: "default"
}, Rt = {
  hour24: {
    default: /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/,
    withSeconds: /^([01]?[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/
  },
  hour12: {
    default: /^(0?[1-9]|1[0-2]):([0-5][0-9]) (A|P)M$/,
    withSeconds: /^(0?[1-9]|1[0-2]):([0-5][0-9]):([0-5][0-9]) (A|P)M$/
  }
};
function Zt(e, t) {
  return t = $(t, Et), typeof e != "string" ? !1 : Rt[t.hourFormat][t.mode].test(e);
}
function M(e) {
  "@babel/helpers - typeof";
  return M = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, M(e);
}
function N(e, t) {
  h(e);
  var n, r;
  M(t) === "object" ? (n = t.min || 0, r = t.max) : (n = arguments[1], r = arguments[2]);
  var a = encodeURI(e).split(/%..|./).length - 1;
  return a >= n && (typeof r > "u" || a <= r);
}
var Dt = {
  require_tld: !0,
  allow_underscores: !1,
  allow_trailing_dot: !1,
  allow_numeric_tld: !1,
  allow_wildcard: !1,
  ignore_max_length: !1
};
function V(e, t) {
  h(e), t = $(t, Dt), t.allow_trailing_dot && e[e.length - 1] === "." && (e = e.substring(0, e.length - 1)), t.allow_wildcard === !0 && e.indexOf("*.") === 0 && (e = e.substring(2));
  var n = e.split("."), r = n[n.length - 1];
  return t.require_tld && (n.length < 2 || !t.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(r) || /\s/.test(r)) || !t.allow_numeric_tld && /^\d+$/.test(r) ? !1 : n.every(function(a) {
    return !(a.length > 63 && !t.ignore_max_length || !/^[a-z_\u00a1-\uffff0-9-]+$/i.test(a) || /[\uff01-\uff5e]/.test(a) || /^-|-$/.test(a) || !t.allow_underscores && /_/.test(a));
  });
}
var H = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])", v = "(".concat(H, "[.]){3}").concat(H), It = new RegExp("^".concat(v, "$")), u = "(?:[0-9a-fA-F]{1,4})", Pt = new RegExp("^(" + "(?:".concat(u, ":){7}(?:").concat(u, "|:)|") + "(?:".concat(u, ":){6}(?:").concat(v, "|:").concat(u, "|:)|") + "(?:".concat(u, ":){5}(?::").concat(v, "|(:").concat(u, "){1,2}|:)|") + "(?:".concat(u, ":){4}(?:(:").concat(u, "){0,1}:").concat(v, "|(:").concat(u, "){1,3}|:)|") + "(?:".concat(u, ":){3}(?:(:").concat(u, "){0,2}:").concat(v, "|(:").concat(u, "){1,4}|:)|") + "(?:".concat(u, ":){2}(?:(:").concat(u, "){0,3}:").concat(v, "|(:").concat(u, "){1,5}|:)|") + "(?:".concat(u, ":){1}(?:(:").concat(u, "){0,4}:").concat(v, "|(:").concat(u, "){1,6}|:)|") + "(?::((?::".concat(u, "){0,5}:").concat(v, "|(?::").concat(u, "){1,7}|:))") + ")(%[0-9a-zA-Z-.:]{1,})?$");
function y(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return h(e), t = String(t), t ? t === "4" ? It.test(e) : t === "6" ? Pt.test(e) : !1 : y(e, 4) || y(e, 6);
}
var Ot = {
  allow_display_name: !1,
  allow_underscores: !1,
  require_display_name: !1,
  allow_utf8_local_part: !0,
  require_tld: !0,
  blacklisted_chars: "",
  ignore_max_length: !1,
  host_blacklist: [],
  host_whitelist: []
}, Nt = /^([^\x00-\x1F\x7F-\x9F\cX]+)</i, Ut = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i, kt = /^[a-z\d]+$/, Mt = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i, Tt = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A1-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i, jt = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i, qt = 254;
function Lt(e) {
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
function Ct(e, t) {
  if (h(e), t = $(t, Ot), t.require_display_name || t.allow_display_name) {
    var n = e.match(Nt);
    if (n) {
      var r = n[1];
      if (e = e.replace(r, "").replace(/(^<|>$)/g, ""), r.endsWith(" ") && (r = r.slice(0, -1)), !Lt(r))
        return !1;
    } else if (t.require_display_name)
      return !1;
  }
  if (!t.ignore_max_length && e.length > qt)
    return !1;
  var a = e.split("@"), i = a.pop(), l = i.toLowerCase();
  if (t.host_blacklist.includes(l) || t.host_whitelist.length > 0 && !t.host_whitelist.includes(l))
    return !1;
  var o = a.join("@");
  if (t.domain_specific_validation && (l === "gmail.com" || l === "googlemail.com")) {
    o = o.toLowerCase();
    var c = o.split("+")[0];
    if (!N(c.replace(/\./g, ""), {
      min: 6,
      max: 30
    }))
      return !1;
    for (var g = c.split("."), d = 0; d < g.length; d++)
      if (!kt.test(g[d]))
        return !1;
  }
  if (t.ignore_max_length === !1 && (!N(o, {
    max: 64
  }) || !N(i, {
    max: 254
  })))
    return !1;
  if (!V(i, {
    require_tld: t.require_tld,
    ignore_max_length: t.ignore_max_length,
    allow_underscores: t.allow_underscores
  })) {
    if (!t.allow_ip_domain)
      return !1;
    if (!y(i)) {
      if (!i.startsWith("[") || !i.endsWith("]"))
        return !1;
      var p = i.slice(1, -1);
      if (p.length === 0 || !y(p))
        return !1;
    }
  }
  if (o[0] === '"')
    return o = o.slice(1, o.length - 1), t.allow_utf8_local_part ? jt.test(o) : Mt.test(o);
  for (var _ = t.allow_utf8_local_part ? Tt : Ut, b = o.split("."), m = 0; m < b.length; m++)
    if (!_.test(b[m]))
      return !1;
  return !(t.blacklisted_chars && o.search(new RegExp("[".concat(t.blacklisted_chars, "]+"), "g")) !== -1);
}
var Bt = /^(?:[-+]?(?:0|[1-9][0-9]*))$/, zt = /^[-+]?[0-9]+$/;
function Kt(e, t) {
  h(e), t = t || {};
  var n = t.allow_leading_zeroes === !1 ? Bt : zt, r = !t.hasOwnProperty("min") || e >= t.min, a = !t.hasOwnProperty("max") || e <= t.max, i = !t.hasOwnProperty("lt") || e < t.lt, l = !t.hasOwnProperty("gt") || e > t.gt;
  return n.test(e) && r && a && i && l;
}
function Yt(e) {
  return Kt(e, {
    allow_leading_zeroes: !1,
    min: 0,
    max: 65535
  });
}
const Gt = {
  string: k,
  alphabets: yt,
  date: St,
  time: Zt,
  number: vt,
  email: Ct,
  port: Yt,
  ipv4: (e) => y(e, 4),
  ipv6: (e) => y(e, 6),
  fqdn: V,
  folder: pt,
  portRange: mt,
  float: ht
}, Q = (e) => {
  const t = Ht(e);
  return (n) => n != null && t(n) ? { valid: !0 } : {
    valid: !1,
    reason: e,
    value: n
  };
}, Ht = (e) => {
  if (e) {
    const t = Gt[e];
    if (!t)
      throw new Error("no validator found for rule " + e);
    return t || k;
  }
  return k;
}, Qt = (e) => {
  let t = [];
  const n = e.required;
  if (e.length && t.push(tt(e.length)), e.range && t.push(it(e.range)), e.regExp && t.push(st(e.regExp)), e.rules) {
    const a = e.rules;
    if (a instanceof Array && a.length > 0)
      for (var r of a)
        t.push(Q(r));
    else {
      const i = a;
      t.push(Q(i));
    }
  }
  return (a) => {
    if (dt(a))
      return n ? { valid: !1, reason: "required", value: a } : { valid: !0 };
    for (var i of t) {
      const l = i.call(null, a);
      if (!l.valid)
        return l;
    }
    return { valid: !0 };
  };
}, Jt = (e) => Qt(Wt(e)), Wt = (e) => {
  var t = {};
  if (t.required = e.required == !0, e.range) {
    const n = e.range;
    t.range = { negate: !1 }, w(n, t.range, "start"), w(n, t.range, "end");
  }
  if (e.length) {
    const n = e.length;
    typeof n == "number" ? t.length = { is: n } : (t.length = {}, J(n.eq) ? t.length.is = n.eq : (w(n, t.length, "min"), w(n, t.length, "max")));
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
}, J = (e) => !isNaN(e), w = (e, t, n, r) => {
  const a = n, i = e[n];
  J(e[n]) && (t[a] = i);
}, Xt = (e, t, n) => {
  const r = t(e);
  return r.valid ? { status: !1, message: "" } : { status: !0, message: X(r, n) };
};
export {
  Jt as generatePredicate,
  Xt as validate
};
