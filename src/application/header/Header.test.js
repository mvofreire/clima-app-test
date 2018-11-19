import React from "react";
import ReactDOM from "react-dom";
import Header from "./";

describe("Header", () => {
  it("Render Header Component without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
