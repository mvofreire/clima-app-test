import React from "react";
import { WithStyles } from "components";
import PropTypes from "prop-types";

const styles = ({ color }) => ({
  container: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center"
  },
  label: {
    fontSize: 12,
    color: color.Gray.dark
  },
  value: {
    color: color.Black.normal
  }
});

const LabelValueComponent = ({ classes, label, value }) => (
  <div className={classes.container}>
    <span className={classes.label}>{label}</span>
    <span className={classes.value}>{value}</span>
  </div>
);

const LabelValue = WithStyles(styles)(LabelValueComponent);

LabelValue.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export { LabelValue };
