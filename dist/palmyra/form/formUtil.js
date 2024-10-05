const u = (t, r, n) => ({
  saveData: t,
  refresh() {
    if (r.current)
      return r.current.getData();
  },
  getData() {
    if (r.current)
      return r.current.getData();
  },
  setData(e) {
    if (r.current)
      return r.current.setData(e);
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
