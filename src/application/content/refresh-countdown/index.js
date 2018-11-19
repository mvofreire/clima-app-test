import React from "react";
import { AppContext } from "contexts/app";
import RefreshCountDown from "./RefreshCountDown";

export default props => (
  <AppContext.Consumer>
    {ctxProps => <RefreshCountDown {...props} {...ctxProps} />}
  </AppContext.Consumer>
);
