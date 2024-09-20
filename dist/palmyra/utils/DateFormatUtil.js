import X from "dayjs";
var ot = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function at(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var K = { exports: {} };
(function(u, G) {
  (function(S, $) {
    u.exports = $();
  })(ot, function() {
    var S = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, $ = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, T = /\d/, i = /\d\d/, o = /\d\d?/, D = /\d*[^-_:/,()\s\d]+/, p = {}, V = function(t) {
      return (t = +t) + (t > 68 ? 1900 : 2e3);
    }, a = function(t) {
      return function(e) {
        this[t] = +e;
      };
    }, q = [/[+-]\d\d:?(\d\d)?|Z/, function(t) {
      (this.zone || (this.zone = {})).offset = function(e) {
        if (!e || e === "Z") return 0;
        var r = e.match(/([+-]|\d\d)/g), n = 60 * r[1] + (+r[2] || 0);
        return n === 0 ? 0 : r[0] === "+" ? -n : n;
      }(t);
    }], k = function(t) {
      var e = p[t];
      return e && (e.indexOf ? e : e.s.concat(e.f));
    }, B = function(t, e) {
      var r, n = p.meridiem;
      if (n) {
        for (var d = 1; d <= 24; d += 1) if (t.indexOf(n(d, 0, e)) > -1) {
          r = d > 12;
          break;
        }
      } else r = t === (e ? "pm" : "PM");
      return r;
    }, N = { A: [D, function(t) {
      this.afternoon = B(t, !1);
    }], a: [D, function(t) {
      this.afternoon = B(t, !0);
    }], Q: [T, function(t) {
      this.month = 3 * (t - 1) + 1;
    }], S: [T, function(t) {
      this.milliseconds = 100 * +t;
    }], SS: [i, function(t) {
      this.milliseconds = 10 * +t;
    }], SSS: [/\d{3}/, function(t) {
      this.milliseconds = +t;
    }], s: [o, a("seconds")], ss: [o, a("seconds")], m: [o, a("minutes")], mm: [o, a("minutes")], H: [o, a("hours")], h: [o, a("hours")], HH: [o, a("hours")], hh: [o, a("hours")], D: [o, a("day")], DD: [i, a("day")], Do: [D, function(t) {
      var e = p.ordinal, r = t.match(/\d+/);
      if (this.day = r[0], e) for (var n = 1; n <= 31; n += 1) e(n).replace(/\[|\]/g, "") === t && (this.day = n);
    }], w: [o, a("week")], ww: [i, a("week")], M: [o, a("month")], MM: [i, a("month")], MMM: [D, function(t) {
      var e = k("months"), r = (k("monthsShort") || e.map(function(n) {
        return n.slice(0, 3);
      })).indexOf(t) + 1;
      if (r < 1) throw new Error();
      this.month = r % 12 || r;
    }], MMMM: [D, function(t) {
      var e = k("months").indexOf(t) + 1;
      if (e < 1) throw new Error();
      this.month = e % 12 || e;
    }], Y: [/[+-]?\d+/, a("year")], YY: [i, function(t) {
      this.year = V(t);
    }], YYYY: [/\d{4}/, a("year")], Z: q, ZZ: q };
    function R(t) {
      var e, r;
      e = t, r = p && p.formats;
      for (var n = (t = e.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(g, M, c) {
        var f = c && c.toUpperCase();
        return M || r[c] || S[c] || r[f].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(Y, v, y) {
          return v || y.slice(1);
        });
      })).match($), d = n.length, h = 0; h < d; h += 1) {
        var P = n[h], w = N[P], l = w && w[0], m = w && w[1];
        n[h] = m ? { regex: l, parser: m } : P.replace(/^\[|\]$/g, "");
      }
      return function(g) {
        for (var M = {}, c = 0, f = 0; c < d; c += 1) {
          var Y = n[c];
          if (typeof Y == "string") f += Y.length;
          else {
            var v = Y.regex, y = Y.parser, b = g.slice(f), x = v.exec(b)[0];
            y.call(M, x), g = g.replace(x, "");
          }
        }
        return function(L) {
          var A = L.afternoon;
          if (A !== void 0) {
            var s = L.hours;
            A ? s < 12 && (L.hours += 12) : s === 12 && (L.hours = 0), delete L.afternoon;
          }
        }(M), M;
      };
    }
    return function(t, e, r) {
      r.p.customParseFormat = !0, t && t.parseTwoDigitYear && (V = t.parseTwoDigitYear);
      var n = e.prototype, d = n.parse;
      n.parse = function(h) {
        var P = h.date, w = h.utc, l = h.args;
        this.$u = w;
        var m = l[1];
        if (typeof m == "string") {
          var g = l[2] === !0, M = l[3] === !0, c = g || M, f = l[2];
          M && (f = l[2]), p = this.$locale(), !g && f && (p = r.Ls[f]), this.$d = function(b, x, L, A) {
            try {
              if (["x", "X"].indexOf(x) > -1) return new Date((x === "X" ? 1e3 : 1) * b);
              var s = R(x)(b), H = s.year, F = s.month, W = s.day, tt = s.hours, et = s.minutes, rt = s.seconds, nt = s.milliseconds, I = s.zone, J = s.week, j = /* @__PURE__ */ new Date(), z = W || (H || F ? 1 : j.getDate()), C = H || j.getFullYear(), O = 0;
              H && !F || (O = F > 0 ? F - 1 : j.getMonth());
              var Z, E = tt || 0, _ = et || 0, U = rt || 0, Q = nt || 0;
              return I ? new Date(Date.UTC(C, O, z, E, _, U, Q + 60 * I.offset * 1e3)) : L ? new Date(Date.UTC(C, O, z, E, _, U, Q)) : (Z = new Date(C, O, z, E, _, U, Q), J && (Z = A(Z).week(J).toDate()), Z);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(P, m, w, r), this.init(), f && f !== !0 && (this.$L = this.locale(f).$L), c && P != this.format(m) && (this.$d = /* @__PURE__ */ new Date("")), p = {};
        } else if (m instanceof Array) for (var Y = m.length, v = 1; v <= Y; v += 1) {
          l[1] = m[v - 1];
          var y = r.apply(this, l);
          if (y.isValid()) {
            this.$d = y.$d, this.$L = y.$L, this.init();
            break;
          }
          v === Y && (this.$d = /* @__PURE__ */ new Date(""));
        }
        else d.call(this, h);
      };
    };
  });
})(K);
var st = K.exports;
const it = /* @__PURE__ */ at(st);
X.extend(it);
const ct = (u) => {
  const G = u.serverPattern, S = u.displayPattern || "YYYY-MM-DD", $ = (i, o) => X(i, o).toDate(), T = (i, o) => X(i).format(o);
  return (i) => {
    const o = $(i, G);
    return T(o, S);
  };
};
export {
  ct as default
};
