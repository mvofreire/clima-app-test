import React from "react";
import { WithStyles } from "components";

const styles = ({ color, theme }) => ({
  content: {
    height: 140,
    width: "100%",
    background: color.White,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: `inset 0px 1px 2px 0px ${theme.dividerColor}`
  }
});

const CardContentComponent = ({ classes, children }) => (
  <div className={classes.content}>{children}</div>
);

const CardContent = WithStyles(styles)(CardContentComponent);

export { CardContent };
