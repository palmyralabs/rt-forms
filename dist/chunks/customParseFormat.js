import { g as nt } from "./_commonjsHelpers.js";
var T = { exports: {} }, ot = T.exports, G;
function at() {
  return G || (G = 1, function(I, it) {
    (function(Q, Z) {
      I.exports = Z();
    })(ot, function() {
      var Q = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, Z = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, X = /\d/, x = /\d\d/, s = /\d\d?/, L = /\d*[^-_:/,()\s\d]+/, d = {}, _ = function(t) {
        return (t = +t) + (t > 68 ? 1900 : 2e3);
      }, o = function(t) {
        return function(r) {
          this[t] = +r;
        };
      }, j = [/[+-]\d\d:?(\d\d)?|Z/, function(t) {
        (this.zone || (this.zone = {})).offset = function(r) {
          if (!r || r === "Z") return 0;
          var e = r.match(/([+-]|\d\d)/g), n = 60 * e[1] + (+e[2] || 0);
          return n === 0 ? 0 : e[0] === "+" ? -n : n;
        }(t);
      }], k = function(t) {
        var r = d[t];
        return r && (r.indexOf ? r : r.s.concat(r.f));
      }, R = function(t, r) {
        var e, n = d.meridiem;
        if (n) {
          for (var f = 1; f <= 24; f += 1) if (t.indexOf(n(f, 0, r)) > -1) {
            e = f > 12;
            break;
          }
        } else e = t === (r ? "pm" : "PM");
        return e;
      }, J = { A: [L, function(t) {
        this.afternoon = R(t, !1);
      }], a: [L, function(t) {
        this.afternoon = R(t, !0);
      }], Q: [X, function(t) {
        this.month = 3 * (t - 1) + 1;
      }], S: [X, function(t) {
        this.milliseconds = 100 * +t;
      }], SS: [x, function(t) {
        this.milliseconds = 10 * +t;
      }], SSS: [/\d{3}/, function(t) {
        this.milliseconds = +t;
      }], s: [s, o("seconds")], ss: [s, o("seconds")], m: [s, o("minutes")], mm: [s, o("minutes")], H: [s, o("hours")], h: [s, o("hours")], HH: [s, o("hours")], hh: [s, o("hours")], D: [s, o("day")], DD: [x, o("day")], Do: [L, function(t) {
        var r = d.ordinal, e = t.match(/\d+/);
        if (this.day = e[0], r) for (var n = 1; n <= 31; n += 1) r(n).replace(/\[|\]/g, "") === t && (this.day = n);
      }], w: [s, o("week")], ww: [x, o("week")], M: [s, o("month")], MM: [x, o("month")], MMM: [L, function(t) {
        var r = k("months"), e = (k("monthsShort") || r.map(function(n) {
          return n.slice(0, 3);
        })).indexOf(t) + 1;
        if (e < 1) throw new Error();
        this.month = e % 12 || e;
      }], MMMM: [L, function(t) {
        var r = k("months").indexOf(t) + 1;
        if (r < 1) throw new Error();
        this.month = r % 12 || r;
      }], Y: [/[+-]?\d+/, o("year")], YY: [x, function(t) {
        this.year = _(t);
      }], YYYY: [/\d{4}/, o("year")], Z: j, ZZ: j };
      function K(t) {
        var r, e;
        r = t, e = d && d.formats;
        for (var n = (t = r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(v, l, u) {
          var i = u && u.toUpperCase();
          return l || e[u] || Q[u] || e[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(M, p, D) {
            return p || D.slice(1);
          });
        })).match(Z), f = n.length, c = 0; c < f; c += 1) {
          var $ = n[c], Y = J[$], h = Y && Y[0], m = Y && Y[1];
          n[c] = m ? { regex: h, parser: m } : $.replace(/^\[|\]$/g, "");
        }
        return function(v) {
          for (var l = {}, u = 0, i = 0; u < f; u += 1) {
            var M = n[u];
            if (typeof M == "string") i += M.length;
            else {
              var p = M.regex, D = M.parser, y = v.slice(i), g = p.exec(y)[0];
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
        e.p.customParseFormat = !0, t && t.parseTwoDigitYear && (_ = t.parseTwoDigitYear);
        var n = r.prototype, f = n.parse;
        n.parse = function(c) {
          var $ = c.date, Y = c.utc, h = c.args;
          this.$u = Y;
          var m = h[1];
          if (typeof m == "string") {
            var v = h[2] === !0, l = h[3] === !0, u = v || l, i = h[2];
            l && (i = h[2]), d = this.$locale(), !v && i && (d = e.Ls[i]), this.$d = function(y, g, w, S) {
              try {
                if (["x", "X"].indexOf(g) > -1) return new Date((g === "X" ? 1e3 : 1) * y);
                var a = K(g)(y), C = a.year, F = a.month, N = a.day, W = a.hours, tt = a.minutes, rt = a.seconds, et = a.milliseconds, V = a.zone, B = a.week, H = /* @__PURE__ */ new Date(), O = N || (C || F ? 1 : H.getDate()), z = C || H.getFullYear(), P = 0;
                C && !F || (P = F > 0 ? F - 1 : H.getMonth());
                var A, E = W || 0, U = tt || 0, b = rt || 0, q = et || 0;
                return V ? new Date(Date.UTC(z, P, O, E, U, b, q + 60 * V.offset * 1e3)) : w ? new Date(Date.UTC(z, P, O, E, U, b, q)) : (A = new Date(z, P, O, E, U, b, q), B && (A = S(A).week(B).toDate()), A);
              } catch {
                return /* @__PURE__ */ new Date("");
              }
            }($, m, Y, e), this.init(), i && i !== !0 && (this.$L = this.locale(i).$L), u && $ != this.format(m) && (this.$d = /* @__PURE__ */ new Date("")), d = {};
          } else if (m instanceof Array) for (var M = m.length, p = 1; p <= M; p += 1) {
            h[1] = m[p - 1];
            var D = e.apply(this, h);
            if (D.isValid()) {
              this.$d = D.$d, this.$L = D.$L, this.init();
              break;
            }
            p === M && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else f.call(this, c);
        };
      };
    });
  }(T)), T.exports;
}
var st = at();
const ct = /* @__PURE__ */ nt(st);
export {
  ct as c
};
