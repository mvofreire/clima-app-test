import React from "react";
import { WithStyles } from "components";
import logo from "images/logo.svg";

const styles = ({ color, theme }) => ({
  root: {
    position: "fixed",
    width: "100%",
    background: theme.headerBackground,
    height: 47,
    display: "flex",
    justifyContent: "center",
    boxShadow: theme.headerBoxShadow,
    zIndex: 1
  },
  logo: {
    width: 165
  }
});

const Header = ({ classes }) => (
  <div className={classes.root}>
    <img className={classes.logo} src={logo} alt="Logo App" />
  </div>
);

export default WithStyles(styles)(Header);
