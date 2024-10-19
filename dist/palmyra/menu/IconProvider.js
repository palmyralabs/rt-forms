var t = Object.defineProperty;
var c = (r, o, e) => o in r ? t(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e;
var a = (r, o, e) => c(r, typeof o != "symbol" ? o + "" : o, e);
import { TableView as d, Home as i, Feed as n, InsertChart as s, CreditCard as m, Dashboard as h, AutoAwesomeMosaic as l } from "@mui/icons-material";
const p = {
  grid: d,
  home: i,
  form: n,
  chart: s,
  card: m,
  dashboard: h,
  layout: l
};
class I {
  constructor() {
    a(this, "getIcon", (o) => p[o]);
  }
}
const w = new I();
export {
  w as SimpleIconProvider
};
