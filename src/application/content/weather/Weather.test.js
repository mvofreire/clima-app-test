import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import WeatherCity from "./WeatherCity";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("Weather", () => {
  let props = {
    data: []
  };
  let mountedWeather;

  const weather = customProps => {
    if (!mountedWeather) {
      mountedWeather = mount(<Weather {...props} {...customProps} />);
    }
    return mountedWeather;
  };

  beforeEach(() => {
    props = {
      data: []
    };
    mountedWeather = undefined;
  });

  it("Render WeatherCity Component without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Weather {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Sempre renderiza 3 cidades", () => {
    const divs = weather({
      data: [
        {
          sys: {
            country: "GL"
          },
          main: {
            temp: -11.9,
            pressure: 1000.7,
            humidity: 100
          },
          name: "Nuuk"
        },
        {
          sys: {
            country: "GL"
          },
          main: {
            temp: -11.9,
            pressure: 1000.7,
            humidity: 100
          },
          name: "Nuuk"
        },
        {
          sys: {
            country: "GL"
          },
          main: {
            temp: -11.9,
            pressure: 1000.7,
            humidity: 100
          },
          name: "Nuuk"
        }
      ]
    }).find(WeatherCity);

    expect(divs.length).toBe(3);
  });
});
