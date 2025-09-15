import e from "dayjs";
class s {
  serverPattern;
  displayPattern;
  constructor(r, t) {
    this.serverPattern = r.serverPattern || r.displayPattern || t, this.displayPattern = r.displayPattern || t;
  }
  format(r) {
    return r && e(r, this.serverPattern).format(this.displayPattern);
  }
  parse(r) {
    if (r) {
      if (r instanceof Date)
        return r;
      const t = Number(r);
      return !isNaN(t) && t.toString() === r.toString() ? new Date(t) : e(r, this.serverPattern).toDate();
    }
    return r;
  }
  convert(r) {
    const t = this.parse(r);
    return t && t instanceof Date && this.displayPattern ? e(t).format(this.displayPattern) : r;
  }
  getDefaultValue = (r) => r || "";
}
export {
  s as DateTimeConverter
};
