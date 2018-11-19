import React from "react";
import ReactDOM from "react-dom";
import { Loader } from "./";

describe("Loader Component", () => {
  it("Render Loader Component without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Loader visible />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
