function nt(Y) {
  return Y && Y.__esModule && Object.prototype.hasOwnProperty.call(Y, "default") ? Y.default : Y;
}
var T = { exports: {} }, ot = T.exports, I;
function at() {
  return I || (I = 1, (function(Y, it) {
    (function(q, Z) {
      Y.exports = Z();
    })(ot, (function() {
      var q = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, Z = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, Q = /\d/, y = /\d\d/, s = /\d\d?/, $ = /\d*[^-_:/,()\s\d]+/, m = {}, X = function(t) {
        return (t = +t) + (t > 68 ? 1900 : 2e3);
      }, o = function(t) {
        return function(r) {
          this[t] = +r;
        };
      }, R = [/[+-]\d\d:?(\d\d)?|Z/, function(t) {
        (this.zone || (this.zone = {})).offset = (function(r) {
          if (!r || r === "Z") return 0;
          var e = r.match(/([+-]|\d\d)/g), n = 60 * e[1] + (+e[2] || 0);
          return n === 0 ? 0 : e[0] === "+" ? -n : n;
        })(t);
      }], k = function(t) {
        var r = m[t];
        return r && (r.indexOf ? r : r.s.concat(r.f));
      }, V = function(t, r) {
        var e, n = m.meridiem;
        if (n) {
          for (var f = 1; f <= 24; f += 1) if (t.indexOf(n(f, 0, r)) > -1) {
            e = f > 12;
            break;
          }
        } else e = t === (r ? "pm" : "PM");
        return e;
      }, J = { A: [$, function(t) {
        this.afternoon = V(t, !1);
      }], a: [$, function(t) {
        this.afternoon = V(t, !0);
      }], Q: [Q, function(t) {
        this.month = 3 * (t - 1) + 1;
      }], S: [Q, function(t) {
        this.milliseconds = 100 * +t;
      }], SS: [y, function(t) {
        this.milliseconds = 10 * +t;
      }], SSS: [/\d{3}/, function(t) {
        this.milliseconds = +t;
      }], s: [s, o("seconds")], ss: [s, o("seconds")], m: [s, o("minutes")], mm: [s, o("minutes")], H: [s, o("hours")], h: [s, o("hours")], HH: [s, o("hours")], hh: [s, o("hours")], D: [s, o("day")], DD: [y, o("day")], Do: [$, function(t) {
        var r = m.ordinal, e = t.match(/\d+/);
        if (this.day = e[0], r) for (var n = 1; n <= 31; n += 1) r(n).replace(/\[|\]/g, "") === t && (this.day = n);
      }], w: [s, o("week")], ww: [y, o("week")], M: [s, o("month")], MM: [y, o("month")], MMM: [$, function(t) {
        var r = k("months"), e = (k("monthsShort") || r.map((function(n) {
          return n.slice(0, 3);
        }))).indexOf(t) + 1;
        if (e < 1) throw new Error();
        this.month = e % 12 || e;
      }], MMMM: [$, function(t) {
        var r = k("months").indexOf(t) + 1;
        if (r < 1) throw new Error();
        this.month = r % 12 || r;
      }], Y: [/[+-]?\d+/, o("year")], YY: [y, function(t) {
        this.year = X(t);
      }], YYYY: [/\d{4}/, o("year")], Z: R, ZZ: R };
      function K(t) {
        var r, e;
        r = t, e = m && m.formats;
        for (var n = (t = r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(D, l, u) {
          var i = u && u.toUpperCase();
          return l || e[u] || q[u] || e[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(M, p, w) {
            return p || w.slice(1);
          }));
        }))).match(Z), f = n.length, c = 0; c < f; c += 1) {
          var x = n[c], v = J[x], h = v && v[0], d = v && v[1];
          n[c] = d ? { regex: h, parser: d } : x.replace(/^\[|\]$/g, "");
        }
        return function(D) {
          for (var l = {}, u = 0, i = 0; u < f; u += 1) {
            var M = n[u];
            if (typeof M == "string") i += M.length;
            else {
              var p = M.regex, w = M.parser, S = D.slice(i), L = p.exec(S)[0];
              w.call(l, L), D = D.replace(L, "");
            }
          }
          return (function(g) {
            var F = g.afternoon;
            if (F !== void 0) {
              var a = g.hours;
              F ? a < 12 && (g.hours += 12) : a === 12 && (g.hours = 0), delete g.afternoon;
            }
          })(l), l;
        };
      }
      return function(t, r, e) {
        e.p.customParseFormat = !0, t && t.parseTwoDigitYear && (X = t.parseTwoDigitYear);
        var n = r.prototype, f = n.parse;
        n.parse = function(c) {
          var x = c.date, v = c.utc, h = c.args;
          this.$u = v;
          var d = h[1];
          if (typeof d == "string") {
            var D = h[2] === !0, l = h[3] === !0, u = D || l, i = h[2];
            l && (i = h[2]), m = this.$locale(), !D && i && (m = e.Ls[i]), this.$d = (function(S, L, g, F) {
              try {
                if (["x", "X"].indexOf(L) > -1) return new Date((L === "X" ? 1e3 : 1) * S);
                var a = K(L)(S), C = a.year, P = a.month, N = a.day, W = a.hours, tt = a.minutes, rt = a.seconds, et = a.milliseconds, B = a.zone, G = a.week, H = /* @__PURE__ */ new Date(), z = N || (C || P ? 1 : H.getDate()), E = C || H.getFullYear(), A = 0;
                C && !P || (A = P > 0 ? P - 1 : H.getMonth());
                var O, _ = W || 0, b = tt || 0, U = rt || 0, j = et || 0;
                return B ? new Date(Date.UTC(E, A, z, _, b, U, j + 60 * B.offset * 1e3)) : g ? new Date(Date.UTC(E, A, z, _, b, U, j)) : (O = new Date(E, A, z, _, b, U, j), G && (O = F(O).week(G).toDate()), O);
              } catch {
                return /* @__PURE__ */ new Date("");
              }
            })(x, d, v, e), this.init(), i && i !== !0 && (this.$L = this.locale(i).$L), u && x != this.format(d) && (this.$d = /* @__PURE__ */ new Date("")), m = {};
          } else if (d instanceof Array) for (var M = d.length, p = 1; p <= M; p += 1) {
            h[1] = d[p - 1];
            var w = e.apply(this, h);
            if (w.isValid()) {
              this.$d = w.$d, this.$L = w.$L, this.init();
              break;
            }
            p === M && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else f.call(this, c);
        };
      };
    }));
  })(T)), T.exports;
}
var st = at();
const ft = /* @__PURE__ */ nt(st);
export {
  ft as c
};
