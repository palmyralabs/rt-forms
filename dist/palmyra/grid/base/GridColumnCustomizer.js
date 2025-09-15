const s = (u, o) => ({ formatCell: (e, t) => {
  const r = e.attribute;
  return u[r] ? u[r](t) : t;
}, formatHeader: (e, t) => {
  const r = e.attribute;
  return o?.header?.[r] ? o.header[r](e, t) : t;
}, formatFooter: (e, t) => {
  const r = e.attribute;
  return o?.footer?.[r] ? o.footer[r](e, t) : t;
} });
export {
  s as useGridColumnCustomizer
};
