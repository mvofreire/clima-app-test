import React from "react";
import ReactDOM from "react-dom";
import { LabelValue } from "./";
import { render } from "enzyme";

describe("LabelValue Component", () => {
  it("Render LabelValue Component without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<LabelValue label="Label" value="Value" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Render LabelValue test label", () => {
    const component = render(<LabelValue label="Teste" value="Value" />);
    expect(component.text()).toContain("Teste");
  });

  it("Render LabelValue test value", () => {
    const component = render(<LabelValue label="Teste" value="Value" />);
    expect(component.text()).toContain("Value");
  });
});
