/**
 * @jest-environment jsdom
 */

import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from "../../App";
import { cleanup } from '@testing-library/react'

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <BrowserRouter>
            <App></App>
        </BrowserRouter>, div)
})

afterAll(cleanup)