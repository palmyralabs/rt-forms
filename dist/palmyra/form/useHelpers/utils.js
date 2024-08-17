const o = (e) => {
  const n = e.onSaveFailure || (() => {
  }), a = e.onSaveSuccess || (() => {
  }), c = e.preSave || ((S) => S);
  return { onSaveFailure: n, onSaveSuccess: a, preSave: c };
};
export {
  o as getHandlers
};
