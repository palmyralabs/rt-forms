const u = (s) => {
  const { getError: i, getValue: l, setValue: o, setMutateOptions: t } = s;
  return {
    isValid() {
      return !i().status;
    },
    setValue: o,
    getValue: l,
    clear() {
      o("");
    },
    refreshError() {
      s.refreshError();
    },
    setVisible(e) {
      t((r) => ({ ...r, visible: e }));
    },
    setRequired(e) {
      t((r) => ({ ...r, required: e }));
    },
    setReadOnly(e) {
      t((r) => ({ ...r, readOnly: e }));
    },
    setDisabled(e) {
      t((r) => ({ ...r, disabled: e }));
    },
    setAttribute(e) {
      t((r) => ({ ...r, ...e }));
    }
  };
};
export {
  u as getFieldHandler
};
