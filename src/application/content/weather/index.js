import React from "react";
import { AppContext } from "contexts/app";
import Weather from "./Weather";

export default props => (
  <AppContext.Consumer>
    {ctxProps => <Weather {...props} {...ctxProps} />}
  </AppContext.Consumer>
);
