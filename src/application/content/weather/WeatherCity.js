import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { Card, Row, Col, WithStyles, LabelValue, Loader } from "components";
import { getTempType, TempTypes } from "./weather-temp";

const styles = ({ color, theme }) => ({
  card: {
    marginBottom: 40,
    userSelect: "none"
  },
  temp: {
    position: "relative",
    fontSize: "6em",
    fontWeight: 500
  },
  deggres: {
    fontSize: ".5em",
    top: 0,
    position: "absolute"
  },
  tempCold: {
    color: theme.coldTempColor
  },
  tempNormal: {
    color: theme.normalTempColor
  },
  tempHot: {
    color: theme.hotTempColor
  },
  showMoreDetails: {
    marginBottom: 10
  },
  updated: {
    color: color.Gray.dark,
    fontSize: 10,
    width: "100%",
    display: "block",
    textAlign: "center",
    margin: "5px 0"
  }
});

export const MoreDetails = ({ classes, humidity, pressure }) => (
  <div className={classes.showMoreDetails}>
    <Row>
      <Col xs={6}>
        <LabelValue label="HUMIDITY" value={humidity} />
      </Col>
      <Col xs={6}>
        <LabelValue label="PRESSURE" value={pressure} />
      </Col>
    </Row>
  </div>
);

const WeatherCity = ({
  showMoreDetails,
  classes,
  name,
  main: { temp, humidity, pressure },
  sys: { country },
  timer,
  showLoader
}) => {
  const tempType = getTempType(temp);

  const formatTemp = parseInt(temp);
  const formatHumidity = parseInt(humidity);
  const formatPressure = parseInt(pressure);

  return (
    <Col>
      <Card title={`${name}, ${country}`} className={classes.card}>
        <Card.Content>
          <Loader visible={showLoader} />
          {!showLoader && (
            <span
              className={cx(
                {
                  [classes.tempCold]: tempType === TempTypes.COLD,
                  [classes.tempNormal]: tempType === TempTypes.NORMAL,
                  [classes.tempHot]: tempType === TempTypes.HOT
                },
                classes.temp
              )}
            >
              {formatTemp}
              <i className={classes.deggres}>&deg;</i>
            </span>
          )}
        </Card.Content>
        {!showLoader && (
          <Card.Footer>
            {showMoreDetails && (
              <MoreDetails
                classes={classes}
                humidity={`${formatHumidity}%`}
                pressure={`${formatPressure} hPa`}
              />
            )}
            <span className={classes.updated}>
              Updated at {timer.format("HH:mm:ss A")}
            </span>
          </Card.Footer>
        )}
      </Card>
    </Col>
  );
};

WeatherCity.propTypes = {
  showMoreDetails: PropTypes.bool,
  name: PropTypes.string,
  main: PropTypes.shape({
    temp: PropTypes.number,
    humidity: PropTypes.number,
    pressure: PropTypes.number
  }),
  sys: PropTypes.shape({ country: PropTypes.string }),
  timer: PropTypes.object,
  showLoader: PropTypes.bool
};

WeatherCity.defaultProps = {
  showMoreDetails: false,
  showLoader: false,
  name: "",
  main: {},
  sys: {}
};

export default WithStyles(styles)(WeatherCity);
