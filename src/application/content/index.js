import React from "react";
import { WithStyles, Container } from "components";

import Wheather from "./weather";
import RefreshCountDown from "./refresh-countdown";

const styles = ({ color, theme }) => ({
  root: {
    position: "relative",
    width: "100%",
    height: "calc(100% - 47px)",
    padding: 30,
    top: 47,
    display: "grid",
    alignItems: "center",
    overflow: "auto",
    background: theme.appBackground
  },
  container: {
    margin: "auto"
  }
});

const Content = ({ classes }) => (
  <div className={classes.root}>
    <Container>
      <RefreshCountDown />
      <Wheather />
    </Container>
  </div>
);

export default WithStyles(styles)(Content);
