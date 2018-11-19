import React from "react";
import { WithStyles } from "components";

const styles = ({ color, theme }) => ({
  footer: {
    height: 'auto',
    width: "100%",
    padding:15,
    background: theme.cardFooterColor
  }
});

const CardFooterComponent = ({ classes, children }) => (
  <div className={classes.footer}>{children}</div>
);

const CardFooter = WithStyles(styles)(CardFooterComponent);

export { CardFooter };
