/**
 * @jest-environment jsdom
 */
import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Artist from './Artist';

describe("Artist component", () => {

    beforeEach(() => {
        render(<Artist/>)
    })

    it("Displays a heading with the appropriate text", () =>{
    })

})








