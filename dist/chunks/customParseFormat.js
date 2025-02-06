import { c as et, g as nt } from "./_commonjsHelpers.js";
var B = { exports: {} };
(function(I, at) {
  (function(j, k) {
    I.exports = k();
  })(et, function() {
    var j = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, k = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, Q = /\d/, L = /\d\d/, s = /\d\d?/, x = /\d*[^-_:/,()\s\d]+/, m = {}, X = function(t) {
      return (t = +t) + (t > 68 ? 1900 : 2e3);
    }, o = function(t) {
      return function(r) {
        this[t] = +r;
      };
    }, _ = [/[+-]\d\d:?(\d\d)?|Z/, function(t) {
      (this.zone || (this.zone = {})).offset = function(r) {
        if (!r || r === "Z") return 0;
        var e = r.match(/([+-]|\d\d)/g), n = 60 * e[1] + (+e[2] || 0);
        return n === 0 ? 0 : e[0] === "+" ? -n : n;
      }(t);
    }], F = function(t) {
      var r = m[t];
      return r && (r.indexOf ? r : r.s.concat(r.f));
    }, G = function(t, r) {
      var e, n = m.meridiem;
      if (n) {
        for (var u = 1; u <= 24; u += 1) if (t.indexOf(n(u, 0, r)) > -1) {
          e = u > 12;
          break;
        }
      } else e = t === (r ? "pm" : "PM");
      return e;
    }, J = { A: [x, function(t) {
      this.afternoon = G(t, !1);
    }], a: [x, function(t) {
      this.afternoon = G(t, !0);
    }], Q: [Q, function(t) {
      this.month = 3 * (t - 1) + 1;
    }], S: [Q, function(t) {
      this.milliseconds = 100 * +t;
    }], SS: [L, function(t) {
      this.milliseconds = 10 * +t;
    }], SSS: [/\d{3}/, function(t) {
      this.milliseconds = +t;
    }], s: [s, o("seconds")], ss: [s, o("seconds")], m: [s, o("minutes")], mm: [s, o("minutes")], H: [s, o("hours")], h: [s, o("hours")], HH: [s, o("hours")], hh: [s, o("hours")], D: [s, o("day")], DD: [L, o("day")], Do: [x, function(t) {
      var r = m.ordinal, e = t.match(/\d+/);
      if (this.day = e[0], r) for (var n = 1; n <= 31; n += 1) r(n).replace(/\[|\]/g, "") === t && (this.day = n);
    }], w: [s, o("week")], ww: [L, o("week")], M: [s, o("month")], MM: [L, o("month")], MMM: [x, function(t) {
      var r = F("months"), e = (F("monthsShort") || r.map(function(n) {
        return n.slice(0, 3);
      })).indexOf(t) + 1;
      if (e < 1) throw new Error();
      this.month = e % 12 || e;
    }], MMMM: [x, function(t) {
      var r = F("months").indexOf(t) + 1;
      if (r < 1) throw new Error();
      this.month = r % 12 || r;
    }], Y: [/[+-]?\d+/, o("year")], YY: [L, function(t) {
      this.year = X(t);
    }], YYYY: [/\d{4}/, o("year")], Z: _, ZZ: _ };
    function K(t) {
      var r, e;
      r = t, e = m && m.formats;
      for (var n = (t = r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(v, l, f) {
        var i = f && f.toUpperCase();
        return l || e[f] || j[f] || e[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(M, Y, D) {
          return Y || D.slice(1);
        });
      })).match(k), u = n.length, c = 0; c < u; c += 1) {
        var y = n[c], p = J[y], h = p && p[0], d = p && p[1];
        n[c] = d ? { regex: h, parser: d } : y.replace(/^\[|\]$/g, "");
      }
      return function(v) {
        for (var l = {}, f = 0, i = 0; f < u; f += 1) {
          var M = n[f];
          if (typeof M == "string") i += M.length;
          else {
            var Y = M.regex, D = M.parser, $ = v.slice(i), g = Y.exec($)[0];
            D.call(l, g), v = v.replace(g, "");
          }
        }
        return function(w) {
          var S = w.afternoon;
          if (S !== void 0) {
            var a = w.hours;
            S ? a < 12 && (w.hours += 12) : a === 12 && (w.hours = 0), delete w.afternoon;
          }
        }(l), l;
      };
    }
    return function(t, r, e) {
      e.p.customParseFormat = !0, t && t.parseTwoDigitYear && (X = t.parseTwoDigitYear);
      var n = r.prototype, u = n.parse;
      n.parse = function(c) {
        var y = c.date, p = c.utc, h = c.args;
        this.$u = p;
        var d = h[1];
        if (typeof d == "string") {
          var v = h[2] === !0, l = h[3] === !0, f = v || l, i = h[2];
          l && (i = h[2]), m = this.$locale(), !v && i && (m = e.Ls[i]), this.$d = function($, g, w, S) {
            try {
              if (["x", "X"].indexOf(g) > -1) return new Date((g === "X" ? 1e3 : 1) * $);
              var a = K(g)($), H = a.year, A = a.month, N = a.day, R = a.hours, W = a.minutes, tt = a.seconds, rt = a.milliseconds, V = a.zone, q = a.week, O = /* @__PURE__ */ new Date(), P = N || (H || A ? 1 : O.getDate()), z = H || O.getFullYear(), T = 0;
              H && !A || (T = A > 0 ? A - 1 : O.getMonth());
              var Z, C = R || 0, E = W || 0, b = tt || 0, U = rt || 0;
              return V ? new Date(Date.UTC(z, T, P, C, E, b, U + 60 * V.offset * 1e3)) : w ? new Date(Date.UTC(z, T, P, C, E, b, U)) : (Z = new Date(z, T, P, C, E, b, U), q && (Z = S(Z).week(q).toDate()), Z);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(y, d, p, e), this.init(), i && i !== !0 && (this.$L = this.locale(i).$L), f && y != this.format(d) && (this.$d = /* @__PURE__ */ new Date("")), m = {};
        } else if (d instanceof Array) for (var M = d.length, Y = 1; Y <= M; Y += 1) {
          h[1] = d[Y - 1];
          var D = e.apply(this, h);
          if (D.isValid()) {
            this.$d = D.$d, this.$L = D.$L, this.init();
            break;
          }
          Y === M && (this.$d = /* @__PURE__ */ new Date(""));
        }
        else u.call(this, c);
      };
    };
  });
})(B);
var ot = B.exports;
const ft = /* @__PURE__ */ nt(ot);
export {
  ft as c
};
