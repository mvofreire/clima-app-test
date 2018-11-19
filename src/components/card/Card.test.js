import React from "react";
import ReactDOM from "react-dom";
import { Card } from "./";
import { render } from "enzyme";

describe("Card Component", () => {
  it("Render Card Component without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Render Card test title", () => {
    const component = render(<Card title="teste" />);
    expect(component.text()).toContain("teste");
  });
});
