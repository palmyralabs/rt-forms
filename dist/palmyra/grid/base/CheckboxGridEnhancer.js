import { jsx as l } from "react/jsx-runtime";
import { useState as k, useRef as a, useEffect as p } from "react";
import { getFilteredRowModel as R } from "@tanstack/react-table";
const A = () => {
  const [c, s] = k({}), t = a({}), n = a();
  return { getTableOptions: () => ({
    state: {
      rowSelection: c
    },
    enableRowSelection: !0,
    onRowSelectionChange: s,
    getFilteredRowModel: R(),
    debug: !0
  }), preProcessColumns: (S) => {
    const m = {
      id: "select",
      header: ({ table: e }) => /* @__PURE__ */ l(
        f,
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
            var h;
            const u = (h = o.target) == null ? void 0 : h.checked, r = e.getFilteredRowModel().rows;
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
          f,
          {
            checked: e.getIsSelected(),
            disabled: !e.getCanSelect(),
            indeterminate: e.getIsSomeSelected(),
            onChange: g
          }
        ) });
      }
    };
    S.push(m);
  }, getTableRef: () => n, getSelectedIds: () => t.current };
};
function f({
  indeterminate: c,
  className: s = "",
  ...t
}) {
  const n = a(null);
  return p(() => {
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
  A as CheckboxGridEnhancer
};
