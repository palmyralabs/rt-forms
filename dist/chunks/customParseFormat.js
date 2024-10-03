var nt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function rt(Y) {
  return Y && Y.__esModule && Object.prototype.hasOwnProperty.call(Y, "default") ? Y.default : Y;
}
var I = { exports: {} };
(function(Y, at) {
  (function(U, Z) {
    Y.exports = Z();
  })(nt, function() {
    var U = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, Z = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, Q = /\d/, L = /\d\d/, s = /\d\d?/, $ = /\d*[^-_:/,()\s\d]+/, l = {}, X = function(t) {
      return (t = +t) + (t > 68 ? 1900 : 2e3);
    }, o = function(t) {
      return function(e) {
        this[t] = +e;
      };
    }, G = [/[+-]\d\d:?(\d\d)?|Z/, function(t) {
      (this.zone || (this.zone = {})).offset = function(e) {
        if (!e || e === "Z") return 0;
        var n = e.match(/([+-]|\d\d)/g), r = 60 * n[1] + (+n[2] || 0);
        return r === 0 ? 0 : n[0] === "+" ? -r : r;
      }(t);
    }], k = function(t) {
      var e = l[t];
      return e && (e.indexOf ? e : e.s.concat(e.f));
    }, V = function(t, e) {
      var n, r = l.meridiem;
      if (r) {
        for (var u = 1; u <= 24; u += 1) if (t.indexOf(r(u, 0, e)) > -1) {
          n = u > 12;
          break;
        }
      } else n = t === (e ? "pm" : "PM");
      return n;
    }, J = { A: [$, function(t) {
      this.afternoon = V(t, !1);
    }], a: [$, function(t) {
      this.afternoon = V(t, !0);
    }], Q: [Q, function(t) {
      this.month = 3 * (t - 1) + 1;
    }], S: [Q, function(t) {
      this.milliseconds = 100 * +t;
    }], SS: [L, function(t) {
      this.milliseconds = 10 * +t;
    }], SSS: [/\d{3}/, function(t) {
      this.milliseconds = +t;
    }], s: [s, o("seconds")], ss: [s, o("seconds")], m: [s, o("minutes")], mm: [s, o("minutes")], H: [s, o("hours")], h: [s, o("hours")], HH: [s, o("hours")], hh: [s, o("hours")], D: [s, o("day")], DD: [L, o("day")], Do: [$, function(t) {
      var e = l.ordinal, n = t.match(/\d+/);
      if (this.day = n[0], e) for (var r = 1; r <= 31; r += 1) e(r).replace(/\[|\]/g, "") === t && (this.day = r);
    }], w: [s, o("week")], ww: [L, o("week")], M: [s, o("month")], MM: [L, o("month")], MMM: [$, function(t) {
      var e = k("months"), n = (k("monthsShort") || e.map(function(r) {
        return r.slice(0, 3);
      })).indexOf(t) + 1;
      if (n < 1) throw new Error();
      this.month = n % 12 || n;
    }], MMMM: [$, function(t) {
      var e = k("months").indexOf(t) + 1;
      if (e < 1) throw new Error();
      this.month = e % 12 || e;
    }], Y: [/[+-]?\d+/, o("year")], YY: [L, function(t) {
      this.year = X(t);
    }], YYYY: [/\d{4}/, o("year")], Z: G, ZZ: G };
    function K(t) {
      var e, n;
      e = t, n = l && l.formats;
      for (var r = (t = e.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(w, m, f) {
        var i = f && f.toUpperCase();
        return m || n[f] || U[f] || n[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(p, M, D) {
          return M || D.slice(1);
        });
      })).match(Z), u = r.length, c = 0; c < u; c += 1) {
        var x = r[c], v = J[x], h = v && v[0], d = v && v[1];
        r[c] = d ? { regex: h, parser: d } : x.replace(/^\[|\]$/g, "");
      }
      return function(w) {
        for (var m = {}, f = 0, i = 0; f < u; f += 1) {
          var p = r[f];
          if (typeof p == "string") i += p.length;
          else {
            var M = p.regex, D = p.parser, S = w.slice(i), y = M.exec(S)[0];
            D.call(m, y), w = w.replace(y, "");
          }
        }
        return function(g) {
          var T = g.afternoon;
          if (T !== void 0) {
            var a = g.hours;
            T ? a < 12 && (g.hours += 12) : a === 12 && (g.hours = 0), delete g.afternoon;
          }
        }(m), m;
      };
    }
    return function(t, e, n) {
      n.p.customParseFormat = !0, t && t.parseTwoDigitYear && (X = t.parseTwoDigitYear);
      var r = e.prototype, u = r.parse;
      r.parse = function(c) {
        var x = c.date, v = c.utc, h = c.args;
        this.$u = v;
        var d = h[1];
        if (typeof d == "string") {
          var w = h[2] === !0, m = h[3] === !0, f = w || m, i = h[2];
          m && (i = h[2]), l = this.$locale(), !w && i && (l = n.Ls[i]), this.$d = function(S, y, g, T) {
            try {
              if (["x", "X"].indexOf(y) > -1) return new Date((y === "X" ? 1e3 : 1) * S);
              var a = K(y)(S), F = a.year, b = a.month, N = a.day, R = a.hours, W = a.minutes, tt = a.seconds, et = a.milliseconds, q = a.zone, B = a.week, P = /* @__PURE__ */ new Date(), H = N || (F || b ? 1 : P.getDate()), z = F || P.getFullYear(), A = 0;
              F && !b || (A = b > 0 ? b - 1 : P.getMonth());
              var O, C = R || 0, E = W || 0, _ = tt || 0, j = et || 0;
              return q ? new Date(Date.UTC(z, A, H, C, E, _, j + 60 * q.offset * 1e3)) : g ? new Date(Date.UTC(z, A, H, C, E, _, j)) : (O = new Date(z, A, H, C, E, _, j), B && (O = T(O).week(B).toDate()), O);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(x, d, v, n), this.init(), i && i !== !0 && (this.$L = this.locale(i).$L), f && x != this.format(d) && (this.$d = /* @__PURE__ */ new Date("")), l = {};
        } else if (d instanceof Array) for (var p = d.length, M = 1; M <= p; M += 1) {
          h[1] = d[M - 1];
          var D = n.apply(this, h);
          if (D.isValid()) {
            this.$d = D.$d, this.$L = D.$L, this.init();
            break;
          }
          M === p && (this.$d = /* @__PURE__ */ new Date(""));
        }
        else u.call(this, c);
      };
    };
  });
})(I);
var ot = I.exports;
const it = /* @__PURE__ */ rt(ot);
export {
  it as c
};
