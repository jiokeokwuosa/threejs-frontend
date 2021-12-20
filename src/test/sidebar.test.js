import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Sidebar from "../components/includes/sidebar";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders the list correctly", () => {
  act(() => {
    render(<Sidebar data={[{uid:1,name:'Y-wing', count:2}]} />, container);
  });
  expect(container.textContent).toBe("Y-wing : 2");  
});