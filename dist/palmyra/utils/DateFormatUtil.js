import U from "dayjs";
var tt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function et(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var B = { exports: {} };
(function(u, k) {
  (function(T, P) {
    u.exports = P();
  })(tt, function() {
    var T = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, P = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, L = /\d\d/, o = /\d\d?/, s = /\d*[^-_:/,()\s\d]+/, c = {}, X = function(t) {
      return (t = +t) + (t > 68 ? 1900 : 2e3);
    }, a = function(t) {
      return function(e) {
        this[t] = +e;
      };
    }, G = [/[+-]\d\d:?(\d\d)?|Z/, function(t) {
      (this.zone || (this.zone = {})).offset = function(e) {
        if (!e || e === "Z") return 0;
        var r = e.match(/([+-]|\d\d)/g), n = 60 * r[1] + (+r[2] || 0);
        return n === 0 ? 0 : r[0] === "+" ? -n : n;
      }(t);
    }], O = function(t) {
      var e = c[t];
      return e && (e.indexOf ? e : e.s.concat(e.f));
    }, V = function(t, e) {
      var r, n = c.meridiem;
      if (n) {
        for (var h = 1; h <= 24; h += 1) if (t.indexOf(n(h, 0, e)) > -1) {
          r = h > 12;
          break;
        }
      } else r = t === (e ? "pm" : "PM");
      return r;
    }, I = { A: [s, function(t) {
      this.afternoon = V(t, !1);
    }], a: [s, function(t) {
      this.afternoon = V(t, !0);
    }], S: [/\d/, function(t) {
      this.milliseconds = 100 * +t;
    }], SS: [L, function(t) {
      this.milliseconds = 10 * +t;
    }], SSS: [/\d{3}/, function(t) {
      this.milliseconds = +t;
    }], s: [o, a("seconds")], ss: [o, a("seconds")], m: [o, a("minutes")], mm: [o, a("minutes")], H: [o, a("hours")], h: [o, a("hours")], HH: [o, a("hours")], hh: [o, a("hours")], D: [o, a("day")], DD: [L, a("day")], Do: [s, function(t) {
      var e = c.ordinal, r = t.match(/\d+/);
      if (this.day = r[0], e) for (var n = 1; n <= 31; n += 1) e(n).replace(/\[|\]/g, "") === t && (this.day = n);
    }], M: [o, a("month")], MM: [L, a("month")], MMM: [s, function(t) {
      var e = O("months"), r = (O("monthsShort") || e.map(function(n) {
        return n.slice(0, 3);
      })).indexOf(t) + 1;
      if (r < 1) throw new Error();
      this.month = r % 12 || r;
    }], MMMM: [s, function(t) {
      var e = O("months").indexOf(t) + 1;
      if (e < 1) throw new Error();
      this.month = e % 12 || e;
    }], Y: [/[+-]?\d+/, a("year")], YY: [L, function(t) {
      this.year = X(t);
    }], YYYY: [/\d{4}/, a("year")], Z: G, ZZ: G };
    function J(t) {
      var e, r;
      e = t, r = c && c.formats;
      for (var n = (t = e.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(y, M, d) {
        var i = d && d.toUpperCase();
        return M || r[d] || T[d] || r[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(Y, v, g) {
          return v || g.slice(1);
        });
      })).match(P), h = n.length, l = 0; l < h; l += 1) {
        var S = n[l], D = I[S], m = D && D[0], p = D && D[1];
        n[l] = p ? { regex: m, parser: p } : S.replace(/^\[|\]$/g, "");
      }
      return function(y) {
        for (var M = {}, d = 0, i = 0; d < h; d += 1) {
          var Y = n[d];
          if (typeof Y == "string") i += Y.length;
          else {
            var v = Y.regex, g = Y.parser, b = y.slice(i), x = v.exec(b)[0];
            g.call(M, x), y = y.replace(x, "");
          }
        }
        return function(w) {
          var f = w.afternoon;
          if (f !== void 0) {
            var $ = w.hours;
            f ? $ < 12 && (w.hours += 12) : $ === 12 && (w.hours = 0), delete w.afternoon;
          }
        }(M), M;
      };
    }
    return function(t, e, r) {
      r.p.customParseFormat = !0, t && t.parseTwoDigitYear && (X = t.parseTwoDigitYear);
      var n = e.prototype, h = n.parse;
      n.parse = function(l) {
        var S = l.date, D = l.utc, m = l.args;
        this.$u = D;
        var p = m[1];
        if (typeof p == "string") {
          var y = m[2] === !0, M = m[3] === !0, d = y || M, i = m[2];
          M && (i = m[2]), c = this.$locale(), !y && i && (c = r.Ls[i]), this.$d = function(b, x, w) {
            try {
              if (["x", "X"].indexOf(x) > -1) return new Date((x === "X" ? 1e3 : 1) * b);
              var f = J(x)(b), $ = f.year, A = f.month, K = f.day, N = f.hours, Q = f.minutes, R = f.seconds, W = f.milliseconds, q = f.zone, Z = /* @__PURE__ */ new Date(), H = K || ($ || A ? 1 : Z.getDate()), z = $ || Z.getFullYear(), F = 0;
              $ && !A || (F = A > 0 ? A - 1 : Z.getMonth());
              var C = N || 0, E = Q || 0, _ = R || 0, j = W || 0;
              return q ? new Date(Date.UTC(z, F, H, C, E, _, j + 60 * q.offset * 1e3)) : w ? new Date(Date.UTC(z, F, H, C, E, _, j)) : new Date(z, F, H, C, E, _, j);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(S, p, D), this.init(), i && i !== !0 && (this.$L = this.locale(i).$L), d && S != this.format(p) && (this.$d = /* @__PURE__ */ new Date("")), c = {};
        } else if (p instanceof Array) for (var Y = p.length, v = 1; v <= Y; v += 1) {
          m[1] = p[v - 1];
          var g = r.apply(this, m);
          if (g.isValid()) {
            this.$d = g.$d, this.$L = g.$L, this.init();
            break;
          }
          v === Y && (this.$d = /* @__PURE__ */ new Date(""));
        }
        else h.call(this, l);
      };
    };
  });
})(B);
var rt = B.exports;
const nt = /* @__PURE__ */ et(rt);
U.extend(nt);
const st = (u) => {
  const k = u.serverPattern, T = u.displayPattern || "YYYY-MM-DD", P = (o, s) => U(o, s).toDate(), L = (o, s) => U(o).format(s);
  return (o) => {
    const s = P(o, k);
    return L(s, T);
  };
};
export {
  st as default
};
