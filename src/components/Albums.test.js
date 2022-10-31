/**
 * @jest-environment jsdom
 */
import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Albums from './Albums';
describe("Albums component", () => {

    beforeEach(() => {
        render(<Albums />)
    })

    it("Displays a heading with the appropriate text", () =>{
    })

})








