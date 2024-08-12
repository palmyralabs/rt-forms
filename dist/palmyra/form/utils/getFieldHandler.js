const n = (a) => {
  const { getError: i, getValue: l, setValue: s, setMutateOptions: r } = a;
  return {
    isValid() {
      return !i().status;
    },
    setValue: s,
    getValue: l,
    clear() {
      s("");
    },
    setVisible(e) {
      r((t) => ({ ...t, visible: e }));
    },
    setRequired(e) {
      r((t) => ({ ...t, required: e }));
    },
    setReadOnly(e) {
      r((t) => ({ ...t, readonly: e }));
    },
    setDisabled(e) {
      r((t) => ({ ...t, disabled: e }));
    },
    setAttribute(e) {
      r((t) => ({ ...t, ...e }));
    }
  };
};
export {
  n as getFieldHandler
};
