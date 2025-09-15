import { jsx as l } from "react/jsx-runtime";
import { useState as m, useRef as a, useEffect as k } from "react";
import { getFilteredRowModel as p } from "@tanstack/react-table";
const T = () => {
  const [c, s] = m({}), t = a({}), n = a(null);
  return { getTableOptions: () => ({
    state: {
      rowSelection: c
    },
    enableRowSelection: !0,
    onRowSelectionChange: s,
    getFilteredRowModel: p(),
    debug: !0
  }), preProcessColumns: (f) => {
    const S = {
      id: "select",
      header: ({ table: e }) => /* @__PURE__ */ l(
        h,
        {
          checked: (() => {
            try {
              return e.getIsAllRowsSelected();
            } catch {
              return !1;
            }
          })(),
          indeterminate: e.getIsSomeRowsSelected(),
          onChange: (o) => {
            const u = o.target?.checked, r = e.getFilteredRowModel().rows;
            u ? r.forEach((d) => {
              const i = d.original.id;
              t.current[i] = !0;
            }) : r.forEach((d) => {
              const i = d.original.id;
              delete t.current[i];
            }), e.getToggleAllRowsSelectedHandler()(o);
          }
        }
      ),
      cell: ({ row: e }) => {
        const g = (o) => {
          const r = e.original.id;
          e.getIsSelected() ? delete t.current[r] : t.current[r] = !0, e.getToggleSelectedHandler()(o);
        };
        return /* @__PURE__ */ l("div", { className: "px-1", children: /* @__PURE__ */ l(
          h,
          {
            checked: e.getIsSelected(),
            disabled: !e.getCanSelect(),
            indeterminate: e.getIsSomeSelected(),
            onChange: g
          }
        ) });
      }
    };
    f.push(S);
  }, getTableRef: () => n, getSelectedIds: () => t.current };
};
function h({
  indeterminate: c,
  className: s = "",
  ...t
}) {
  const n = a(null);
  return k(() => {
    typeof c == "boolean" && (n.current.indeterminate = !t.checked && c);
  }, [n, c]), /* @__PURE__ */ l(
    "input",
    {
      type: "checkbox",
      ref: n,
      className: s + " cursor-pointer",
      ...t
    }
  );
}
export {
  T as CheckboxGridEnhancer
};
