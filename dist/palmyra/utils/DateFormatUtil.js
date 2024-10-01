import V from "dayjs";
var ot = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function at(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var K = { exports: {} };
(function(u, X) {
  (function(S, $) {
    u.exports = $();
  })(ot, function() {
    var S = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, $ = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, T = /\d/, i = /\d\d/, o = /\d\d?/, d = /\d*[^-_:/,()\s\d]+/, M = {}, G = function(t) {
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
      var e = M[t];
      return e && (e.indexOf ? e : e.s.concat(e.f));
    }, B = function(t, e) {
      var r, n = M.meridiem;
      if (n) {
        for (var h = 1; h <= 24; h += 1) if (t.indexOf(n(h, 0, e)) > -1) {
          r = h > 12;
          break;
        }
      } else r = t === (e ? "pm" : "PM");
      return r;
    }, N = { A: [d, function(t) {
      this.afternoon = B(t, !1);
    }], a: [d, function(t) {
      this.afternoon = B(t, !0);
    }], Q: [T, function(t) {
      this.month = 3 * (t - 1) + 1;
    }], S: [T, function(t) {
      this.milliseconds = 100 * +t;
    }], SS: [i, function(t) {
      this.milliseconds = 10 * +t;
    }], SSS: [/\d{3}/, function(t) {
      this.milliseconds = +t;
    }], s: [o, a("seconds")], ss: [o, a("seconds")], m: [o, a("minutes")], mm: [o, a("minutes")], H: [o, a("hours")], h: [o, a("hours")], HH: [o, a("hours")], hh: [o, a("hours")], D: [o, a("day")], DD: [i, a("day")], Do: [d, function(t) {
      var e = M.ordinal, r = t.match(/\d+/);
      if (this.day = r[0], e) for (var n = 1; n <= 31; n += 1) e(n).replace(/\[|\]/g, "") === t && (this.day = n);
    }], w: [o, a("week")], ww: [i, a("week")], M: [o, a("month")], MM: [i, a("month")], MMM: [d, function(t) {
      var e = k("months"), r = (k("monthsShort") || e.map(function(n) {
        return n.slice(0, 3);
      })).indexOf(t) + 1;
      if (r < 1) throw new Error();
      this.month = r % 12 || r;
    }], MMMM: [d, function(t) {
      var e = k("months").indexOf(t) + 1;
      if (e < 1) throw new Error();
      this.month = e % 12 || e;
    }], Y: [/[+-]?\d+/, a("year")], YY: [i, function(t) {
      this.year = G(t);
    }], YYYY: [/\d{4}/, a("year")], Z: q, ZZ: q };
    function R(t) {
      var e, r;
      e = t, r = M && M.formats;
      for (var n = (t = e.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(g, Y, c) {
        var f = c && c.toUpperCase();
        return Y || r[c] || S[c] || r[f].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(v, D, y) {
          return D || y.slice(1);
        });
      })).match($), h = n.length, l = 0; l < h; l += 1) {
        var P = n[l], w = N[P], m = w && w[0], p = w && w[1];
        n[l] = p ? { regex: m, parser: p } : P.replace(/^\[|\]$/g, "");
      }
      return function(g) {
        for (var Y = {}, c = 0, f = 0; c < h; c += 1) {
          var v = n[c];
          if (typeof v == "string") f += v.length;
          else {
            var D = v.regex, y = v.parser, b = g.slice(f), x = D.exec(b)[0];
            y.call(Y, x), g = g.replace(x, "");
          }
        }
        return function(L) {
          var A = L.afternoon;
          if (A !== void 0) {
            var s = L.hours;
            A ? s < 12 && (L.hours += 12) : s === 12 && (L.hours = 0), delete L.afternoon;
          }
        }(Y), Y;
      };
    }
    return function(t, e, r) {
      r.p.customParseFormat = !0, t && t.parseTwoDigitYear && (G = t.parseTwoDigitYear);
      var n = e.prototype, h = n.parse;
      n.parse = function(l) {
        var P = l.date, w = l.utc, m = l.args;
        this.$u = w;
        var p = m[1];
        if (typeof p == "string") {
          var g = m[2] === !0, Y = m[3] === !0, c = g || Y, f = m[2];
          Y && (f = m[2]), M = this.$locale(), !g && f && (M = r.Ls[f]), this.$d = function(b, x, L, A) {
            try {
              if (["x", "X"].indexOf(x) > -1) return new Date((x === "X" ? 1e3 : 1) * b);
              var s = R(x)(b), H = s.year, F = s.month, W = s.day, tt = s.hours, et = s.minutes, rt = s.seconds, nt = s.milliseconds, I = s.zone, J = s.week, j = /* @__PURE__ */ new Date(), z = W || (H || F ? 1 : j.getDate()), C = H || j.getFullYear(), O = 0;
              H && !F || (O = F > 0 ? F - 1 : j.getMonth());
              var Z, E = tt || 0, _ = et || 0, U = rt || 0, Q = nt || 0;
              return I ? new Date(Date.UTC(C, O, z, E, _, U, Q + 60 * I.offset * 1e3)) : L ? new Date(Date.UTC(C, O, z, E, _, U, Q)) : (Z = new Date(C, O, z, E, _, U, Q), J && (Z = A(Z).week(J).toDate()), Z);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(P, p, w, r), this.init(), f && f !== !0 && (this.$L = this.locale(f).$L), c && P != this.format(p) && (this.$d = /* @__PURE__ */ new Date("")), M = {};
        } else if (p instanceof Array) for (var v = p.length, D = 1; D <= v; D += 1) {
          m[1] = p[D - 1];
          var y = r.apply(this, m);
          if (y.isValid()) {
            this.$d = y.$d, this.$L = y.$L, this.init();
            break;
          }
          D === v && (this.$d = /* @__PURE__ */ new Date(""));
        }
        else h.call(this, l);
      };
    };
  });
})(K);
var st = K.exports;
const it = /* @__PURE__ */ at(st);
V.extend(it);
const ct = (u) => {
  const X = u.serverPattern, S = u.displayPattern || "YYYY-MM-DD", $ = (i, o) => {
    const d = V(i, o, !0);
    return d.isValid() ? d.toDate() : null;
  }, T = (i, o) => V(i).format(o);
  return (i) => {
    const o = $(i, X);
    return T(o, S);
  };
};
export {
  ct as default
};
