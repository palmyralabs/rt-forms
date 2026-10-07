import { useContext as l, useRef as p, useState as g, useEffect as h } from "react";
import { StoreFactoryContext as D } from "../form/formContext.js";
const I = (t) => {
  const { groupId: r } = t, d = t.storeFactory || l(D), n = t.editorRef || p(null), i = d.getFormStore({}, "/admin/acl/permission/group/{groupId}"), [m, f] = g([]), u = () => {
    i.get({ endPointVars: { groupId: r } }).then((a) => {
      const o = a.reduce((e, s) => (e[s.className] || (e[s.className] = []), e[s.className].push({
        id: s.id,
        code: s.code,
        name: s.permission,
        mask: s.mask
      }), e), {}), c = Object.entries(o).map(([e, s]) => ({
        className: e,
        permissions: s
      }));
      f(c);
    });
  };
  return h(() => {
    u();
  }, [r, t.editorRef]), { aclData: m, editorRef: n, refresh: u, saveData: () => {
    const a = n.current.getValue(), o = [];
    a.forEach((c) => {
      c.permissions?.forEach((e) => {
        o.push({ permissionId: e.id, mask: e.mask });
      });
    }), i.put(o, { endPointVars: { groupId: r } });
  } };
};
export {
  I as useAclAPIEditor
};
