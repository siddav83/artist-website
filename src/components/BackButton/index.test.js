/**
 * @jest-environment jsdom
 */


import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BackButton from '.';

describe('back button', () => {
    beforeEach(() => render(
        <MemoryRouter>
            <BackButton/>
        </MemoryRouter>
    ))

    test('render back button', () => {
        const btn = screen.getByRole('button', {name: "BackButton"})
        expect(btn).toBeInTheDocument
    })
})
