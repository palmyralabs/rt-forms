import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, test } from "vitest";
import { AsyncTreeMenu, TreeNodeIcons } from "../../../src/palmyra";
import { CustomArrow, CustomLoading } from "./testIcons";

describe("AsyncTreeMenu - icons", () => {

    const store: any = {
        getRoot: () => Promise.resolve({
            result: [
                { id: 1, name: 'Admin', code: 'admin', children: '2,3' },
                { id: 2, name: 'Users', code: 'admin/users', parent: 1 },
                { id: 3, name: 'Roles', code: 'admin/roles', parent: 1 },
                { id: 4, name: 'Home', code: 'home' }
            ]
        })
    };

    const renderMenu = (icons?: TreeNodeIcons) => {
        return render(<MemoryRouter><AsyncTreeMenu store={store} icons={icons} /></MemoryRouter>);
    }

    beforeEach(() => {
        localStorage.clear();
    });

    test("default arrow", async () => {
        const { container } = renderMenu();
        await screen.findByText('Admin');
        expect(container.querySelectorAll('svg.arrow.arrow--closed').length).toBe(1);
    });

    test("custom arrow - branch nodes only", async () => {
        const { container } = renderMenu({ arrow: CustomArrow });
        await screen.findByText('Admin');
        expect(screen.getAllByTestId('custom-arrow').length).toBe(1);
        expect(container.querySelector('svg.arrow')).toBeNull();
    });

    test("custom arrow - open and closed class", async () => {
        renderMenu({ arrow: CustomArrow });
        const admin = await screen.findByText('Admin');
        expect(screen.getByTestId('custom-arrow').className).toBe('arrow arrow--closed');

        fireEvent.click(admin);
        await screen.findByText('Users');
        expect(screen.getByTestId('custom-arrow').className).toBe('arrow arrow--open');
    });

    test("custom loading only - arrow stays default", async () => {
        const { container } = renderMenu({ loading: CustomLoading });
        await screen.findByText('Admin');
        expect(container.querySelectorAll('svg.arrow').length).toBe(1);
        expect(screen.queryByTestId('custom-loading')).toBeNull();
    });
})
