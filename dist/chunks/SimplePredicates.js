function S(t) {
  "@babel/helpers - typeof";
  return S = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, S(t);
}
function E(t) {
  var n = typeof t == "string" || t instanceof String;
  if (!n) {
    var i = S(t);
    throw t === null ? i = "null" : i === "object" && (i = t.constructor.name), new TypeError("Expected a string but received a ".concat(i));
  }
}
var r = {
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
}, e = {
  "en-US": ".",
  ar: "٫"
}, Z = ["AU", "GB", "HK", "IN", "NZ", "ZA", "ZM"];
for (var a, l = 0; l < Z.length; l++)
  a = "en-".concat(Z[l]), r[a] = r["en-US"], e[a] = e["en-US"];
var y = ["AE", "BH", "DZ", "EG", "IQ", "JO", "KW", "LB", "LY", "MA", "QM", "QA", "SA", "SD", "SY", "TN", "YE"];
for (var u, c = 0; c < y.length; c++)
  u = "ar-".concat(y[c]), r[u] = r.ar, e[u] = e.ar;
var b = ["IR", "AF"];
for (var R, $ = 0; $ < b.length; $++)
  R = "fa-".concat(b[$]), e[R] = e.ar;
var g = ["BD", "IN"];
for (var f, p = 0; p < g.length; p++)
  f = "bn-".concat(g[p]), r[f] = r.bn, e[f] = e["en-US"];
var h = ["ar-EG", "ar-LB", "ar-LY"], v = ["bg-BG", "cs-CZ", "da-DK", "de-DE", "el-GR", "en-ZM", "eo", "es-ES", "fr-CA", "fr-FR", "id-ID", "it-IT", "ku-IQ", "hi-IN", "hu-HU", "nb-NO", "nn-NO", "nl-NL", "pl-PL", "pt-PT", "ru-RU", "kk-KZ", "si-LK", "sl-SI", "sr-RS@latin", "sr-RS", "sv-SE", "tr-TR", "uk-UA", "vi-VN"];
for (var A = 0; A < h.length; A++)
  e[h[A]] = e["en-US"];
for (var s = 0; s < v.length; s++)
  e[v[s]] = ",";
r["fr-CA"] = r["fr-FR"];
r["pt-BR"] = r["pt-PT"];
e["pt-BR"] = e["pt-PT"];
r["pl-Pl"] = r["pl-PL"];
e["pl-Pl"] = e["pl-PL"];
r["fa-AF"] = r.fa;
function I(t, n) {
  return E(t), new RegExp("^[+-]?([0-9]*[".concat({}.locale ? e[n.locale] : ".", "])?[0-9]+$")).test(t);
}
function P(t, n) {
  E(t), n = n || {};
  var i = new RegExp("^(?:[-+])?(?:[0-9]+)?(?:\\".concat(n.locale ? e[n.locale] : ".", "[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$"));
  if (t === "" || t === "." || t === "," || t === "-" || t === "+")
    return !1;
  var o = parseFloat(t.replace(",", "."));
  return i.test(t) && (!n.hasOwnProperty("min") || o >= n.min) && (!n.hasOwnProperty("max") || o <= n.max) && (!n.hasOwnProperty("lt") || o < n.lt) && (!n.hasOwnProperty("gt") || o > n.gt);
}
const m = (t) => t == null || t == null ? !0 : typeof t == "string" || t instanceof Array ? t.length == 0 : typeof t == "object" ? Object.keys(t).length == 0 : !1, U = () => !0, N = (t) => {
  const n = typeof t == "number" ? t.toString() : t;
  return I(n);
}, D = (t) => {
  const n = typeof t == "number" ? t.toString() : t;
  return P(n);
};
export {
  U as D,
  m as E,
  E as R,
  N as U,
  D as k,
  r as t
};
