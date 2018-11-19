import React, { Component } from "react";
import { WithStyles } from "components";

import Header from "./header";
import Content from "./content";

const styles = ({ color, theme }) => ({
  root: {
    position: "relative",
    height: "100%",
    width: "100%"
  }
});

class Application extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Header />
        <Content />
      </div>
    );
  }
}

export default WithStyles(styles)(Application);
