const m = (i, t) => ({ formatCell: (u, e) => {
  const r = u.attribute;
  return i[r] ? i[r](e) : e;
}, formatHeader: (u, e) => {
  var n;
  const r = u.attribute;
  return (n = t == null ? void 0 : t.header) != null && n[r] ? t.header[r](u, e) : e;
}, formatFooter: (u, e) => {
  var n;
  const r = u.attribute;
  return (n = t == null ? void 0 : t.footer) != null && n[r] ? t.footer[r](u, e) : e;
} });
export {
  m as useGridColumnCustomizer
};
