import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import AsyncTreeCrudDropDown from "../../../src/palmyra/menu/AsyncTreeCrudDropDown";
import { CustomChecked, CustomIndeterminate, CustomUnchecked } from "./testIcons";

describe("AsyncTreeCrudDropDown - icons", () => {

    const icons = { checked: CustomChecked, unchecked: CustomUnchecked, indeterminate: CustomIndeterminate };

    test("default icons", () => {
        const { container, rerender } = render(<AsyncTreeCrudDropDown />);
        expect(container.querySelectorAll('.crud-checkbox svg.checkbox-icon--unchecked').length).toBe(3);

        rerender(<AsyncTreeCrudDropDown isSelected />);
        expect(container.querySelectorAll('.crud-checkbox svg.checkbox-icon--checked').length).toBe(3);

        rerender(<AsyncTreeCrudDropDown isHalfSelected />);
        expect(container.querySelectorAll('.crud-checkbox svg.checkbox-icon--indeterminate').length).toBe(3);
    });

    test("custom icons", () => {
        const { container, rerender } = render(<AsyncTreeCrudDropDown icons={icons} />);
        expect(screen.getAllByTestId('custom-unchecked').length).toBe(3);
        expect(container.querySelector('svg')).toBeNull();

        rerender(<AsyncTreeCrudDropDown icons={icons} isSelected />);
        expect(screen.getAllByTestId('custom-checked').length).toBe(3);

        rerender(<AsyncTreeCrudDropDown icons={icons} isHalfSelected />);
        expect(screen.getAllByTestId('custom-indeterminate').length).toBe(3);
    });

    test("custom icons - partial override keeps default unchecked", () => {
        const { container } = render(<AsyncTreeCrudDropDown icons={{ checked: CustomChecked }} />);
        expect(container.querySelectorAll('svg.checkbox-icon--unchecked').length).toBe(3);
    });

    test("custom icons - click", () => {
        const handleSelect = vi.fn();
        render(<AsyncTreeCrudDropDown icons={icons} handleSelect={handleSelect} />);
        fireEvent.click(screen.getAllByTestId('custom-unchecked')[0]);
        expect(handleSelect).toHaveBeenCalledTimes(1);
    });
})
