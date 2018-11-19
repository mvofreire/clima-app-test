import React from "react";
import { WithStyles } from "components";
import { cacheMinutesDuration } from "config";
import Countdown from "react-countdown-now";

const styles = ({ color, theme }) => ({
  root: {
    textAlign: "center",
    margin: "20px 0px",
    fontSize: 12
  },
  label: {
    color: color.Gray.dark,
    margin: "0px 5px"
  }
});

const renderer = ({ hours, minutes, seconds, completed }) => {
  return (
    <span>
      {minutes}:{seconds}
    </span>
  );
};

const RefreshComponent = ({ classes, refresh, timer }) => {
  const momentTimerCache =
    timer != null ? timer.add(cacheMinutesDuration, "minutes").valueOf() : null;

  return (
    momentTimerCache && (
      <div className={classes.root}>
        <span className={classes.label}>Os dados serão atualizados em: </span>
        <Countdown
          date={momentTimerCache}
          onComplete={refresh}
          renderer={renderer}
        />
      </div>
    )
  );
};

export default WithStyles(styles)(RefreshComponent);
