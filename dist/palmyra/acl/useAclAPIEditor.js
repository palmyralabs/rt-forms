import { useContext as f, useRef as l, useState as g, useEffect as h } from "react";
import "../form/PalmyraForm.js";
import { StoreFactoryContext as D } from "../form/formContext.js";
import "@palmyralabs/ts-predicates";
import "@palmyralabs/ts-utils";
import '../../assets/FormGroup.css';import '../../assets/FieldContainer.css';import '../../assets/FieldGroupContainer.css';import '../../assets/CardLayout.css';/* empty css                            */
import "react/jsx-runtime";
/* empty css                      */
import "@tanstack/react-table";
import "../grid/base/utils/ColumnConverter.js";
import "dayjs";
import "../grid/utils/FormatterFactory.js";
import "react-accessible-treeview";
import "classnames";
import "../../chunks/index.js";
import "react-router-dom";
import "../menu/AsyncTreeMenuEditor.js";
import "./AclAPIEditor.js";
/* empty css                               */
/* empty css                          */
/* empty css                     */
const G = (r) => {
  const { groupId: s } = r, p = r.storeFactory || f(D), m = r.editorRef || l(null), c = p.getFormStore({}, "/admin/acl/permission/group/{groupId}"), [u, d] = g([]), n = () => {
    c.get({ endPointVars: { groupId: s } }).then((i) => {
      const e = i.reduce((t, o) => (t[o.className] || (t[o.className] = []), t[o.className].push({
        id: o.id,
        code: o.code,
        name: o.permission,
        mask: o.mask
      }), t), {}), a = Object.entries(e).map(([t, o]) => ({
        className: t,
        permissions: o
      }));
      d(a);
    });
  };
  return h(() => {
    n();
  }, [s, r.editorRef]), { aclData: u, editorRef: m, refresh: n, saveData: () => {
    const i = m.current.getValue(), e = [];
    i.forEach((a) => {
      a.permissions?.forEach((t) => {
        e.push({ permissionId: t.id, mask: t.mask });
      });
    }), c.put(e, { endPointVars: { groupId: s } });
  } };
};
export {
  G as useAclAPIEditor
};
