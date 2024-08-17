const n = (t, r) => ({
  saveData: t,
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
  n as getSaveFormHandle
};
