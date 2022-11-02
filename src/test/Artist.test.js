/**
 * @jest-environment jsdom
 */
import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Artist from '../components/Artist/index';

describe("Artist component", () => {

    beforeEach(() => {
        render(<Artist name='Test Artist' description='Test Description'/>)
    })

    it("Title displays artist name", () => {
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
        expect(heading.textContent).toBe("Test Artist");
    })

    it("Paragraph displays artist description", () => {
        const desc = screen.getByRole('paragraph');
        expect(desc).toBeInTheDocument();
        expect(desc.textContent).toBe("Test Description");
    })

})








