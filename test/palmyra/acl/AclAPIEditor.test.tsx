import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import { useRef } from "react";
import { describe, expect, test } from "vitest";
import { AclAPIEditor, IAclAPIEditor, NestedAPIPermission } from "../../../src/palmyra";
import { CustomChecked, CustomUnchecked } from "../menu/testIcons";

describe("AclAPIEditor - icons", () => {

    const getData = (): NestedAPIPermission[] => {
        return [{
            id: 1, code: 'user', mask: 0, name: 'User', className: 'User',
            permissions: [
                { id: 11, code: 'QCRU', mask: 1, name: 'Edit' },
                { id: 12, code: 'DELETE', mask: 0, name: 'Delete' }
            ]
        }];
    }

    test("default icons", () => {
        const { container } = render(<AclAPIEditor data={getData()} />);
        expect(container.querySelectorAll('svg.checkbox-icon.checkbox-icon--checked').length).toBe(1);
        expect(container.querySelectorAll('svg.checkbox-icon.checkbox-icon--unchecked').length).toBe(1);
    });

    test("custom icons", () => {
        const { container } = render(
            <AclAPIEditor data={getData()} icons={{ checked: CustomChecked, unchecked: CustomUnchecked }} />);
        expect(screen.getAllByTestId('custom-checked').length).toBe(1);
        expect(screen.getAllByTestId('custom-unchecked').length).toBe(1);
        expect(container.querySelector('svg')).toBeNull();
    });

    test("custom icons - partial override", () => {
        const { container } = render(<AclAPIEditor data={getData()} icons={{ checked: CustomChecked }} />);
        expect(screen.getAllByTestId('custom-checked').length).toBe(1);
        expect(container.querySelectorAll('svg.checkbox-icon--unchecked').length).toBe(1);
    });

    test("custom icons - click toggles the permission", () => {
        const ref: any = renderHook(() => useRef<IAclAPIEditor>(null)).result.current;
        render(<AclAPIEditor data={getData()} ref={ref}
            icons={{ checked: CustomChecked, unchecked: CustomUnchecked }} />);

        fireEvent.click(screen.getByTestId('custom-unchecked'));
        expect(screen.getAllByTestId('custom-checked').length).toBe(2);
        expect(ref.current.getValue()[0].permissions[1].mask).toBe(1);

        fireEvent.click(screen.getAllByTestId('custom-checked')[0]);
        expect(screen.getAllByTestId('custom-checked').length).toBe(1);
        expect(ref.current.getValue()[0].permissions[0].mask).toBe(0);
    });
})
