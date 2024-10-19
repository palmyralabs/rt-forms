var r = Object.defineProperty;
var t = (n, o, c) => o in n ? r(n, o, { enumerable: !0, configurable: !0, writable: !0, value: c }) : n[o] = c;
var e = (n, o, c) => t(n, typeof o != "symbol" ? o + "" : o, c);
const i = {};
class p {
  constructor() {
    e(this, "getIcon", (o) => i[o]);
  }
}
const I = new p();
export {
  I as SimpleIconProvider
};
