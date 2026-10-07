import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { CheckBoxIcon } from "../../../src/palmyra/menu/CheckBoxIcon";
import { CustomChecked, CustomIndeterminate, CustomUnchecked } from "./testIcons";

describe("CheckBoxIcon", () => {

    const icons = { checked: CustomChecked, unchecked: CustomUnchecked, indeterminate: CustomIndeterminate };

    test("default icons - state class", () => {
        const { container, rerender } = render(<CheckBoxIcon variant="all" className="checkbox-icon" />);
        expect(container.querySelector('svg.checkbox-icon.checkbox-icon--checked')).not.toBeNull();

        rerender(<CheckBoxIcon variant="none" className="checkbox-icon" />);
        expect(container.querySelector('svg.checkbox-icon.checkbox-icon--unchecked')).not.toBeNull();

        rerender(<CheckBoxIcon variant="some" className="checkbox-icon" />);
        expect(container.querySelector('svg.checkbox-icon.checkbox-icon--indeterminate')).not.toBeNull();
    });

    test("default icons - no inline style", () => {
        const { container } = render(<CheckBoxIcon variant="all" className="checkbox-icon" />);
        expect(container.querySelector('svg').style.color).toBe('');
        expect(container.querySelector('svg').style.backgroundColor).toBe('');
    });

    test("custom icons - all states", () => {
        const { rerender } = render(<CheckBoxIcon variant="all" className="checkbox-icon" icons={icons} />);
        expect(screen.getByTestId('custom-checked').className).toBe('checkbox-icon checkbox-icon--checked');

        rerender(<CheckBoxIcon variant="none" className="checkbox-icon" icons={icons} />);
        expect(screen.getByTestId('custom-unchecked').className).toBe('checkbox-icon checkbox-icon--unchecked');

        rerender(<CheckBoxIcon variant="some" className="checkbox-icon" icons={icons} />);
        expect(screen.getByTestId('custom-indeterminate').className).toBe('checkbox-icon checkbox-icon--indeterminate');
    });

    test("custom icons - partial override falls back to default", () => {
        const { container, rerender } = render(
            <CheckBoxIcon variant="all" className="checkbox-icon" icons={{ checked: CustomChecked }} />);
        expect(screen.getByTestId('custom-checked')).not.toBeNull();
        expect(container.querySelector('svg')).toBeNull();

        rerender(<CheckBoxIcon variant="none" className="checkbox-icon" icons={{ checked: CustomChecked }} />);
        expect(screen.queryByTestId('custom-checked')).toBeNull();
        expect(container.querySelector('svg.checkbox-icon--unchecked')).not.toBeNull();
    });

    test("readOnly - class added", () => {
        const { rerender } = render(<CheckBoxIcon variant="all" className="checkbox-icon" icons={icons} readOnly />);
        expect(screen.getByTestId('custom-checked').classList.contains('checkbox-icon--readonly')).toBe(true);

        rerender(<CheckBoxIcon variant="all" className="checkbox-icon" icons={icons} />);
        expect(screen.getByTestId('custom-checked').classList.contains('checkbox-icon--readonly')).toBe(false);
    });

    test("onClick - default and custom icon", () => {
        const onClick = vi.fn();
        const { container, rerender } = render(<CheckBoxIcon variant="all" onClick={onClick} />);
        fireEvent.click(container.querySelector('svg'));
        expect(onClick).toHaveBeenCalledTimes(1);

        rerender(<CheckBoxIcon variant="all" onClick={onClick} icons={icons} />);
        fireEvent.click(screen.getByTestId('custom-checked'));
        expect(onClick).toHaveBeenCalledTimes(2);
    });

    test("unknown variant - renders nothing", () => {
        const variant: any = 'invalid';
        const { container } = render(<CheckBoxIcon variant={variant} icons={icons} />);
        expect(container.innerHTML).toBe('');
    });
})
