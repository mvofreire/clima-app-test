import React from "react";
import ReactDOM from "react-dom";
import WeatherCity, { MoreDetails } from "./WeatherCity";
import { mount } from "enzyme";

describe("WeatherCity", () => {
  let props = {
    sys: {
      country: "GL"
    },
    main: {
      temp: -11.9,
      pressure: 1000.7,
      humidity: 100
    },
    name: "Nuuk"
  };
  let mountedWeatherCity;

  const weatherCity = customProps => {
    if (!mountedWeatherCity) {
      mountedWeatherCity = mount(<WeatherCity {...props} {...customProps} />);
    }
    return mountedWeatherCity;
  };

  beforeEach(() => {
    props = {
      name: undefined,
      main: undefined,
      sys: undefined,
      showMoreDetails: undefined
    };
    mountedWeatherCity = undefined;
  });

  it("Render WeatherCity Component without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<WeatherCity {...props} showMoreDetails={true} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Sempre renderiza uma div", () => {
    const divs = weatherCity().find("div");

    expect(divs.length).toBeGreaterThan(0);
  });

  it("Validacao de mostrar detalhes", () => {
    const divs = weatherCity({ showMoreDetails: true }).find(MoreDetails);
    expect(divs.length).toBeGreaterThan(0);
  });

  it("Validacao de não mostrar detalhes", () => {
    const divs = weatherCity({ showMoreDetails: false }).find(MoreDetails);
    expect(divs.length).toBe(0);
  });
});
