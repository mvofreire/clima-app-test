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

const RefreshComponent = ({ classes, refresh, timer }) => {
  const momentTimerCache =
    timer != null ? timer.add(cacheMinutesDuration, "minutes").valueOf() : null;

  return (
    momentTimerCache && (
      <div className={classes.root}>
        <span className={classes.label}>A pagina irá atualizar em</span>
        <Countdown
          className={classes.counter}
          date={momentTimerCache}
          onComplete={refresh}
        />
      </div>
    )
  );
};

export default WithStyles(styles)(RefreshComponent);
