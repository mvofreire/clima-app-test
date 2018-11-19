import React from "react";
import { WithStyles } from "components";
import cx from "classnames";
import { CardContent } from "./card-content";
import { CardFooter } from "./card-footer";

const styles = ({ color, theme }) => ({
  root: {
    width: "100%",
    minWidth: 250,
    height: "auto",
    boxShadow: `0px 0px 5px 2px ${theme.cardBoxShadowColor}`,
    borderRadius: 4,
    overflow: "hidden"
  },
  header: {
    height: "40px",
    width: "100%",
    background: color.White,
    textAlign: "center",
    lineHeight: "40px",
    letterSpacing: 1,
    color: "#767f87"
  }
});

const CardComponent = ({ title, classes, children, className = "" }) => (
  <div className={cx(className, classes.root)}>
    <div className={classes.header}>{title}</div>
    {children}
  </div>
);

const Card = WithStyles(styles)(CardComponent);
Card.Content = CardContent;
Card.Footer = CardFooter;

export { Card };
