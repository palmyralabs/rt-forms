import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { AsyncTreeMenuEditor, TreeIcons } from "../../../src/palmyra";
import { CustomArrow, CustomChecked, CustomIndeterminate, CustomUnchecked } from "./testIcons";

describe("AsyncTreeMenuEditor - icons", () => {

    const storeFactory: any = {
        getTreeStore: () => {
            return {
                getRoot: () => Promise.resolve({
                    result: [
                        { id: 1, name: 'Admin', code: 'admin', children: '2,3', mask: 1 },
                        { id: 2, name: 'Users', code: 'admin/users', parent: 1, mask: 2 },
                        { id: 3, name: 'Roles', code: 'admin/roles', parent: 1, mask: 0 },
                        { id: 4, name: 'Home', code: 'home', mask: 2 },
                        { id: 5, name: 'Reports', code: 'reports', mask: 0 }
                    ]
                })
            }
        }
    };

    const icons: TreeIcons = {
        arrow: CustomArrow, checked: CustomChecked,
        unchecked: CustomUnchecked, indeterminate: CustomIndeterminate
    };

    const renderEditor = (icons?: TreeIcons, readOnly?: boolean) => {
        return render(<AsyncTreeMenuEditor storeFactory={storeFactory} endPoint="/menu"
            groupId={1} fineGrained={true} readOnly={readOnly} icons={icons} />);
    }

    // the half selected state of the parent is resolved after the initial selection
    const loaded = () => screen.findByTestId('custom-indeterminate');

    test("default icons", async () => {
        const { container } = renderEditor();
        await waitFor(() => expect(container.querySelector('svg.checkbox-icon--indeterminate')).not.toBeNull());
        expect(container.querySelectorAll('svg.checkbox-icon--indeterminate').length).toBe(1);
        expect(container.querySelectorAll('svg.checkbox-icon--checked').length).toBe(1);
        expect(container.querySelectorAll('svg.checkbox-icon--unchecked').length).toBe(1);
        expect(container.querySelectorAll('svg.arrow.arrow--closed').length).toBe(1);
        expect(container.querySelector('svg').style.color).toBe('');
    });

    test("custom icons", async () => {
        const { container } = renderEditor(icons);
        await loaded();
        expect(screen.getAllByTestId('custom-indeterminate').length).toBe(1);
        expect(screen.getAllByTestId('custom-checked').length).toBe(1);
        expect(screen.getAllByTestId('custom-unchecked').length).toBe(1);
        expect(screen.getAllByTestId('custom-arrow').length).toBe(1);
        expect(container.querySelector('svg')).toBeNull();
    });

    test("custom icons - expanded children", async () => {
        renderEditor(icons);
        await loaded();
        fireEvent.click(screen.getByText('Admin'));
        await screen.findByText('Users');
        expect(screen.getByTestId('custom-arrow').className).toBe('arrow arrow--open');
        expect(screen.getAllByTestId('custom-checked').length).toBe(2);
        expect(screen.getAllByTestId('custom-unchecked').length).toBe(2);
    });

    test("custom icons - click selects the node", async () => {
        renderEditor(icons);
        await loaded();
        fireEvent.click(screen.getByTestId('custom-unchecked'));
        expect(screen.getAllByTestId('custom-checked').length).toBe(2);
        expect(screen.queryByTestId('custom-unchecked')).toBeNull();
    });

    test("readOnly - class added and click ignored", async () => {
        renderEditor(icons, true);
        await loaded();
        expect(screen.getByTestId('custom-checked').classList.contains('checkbox-icon--readonly')).toBe(true);
        expect(screen.getByTestId('custom-indeterminate').classList.contains('checkbox-icon--readonly')).toBe(true);

        fireEvent.click(screen.getByTestId('custom-unchecked'));
        expect(screen.getAllByTestId('custom-checked').length).toBe(1);
    });

    test("editable - no readonly class", async () => {
        renderEditor(icons, false);
        await loaded();
        expect(screen.getByTestId('custom-checked').classList.contains('checkbox-icon--readonly')).toBe(false);
    });
})
