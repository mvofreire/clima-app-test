import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Row } from "components";
import WeatherCity from "./WeatherCity";

const Weather = ({ data, timer, isFetching }) => (
  <Fragment>
    <Row align="center">
      {React.Children.toArray(
        data.map((city, index) => (
          <WeatherCity
            {...city}
            showMoreDetails={index === 1}
            timer={timer}
            showLoader={isFetching}
          />
        ))
      )}
    </Row>
  </Fragment>
);

Weather.propTypes = {
  data: PropTypes.array.isRequired
};

export default Weather;
