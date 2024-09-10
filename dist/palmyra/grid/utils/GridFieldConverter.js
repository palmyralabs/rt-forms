const n = (e) => {
  var t = [];
  return e.filter((r) => r.searchable).map((r, i) => {
    t.push(a(r));
  }), t;
}, a = (e) => {
  var t = {
    name: e.name,
    attribute: e.attribute,
    label: e.label,
    required: !1,
    type: s(e.type)
  };
  return e.displayPattern && (t.displayPattern = e.displayPattern), e.serverPattern && (t.serverPattern = e.serverPattern), e.options && (t.options = e.options), t;
}, s = (e) => {
  switch (e) {
    case "select":
      return "multiSelect";
    case "radio":
      return "checkbox";
    case "date":
      return "dateRange";
    case "number":
      return "string";
    default:
      return e;
  }
};
export {
  n as convertToField
};
