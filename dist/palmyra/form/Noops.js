const e = {
  onSaveSuccess: function(r) {
  },
  onSaveFailure: function(r) {
    console.error("Error while saving", r);
  },
  preProcessSaveData: (r) => r,
  postProcessQueryData: (r) => r
};
export {
  e as NoopFormListener
};
