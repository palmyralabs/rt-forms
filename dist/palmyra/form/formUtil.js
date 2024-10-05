const u = (t, r, e) => ({
  saveData: t,
  refresh: e,
  getData() {
    if (r.current)
      return r.current.getData();
  },
  setData(n) {
    if (r.current)
      return r.current.setData(n);
    throw new Error("formRef.current is null");
  },
  isValid() {
    if (r.current)
      return r.current.isValid();
    throw new Error("formRef.current is null");
  }
});
export {
  u as getSaveFormHandle
};
